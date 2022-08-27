import React from 'react';
import styles from './dropdown.module.scss';

import { useNavigate } from 'react-router-dom';

import { Search } from '../Search/Search';

import { mocked_cities } from 'MOCK/cities';
import { Autocomplete, IActionLink, IAutocompleteOption } from 'components/Autocomplete';
import { RouteName } from 'routes';
import { ICity } from 'types';

type ICityOption = ICity & IAutocompleteOption;

export const Dropdown: React.FC = () => {
  const data = mocked_cities.map((c) => ({ ...c, label: c.name }));
  const navigate = useNavigate();
  const actionLinks: IActionLink[] = [
    {
      title: 'Create city',
      action: () => navigate(RouteName.CityInfo),
    },
  ];

  const handleEdit = (city: ICityOption) => {
    navigate(`${RouteName.CityInfo}/${city.id}`);
  };

  const handleDelete = () => {
    console.log('delete');
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
