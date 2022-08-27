import React from 'react';
import { IActionLink } from '../Autocomplete';

interface DropdownLinkItemProps {
  actionLink: IActionLink;
}

export const DropdownLinkItem: React.FC<DropdownLinkItemProps> = ({ actionLink }) => {
  const { action, title } = actionLink;
  return (
    <li onClick={action}>
      <>{title}</>
    </li>
  );
};
