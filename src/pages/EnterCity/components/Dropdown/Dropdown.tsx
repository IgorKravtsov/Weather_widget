import React from 'react';
import styles from './dropdown.module.scss';

import { useNavigate } from 'react-router-dom';

import { Search } from '../Search/Search';

import { Autocomplete, IActionLink, IAutocompleteOption } from 'components/Autocomplete';
import { RouteName } from 'routes';
import { ICity } from 'types';

import { storageManager } from 'packages/storage-manager';

import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { selectCities, setCities } from 'storage/slices';

type ICityOption = ICity & IAutocompleteOption;

export const Dropdown: React.FC = () => {
  const { cities } = useAppSelector(selectCities);
  const data = cities.map((c) => ({ ...c, label: c.name }));
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

  return (
    <div className={styles.wrapper}>
      <Autocomplete
        data={data}
        actionLinks={actionLinks}
        className={styles.dropdown}
        onEditClick={handleEdit}
        onDeleteClick={handleDelete}
      />
      <Search />
    </div>
  );
};
