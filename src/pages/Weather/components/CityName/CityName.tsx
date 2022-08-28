import React from 'react';
import styles from './city-name.module.scss';

import { ReactComponent as MapMarkIcon } from 'assets/images/map-mark.svg';
import { List } from '../List/List';
import { ListItem } from '../ListItem/ListItem';

interface CityNameProps {
  cityName: string;
}

export const CityName: React.FC<CityNameProps> = ({ cityName }) => {
  return (
    <List className={styles.wrapper}>
      <ListItem>
        <MapMarkIcon />
      </ListItem>
      <ListItem>
        <h4 className={styles.city}>{cityName}</h4>
      </ListItem>
    </List>
  );
};
