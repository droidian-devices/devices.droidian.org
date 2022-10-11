---
draft: false
title: Xiaomi Redmi Note 9 Pro/Pro Max/9S - Poco M2 Pro (miatoll)
---
> **Make a backup now, as your device will be wiped.**
## Before you proceed
Use the TWRP recovery linked mentioned in the [Downloading the needed files and tools](#downloading-the-needed-files-and-tools) section below. The installation might fail with other recoveries, other than then one mentioned below.

## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs`](https://github.com/droidian-images/rootfs-api29gsi-all/releases/tag/nightly) (specific build required)
    > `devtools` is already included in nightly builds.
- [Android 10 (Q) stock firmware](https://github.com/miatoll-linux/miatoll-linux/blob/main/README.md)
- [TWRP recovery](https://forum.xda-developers.com/t/recovery-unofficial-miatoll-twrp-3-6-x.4366113/)
- [Adaptation (unofficial)](https://github.com/miatoll-linux/miatoll-linux/releases/download/adaptation-droidian/adaptation-droidian-miatoll.zip)


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
    - Boot TWRP by running `fastboot boot twrp-VERSION-miatoll.img`
- Wipe the device (using TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot TWRP again by running `fastboot boot twrp-VERSION-miatoll.img`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation 
- Install recovery
    - Install the file called `twrp-VERSION-miatoll.img` as an Image to the `Recovery` partition
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    - `devtools` is already included in nightly builds.

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `adaptation-droidian-miatoll.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload adaptation-droidian-miatoll.zip`
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

### Broken calls
Switching airplane mode on and off or switching the mobile modem off and on from the Quick Settings or the Settings App will break calls. If that's the case reboot the phone to fix it.

### Out of storage
By default when flashing Droidian it allocates 8GB of memory to the system. This might not be enough and luckily you can allocate more storage with ADB by running (while in recovery): `adb shell e2fsck -fy /data/rootfs.img` and `adb shell resize2fs -f /data/rootfs.img xG` where __x__ is the amount of GB to allocate (eg: 50G for 50 GB).

### Status
Droidian GSIs are experimental! Bugs and missing features are expected.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[Marcel Alexandru Nitan](https://github.com/nitanmarcel)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

You can ask for assistance specific to this device at [Droidian for miatoll devices](https://t.me/ut_miatoll).


