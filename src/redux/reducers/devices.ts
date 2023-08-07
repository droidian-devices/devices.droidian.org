import { createSlice } from '@reduxjs/toolkit';
import type * as types from '../types';

const devices = createSlice({
  name: 'account',
  initialState: { devices: [] } as types.IDevicesState,
  reducers: {
    addDevices(state, action: types.IDeviceAction) {
      state.devices = action.payload.devices;
      return state;
    },
  },
});

export const { addDevices } = devices.actions;
export default devices.reducer;
