---
draft: false
title: {{{manufacturer}}} {{{name}}} ({{{codename}}})
---

- ✅: Confirmed, Working
- 🧩: Partial, Working to some extent but with issues
- ❌: Not Working
- ❔: Untested

{{{port_status}}}

{{#hasNotesBeforeStart}}
## Before you proceed
{{#notes_before_you_start}}
> {{text}}

{{/notes_before_you_start}}
{{/hasNotesBeforeStart}}

## Downloading the needed files and tools
Please download the mentioned needed files and tools:
{{#is_specific_build_of_drodian_required}}
{{#droidian_required_build.rootfs_link}}
- [Droidian `image`]({{{droidian_required_build.rootfs_link}}})
{{/droidian_required_build.rootfs_link}}
{{/is_specific_build_of_drodian_required}}
{{#android.link}}
- [{{android.text}}]({{{android.link}}})
{{/android.link}}
{{#vendor_zip.link}}
- [{{vendor_zip.text}}]({{{vendor_zip.link}}})
{{/vendor_zip.link}}
{{#vendor_image.link}}
- [{{vendor_image.text}}]({{{vendor_image.link}}})
{{/vendor_image.link}}
{{#recovery.link}}
- [{{recovery.text}}]({{{recovery.link}}})
{{/recovery.link}}

## Device preparation
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
    - APN settings can also be found at [apn.how](http://apn.how/)
- Unlock the bootloader (using a computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://forum.xda-developers.com/)
{{#recovery.must_flash}}
- Flash recovery (using a computer)
    - Flash {{{recovery.name}}} to your device.
    - Boot into recovery by pressing {{{recovery_mode}}}
    - If your device boots to the stock recovery menu at some point, you should repeat this step.
{{/recovery.must_flash}}

## Droidian installation
{{#vendor_image}}
{{#vendor_image.filename}}
- Install the vendor image
    - Install the file called `{{{vendor_image.filename}}}` as an Image to the `Vendor` partition using `{{{recovery.name}}}`
    - Alternatively, you can enter fastboot mode and `fastboot flash vendor {{{vendor_image.filename}}}`
{{/vendor_image.filename}}
{{/vendor_image}}
- Extract the downloaded zip file
- Boot to fastboot (or fastbootd in TWRP or any recovery for Samsung devices) and run `flash_all.sh` to flash the image to your device. To flash each partition manually
    - Check the list of images in `data/` and flash each image manually like so: `fastboot flash partition_name partition_name.img`
    - The following images might be included: `boot.img`, `dtbo.img`, `vbmeta.img`, `userdata.img`.
- Reboot

Congratulations, if everything went well you should be booted into Droidian.

## Notes
{{#notes}}
### {{{title}}}
{{{text}}}

{{/notes}}

### Applications
You can find a list of mobile-friendly Linux applications at [LinuxPhoneApps](https://linuxphoneapps.org/)

## Credit
{{#credit}}
[{{name}}]({{{link}}})

{{/credit}}
[Droidian Project](http://droidian.org/)

{{#contact.link}}
You can ask for assistance specific to this device at [{{{contact.text}}}]({{{contact.link}}}).
{{/contact.link}}
