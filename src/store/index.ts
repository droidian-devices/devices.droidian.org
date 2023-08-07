import { configureStore } from '@reduxjs/toolkit';
import devices from '../redux/reducers/devices';

const mainStore = configureStore({
  reducer: {
    devices,
  },
});

export default mainStore;
