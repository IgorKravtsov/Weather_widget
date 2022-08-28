import React from 'react';
import styles from './weather-type.module.scss';

import { ListItem } from '../ListItem/ListItem';
import { useIcon } from './useIcon';
import { List } from '../List/List';
import { SubText } from '../Text/SubText';
import { SubTitle } from '../Text/SubTitle';

interface WeatherTypeProps {
  weatherType: 'Rain' | 'Clouds' | 'Clear';
  temp: number;
}

export const WeatherType: React.FC<WeatherTypeProps> = ({ weatherType, temp }) => {
  const { icon } = useIcon(weatherType);
  return (
    <List className={styles.wrapper}>
      <ListItem>{icon}</ListItem>
      <ListItem>
        <SubText>{weatherType}</SubText>
      </ListItem>
      <ListItem>
        <SubTitle>{temp.toFixed(0)} &deg;C</SubTitle>
      </ListItem>
    </List>
  );
};
