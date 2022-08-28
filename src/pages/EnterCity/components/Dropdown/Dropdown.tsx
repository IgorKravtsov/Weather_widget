import React, { useState } from 'react';
import styles from './dropdown.module.scss';

import { useNavigate } from 'react-router-dom';

import Search from '../Search/Search';

import { Autocomplete, IActionLink, IAutocompleteOption } from 'components/Autocomplete';
import { RouteName } from 'routes';
import { ICity } from 'types';

import { storageManager } from 'packages/storage-manager';

import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { selectCities, setCities } from 'storage/slices';
import { useCitiesData } from './useCitiesData';

type ICityOption = ICity & IAutocompleteOption;

interface DropdownProps {
  onSearchClick?: (cityId: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ onSearchClick }) => {
  const { cities, currentCity } = useAppSelector(selectCities);

  const [choosedCity, setChoosedCity] = useState<ICity | null>(null);

  const currentCityFound = cities.find((c) => c.lat === currentCity?.lat && c.lon === currentCity.lon);
  const { data } = useCitiesData(currentCityFound);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const actionLinks: IActionLink[] = [
    {
      title: 'Add city',
      action: () => navigate(RouteName.CityInfo),
    },
  ];

  const handleEdit = (city: ICityOption) => {
    navigate(`${RouteName.CityInfo}/${city.id}`);
  };

  const handleDelete = (city: ICityOption) => {
    storageManager.deleteOne(city.id);
    dispatch(setCities(storageManager.getAll() || []));
  };

  const handleChooseOption = (city: ICityOption) => {
    setChoosedCity(city);
  };

  const handleSearchClick = () => {
    if (choosedCity && onSearchClick) {
      onSearchClick && onSearchClick(choosedCity.id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Autocomplete
        data={data}
        actionLinks={actionLinks}
        className={styles.dropdown}
        onEditClick={handleEdit}
        onDeleteClick={handleDelete}
        onChooseOption={handleChooseOption}
      />
      <Search onSearchClick={handleSearchClick} />
    </div>
  );
};;
