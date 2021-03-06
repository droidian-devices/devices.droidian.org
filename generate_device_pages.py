import yaml
import os
from schema import Or, Schema, SchemaError
from schema_validation import validate_file
from datetime import datetime

# Define functions for repeated steps
def recovery_zip(filename):
    return (f"    - Install the file called `{filename}` as a Zip file")

def recovery_image(partition, filename):
    return (f"    - Install the file called `{filename}` as an Image to the `{partition}` partition")

def sideload_zip(filename):
    return (f"    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {filename}`")

def fastboot_image(partition, filename):
    partition = partition.lower()
    return (f"    - Alternatively, you can enter fastboot mode and `fastboot flash {partition} {filename}`")

# Check for valid files
devices = []
device_config_folder = os.getcwd()+"/data/supported-devices/devices"
for file in os.listdir(device_config_folder):
    device = yaml.load(open(f"{device_config_folder}/{file}", 'r'),Loader=yaml.FullLoader)
    if validate_file(device) == True:
        devices.append(device)
    
if devices == []:
    print('No valid device files found, exiting')
    exit()
print()

# Generate markdown as a list of lines
for device in devices:
    outlines = []
    print(f"Generating {device['codename']}...")
    #adding the metadata at being of file.
    outlines.append("---")
    outlines.append("draft: false")
    outlines.append(f"title: {device['manufacturer']} {device['name']} ({device['codename']})")
    outlines.append("---")

    outlines.append("> **Make a backup now, as your device will be wiped.**")
    notes_before_you_start = device.get('notes_before_you_start')
    if notes_before_you_start is not None:
        outlines.append("## Before you proceed")
        for note in notes_before_you_start :
            notes_title = note.get('title')
            if(notes_title) :
                outlines.append(f"### {note['title']}")
            outlines.append(note['text'])
            outlines.append("")
    outlines.append("## Downloading the needed files and tools")
    outlines.append("Please download the belowed needed files and tools:")
    if device['droidian_required_build'] == None or device['droidian_required_build']['rootfs_link'] == None:
        outlines.append(f"- [Droidian `rootfs` and `devtools`]({device['droidian_release']}) for `{device['arch']}` (nightly releases include devtools)")
    else:
        outlines.append(f"- [Droidian `rootfs`]({device['droidian_required_build']['rootfs_link']}) (specific build required)")
        outlines.append(f"- [Droidian `devtools`]({device['droidian_required_build']['devtools_link']}) (specific build required)")
    for downloadable in ["android", "vendor_zip", "vendor_image", "boot","dtbo", "recovery", "adaptation"]:
        if device[downloadable]["link"] is not None:
                outlines.append(f"- [{device[downloadable]['text']}]({device[downloadable]['link']})")
    outlines.append("")
    outlines.append("")
    outlines.append("## Device preparation")
    if device['manufacturer'] == "Xiaomi":
        outlines.append("- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)")
    outlines.append("- Save your APN (Android)")
    outlines.append("    - The `Access Point Name` or `APN` can be found in the Settings menu of Android")
    outlines.append("    - Take a piece of paper or a text editor, and write down everything that you see on that screen")
    outlines.append("    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password")
    outlines.append("- Unlock the bootloader (Computer)")
    outlines.append("    - Refer to the instructions provided by the device manufacturer")
    outlines.append("    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)")
    if device['recovery']['must_flash'] == True:
        outlines.append("- Flash recovery (Computer)")
        outlines.append(f"    - Flash {device['recovery']['name']} to your device by running `fastboot flash recovery {device['recovery']['filename']}`")
        outlines.append(f"    - Boot into recovery by pressing {device['recovery_mode']}")
        outlines.append("    - If your device boots to the stock recovery menu at some point, you should repeat this step.") 
    else:
        outlines.append("- Boot into recovery (Computer)")
        outlines.append(f"    - Boot {device['recovery']['name']} by running `fastboot boot {device['recovery']['filename']}`")
    outlines.append(f"- Wipe the device ({device['recovery']['name']})")
    outlines.append("    - Go to the `Wipe` menu")
    outlines.append("    - Select `Advanced wipe`")
    outlines.append("    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`")
    outlines.append("    - Swipe to Wipe")
    outlines.append("    - Go back to the previous menu")
    outlines.append("    - Choose `Format data` and type `yes`")
    outlines.append("    - Go back to the main menu and select `Reboot`")
    if device['recovery']['must_flash'] == True:
        outlines.append("    - Choose `Recovery`")       
    else:
        outlines.append("    - Choose `Bootloader`")
        outlines.append(f"    - Boot {device['recovery']['name']} again by running `fastboot boot {device['recovery']['filename']}`")
    outlines.append("- Copy the files to the device  (Computer)")
    outlines.append(f"    - When {device['recovery']['name']} is booted, open the device's `Internal storage` from your computer")
    outlines.append("    - Copy all of the files you downloaded to this folder")
    outlines.append("")
    outlines.append(f"## Droidian installation ({device['recovery']['name']})")
    if device['ab_slot'] == True:
        outlines.append("- Install base Android version and/or Vendor to both A/B slots")
        outlines.append("  - Go to the `Reboot` menu and see which slot is active")
        outlines.append(f"  - If it says `Slot A`, then select `Slot B` to be the active slot, and boot {device['recovery']['name']} again")
        outlines.append("")
        outlines.append("- **With `Slot B` as active:**")
        if device['android']['filename'] is not None:
            outlines.append(recovery_zip(device['android']['filename']))
            outlines.append(sideload_zip(device['android']['filename']))
        if device['vendor_zip']['filename'] is not None:
            outlines.append(recovery_zip(device['vendor_zip']['filename']))
            outlines.append(sideload_zip(device['vendor_zip']['filename']))
        outlines.append(f"-    Now switch back to `Slot A` and boot {device['recovery']['name']} again (must boot again, switching is not enough)")
        outlines.append("")
        outlines.append("- **With `Slot A` as active:**")
        if device['android']['filename'] is not None:
            outlines.append(recovery_zip(device['android']['filename']))
            outlines.append(sideload_zip(device['android']['filename']))
        if device['vendor_zip']['filename'] is not None:
            outlines.append(recovery_zip(device['vendor_zip']['filename']))
            outlines.append(sideload_zip(device['vendor_zip']['filename']))
        outlines.append("    - For the rest of the guide, keep using `Slot A`")
    else:     
        if device['android']['filename'] is not None:
            outlines.append("- Install the required base Android version (9, 10, 11)")
            outlines.append(recovery_zip(device['android']['filename']))
            outlines.append(sideload_zip(device['android']['filename']))
        if device['vendor_zip']['filename'] is not None:
            outlines.append("- Install the required vendor version")
            outlines.append(recovery_zip(device['vendor_zip']['filename']))
            outlines.append(sideload_zip(device['vendor_zip']['filename']))
    if device['vendor_image']['filename'] is not None:
        outlines.append("- Install the vendor image")
        outlines.append(recovery_image("Vendor", device['vendor_image']['filename']))
        outlines.append(fastboot_image("Vendor", device['vendor_image']['filename']))
    if device['boot']['filename'] is not None:
        outlines.append("- Install the boot image")
        outlines.append(recovery_image("Boot", device['boot']['filename']))
        outlines.append(fastboot_image("Boot", device['boot']['filename']))
    if device['recovery']['filename'] is not None and device['recovery']['must_flash'] is not True:
        outlines.append("- Install recovery")
        if device['recovery']['name'] == "TWRP":
            outlines.append(f"    - Install the file called `{device['recovery']['filename']}` as an Image to the `Recovery` partition")
        elif device['recovery']['must_flash'] is not True:
            outlines.append(f"    - Please, follow the official guide to install {device['recovery']['name']}")
    outlines.append("- Install Droidian `rootfs`")
    outlines.append(recovery_zip(f"droidian-rootfs-{device['arch']}_YYYYMMDD.zip"))
    outlines.append(sideload_zip(f"droidian-rootfs-{device['arch']}_YYYYMMDD.zip"))
    channel = device.get('channel')
    if channel == "stable" :    # The nightly builds already includes devtools hence showing the devtool install instruction only for stable channel
        outlines.append("- Installing `devtools`")
        outlines.append("    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.")
        outlines.append(recovery_zip(f"droidian-devtools-{device['arch']}_YYYYMMDD.zip"))
        outlines.append(sideload_zip(f"droidian-devtools-{device['arch']}_YYYYMMDD.zip"))
    else :
        outlines.append("    - `devtools` is already included in nightly builds.")
    outlines.append("")
    outlines.append("## Finalizing the installation")
    if device['adaptation']['filename'] is not None:
        outlines.append(f"- Install adaptation package as a flashable zip ({device['recovery']['name']})")
        outlines.append(recovery_zip(device['adaptation']['filename']))
        outlines.append(sideload_zip(device['adaptation']['filename']))
    outlines.append("- Boot your device")
    outlines.append("    - Go to the `Reboot` menu and choose `System`")
    outlines.append(f"    - {device['recovery']['name']} might complain that there is no OS installed, but that's fine")
    outlines.append("    - The first boot may take longer, and at least one spontaneous reboot is expected during the process")
    outlines.append("    - You should be greeted with the lock screen, the default password is `1234`")
    if device['command'] is not None:
        outlines.append("- Run a specific command after first boot (Droidian)")
        outlines.append(f"    - Open the `King's Cross` application or connect via SSH (see the `SSH` entry in the Notes below), and type in the following:")
        outlines.append("```")
        for line in device['command']:
            outlines.append(line)
        outlines.append("```")
    outlines.append("")    
    outlines.append("Congratulations, if everything went well, now you should be running Droidian.")
    outlines.append("")
    outlines.append("## Notes")
    if device['notes'] is not None:
        for note in device['notes']:
            outlines.append(f"### {note['title']}")
            outlines.append(note['text'])
            outlines.append("")
    if device['statuspage'] is not None:
        outlines.append("### Porting status")
        outlines.append(f"You can check out the status of the port [here]({device['statuspage']})")
        outlines.append("")
    outlines.append("### SSH access")
    outlines.append("Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))")
    outlines.append("")
    outlines.append("### Applications")
    outlines.append("You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)")
    outlines.append("")
    outlines.append("## Credit")
    for credit in device['credit']:
        outlines.append(f"[{credit['name']}]({credit['link']})")
        outlines.append("")
    outlines.append("[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)")
    outlines.append("")
    if device['contact']['link'] is not None:
        outlines.append(f"You can ask for assistance specific to this device at [{device['contact']['text']}]({device['contact']['link']}).")
    outlines.append("")
    outlines.append("")

    outfile_name =  os.getcwd()+"/content/devices/"+device['codename']+".md"
    outfile = open(outfile_name, 'w')
    for line in outlines:
        outfile.write(line+'\n')
    outfile.close()
    print(f"generated {outfile_name} file sucessfully.")
print('Done')
