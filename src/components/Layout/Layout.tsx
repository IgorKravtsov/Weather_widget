import React, { PropsWithChildren } from 'react';
import styles from './layout.module.scss';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.contentWrapper}>{children}</main>;
};
