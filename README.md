# Droidian react client

## TLDR

1. Prepare development environment
2. Available scripts
3. Prepare new device/edit existing
   3.1 Required keys
   3.2 Additional keys
   3.3 Text object basics
   3.4 Features
4. Testing json file
5. Example

## 1. Prepare development environment

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Prepare environment

This will update husky ( git hooks ), which run after commit, cleaning your app from possible eslint errors and breaking
commit process if any error occur

```shell
npm run prepareHooks / yarn prepareHooks
chmod +x .husky/pre-commit
```

## 2. Available Scripts

In the project directory, you can run:

### `npm run start` / `yarn start`

Runs the app in the development mode. Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

### `npm run lint` / `yarn lint`

Lint project with eslint, to find possible errors

### `npm run build` / `yarn build`

Build production ready version of this app

## 3, Prepare new device/edit existing

This page renders devices, based on json, it can fetch from server. Json should look like this

```json
{
  "devices": [
    {
      "name": "Device name",
      "category": "Device category",
      "code": "Device code"
    }
  ]
}
```

### 3.1 Required keys

This example represents required keys. Those elements are required. Let's break this down

#### Name

Device name, rendered under device icon and on top of "1 device page"

```text
name 
```

#### Category

Device category, which applies device to available categories

```text
category 
```

Available categories are:

```text
- Official
- Community
- Potential
```

#### code

Device code represents its codename. Its used as device id in url. For example, url for sargo will look like
this `/devices/sargo`

### 3.2 Additional keys

Additional keys are

```text
- description
- *
```

#### description

You can add device description like this

```json
{
  "description": {
    "links": [
      "Links in string"
    ],
    "data": "Device description"
  }
}
```

Data is device description you want to provide, where links are links, you want to place in this string. More on links
in next point

### 3.3 Text object basics

If you want to provide new elements to devices page, you can add new key with data like this

```json
{
  "notes": {
    "Before you proceed": [
      {
        "type": "string",
        "data": "Device has to be downgraded to stock Android 9 (PQ3B.190801.002) before installation"
      }
    ]
  }
}
```

As you can see, you have to provide key, which in this case is "notes", with embedded keys. First key ( notes ) is
category header, where nested keys are "subCategory headers". Each subCategory header have object with data inside.
Let's break this down:

```json
{
  "type": "string",
  "data": "Device has to be downgraded to stock Android 9 (PQ3B.190801.002) before installation"
}
```

#### Type

Type is data type. It specifies, how data should render. Available types:

```text
- list
- string
- header
```

`List` type require data to be typeof array. Providing data as string, will render it as string. Example:

```json
{
  "type": "list",
  "data": [
    "This is list element",
    "This is another list element"
  ]
}
```

You can also nest lists like this

```json
{
  "type": "list",
  "data": [
    "This is list element",
    "This is another list element",
    {
      "type": "list",
      "data": [
        "This is sublist element",
        "This is another sublist element"
      ]
    },
    "And another list element"
  ]
}
```

In theory, you can nest as deep as you want, but after x'th level, ui might not scale properly

`string` type requires data to be typeof string. Providing list with type string, will join all elements from list with
space. Example usage:

```json
{
  "type": "string",
  "data": "This is string example"
}
```

`header` type will be rendered the same way, as string is, but as you probably guessed, text will be rendered as header,
instead of string. Example:

```json
{
  "type": "header",
  "data": "This is string example"
}
```

#### Links

Additional key, you can provide in text object is `links`. Example usage

```json
         {
  "type": "string",
  "links": [
    {
      "to": "https://devices.droidian.org/",
      "text": "link",
      "id": 1
    }
  ],
  "data": "This #{1} will go to https://devices.droidian.org/"
}
```

This block will return `This link will go to https://devices.droidian.org/`, where "link" will be clickable link

Make sure to match link id. If link will be nested in string, but not in "links", you will get red text saying `link
does not exist`

### 3,4 Features

Features is element, which has specified requirements unlike notes and other data. Example object

```json
{
  "features": {
    "Camera": {
      "partly": [
        "Switch camera",
        "Photo"
      ],
      "notWorking": [
        "Video"
      ]
    },
    "Sound": {
      "working": [
        "Headphones",
        "Volume control"
      ]
    },
    "Sensors": {
      "untested": [
        "MTP"
      ]
    }
  }
}
```

Features has keys, which specify element category. For example, "camera". Each of those elements has key, which
specifies state, of elements. Each state is list of elements, which should include elements with this conditions. Lets
break it down:

There are 4 states of elements

```text
- working
- partly
- untested
- notWorking
```

`working` means, that feature is working.

`partly` means, that feature is partly working. Feature might be crashing, working incorrectly, etc.

`untested` means, that feature did not get tested. It might or might not work.

`notWorking` means, that feature does not work.

## 4. Example

Example json, for `sargo` config. Written: 12.07.23. It might or might not be up-to-date

```json
{
  "devices": [
    {
      "name": "Google pixel 3a/xl (sargo)",
      "category": "official",
      "code": "sargo",
      "description": {
        "type": "string",
        "data": "Device description is being rendered here. It says something about device itself."
      },
      "features": {
        "Camera": {
          "partly": [
            "Switch camera",
            "Photo"
          ],
          "notWorking": [
            "Video"
          ]
        },
        "Sound": {
          "working": [
            "Headphones",
            "Volume control",
            "Speaker"
          ]
        },
        "Sensors": {
          "working": [
            "Brightness control",
            "Auto brightness",
            "Rotation",
            "Proximity"
          ]
        },
        "Network": {
          "working": [
            "Flight mode",
            "Calls",
            "Hotspot",
            "Data",
            "WiFi"
          ]
        },
        "Telephony": {
          "working": [
            "Battery percentage",
            "Microphone",
            "Flashlight",
            "Charging",
            "Fingerprint",
            "SMS",
            "SD card",
            "NFC",
            "GPS",
            "Bluetooth",
            "Waydroid"
          ],
          "partly": [
            "Carrier info"
          ],
          "notWorking": [
            "Dual sim",
            "Encryption"
          ],
          "untested": [
            "MTP"
          ]
        }
      },
      "notes": {
        "Before you proceed": [
          {
            "type": "string",
            "data": "Device has to be downgraded to stock Android 9 (PQ3B.190801.002) before installation"
          }
        ],
        "Device preparation": [
          {
            "type": "header",
            "data": "Save your apn"
          },
          {
            "type": "list",
            "links": [
              {
                "to": "http://apn.how/",
                "text": "apn.how",
                "id": 1
              }
            ],
            "data": [
              "The Access Point Name or APN can be found in the Settings menu of Android",
              "Take a piece of paper or a text editor, and write down everything that you see on that screen",
              "These are likely to include a URL (e. g., internet.carrier.net), a username, and possibly a password",
              "APN settings can also be found at #{1}"
            ]
          },
          {
            "type": "header",
            "data": "Unlock the bootloader (using a computer)"
          },
          {
            "type": "list",
            "links": [
              {
                "to": "https://wiki.lineageos.org/devices/",
                "text": "LineageOS wiki",
                "id": 1
              },
              {
                "to": "https://forum.xda-developers.com/",
                "text": "xda-developers",
                "id": 2
              }
            ],
            "data": [
              "Refer to the instructions provided by the device manufacturer",
              "Other useful sources include the #{1} and #{2}"
            ]
          }
        ],
        "Droidian installation": [
          {
            "type": "header",
            "data": "Installation"
          },
          {
            "type": "list",
            "data": [
              "Extract the downloaded zip file",
              "Boot to fastboot (or fastbootd in TWRP or any recovery for Samsung devices) and run flash_all.sh to flash the image to your device. To flash each partition manually",
              {
                "type": "list",
                "data": [
                  "Check the list of images in data/ and flash each image manually like so: fastboot flash partition_name partition_name.img",
                  "The following images might be included: boot.img, dtbo.img, vbmeta.img, userdata.img."
                ]
              },
              "Reboot."
            ]
          }
        ],
        "Default password": [
          {
            "type": "string",
            "data": "The default password is 1234."
          }
        ],
        "APN": [
          {
            "type": "string",
            "data": "Mobile data needs an APN to be set up from Settings -> Mobile Network -> Access Point Names."
          }
        ],
        "Camera": [
          {
            "type": "string",
            "data": "Camera is currently only usable in Waydroid sudo apt install waydroid -y"
          }
        ],
        "Applications": [
          {
            "type": "string",
            "links": [
              {
                "to": "https://linuxphoneapps.org",
                "text": "LinuxPhoneApps",
                "id": 1
              }
            ],
            "data": "You can find a list of mobile-friendly Linux applications at #{1}"
          }
        ],
        "Credits": [
          {
            "type": "string",
            "data": "Contributors"
          },
          {
            "type": "string",
            "data": "User #{1} is tester for #{2}, who is also a tester",
            "links": [
              {
                "to": "https://github.com/fakeshell",
                "text": "FakeShell (Bardia Moshiri)",
                "id": 1
              },
              {
                "to": "http://droidian.org/",
                "text": "Droidian project",
                "id": 2
              }
            ]
          }
        ]
      }
    }
  ]
}
```

## 4. Testing json files

This app has hidden route "/test". You can access it and provide json file with devices data. Page will try to load it
and render data, based of it. Keep in mind that refreshing the page will wipe data from page. Move to home page, by
using droidian logo inside navbar ( left top corner )

## 5. Additional notes

Data on "1-page device" will always render in this order:

- Device name
- Device description
- Device features
- Everything else, sorted by order in json
