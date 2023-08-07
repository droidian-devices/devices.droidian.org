import type React from 'react';
import type { Dispatch } from '@reduxjs/toolkit';
import type { IFullError } from '../../types';
import { EDevicesState } from '../../enums';
import * as hooks from '../../redux';
import type { IDevice } from '../../redux/types';

const devices: { data: IDevice[] } = {
  data: [
    {
      name: 'phone 1',
      brand: 'Xiaomeme',
    },
    {
      name: 'phone 2',
      brand: 'Samsung',
    },
    {
      name: 'phone 3',
      brand: 'Oppo',
    },
    {
      name: 'phone 4',
      brand: 'Huawei',
    },
    {
      name: 'phone 5',
      brand: '1+',
    },
    {
      name: 'phone 6',
      brand: 'test',
    },
    {
      name: 'phone 7',
      brand: 'test',
    },
    {
      name: 'phone 8',
      brand: 'test',
    },
    {
      name: 'phone 9',
      brand: 'test',
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const getDevices = async (): Promise<IDevice[]> => {
  return new Promise((resolve) => {
    // Simple timeout to properly handle loading animations
    setTimeout(() => {
      resolve(devices.data);
    }, 1000);
  });
  // const server = process.env.REACT_APP_BACKEND!;
  //
  // const res = await fetch(`${server}/devices`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  //
  // if (res.ok) {
  // try {
  // } catch (err) {
  //   throw new Error('Received response is noi typeof json');
  // }
  //   return ((await res.json()) as { data: IDevice[] }).data;
  // }
  // const err = (await res.json()) as IFullError;
  // throw err;
};

export const startFetchingDevices = (
  setStatus: React.Dispatch<React.SetStateAction<EDevicesState>>,
  dispatch: Dispatch,
): void => {
  setStatus(EDevicesState.Loading);

  getDevices()
    .then((devices) => {
      setStatus(EDevicesState.Devices);
      return dispatch(hooks.addDevices({ devices }));
    })
    .catch((err) => {
      const error = err as IFullError;
      console.info(error);
      setStatus(EDevicesState.Error);
    });
};
