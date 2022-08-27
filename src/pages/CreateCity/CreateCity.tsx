import React, { useCallback } from 'react';

import { generateRandomId } from 'utils';
import { storageManager } from 'packages/storage-manager';

import { ICity } from 'types';
import { ICityInfoForm } from 'components/CityInfoForm';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfoForm/CityInfoForm';

const CreateCity: React.FC = () => {
  const handleSubmit = useCallback((data: ICityInfoForm) => {
    const city: ICity = { ...data, id: generateRandomId() };
    try {
      storageManager.save(city);
    } catch (e) {
      console.error('ERROR');
    }
  }, []);

  return (
    <>
      <Title>Create City</Title>
      <CityInfoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default CreateCity;
