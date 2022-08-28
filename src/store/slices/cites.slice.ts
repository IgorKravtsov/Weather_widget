import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity } from 'types';
import { RootState } from '../store';

interface CitiesState {
  cities: ICity[];
  currentCity: ICity | null;
}

const initialState: CitiesState = {
  cities: [],
  currentCity: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities(state, action: PayloadAction<ICity[]>) {
      state.cities = action.payload;
    },
    setCurrentCity(state, action: PayloadAction<ICity>) {
      state.currentCity = action.payload;
    },
  },
});

export const { setCities, setCurrentCity } = citiesSlice.actions;
export const cities = citiesSlice.reducer;
export const selectCities = (state: RootState) => state.cities;
