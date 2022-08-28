import React, { PropsWithChildren } from 'react';
import styles from './weather-card.module.scss';

export const WeatherCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};
