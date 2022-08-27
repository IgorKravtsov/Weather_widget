import React, { memo } from 'react';
import styles from './autocomplete.module.scss';

import { generateRandomId } from 'utils';

import { DropdownListItem } from './DropdownListItem';
import { DropdownLinkItem } from './DropdownLinkItem';
import { IActionLink } from '../Autocomplete';

interface DropdownListProps<T> {
  data: T[];
  displayValue: keyof T;
  onChooseOption?: (value: T) => void;
  actionLinks?: IActionLink[];
}

function DropdownList<T>({ data, onChooseOption, actionLinks, ...props }: DropdownListProps<T>) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <DropdownListItem key={generateRandomId()} {...props} item={item} inneroOnClick={onChooseOption} />
      ))}
      {actionLinks?.map((link) => (
        <DropdownLinkItem actionLink={link} />
      ))}
    </ul>
  );
}

export default memo(DropdownList);
