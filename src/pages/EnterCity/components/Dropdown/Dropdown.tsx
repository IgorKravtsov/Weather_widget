import React from 'react';
import styles from './dropdown.module.scss';

import { useNavigate } from 'react-router-dom';

import { Search } from '../Search/Search';

import { mocked_cities } from 'MOCK/cities';
import { Autocomplete, IActionLink } from 'components/Autocomplete';
import { RouteName } from 'routes';

export const Dropdown: React.FC = () => {
  const data = mocked_cities.map((c) => ({ ...c, label: c.name }));
  const navigate = useNavigate();
  const actionLinks: IActionLink[] = [
    {
      title: 'Create city',
      action: () => navigate(RouteName.CreateCity),
    },
  ];

  const handleEdit = () => {
    console.log('edit');
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
        onDeletedClick={handleDelete}
      />
      <Search />
    </div>
  );
};
