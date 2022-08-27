import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
