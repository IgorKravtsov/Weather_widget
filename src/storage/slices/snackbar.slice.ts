import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SnackbarType } from 'enums';

interface SnackbarState {
  message: string;
  isOpenedSnack?: boolean;
  snackbarType?: SnackbarType;
  additionalBtnLabel?: string;
}

const initialState: SnackbarState = {
  message: '',
  isOpenedSnack: false,
  snackbarType: SnackbarType.NotSet,
  additionalBtnLabel: 'Dont show',
};

const makeOpened = (state: Draft<SnackbarState>, action: PayloadAction<SnackbarState>, snackbarType: SnackbarType) => {
  state.isOpenedSnack = true;
  state.snackbarType = snackbarType;
  state.message = action.payload.message;
  state.additionalBtnLabel = action.payload.additionalBtnLabel;
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    success: (state, action: PayloadAction<SnackbarState>) => {
      makeOpened(state, action, SnackbarType.Success);
    },
    error: (state, action: PayloadAction<SnackbarState>) => {
      makeOpened(state, action, SnackbarType.Error);
    },
    warning: (state, action: PayloadAction<SnackbarState>) => {
      makeOpened(state, action, SnackbarType.Warning);
    },
    info: (state, action: PayloadAction<SnackbarState>) => {
      makeOpened(state, action, SnackbarType.Info);
    },
    clear: (state, action: PayloadAction<SnackbarState>) => {
      state.isOpenedSnack = false;
      state.snackbarType = SnackbarType.NotSet;
      state.message = action.payload.message;
      state.additionalBtnLabel = action.payload.additionalBtnLabel;
    },
  },
});

export const { success, info, warning, error, clear } = snackbarSlice.actions;
export const snackbar = snackbarSlice.reducer;
export const selectSnackbar = (state: RootState) => state.snackbar;
