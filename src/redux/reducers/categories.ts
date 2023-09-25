import { createSlice } from '@reduxjs/toolkit';
import type * as types from '../types';

// This element is huge over-engineering of simple problem. This reducer only keep 1 variable
const categories = createSlice({
  name: 'categories',
  initialState: { active: null } as types.ICategoriesState,
  reducers: {
    changeCategory(state, action: types.ICategoriesAction) {
      state.active = action.payload.active;
      return state;
    },
  },
});

export const { changeCategory } = categories.actions;
export default categories.reducer;
