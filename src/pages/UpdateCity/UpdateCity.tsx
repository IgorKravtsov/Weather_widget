import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfoForm/CityInfoForm';

import { ICityInfoForm } from 'components/CityInfoForm';
import { PageParams } from 'types/page-params';
import { mocked_cities } from '../../MOCK/cities';

const UpdateCity: React.FC = () => {
  const { cityId } = useParams<PageParams>();

  const handleSubmit = useCallback((data: ICityInfoForm) => {
    console.log(data);
  }, []);

  const initialData = mocked_cities.find((c) => c.id === cityId);

  return (
    <>
      <Title>Update city</Title>
      <CityInfoForm handleSubmit={handleSubmit} initialData={initialData} />
    </>
  );
};

export default UpdateCity;
