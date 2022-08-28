import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from 'components/Title/Title';
import { Dropdown } from './components/Dropdown/Dropdown';

import { RouteName } from 'routes';

const EnterCity: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchClick = useCallback(
    (cityId: string) => {
      navigate(`${RouteName.Weather}/${cityId}`);
    },
    [navigate]
  );

  return (
    <>
      <Title>Weather App</Title>
      <Dropdown onSearchClick={handleSearchClick} />
    </>
  );
};

export default EnterCity;
