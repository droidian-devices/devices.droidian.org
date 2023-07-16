---
draft: false
title: {{{manufacturer}}} {{{name}}} ({{{codename}}})
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

## Device preparation
{{#isManufacturerXiaomi}}
- A USB 2.0 port/hub with an actual USB 2.0 controller is recommended (Using `fastboot` on a USB 3.0 port may cause errors with some Xiaomi devices)
{{/isManufacturerXiaomi}}
- Save your APN (Android)
    - The `Access Point Name` or `APN` can be found in the Settings menu of Android
    - Take a piece of paper or a text editor, and write down everything that you see on that screen
    - These are likely to include a URL (e. g., `internet.carrier.net`), a username, and possibly a password
- Unlock the bootloader (using Computer)
    - Refer to the instructions provided by the device manufacturer
    - Other useful sources include the [LineageOS wiki](https://wiki.lineageos.org/devices/) and [xda-developers](https://www.xda-developers.com/search2/)
{{#recovery.must_flash}}
Flash recovery (using Computer)
    - Flash {{{recovery.name}}} to your device by running `fastboot flash recovery {{{recovery.filename}}}`
    - Boot into recovery by pressing {{{recovery_mode}}}
    - If your device boots to the stock recovery menu at some point, you should repeat this step.
{{/recovery.must_flash}}
{{^recovery.must_flash}}
- Boot into recovery (Computer)
    - Boot {{{recovery.name}}} by running `fastboot boot {{{recovery.filename}}}`
{{/recovery.must_flash}}
- Wipe the device (using {{{recovery.name}}})
    - Go to the `Wipe` menu
    - Select `Advanced wipe`
    - Tick the boxes called `Dalvik / ART cache`, `Cache`, `System`, `Data`
    - Swipe to Wipe
    - Go back to the previous menu
    - Choose `Format data` and type `yes`
    - Go back to the main menu and select `Reboot`
    {{#recovery.must_flash}}
    - Choose `Recovery`
    {{/recovery.must_flash}}
    {{^recovery.must_flash}}
    - Choose `Bootloader`
    - Boot {{{recovery.name}}} again by running `fastboot boot {{{recovery.filename}}}`
    {{/recovery.must_flash}}
- Copy the files to the device  (Computer)
    - When {{{recovery.name}}} is booted, open the device's `Internal storage` from your computer
    - Copy all of the files you downloaded to this folder

## Droidian installation
{{#vendor_image}}
{{#vendor_image.filename}}
- Install the vendor image
    - Install the file called `{{{vendor_image.filename}}}` as an Image to the `Vendor` partition using `{{{recovery.name}}}`
    - Alternatively, you can enter fastboot mode and `fastboot flash vendor {{{vendor_image.filename}}}`
{{/vendor_image.filename}}
{{/vendor_image}}

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
