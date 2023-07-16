---
draft: false
title: {{manufacturer}} {{name}} ({{codename}})
---

- ✅: Confirmed, Working
- 🧩: Partial, Working to some extent but with issues
- ❌: Not Working
- ❔: Untested

{{{port_status}}}

> **Make a backup now, as your device will be wiped.**

{{#notes_before_you_start}}
## Before you proceed
{{text}}

{{/notes_before_you_start}}
## Downloading the needed files and tools
Please download the belowed needed files and tools:
{{#is_specific_build_of_drodian_required}}
{{#droidian_required_build.rootfs_link}}
- [Droidian `rootfs`]({{{droidian_required_build.rootfs_link}}}) (specific build required)
{{/droidian_required_build.rootfs_link}}
{{#droidian_required_build.devtools_link}}
- [Droidian `devtools`]({{{droidian_required_build.devtools_link}}}) (specific build required)
{{/droidian_required_build.devtools_link}}
{{/is_specific_build_of_drodian_required}}
{{^is_specific_build_of_drodian_required}}
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/droidian/releases) for `{{arch}}` (nightly releases include devtools)
{{/is_specific_build_of_drodian_required}}
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
{{#dtbo.link}}
- [{{dtbo.text}}]({{{dtbo.link}}})
{{/dtbo.link}}
{{#vbmeta.link}}
- [{{vbmeta.text}}]({{{vbmeta.link}}})
{{/vbmeta.link}}
{{#recovery.link}}
- [{{recovery.text}}]({{{recovery.link}}})
{{/recovery.link}}
{{#adaptation.link}}
- [{{adaptation.text}}]({{{adaptation.link}}})
{{/adaptation.link}}

## Device preparation
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
- Wipe the device (TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Recovery`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (TWRP)
- Install the boot image
    - Install the file called `{{{boot.filename}}}` as an Image to the `Boot` partition using `{{{recovery.name}}}`
- Install Droidian `rootfs`
    - Install the file called `droidian-OFFICIAL-phosh-phone-rootfs-api29-arm64-nightly_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-OFFICIAL-phosh-phone-rootfs-api29-arm64-nightly_YYYYMMDD.zip`
    - `devtools` is already included in nightly builds.

## Finalizing the installation
- Extract adaptation-exynos9810-script.zip and install adaptation via pushing it to the phone and running install.sh
    - `adb push adaptation-exynos9810-script /tmp` then `adb shell` and `cd /tmp/adaptation-exynos9810-script && chmod +x install.sh && ./install.sh`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - You should be greeted with the lock screen, the default password is `1234`
{{#isCommandProvided}}
- Run a specific command after first boot (Droidian)
    - Open the `Console` application or connect via SSH (see the `SSH` entry in the Notes below), and type in the following:
    {{#command}}
    ```
    {{{command}}}
    ```
    {{/command}}
{{/isCommandProvided}}

Congratulations, if everything went well you should be booted into Droidian.

## Notes
### Default password
The default password is `1234`.

### APN
Mobile data needs an APN to be set up from Settings -> Mobile Network -> Access Point Names.

### Out of storage
By default when flashing Droidian it allocates 8GB of memory to the system. This might not be enough and luckily you can allocate more storage with ADB by running (while in recovery): `adb shell e2fsck -fy /data/rootfs.img` and `adb shell resize2fs -f /data/rootfs.img xG` where __x__ is the amount of GB to allocate (eg: 50G for 50 GB).

### Audio
Audio is inconsistent and does not work on all boots

### Calls
Because of the audio issue user might not be able to hear audio in calls either.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
{{#credit}}
[{{name}}]({{{link}}})

{{/credit}}
[Droidian Project](http://droidian.org/)
