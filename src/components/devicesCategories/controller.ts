import type { IDevice } from '../../redux/types';
import { EDeviceCategory } from '../../enums';

const data: { devices: IDevice[] } = {
  devices: [
    {
      name: 'Readmeme note 9',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
    },
    {
      name: 'Readmeme note 10',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
    },
    {
      name: 'Readmeme note 11',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
    },
    {
      name: 'Readmeme note 11',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
    },
    {
      name: 'Readmeme note 11',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
    },
    {
      name: 'Readmeme note 11',
      brand: 'xiaomeme',
      category: EDeviceCategory.Official,
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
