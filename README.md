devices.droidian.org
====================
The site has been built using hugo.
The instructions to install hugo can be found [here](https://gohugo.io/getting-started/installing)

# Running the hugo server for development
The hugo server can be started locally using the command:
    
    $ hugo serve -D

> -D flag is provided used to allow draft pages to be included.

The installation guide generation scripts use nodejs, hence it is recommanded to install nodejs
and running the command `npm install` in after navigation into the cloned root directory(the directory that contains package.json).

The site is up at [http://localhost:1313](http://localhost:1313) by default
## Adding new device to list of devices
The list of devices that are known to run droidian can to found at https:devices.droidian.org.If you wish to add a new device to the list, you will have to add an entry manually in the content/_index.md. You could point to an external URL for installation guide in the content/_index.md, or use generate_device_pages.js script present within in the project to automatically generate the installation guide.
The The script generates guides in markdown(.md) file format. The guides are genrated based on the device specific YAML configuration files present inside data/supported-devices directory.

    node generate_device_pages.js

In order to new automatically generate the installation guide add new file with <codename>.yaml file inside data/supported-devices directory.
The generate_device_pages.js looks at the templateName field to identify the templete to be used, If the field is not provided ,by default the `default_template.md` present inside templates folder is used.
If you do not which to use any other custom template, create a new .md file inside templates folder and 
specify the name of the file as templeteName's value in your <codename>.yaml file.
The md template supports (mustache)[https://mustache.github.io/] syntax, and the fields in <codename>.yaml file, will be available as
mustache variables during the build.
Refer the contents of sample.yml(present inside data/supported-devices folder) to know about the feilds, a to copy them into the recently created <codename>.yaml file.
Now update the parameters in the <codename>.yaml as per your device.

These are the parameters used in `codename.yml`. Start each device entry with a `-`.
- `manufacturer`: manufacturer of the device
- `name`: name of the device 
- `codename`: codename of the device
- `support`: `official` or `community`
- `device_type`: phone, tablet, etc
- `halium_version`: 9, 10, or 11
- `fastboot_mode`: button combination for booting in fastboot mode
- `recovery_mode`: button combination for booting in recovery mode
- `ab_slot`: `true` if the device has A/B slots, leave empty if not
- `api_version`: version of the android API used for the device
- `arch`: device architecture
- `droidian_release`: a link to the correspodning Droidian release
- `droidian_required_build`: some devices might need a specific build, links to the files can be specified here, otherwise leave emopty
- `android`\*: base android version to install before Droidian
- `vendor_zip`\*: a vendor package to be flashed as zip
- `vendor_image`\*: a vendor image to be flashed as an image
- `boot`\*: Droidian boot image
- `recovery`\*\*: recommended recovery for the device
- `adaptation`\*: adaptation package to be flashed as zip
- `statuspage`: a link to the porting status page of the device, leave empty if there is no page
- `contact`: each contact should start with a `-`, as it becomes a list. `text`: what the text should say, `link`: where the hyperlink should point to
- `credit`: also a list, each entry should start with a `-`. `name`: the name of the maintainer, `link`: maintainer's page
- `command`: a list of commands that need to be run after first boot, start each line of the commands with a `-`
- `notes`: additional considerations for the device, start each note with a `-`. A note contains a `title` entry and a `text` that contains the note itself
- `port_status`: please, see the `sample.yml` file for details

\* `android`, `vendor_zip`, `vendor_image`, and `boot` have multiple parts. The `link` contains the actual link to the file or release page; the `text` contains the string what the download link should say in the page; and the `filename` specifies the name of the file that identifies the file when flashing.

\*\* `recovery` has two further entry called `name` and `must_flash`. `name` specifies the name of the recovery, e. g., `TWRP` or `Orange Fox Recovery`; if `must_flash` is set to `true`, the user will be prompted to flash the recovery instead of just booting it (some devices have been reported to not support directly booting to the recovery image)


