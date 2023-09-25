import { configureStore } from '@reduxjs/toolkit';
import devices from '../redux/reducers/devices';
import notifications from '../redux/reducers/notificatios';
import categories from '../redux/reducers/categories';

const mainStore = configureStore({
  reducer: {
    notifications,
    devices,
    categories,
  },
});

export default mainStore;
