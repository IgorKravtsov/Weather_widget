import React from 'react';
import { useParams } from 'react-router-dom';

import { Title } from 'components/Title/Title';

import { PageParams } from 'types';

const Weather: React.FC = () => {
  const { cityId } = useParams<PageParams>();
  return (
    <>
      <Title>Weather {cityId}</Title>
    </>
  );
};

export default Weather;
