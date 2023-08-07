import type mainStore from './index';

export type MainDispatch = typeof mainStore.dispatch;
export type RootMainState = ReturnType<typeof mainStore.getState>;
