---
draft: false
title: Xiaomi Redmi Note 7 Pro (violet)
---
> **Make a backup now, as your device will be wiped.**
## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs` and `devtools`](https://github.com/droidian-images/rootfs-api28gsi-all/releases) for `arch64` (nightly releases include devtools)
- [Android 9 Pie Firmware](https://xiaomifirmwareupdater.com/firmware/violet/weekly/9.9.3/)
- [Android 9 vendor](https://github.com/ubuntu-touch-violet/ubuntu-touch-violet/releases/tag/20210510)
- [Halium-boot](https://gitlab.com/mathew-dennis/xiaomi-violet/-/jobs/2428049402/artifacts/file/out/boot.img)
- [Latest Orange Fox Recovery](https://orangefox.download/device/violet)
- [Adaptation (unofficial)](https://github.com/mathew-dennis/droidian-recovery-flashing-adaptation-violet/releases/tag/v1.1)


## Device preparation
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
- Flash recovery (Computer)
    - Flash Orange Fox Recovery to your device by running `fastboot flash recovery OrangeFox-violet-stable@VERSION.zip`
    - Boot into recovery by pressing `Vol+` and `Power`
    - If your device boots to the stock recovery menu at some point, you should repeat this step.
- Wipe the device (Orange Fox Recovery)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Recovery`
- Copy the files to the device  (Computer)
    - When Orange Fox Recovery is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (Orange Fox Recovery)
- Install the required base Android version (9, 10, 11)
    - Install the file called `fw_violet_miui_VIOLET_9.9.3_79d3ccd33b_9.0.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload fw_violet_miui_VIOLET_9.9.3_79d3ccd33b_9.0.zip`
- Install the required vendor version
    - Install the file called `vendor.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload vendor.zip`
- Install the boot image
    - Install the file called `boot.img` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot boot.img`
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-arch64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-arch64_YYYYMMDD.zip`
- Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-arch64_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-arch64_YYYYMMDD.zip`

## Finalizing the installation
- Install adaptation package as a flashable zip (Orange Fox Recovery)
    - Install the file called `droidian-recovery-flashing-adaptation-violet.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-recovery-flashing-adaptation-violet.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - Orange Fox Recovery might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well, now you should be running Droidian.

## Notes
### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[mathew-dennis](https://gitlab.com/mathew-dennis)

[mardy](https://forums.ubports.com/user/mardy)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)



