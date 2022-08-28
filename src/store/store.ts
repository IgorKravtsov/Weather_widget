import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cities, coords, snackbar } from './slices';
import { weatherApi } from './api';

export const store = configureStore({
  reducer: combineReducers({
    cities,
    coords,
    snackbar,
    [weatherApi.reducerPath]: weatherApi.reducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
