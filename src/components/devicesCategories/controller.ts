import { EDeviceCategory, EFeaturesStatus, ENoteType } from '../../enums';
import type { IDevice } from '../../types';

const data: { devices: IDevice[] } = {
  devices: [
    {
      name: 'Google pixel 3a/xl (sargo)',
      category: EDeviceCategory.Official,
      code: 'sargo',
      description: 'Device description is being rendered here. It says something about device itself.',
      features: {
        Camera: {
          [EFeaturesStatus.Partly]: ['Switch camera', 'Photo'],
          [EFeaturesStatus.NotWorking]: ['Video'],
        },
        Sound: {
          [EFeaturesStatus.Working]: ['Headphones', 'Volume control', 'Speaker'],
        },
        Sensors: {
          [EFeaturesStatus.Working]: ['Brightness control', 'Auto brightness', 'Rotation', 'Proximity'],
        },
        Network: {
          [EFeaturesStatus.Working]: ['Flight mode', 'Calls', 'Hotspot', 'Data', 'WiFi'],
        },
        Telephony: {
          [EFeaturesStatus.Working]: [
            'Battery percentage',
            'Microphone',
            'Flashlight',
            'Charging',
            'Fingerprint',
            'SMS',
            'SD card',
            'NFC',
            'GPS',
            'Bluetooth',
            'Waydroid',
          ],
          [EFeaturesStatus.Partly]: ['Carrier info'],
          [EFeaturesStatus.NotWorking]: ['Dual sim', 'Encryption'],
          [EFeaturesStatus.Untested]: ['MTP'],
        },
      },
      notes: {
        'Before you proceed': [
          {
            type: ENoteType.String,
            data: 'Device has to be downgraded to stock Android 9 (PQ3B.190801.002) before installation',
          },
        ],
        'Device preparation': [
          {
            type: ENoteType.Header,
            data: 'Save your apn',
          },
          {
            type: ENoteType.List,
            data: [
              'The Access Point Name or APN can be found in the Settings menu of Android',
              'Take a piece of paper or a text editor, and write down everything that you see on that screen',
              'These are likely to include a URL (e. g., internet.carrier.net), a username, and possibly a password',
              'APN settings can also be found at apn.how',
            ],
          },
          {
            type: ENoteType.Header,
            data: 'Unlock the bootloader (using a computer)',
          },
          {
            type: ENoteType.List,
            data: [
              'Refer to the instructions provided by the device manufacturer',
              'Other useful sources include the LineageOS wiki and xda-developers',
            ],
          },
        ],
        'Droidian installation': [
          {
            type: ENoteType.Header,
            data: 'Installation',
          },
          {
            type: ENoteType.List,
            data: [
              'Extract the downloaded zip file',
              'Boot to fastboot (or fastbootd in TWRP or any recovery for Samsung devices) and run flash_all.sh to flash the image to your device. To flash each partition manually',
              {
                type: ENoteType.List,
                data: [
                  'Check the list of images in data/ and flash each image manually like so: fastboot flash partition_name partition_name.img',
                  'The following images might be included: boot.img, dtbo.img, vbmeta.img, userdata.img.',
                ],
              },
              'Reboot.',
            ],
          },
        ],
        'Default password': [
          {
            type: ENoteType.String,
            data: 'The default password is 1234.',
          },
        ],
        APN: [
          {
            type: ENoteType.String,
            data: 'Mobile data needs an APN to be set up from Settings -> Mobile Network -> Access Point Names.',
          },
        ],
        Camera: [
          {
            type: ENoteType.String,
            data: 'Camera is currently only usable in Waydroid sudo apt install waydroid -y',
          },
        ],
        Applications: [
          {
            type: ENoteType.String,
            data: 'You can find a list of mobile-friendly Linux applications at LinuxPhoneApps',
          },
        ],
        Credit: [
          {
            type: ENoteType.String,
            data: 'Contributors',
          },
          {
            type: ENoteType.String,
            data: ['#{1} is tester for #{2}, who is also a tester', 'Droidian Project'],
            links: [{ to: 'https://github.com/fakeshell', text: 'FakeShell (Bardia Moshiri)', id: 1 }],
          },
        ],
      },
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const getDevices = async (): Promise<{ devices: IDevice[] }> => {
  return new Promise((resolve) => {
    resolve(data);
  });

  // const server = process.env.REACT_APP_BACKEND!;
  //
  // const res = await fetch(`${server}/config,json`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  //
  // if (res.ok) {
  //   try {
  //     return (await res.json()) as IDevice[];
  //   } catch (err) {
  //     return [];
  //   }
  // }
  // const err = (await res.json()) as IFullError;
  // console.info(err);
  // return [];
};
