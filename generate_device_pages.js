//let fs = require("fs")
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
 // fileNames = fileNames.filter((name, index) => name.includes("beryllium"));
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
    deviceConfig = {
      ...deviceConfig,
      isManufacturerXiaomi:
        deviceConfig.manufacturer.toLowerCase().trim() === "xiaomi",
      isNightlyBuild: deviceConfig.channel === "nightly",
      isCommandProvided: deviceConfig.command?.length > 0,
      isTwrpRecovery:
        deviceConfig.recovery?.name?.trim().toLowerCase() === "twrp",
      adaptation: {
        ...deviceConfig.adaptation,
        extractedFolderName: deviceConfig.adaptation?.filename.substring(
          0,
          deviceConfig.adaptation?.filename.indexOf(".zip")
        ),
      },
    };
    if (await isDeviceSchemaValid(deviceConfig,fileName)) {
      const templateName = deviceConfig.templateName; //?? 'default_template';

      let template = fs
        .readFileSync(`${TEMPLETE_DIR_NAME}/${templateName}.md`)
        .toString();

      let output = render(template, deviceConfig);
      try{
        console.log("\n"+deviceConfig.codename+` has a valid device config.Generating the ${deviceConfig.codename}.md file.`);
        fs.writeFileSync(`${MD_OUTPUT_DIR}/${deviceConfig.codename}.md`, output);
        console.log(`Generated ${deviceConfig.codename}.md file sucessfully.`);
      }
      catch(error){
        console.log(`Following error occured while writing to file :${deviceConfig.codename}.md file:\n ${error.message}\n`);
      }
    }
  }
}
main();
