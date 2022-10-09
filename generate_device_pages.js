//let fs = require("fs")
const { render } = require("mustache")
const fs = require('fs-extra')
const YAML = require('yaml')

const CONFIG_DIR_NAME = `data/supported-devices/devices`;
const TEMPLETE_DIR_NAME = `templete`;
const MD_OUTPUT_DIR =`./content/devices/temp`;

async function main() {

    const fileNames = await fs.readdir(CONFIG_DIR_NAME);

    if (fileNames.length === 0) {
        console.log('No valid device config files found, exiting');
        return;
    }

    for (const fileName of fileNames) {
        let deviceConfig;
        if(fileName.endsWith('.json'))
            deviceConfig = JSON.parse(await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, 'utf8'));
        else if(fileName.endsWith('.yml'))
        {
            deviceConfig = YAML.parse(await fs.readFile(`${CONFIG_DIR_NAME}/${fileName}`, 'utf8'));
        }
            
        const templeteName = deviceConfig.templeteName ?? 'default_templete';
        let template = fs.readFileSync(`${TEMPLETE_DIR_NAME}/${templeteName}.md`).toString();
        let output = render(template, deviceConfig)
        fs.writeFileSync(`${MD_OUTPUT_DIR}/${deviceConfig.codename}.md`, output)
    }
}
main();
