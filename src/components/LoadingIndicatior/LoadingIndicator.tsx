import React from 'react';
import styles from './loading-indicatior.module.scss';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Loading...</h1>
    </div>
  );
};
