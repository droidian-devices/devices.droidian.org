import type { IDevice } from '../types';
import sargo from './sargo.json';

// eslint-disable-next-line import/prefer-default-export
export const getDevices = (): { devices: IDevice[] } => {
  return {
    // This comment below removes security features for incorrect types of data, This is here, in case that some json includes incorrect data types.
    // App might not properly render if there are errors.

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    devices: [sargo],
  };
};
