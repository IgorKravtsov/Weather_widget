import { ICity, ICoords } from 'types';
import { generateRandomId } from 'utils';

import { selectCities, setCurrentCity } from 'storage/slices';
import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { useCallback } from 'react';

export const useSetCity = () => {
  const { cities } = useAppSelector(selectCities);
  const dispatch = useAppDispatch();

  const setCurrentCityByCoords = useCallback(
    (coords: ICoords) => {
      const currentCity = cities.find((c) => c.lat === coords.lat && c.lon === coords.lon);
      console.log('===cities===', cities);
      if (!currentCity) {
        const newCity: ICity = { id: generateRandomId(), name: 'Current city', ...coords };
        // dispatch(setCities([newCity, ...cities]));
        dispatch(setCurrentCity(newCity));
        return;
      }
      dispatch(setCurrentCity(currentCity));
    },
    [cities]
  );

  return { setCurrentCityByCoords };
};
