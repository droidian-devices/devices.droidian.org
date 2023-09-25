import type { RootMainState } from '../store/types';
import type * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const devicesState = (state: RootMainState): types.IDevicesState => state.devices;
export const notificationsState = (state: RootMainState): types.INotificationsState => state.notifications;

export const categoriesState = (state: RootMainState): types.ICategoriesState => state.categories;
