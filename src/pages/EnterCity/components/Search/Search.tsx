import React, { memo } from 'react';
import styles from './search.module.scss';

import { ReactComponent as SearchIcon } from 'assets/images/Search.svg';
import { Button } from 'components/Button/Button';

interface SearchProps {
  onSearchClick?: () => void;
}

const Search: React.FC<SearchProps> = ({ onSearchClick }) => {
  return (
    <Button className={styles.btn} onClick={onSearchClick}>
      <SearchIcon />
    </Button>
  );
};

export default memo(Search);
