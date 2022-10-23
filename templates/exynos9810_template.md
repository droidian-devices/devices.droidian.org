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
- [{{recovery.text}}]({{{recovery.link}}})
- [{{adaptation.text}}]({{{adaptation.link}}})


## Device preparation
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
- Install the boot image
    - Install the file called `{{{boot.filename}}}` as an Image to the `Boot` partition using `{{{recovery.name}}}`
    - Alternatively, you can enter fastboot mode and `fastboot flash boot {{{boot.filename}}}`
- Install recovery
    - Install the file called `TWRP.img` as an Image to the `Recovery` partition using `{{{recovery.name}}}`
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    - `devtools` is already included in nightly builds.

## Finalizing the installation
- Extract adaptation-exynos9810-script.zip and install adaptation via pushing it to the phone and running install.sh
    - `adb push adaptation-exynos9810-script /tmp` then `adb shell` and `cd /tmp/adaptation-exynos9810-script && chmod +x install.sh && ./install.sh`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well you should be booting into Droidian.

## Notes
### Default password
The default password is `1234`.

### Apn
Mobile data needs an APN to be set up from Settings -> Mobile Network -> Acess Point Names.

### Broken mobile data after calls
Data connection might break after recieving and making calls. Switch it off and on from Settings -> Mobile Network to fix it. Be careful to not turn off the mobile modem or a device restart might be required.

### Out of storage
By default when flashing Droidian it allocates 8GB of memory to the system. This might not be enough and luckily you can allocate more storage with ADB by running (while in recovery): `adb shell e2fsck -fy /data/rootfs.img` and `adb shell resize2fs -f /data/rootfs.img xG` where __x__ is the amount of GB to allocate (eg: 50G for 50 GB).

### Status
Droidian GSIs are experimental! Bugs and missing features are expected.

### Audio
Currently audio does not work and only the microphone works.

### Calls
Because of the audio issue user cannot hear audio in calls either.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
{{#credit}}
[{{name}}]({{{link}}})

{{/credit}}
[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)



