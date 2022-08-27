import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfoForm/CityInfoForm';
import { ICityInfoForm } from 'components/CityInfoForm';

import { ICity } from 'types';
import { PageParams } from 'types/page-params';

import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { selectCities, setCities } from 'storage/slices';

import { storageManager } from 'packages/storage-manager';

const UpdateCity: React.FC = () => {
  const { cities } = useAppSelector(selectCities);
  const { cityId } = useParams<PageParams>();

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((data: ICityInfoForm) => {
    const city: ICity = { ...data, id: cityId ?? '' };
    try {
      storageManager.update(city);
      dispatch(setCities(storageManager.getAll() || []));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const initialData = cities.find((c) => c.id === cityId);

  return (
    <>
      <Title>Update city</Title>
      <CityInfoForm handleSubmit={handleSubmit} initialData={initialData} />
    </>
  );
};

export default UpdateCity;
