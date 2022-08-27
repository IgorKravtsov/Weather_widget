import React from 'react';

import { Title } from 'components/Title/Title';
import { Dropdown } from './components/Dropdown/Dropdown';

const EnterCity: React.FC = () => {
  return (
    <>
      <Title>Weather App</Title>
      <Dropdown />
    </>
  );
};

export default EnterCity;
