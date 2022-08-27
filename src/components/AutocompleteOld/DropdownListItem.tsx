import React from 'react';
import styles from './autocomplete.module.scss';

interface DropdownListItemProps<T> {
  item: T;
  displayValue: keyof T;
  inneroOnClick?: (value: T) => void;
  userClick?: (key: T) => void;
}

export function DropdownListItem<T>({ item, displayValue, inneroOnClick, userClick }: DropdownListItemProps<T>) {
  const handleClick = () => {
    userClick ? userClick(item) : inneroOnClick && inneroOnClick(item);
  };
  return (
    <li className={styles.item} onClick={handleClick}>
      <>{item[displayValue]}</>
    </li>
  );
}
