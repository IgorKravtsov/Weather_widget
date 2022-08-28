import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWeather } from 'models';
import { ICoords } from 'types';

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fcc-weather-api.glitch.me/api/',
  }),
  endpoints: (build) => ({
    currentCityWeather: build.query<IWeather, ICoords>({
      query: ({ lat, lon }) => ({
        url: 'current',
        params: { lat, lon },
      }),
    }),
  }),
});

export const { useLazyCurrentCityWeatherQuery } = weatherApi;
