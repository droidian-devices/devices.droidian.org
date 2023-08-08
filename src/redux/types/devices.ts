import type { PayloadAction } from '@reduxjs/toolkit';
import type { EDeviceCategory } from '../../enums';

export interface IDevice {
  name: string;
  brand: string;
  category: EDeviceCategory;
  id?: number;
}

export interface IDevicesState {
  devices: IDevice[];
}

interface IDeviceBody {
  devices: IDevice[];
}

export type IDeviceAction = PayloadAction<IDeviceBody>;
