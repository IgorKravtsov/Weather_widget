import React, { useCallback } from 'react';

import { Title } from 'components/Title/Title';
import CityInfoForm from 'components/CityInfo/CityInfo';

import { ICityInfoForm } from 'components/CityInfo';

const CreateCity: React.FC = () => {
  const handleSubmit = useCallback((data: ICityInfoForm) => {
    console.log(data);
  }, []);

  return (
    <>
      <Title>Create City</Title>
      <CityInfoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default CreateCity;
