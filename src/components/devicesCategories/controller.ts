import device from '../../devices.json';
import type { IDevice } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const getDevices = (): { devices: IDevice[] } => {
  // Type checking shouldn't be ignored but just in case something breaks, its disabled
  return device as unknown as { devices: IDevice[] };
};
