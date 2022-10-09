---
draft: false
title: {{{manufacturer}}} {{{name}}} ({{{codename}}})
---
> **Make a backup now, as your device will be wiped.**
{{#notes_before_you_start}}
## Before you proceed
{{text}}

{{/notes_before_you_start}}
## Downloading the needed files and tools
Please download the belowed needed files and tools:
{{#is_specific_build_required}}
{{#droidian_required_build.rootfs_link}}
- [Droidian `rootfs`]({{{droidian_required_build.rootfs_link}}}) (specific build required)
{{/droidian_required_build.rootfs_link}}
{{#droidian_required_build.devtools_link}}
- [Droidian `devtools`]({{{droidian_required_build.devtools_link}}}) (specific build required)
{{/droidian_required_build.devtools_link}}
{{/is_specific_build_required}}
{{^is_specific_build_required}}
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/rootfs-api28gsi-all/releases) for `{{arch}}` (nightly releases include devtools)
{{/is_specific_build_required}}
{{#isNightlyBuild}}
    > `devtools` is already included in nightly builds.
{{/isNightlyBuild}}
{{#android.link}}
- [{{android.text}}]({{{android.link}}})
{{/android.link}}
{{#vendor_zip.link}}
- [{{vendor_zip.text}}]({{{vendor_zip.link}}})
{{/vendor_zip.link}}
{{#vendor_image.link}}
- [{{vendor_image.text}}]({{{vendor_image.link}}})
{{/vendor_image.link}}
{{#boot.link}}
- [{{boot.text}}]({{{boot.link}}})
{{/boot.link}}
{{#recovery.link}}
- [{{recovery.text}}]({{{recovery.link}}})
{{/recovery.link}}
{{#adaptation.link}}
- [{{adaptation.text}}]({{{adaptation.link}}})
{{/adaptation.link}}


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
    - Boot TWRP by running `fastboot boot {{{recovery.filename}}}`
- Wipe the device (TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot TWRP again by running `fastboot boot {{{recovery.filename}}}`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (TWRP)
{{#android}}
- Install the required base Android version ({{halium_version}})
    {{#android.filename}}
    - Install the file called `{{{android.filename}}}` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{{android.filename}}}`
    {{/android.filename}}
{{/android}}
{{#vendor_image}}
- Install the vendor image
    {{#vendor_image.filename}}
    - Install the file called `{{{vendor_image.filename}}}` as an Image to the `Vendor` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash vendor {{{vendor_image.filename}}}`
    {{/vendor_image.filename}}
{{/vendor_image}}
{{#boot}}
- Install the boot image
    {{#boot.filename}}
    - Install the file called `{{{boot.filename}}}` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot {{{boot.filename}}}`
    {{/boot.filename}}
{{/boot}}
{{#recovery}}
- Install recovery
    {{#recovery.filename}}
    - Install the file called `{{{recovery.filename}}}` as an Image to the `Recovery` partition
    {{/recovery.filename}}
{{/recovery}}
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    {{#isNightlyBuild}}
    - `devtools` is already included in nightly builds.
    {{/isNightlyBuild}}
    {{^isNightlyBuild}}
    - Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-arm64_YYYYMMDD.zip`
    {{/isNightlyBuild}}

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `{{{adaptation.filename}}}` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload {{{adaptation.filename}}}`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`
{{#isCommandProvided}}
- Run a specific command after first boot (Droidian)
    - Open the `King's Cross` application or connect via SSH (see the `SSH` entry in the Notes below), and type in the following:
    {{#command}}
    ```
    {{{command}}}
    ```
    {{/command}}
{{/isCommandProvided}}

Congratulations, if everything went well, now you should be running Droidian.

{{#hasNotes}}## Notes{{/hasNotes}}
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
You can ask for assistance specific to this device at [{{contact.text}}]({{{contact.link}}}).
{{/contact.link}}


