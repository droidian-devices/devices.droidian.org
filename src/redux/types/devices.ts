import type { PayloadAction } from '@reduxjs/toolkit';
import type { EDeviceCategory, ENoteType } from '../../enums';

export type IFeature = Record<string, string[]>;

export interface INotes {
  type: ENoteType;
  data: string[];
}

export interface IDevice {
  name: string;
  category: EDeviceCategory;
  code: string;
  description?: string;
  features?: Record<string, IFeature>;
  notes?: Record<string, Record<string, INotes> | string>;
}

export interface IDevicesState {
  devices: IDevice[];
}

interface IDeviceBody {
  devices: IDevice[];
}

export type IDeviceAction = PayloadAction<IDeviceBody>;
