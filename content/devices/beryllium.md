---
draft: false
title: Xiaomi Pocophone F1 (beryllium)
---
> **Make a backup now, as your device will be wiped.**
## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/rootfs-api28gsi-all/releases) for `arm64` (nightly releases include devtools)
- [Android 9 (Pie) stock firmware](https://xiaomifirmwareupdater.com/download/?file=fw_beryllium_miui_POCOF1Global_9.6.27_6673f8a455_9.0.zip)
- [Vendor image](https://github.com/ubports-beryllium/artifacts/releases/download/v3/vendor_image.img)
- [Latest boot image](https://github.com/Unofficial-droidian-for-pocof1/linux_android_xiaomi_beryllium/releases)
- [Latest TWRP recovery](https://dl.twrp.me/beryllium/)
- [Adaptation (unofficial)](https://github.com/Unofficial-droidian-for-pocof1/android-recovery-beryllium-adaptation/releases)


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
    - Boot TWRP by running `fastboot boot twrp-VERSION-beryllium.img`
- Wipe the device (using TWRP)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot TWRP again by running `fastboot boot twrp-VERSION-beryllium.img`
- Copy the files to the device  (Computer)
    - When TWRP is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation 
- Install the required base Android version (9)
    - Install the file called `fw_beryllium_miui_POCOF1Global_9.6.27_6673f8a455_9.0.zip` as a Zip file using TWRP
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload fw_beryllium_miui_POCOF1Global_9.6.27_6673f8a455_9.0.zip`
- Install the vendor image
    - Install the file called `vendor.img` as an Image to the `Vendor` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash vendor vendor.img`
- Install the boot image
    - Install the file called `boot.img` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot boot.img`
- Install recovery
    - Install the file called `twrp-VERSION-beryllium.img` as an Image to the `Recovery` partition
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arm64_YYYYMMDD.zip`
    - Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-arm64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-arm64_YYYYMMDD.zip`

## Finalizing the installation
- Install adaptation package as a flashable zip (TWRP)
    - Install the file called `android-recovery-beryllium-adaptation_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload android-recovery-beryllium-adaptation_YYYYMMDD.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - TWRP might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`
- Run a specific command after first boot (Droidian)
    - Open the `King's Cross` application or connect via SSH (see the `SSH` entry in the Notes below), and type in the following:
    ```
    sudo systemctl enable enable-ipa sudo systemctl reboot
    ```

Congratulations, if everything went well you should be booting into Droidian.

## Notes
### SIM slot
Dual-SIM mode is not supported as of now. Only the SIM2 slot is active, so a microSD card can be used at the same time.

### Extras
For other tweaks, open the `King's Cross` terminal app, and run `beryllium-extras.sh`. This includes a notch fix and automated installation of Waydroid.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[Joel Selvaraj](https://github.com/joelselvaraj)

[1petro](https://github.com/1petro)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

You can ask for assistance specific to this device at [Droidian for Poco F1 Telegram Group](https://t.me/pocof1droidian).


