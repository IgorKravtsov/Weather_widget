import React from 'react';
import styles from './search.module.scss';

import { Button } from 'components/Button/Button';

import { ReactComponent as SearchIcon } from './assets/Search.svg';

export const Search: React.FC = () => {
  return (
    <Button className={styles.btn}>
      <SearchIcon />
    </Button>
  );
};
