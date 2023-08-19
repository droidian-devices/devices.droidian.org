// eslint-disable-next-line import/prefer-default-export
import type { Dispatch } from '@reduxjs/toolkit';
import * as hooks from '../../redux';

// eslint-disable-next-line import/prefer-default-export
export const copyLink = (id: string, dispatch: Dispatch): void => {
  const url = window.location.href;
  // eslint-disable-next-line compat/compat
  navigator.clipboard.writeText(`${url}#${id}`).catch((err) => console.info(err));
  dispatch(hooks.addNotification({ message: 'Link copied to clipboard' }));
};
