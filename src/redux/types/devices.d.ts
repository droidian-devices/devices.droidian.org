import type { PayloadAction } from '@reduxjs/toolkit';
import type { IDevice } from '../../types';

export interface IDevicesState {
  devices: IDevice[];
}

interface IDeviceBody {
  devices: IDevice[];
}

export type IDeviceAction = PayloadAction<IDeviceBody>;
