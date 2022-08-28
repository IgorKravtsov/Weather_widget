import React from 'react';
import styles from './weather-footer.module.scss';

import { ReactComponent as TermometrIcon } from 'assets/images/termometr.svg';
import { ReactComponent as HumidityIcon } from 'assets/images/humidity.svg';

import { FooterElement } from '../FooterElement/FooterElement';
import { List } from '../List/List';
import { ListItem } from '../ListItem/ListItem';
import { FooterText } from '../Text/FooterText';

interface WeatherFooterProps {
  feelsLike: number;
  humidity: number;
}

export const WeatherFooter: React.FC<WeatherFooterProps> = ({ humidity, feelsLike }) => {
  return (
    <List className={styles.wrapper}>
      <ListItem>
        <FooterElement side={'left'} className={styles.element}>
          <TermometrIcon />
          <FooterText>Feels like {feelsLike.toFixed(0)} &deg;C</FooterText>
        </FooterElement>
      </ListItem>
      <ListItem>
        <FooterElement side={'right'}>
          <HumidityIcon />
          <FooterText>Humidity {humidity}%</FooterText>
        </FooterElement>
      </ListItem>
    </List>
  );
};
