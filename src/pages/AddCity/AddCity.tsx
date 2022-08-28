import React, { useCallback } from 'react';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfoForm/CityInfoForm';
import { ICityInfoForm } from 'components/CityInfoForm';

import { generateRandomId } from 'utils';

import { ICity } from 'types';
import { storageManager } from 'packages/storage-manager';

import { setCities } from 'store/slices';
import { useAppDispatch } from 'store/hooks';

const AddCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (data: ICityInfoForm) => {
      const city: ICity = { ...data, id: generateRandomId() };
      try {
        storageManager.create(city);
        dispatch(setCities(storageManager.getAll() || []));
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch]
  );

  return (
    <>
      <Title>Add City</Title>
      <CityInfoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddCity;
