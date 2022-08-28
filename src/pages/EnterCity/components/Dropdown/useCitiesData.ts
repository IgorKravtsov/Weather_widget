import { ICity } from 'types';
import { IAutocompleteOption } from 'components/Autocomplete';

import { useAppSelector } from 'store/hooks';
import { selectCities } from 'store/slices';

export const useCitiesData = (currentCityFound?: ICity) => {
  const { cities, currentCity: currentCityInStorage } = useAppSelector(selectCities);
  const setCitiesData = (): IAutocompleteOption[] => {
    if (!currentCityInStorage) {
      return cities.map((c) => ({ ...c, label: c?.name || '', isSpecial: false }));
    }
    if (currentCityFound) {
      const withoutCurr = cities.filter((c) => c.id !== currentCityFound.id);
      return [currentCityFound, ...withoutCurr].map((c, i) => ({
        ...c,
        label: c?.name || '',
        isSpecial: i === 0,
      }));
    }
    return [currentCityInStorage, ...cities].map((c, i) => ({
      ...c,
      label: c?.name || '',
      isSpecial: i === 0,
    }));
  };

  return { data: setCitiesData() };
};
