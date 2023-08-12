import type React from 'react';
import type { Dispatch } from '@reduxjs/toolkit';
import type { IDevice } from '../../types';
import * as hooks from '../../redux';

// eslint-disable-next-line import/prefer-default-export
export const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCallback: React.Dispatch<React.SetStateAction<string | null>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  dispatch: Dispatch,
): void => {
  setError(null);
  setCallback(null);

  const file = e.target.files && e.target.files[0];
  if (!file) {
    setError('File not provided');
    return;
  }

  const reader = new FileReader();
  reader.onload = (): void => {
    try {
      const data = JSON.parse(reader.result as string) as { devices: IDevice[] };
      dispatch(hooks.clearDevices());
      dispatch(hooks.addDevices(data));
      setCallback('File loaded');
    } catch (error) {
      setError(String(error));
    }
  };
  reader.readAsText(file);
};
