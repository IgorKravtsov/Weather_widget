import React, { useCallback } from 'react';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfoForm/CityInfoForm';
import { ICityInfoForm } from 'components/CityInfoForm';

import { generateRandomId } from 'utils';

import { ICity } from 'types';
import { storageManager } from 'packages/storage-manager';

import { setCities } from 'storage/slices';
import { useAppDispatch } from 'storage/hooks';

const AddCity: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((data: ICityInfoForm) => {
    const city: ICity = { ...data, id: generateRandomId() };
    try {
      storageManager.create(city);
      dispatch(setCities(storageManager.getAll() || []));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <Title>Add City</Title>
      <CityInfoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddCity;
