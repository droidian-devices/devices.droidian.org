import { configureStore } from '@reduxjs/toolkit';
import devices from '../redux/reducers/devices';
import notifications from '../redux/reducers/notificatios';

const mainStore = configureStore({
  reducer: {
    notifications,
    devices,
  },
});

export default mainStore;
