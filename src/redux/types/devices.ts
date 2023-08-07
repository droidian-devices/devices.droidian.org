import type { PayloadAction } from '@reduxjs/toolkit';

export interface IDevice {
  name: string;
  brand: string;
  id: number;
}

export interface IDevicesState {
  devices: IDevice[];
}

interface IDeviceBody {
  devices: IDevice[];
}

export type IDeviceAction = PayloadAction<IDeviceBody>;
