import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity } from 'types';
import { RootState } from '../store';

interface CitiesState {
  cities: ICity[];
}

const initialState: CitiesState = {
  cities: [],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities(state, action: PayloadAction<ICity[]>) {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = citiesSlice.actions;
export const cities = citiesSlice.reducer;
export const selectCities = (state: RootState) => state.cities;
