import React from 'react';
import styles from './autocomplete.module.scss';

import { IActionLink } from './interfaces';

interface DropdownLinkItemProps {
  actionLink: IActionLink;
}

export const DropdownLinkItem: React.FC<DropdownLinkItemProps> = ({ actionLink }) => {
  const { action, title } = actionLink;
  return (
    <li onClick={action} className={[styles.item, styles.link].join(' ')}>
      <>{title}</>
    </li>
  );
};
