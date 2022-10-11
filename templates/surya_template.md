---
draft: false
title: {{manufacturer}} {{name}} ({{codename}})
---
> **Make a backup now, as your device will be wiped.**
## Before you proceed
Any recovery should work but TWRP is recommended

## Downloading the needed files and tools
Please download the belowed needed files and tools:
{{#droidian_required_build.rootfs_link}}
- [Droidian `rootfs`]({{{droidian_required_build.rootfs_link}}}) (specific build required)
{{/droidian_required_build.rootfs_link}}
{{#droidian_required_build.devtools_link}}
- [Droidian `devtools`]({{{droidian_required_build.devtools_link}}}) (specific build required)
{{/droidian_required_build.devtools_link}}
{{#android.link}}
- [{{android.text}}]({{{android.link}}})
{{/android.link}}
- [{{boot.text}}]({{{boot.link}}})
{{#dtbo.link}}
- [{{dtbo.text}}]({{{dtbo.link}}})
{{/dtbo.link}}
{{#vbmeta.link}}
- [{{vbmeta.text}}]({{{vbmeta.link}}})
{{/vbmeta.link}}
- [{{recovery.text}}]({{{recovery.link}}})
- [{{adaptation.text}}]({{{adaptation.link}}})


## Device preparation
{{#isManufacturerXiaomi}}
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
{{/isManufacturerXiaomi}}
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
- Boot into recovery (Computer)
    - Boot TWRP by running `fastboot boot TWRP.img`
- Wipe the device (TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot TWRP again by running `fastboot boot TWRP.img`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (TWRP)
{{#ab_slot}}
- Install base Android version and/or Vendor to both A/B slots
  - Go to the `Reboot` menu and see which slot is active
  - If it says `Slot A`, then select `Slot B` to be the active slot, and boot TWRP again

- **With `Slot B` as active:**
{{#android.filename}}
- Install the file called `{{{android.filename}}}` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{android.filename}}`
{{/android.filename}}
-    Now switch back to `Slot A` and boot {{{recovery.name}}} again (must boot again, switching is not enough)

- **With `Slot A` as active:**
    - Install the file called `{{{android.filename}}}` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{{android.filename}}}`
    - For the rest of the guide, keep using `Slot A`
{{/ab_slot}}
{{^ab_slot}}
{{#android}}
{{#android.filename}}
- Install the required base Android version ({{{halium_version}}})
    {{#recovery.name}}
    - Install the file called `{{{android.filename}}}` as a Zip file using {{recovery.name}}
    {{/recovery.name}}
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{{android.filename}}}`
    {{/android.filename}}
{{/android}}
{{/ab_slot}}
{{#vendor_image}}
{{#vendor_image.filename}}
- Install the vendor image
    - Install the file called `{{{vendor_image.filename}}}` as an Image to the `Vendor` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash vendor {{{vendor_image.filename}}}`
{{/vendor_image.filename}}
{{/vendor_image}}
{{#vendor_zip}}
{{#vendor_zip.filename}}
- Install the required vendor version
    - Install the file called `{{{vendor_zip.filename}}}` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{{vendor_zip.filename}}}`
{{/vendor_zip.filename}}
{{/vendor_zip}}
{{#boot}}
{{#boot.filename}}
- Install the boot image
    - Install the file called `{{{boot.filename}}}` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot {{{boot.filename}}}`
    {{/boot.filename}}
{{/boot}}
{{#dtbo}}
{{#dtbo.filename}}
- Install the DTBO image
    - Install the file called `dtbo.img` as an Image to the `dtbo` partition using {{{recovery.name}}}
    - Alternatively, you can enter fastboot mode and `fastboot flash dtbo dtbo.img`
{{/dtbo.filename}}
{{/dtbo}}
{{#vbmeta.filename}}
- Install the vbmeta image
    - Install the file called `{{{vbmeta.filename}}}` as an Image to the `vbmeta` partition using {{{recovery.name}}}
    - Alternatively, you can enter fastboot mode and `fastboot flash vbmeta {{{vbmeta.filename}}}`
{{/vbmeta.filename}}
{{#recovery}}
{{^recovery.must_flash}}
- Install recovery
    {{#recovery.filename}}
    {{#isTwrpRecovery}}
    - Install the file called `{{{recovery.filename}}}` as an Image to the `Recovery` partition
    {{/isTwrpRecovery}}
    {{^isTwrpRecovery}}
    - Please, follow the official guide to install {{{recovery.name}}}
    {{/isTwrpRecovery}}
    {{/recovery.filename}}
{{/recovery.must_flash}}
{{/recovery}}
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-{{{arch}}}_YYYYMMDD.zip` as a Zip file
    - sideload is broken on this version of TWRP so file must be pushed to data and flashed from recovery itself.
    {{#isNightlyBuild}}
    - `devtools` is already included in nightly builds.
    {{/isNightlyBuild}}
    {{^isNightlyBuild}}
    - Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-{{{arch}}}_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-{{{arch}}}_YYYYMMDD.zip`
    {{/isNightlyBuild}}

## Finalizing the installation
{{#adaptation.filename}}
- Extract {{{adaptation.filename}}} and install adaptation via pushing it to the phone and running install.sh
    - `adb push adaptation-surya-script /tmp` then `adb shell` and `cd /tmp/adaptation-surya-script && chmod +x install.sh && ./install.sh`
{{/adaptation.filename}}
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well, now you should be running Droidian.

## Notes
{{#statuspage}}
### Porting status
You can check out the status of the port [here]({{{statuspage}}})

{{/statuspage}}
{{#notes}}
### {{{title}}}
{{{text}}}

{{/notes}}
### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
{{#credit}}
[{{name}}]({{{link}}})

{{/credit}}
[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

{{#contact.link}}
You can ask for assistance specific to this device at [{{{contact.text}}}]({{{contact.link}}}).
{{/contact.link}}


