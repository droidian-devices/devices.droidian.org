---
draft: false
title: Xiaomi Redmi Note 7 (lavender)
---
> **Make a backup now, as your device will be wiped.**
## Before you proceed
Any recovery should work but TWRP is recommended

## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs`](https://github.com/droidian-images/droidian/releases) (specific build required)
- [Droidian `devtools`](https://github.com/droidian-images/droidian/releases) (specific build required)
    > `devtools` is already included in nightly builds.
- [Android 9 (P) stock firmware](https://xiaomifirmwareupdater.com/miui/lavender/stable/V11.0.6.0.PFGMIXM/)
- [Boot image](https://github.com/droidian-lavender/kernel-xiaomi-lavender/releases/download/images/boot.img)
- [vbmeta image](https://github.com/droidian-lavender/kernel-xiaomi-lavender/releases/download/images/vbmeta.img)
- [TWRP Recovery](https://twrp.me/xiaomi/xiaomiredminote7.html)
- [Adaptation (unofficial)](https://github.com/droidian-lavender/adaptation-droidian-lavender/releases/download/adaptation/adaptation-droidian-lavender.zip)


## Device preparation
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (using Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
- Boot into recovery (Computer)
    - Boot TWRP by running `fastboot boot TWRP.img`
- Wipe the device (using TWRP)
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

## Droidian installation 
- Install the boot image
    - Install the file called `boot.img` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot boot.img`
- Install the vbmeta image
    - Install the file called `vbmeta.img` as an Image to the `vbmeta` partition using TWRP
    - Alternatively, you can enter fastboot mode and `fastboot flash vbmeta vbmeta.img`
- Install recovery
    - Install the file called `TWRP.img` as an Image to the `Recovery` partition
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    - `devtools` is already included in nightly builds.

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `adaptation-droidian-lavender.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload adaptation-droidian-lavender.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well, now you should be running Droidian.

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

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[Bardia Moshiri](https://bardia.tech)

[TheKit and erfanoabdi](https://gitlab.com/ubports/porting/community-ports/android9/xiaomi-redmi-note-7)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)



