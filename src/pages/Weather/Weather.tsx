import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ICity, PageParams } from 'types';
import { RouteName } from 'routes';

import { storageManager } from 'packages/storage-manager';

import { useLazyCurrentCityWeatherQuery } from 'store/api';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { error, selectCities } from 'store/slices';

import { LoadingIndicator } from 'components/LoadingIndicatior/LoadingIndicator';

import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { CardHeader } from './components/CardHeader/CardHeader';
import { CityName } from './components/CityName/CityName';
import { WeatherType } from './components/WeatherType/WeatherType';
import { WeatherFooter } from './components/WeatherFooter/WeatherFooter';

const Weather: React.FC = () => {
  const { currentCity } = useAppSelector(selectCities);
  const { cityId } = useParams<PageParams>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currCity, setCurrCity] = useState<ICity | null>(null);
  const [getCurrentWeather, { data, isLoading }] = useLazyCurrentCityWeatherQuery();

  useEffect(() => {
    if (currentCity && currentCity.id === cityId) {
      const { lat, lon } = currentCity;
      getCurrentWeather({ lat, lon });
    } else if (cityId) {
      const currCity = storageManager.getOne(cityId);
      if (currCity) {
        const { lat, lon } = currCity;
        getCurrentWeather({ lat, lon });
        setCurrCity(currCity);
      } else {
        dispatch(error({ message: "Such city doesn't exist in list" }));
        navigate(RouteName.EnterCity);
      }
    }
  }, [cityId, dispatch, getCurrentWeather, currentCity, navigate]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <WeatherCard>
        <CardHeader />
        <CityName cityName={currCity?.name || currentCity?.name || '-'} />
        <WeatherType weatherType={data?.weather[0].main || 'Clear'} temp={data?.main.temp || 0} />
        <WeatherFooter feelsLike={data?.main.feels_like || 0} humidity={data?.main.humidity || 0} />
      </WeatherCard>
    </>
  );
};

export default Weather;
