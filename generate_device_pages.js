//let fs = require("fs")
const { render } = require("mustache")
const fs = require('fs-extra')
const YAML = require('yaml')

const CONFIG_DIR_NAME = `data/supported-devices/devices`;
const TEMPLETE_DIR_NAME = `templates`;
let MD_OUTPUT_DIR = `./content/devices`;

async function main() {

    const fileNames = await fs.readdir(CONFIG_DIR_NAME);

    if (fileNames.length === 0) {
        console.log('No valid device config files found, exiting');
        return;
    }

    for (const fileName of fileNames) {
        let deviceConfig;
        if (fileName.endsWith('.json'))
            deviceConfig = JSON.parse(await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, 'utf8'));
        else if (fileName.endsWith('.yml')) {
            deviceConfig = YAML.parse(await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, 'utf8'));
        }

        const templateName = deviceConfig.templateName ?? 'default_template';
        let template = fs.readFileSync(`${TEMPLETE_DIR_NAME}/${templateName}.md`).toString();

        deviceConfig = {
            ...deviceConfig,
            isManufacturerXiaomi: deviceConfig.manufacturer.toLowerCase().trim() === 'xiaomi',
            isNightlyBuild: deviceConfig.channel === 'nightly',
            hasNotes: deviceConfig.notes?.length > 0,
            isCommandProvided: deviceConfig.command?.length > 0
        }

        let output = render(template, deviceConfig)
        // TODO the below line is added temperatiry to be after moving from python script to js script is complete
        const migrationCompleted = ['star2lte', 'miatoll', 'beryllium'];
        if (migrationCompleted.includes(deviceConfig.codename)) {
            fs.writeFileSync(`${MD_OUTPUT_DIR}/${deviceConfig.codename}.md`, output)
        }
        else {
            fs.writeFileSync(`${MD_OUTPUT_DIR}/temp/${deviceConfig.codename}.md`, output)
        }
    }
}
main();
