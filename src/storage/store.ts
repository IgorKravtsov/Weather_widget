import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cities } from './slices/cites.slice';

export const store = configureStore({
  reducer: combineReducers({ cities }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
