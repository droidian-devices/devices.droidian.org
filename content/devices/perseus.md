---
draft: false
title: Xiaomi MIX 3 (perseus)
---
> **Make a backup now, as your device will be wiped.**
## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/rootfs-api28gsi-all/releases) for `arm64` (nightly releases include devtools)
- [Android 9 (Pie) stock firmware](https://xiaomifirmwareupdater.com/download/?file=fw-vendor_perseus_miui_MIMIX3_9.9.3_a9dbc91c30_9.0.zip)
- [Latest TWRP recovery](https://dl.twrp.me/perseus/)
- [Adaptation (unofficial)](https://github.com/droidian-perseus/android-recovery-perseus-adaptation/releases/)


## Device preparation
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (using Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
Flash recovery (using Computer)
    - Flash TWRP to your device by running `fastboot flash recovery twrp-VERSION-perseus.img`
    - Boot into recovery by pressing `Vol+` and `Power`
    - If your device boots to the stock recovery menu at some point, you should repeat this step.
- Wipe the device (using TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Recovery`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation 
- Install the required base Android version (9)
    - Install the file called `fw-vendor_perseus_miui_MIMIX3_9.9.3_a9dbc91c30_9.0.zip` as a Zip file using TWRP
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload fw-vendor_perseus_miui_MIMIX3_9.9.3_a9dbc91c30_9.0.zip`
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    - Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-arm64_YYYYMMDD.zip`

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `android-recovery-perseus-adaptation_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload android-recovery-perseus-adaptation_YYYYMMDD.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well you should be booting into Droidian.

## Notes
### SIM slot
Dual-SIM mode is not supported as of now. Only the SIM1 slot is active.

### Extras
For other tweaks, open the `Console` terminal app, and run `perseus-extras.sh`. This includes dark mode switch and automated installation of Waydroid.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[Joel Selvaraj](https://github.com/joelselvaraj)

[1petro](https://github.com/1petro)

[Perseus X](https://github.com/xperseus-dev)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

You can ask for assistance specific to this device at [Mi MIX 3 Community Telegram Group](https://t.me/MiMix3Global).


