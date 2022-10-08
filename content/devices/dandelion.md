---
draft: false
title: Xiaomi Redmi 9A (dandelion)
---
> **Make a backup now, as your device will be wiped.**
## Before you proceed
Use PBRP or the custom OrangeFox recovery mentioned in the [Downloading the needed files and tools](#downloading-the-needed-files-and-tools) section below. The installation might fail with recoveries other than those.

## Downloading the needed files and tools
Please download the belowed needed files and tools:
- [Droidian `rootfs`](https://github.com/droidian-images/droidian/releases) (specific build required)
- [Droidian `devtools`](https://github.com/droidian-images/droidian/releases) (specific build required)
- [Android 10 (Q) stock firmware](https://xiaomifirmwareupdater.com/archive/miui/dandelion/)
- [Boot image](https://github.com/droidian-mt6765/kernel-xiaomi-mt6765/releases/download/dandelion/boot-dandelion.img)
- [DTBO image](https://github.com/droidian-mt6765/kernel-xiaomi-mt6765/releases/download/dandelion/dtbo-dandelion.img)
- [vbmeta image](https://github.com/droidian-mt6765/kernel-xiaomi-mt6765/releases/download/dandelion/vbmeta-dandelion.img)
- [OrangeFox recovery](https://garden.bardia.tech/OrangeFox-R11-garden-droidian.img)
- [Adaptation (unofficial)](https://github.com/droidian-mt6765/adaptation-droidian-garden/releases/download/adaptation/adaptation-droidian-garden.zip)


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
    - Boot OrangeFox by running `fastboot boot OrangeFox-R11-garden-droidian.img`
- Wipe the device (OrangeFox)
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Vendor`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    - Choose `Bootloader`
    - Boot OrangeFox again by running `fastboot boot OrangeFox-R11-garden-droidian.img`
- Copy the files to the device  (Computer)
    - When OrangeFox is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation (OrangeFox)
- Install the boot image
    - Install the file called `boot-dandelion.img` as an Image to the `Boot` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash boot boot-dandelion.img`
- Install the DTBO image
    - Install the file called `dtbo-dandelion.img` as an Image to the `dtbo` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash dtbo dtbo-dandelion.img`
- Install the vbmeta image
    - Install the file called `vbmeta-dandelion.img` as an Image to the `vbmeta` partition
    - Alternatively, you can enter fastboot mode and `fastboot flash vbmeta vbmeta-dandelion.img`
- Install recovery
    - Please, follow the official guide to install OrangeFox
- Install Droidian `rootfs`
    - Install the file called `droidian-rootfs-armhf_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-rootfs-armhf_YYYYMMDD.zip`
- Installing `devtools`
    - Installation of devtools is optional for stable releases, but it is recommended as it helps with debugging.
    - Install the file called `droidian-devtools-armhf_YYYYMMDD.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload droidian-devtools-armhf_YYYYMMDD.zip`

## Finalizing the installation
- Install adaptation package as a flashable zip (OrangeFox)
    - Install the file called `adaptation-droidian-garden.zip` as a Zip file
    - Alternatively, you can enter `ADB sideload` mode and run `adb sideload adaptation-droidian-garden.zip`
- Boot your device
    - Go to the `Reboot` menu and choose `System`
    - OrangeFox might complain that there is no OS installed, but that's fine
    - The first boot may take longer, and at least one spontaneous reboot is expected during the process
    - You should be greeted with the lock screen, the default password is `1234`

Congratulations, if everything went well, now you should be running Droidian.

## Notes
### Default password
The default password is `1234`.

### Apn
Mobile data needs an APN to be set up from Settings -> Mobile Network -> Acess Point Names.

### Broken mobile data after calls
Data connection might break after recieving and making calls. Switch it off and on from Settings -> Mobile Network to fix it. Be careful to not turn off the mobile modem or a device restart might>

### Out of storage
By default when flashing Droidian it allocates 8GB of memory to the system. This might not be enough and luckily you can allocate more storage with ADB by running (while in recovery): `adb shell resize2fs -f /data/rootfs.img xG` where __x__ is the amount of GB to allocate (eg: 50G for 50 GB).

### Status
Droidian GSIs are experimental! Bugs and missing features are expected.

### Kernel driver issues
Xiaomi has not updated their kernel source tree and as a result some models of 9A and 9C have non functional display panels with our kernel.

### Bluetooth
Bluetooth can be used via the terminal using bluetoothctl command or using blueman sudo apt install blueman but does not work via the settings app.

### GPS
GPS works partially via Epiphany (tested with open street map).

### Signal Strengh
Signal strengh is reported at 1% but Mobile data and calls work just fine.

### Headphones/Headsets
When a headphone is plugged in it must be changed to be used manually in the settings.

### SSH access
Flashing the `devtools` zip enables `SSH` over USB. To use it, connect your phone to your computer and type `ssh droidian@10.15.19.82`, the password is `1234` (on Windows, you may need [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/))

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
[Bardia Moshiri](https://bardia.tech)

[Mohammad and TheKit](https://gitlab.com/ubports/porting/community-ports/android10/xiaomi-redmi-9c)

[Droidian](http://droidian.org/) [Mobian](https://mobian-project.org/) [UBports](https://ubuntu-touch.io/)

You can ask for assistance specific to this device at [Droidian for garden devices](https://t.me/ut_angelica).


