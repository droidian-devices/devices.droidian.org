import type { PayloadAction } from '@reduxjs/toolkit';
import type { EDeviceCategory } from '../../enums';

export interface ICategoriesState {
  active: EDeviceCategory | null;
}

interface ICategoriesBody {
  active: EDeviceCategory | null;
}

export type ICategoriesAction = PayloadAction<ICategoriesBody>;
