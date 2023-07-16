const { render } = require("mustache");
const fs = require("fs-extra");
const YAML = require("yaml");

const {
  TEMPLETE_DIR_NAME,
  MD_OUTPUT_DIR,
  CONFIG_DIR_NAME,
} = require("./Constants");
const { isDeviceSchemaValid } = require("./deviceSchemaValidator");

async function main() {
  const fileNames = await fs.readdir(CONFIG_DIR_NAME);

  if (fileNames.length === 0) {
    console.log("No valid device config files found, exiting");
    return;
  }

  for (const fileName of fileNames) {
    let deviceConfig;
    if (fileName.endsWith(".json"))
      deviceConfig = JSON.parse(
        await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, "utf8")
      );
    else if (fileName.endsWith(".yml")) {
      deviceConfig = YAML.parse(
        await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, "utf8")
      );
    }

    const recoveryName = deviceConfig.recovery?.name?.trim().toLowerCase();
    deviceConfig = {
      ...deviceConfig,
      hasNotesBeforeStart: deviceConfig.notes_before_you_start && deviceConfig.notes_before_you_start.length > 0,
      isManufacturerXiaomi:
        deviceConfig.manufacturer.toLowerCase().trim() === "xiaomi",
      isNightlyBuild: deviceConfig.channel === "nightly",
      isCommandProvided: deviceConfig.command?.length > 0,
      isTwrpRecovery: recoveryName ? recoveryName === "twrp" : false,
      adaptation: {
        ...deviceConfig.adaptation,
        extractedFolderName: deviceConfig.adaptation?.filename.substring(
          0,
          deviceConfig.adaptation?.filename.indexOf(".zip")
        ),
      },
    };

    if (await isDeviceSchemaValid(deviceConfig, fileName)) {
      const templateName = deviceConfig.templateName;

      let template = fs
        .readFileSync(`${TEMPLETE_DIR_NAME}/${templateName}.md`)
        .toString();

      deviceConfig.port_status = formatPortStatusTable(formatPortStatus(deviceConfig.port_status));
      let output = render(template, deviceConfig);

      try {
        console.log(
          "\n" +
            deviceConfig.codename +
            ` has a valid device config.Generating the ${deviceConfig.codename}.md file.`
        );
        fs.writeFileSync(
          `${MD_OUTPUT_DIR}/${deviceConfig.codename}.md`,
          output
        );
        console.log(`Generated ${deviceConfig.codename}.md file successfully.`);
      } catch (error) {
        console.log(
          `Following error occurred while writing to file :${deviceConfig.codename}.md file:\n ${error.message}\n`
        );
      }
    }
  }
}

function formatPortStatus(port_status) {
  let portStatusQuads = [];
  for (let i = 0; i < port_status.length; i += 4) {
    const currentStatus = port_status[i];
    const nextStatus = port_status[i + 1];
    const thirdStatus = port_status[i + 2];
    const fourthStatus = port_status[i + 3];

    let quad = {
      id: currentStatus.id,
      value: currentStatus.value,
      id2: nextStatus ? nextStatus.id : "",
      value2: nextStatus ? nextStatus.value : "",
      id3: thirdStatus ? thirdStatus.id : "",
      value3: thirdStatus ? thirdStatus.value : "",
      id4: fourthStatus ? fourthStatus.id : "",
      value4: fourthStatus ? fourthStatus.value : "",
    };

    portStatusQuads.push(quad);
  }
  return portStatusQuads;
}

const formatPortStatusTable = (portStatusQuads) => {
  let table = "| Feature | State | Feature | State | Feature | State | Feature | State |\n|---|---|---|---|---|---|---|---|\n";
  for (const quad of portStatusQuads) {
    table += `| ${quad.id} | ${quad.value} | ${quad.id2} | ${quad.value2} | ${quad.id3} | ${quad.value3} | ${quad.id4} | ${quad.value4} |\n`;
  }
  return table;
};

main();
