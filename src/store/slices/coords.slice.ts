import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICoords } from 'types';

interface CoordsState {
  coords: ICoords | null;
  coordsError: string | null;
}

const initialState: CoordsState = {
  coords: null,
  coordsError: null,
};

const coordsSlice = createSlice({
  name: 'coords',
  initialState,
  reducers: {
    setCoords(state, action: PayloadAction<ICoords>) {
      state.coords = action.payload;
      state.coordsError = null;
    },
    resetCoords(state) {
      state.coords = null;
    },
    setCoordsError(state, action: PayloadAction<string>) {
      state.coordsError = action.payload;
    },
    resetCoordsError(state) {
      state.coordsError = null;
    },
  },
});

export const { setCoords, resetCoords, resetCoordsError, setCoordsError } = coordsSlice.actions;
export const coords = coordsSlice.reducer;
export const selectCoords = (state: RootState) => state.coords;
