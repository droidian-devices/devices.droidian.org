---
draft: false
title: Xiaomi Mi 6X (wayne)
---
> **Make a backup now, as your device will be wiped.**
## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/rootfs-api28gsi-all/releases) for `arm64` (nightly releases include devtools)
- [Android 9 Pie Firmware](https://github.com/ubports-xiaomi-sdm660/artifacts/releases/download/v0.1/jasmine_sprout_stock_android9.zip)
- [Vendor (has arb4 firmware!)](https://github.com/TryHardDood/mi-vendor_image-updater/releases/download/wayne-stable/fw-vendor_image_wayne_miui_MI6X_V11.0.6.0.PDCCNXM_f049df201b_9.0.zip)
- [Latest TWRP image](https://dl.twrp.me/wayne/)
- [Latest adaptation zip](https://github.com/Droidian-Mi-A2-6X/adaptation-xiaomi-wayne/releases)


## Device preparation
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
- Boot into recovery (Computer)
    - Boot TWRP by running `fastboot boot twrp-VERSION-wayne.img`
- Wipe the device (TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot TWRP again by running `fastboot boot twrp-VERSION-wayne.img`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (TWRP)
- Install the required base Android version (9, 10, 11)
    - Install the file called `jasmine_sprout_stock_android9.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload jasmine_sprout_stock_android9.zip`
- Install the required vendor version
    - Install the file called `fw-vendor_image_wayne_miui_MI6X_V11.0.6.0.PDCCNXM_f049df201b_9.0.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload fw-vendor_image_wayne_miui_MI6X_V11.0.6.0.PDCCNXM_f049df201b_9.0.zip`
- Install recovery
    - Install the file called `twrp-VERSION-wayne.img` as an Image to the `Recovery` partition
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
- Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-arm64_YYYYMMDD.zip`

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `droidian-adaptation-xiaomi-wayne-arm64_MMMMDDYY.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-adaptation-xiaomi-wayne-arm64_MMMMDDYY.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well, now you should be running Droidian.

## Notes
### Porting status
You can check out the status of the port [here](https://github.com/orgs/Droidian-Mi-A2-6X/projects/1)

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[kisekinopureya](https://github.com/kisekinopureya)

[Shouko](https://xn--n8ja0d4b0j7a.xn--q9jyb4c/)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

You can ask for assistance specific to this device at [Shouko's Lab Telegram Group](https://t.me/shoukolab).


