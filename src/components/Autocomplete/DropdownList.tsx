import React, { memo } from 'react';
import styles from './autocomplete.module.scss';

import { DropdownListItem } from './DropdownListItem';
import { IActionLink, IAutocompleteOption } from './interfaces';
import { DropdownLinkItem } from './DropdownLinkItem';

interface DropdownListProps {
  data: IAutocompleteOption[];
  handleFocus: (focused: boolean) => void;
  onChooseOption?: (value: IAutocompleteOption) => void;
  actionLinks?: IActionLink[];
}

const DropdownList: React.FC<DropdownListProps> = ({ data, onChooseOption, handleFocus, actionLinks, ...props }) => {
  return (
    <ul className={styles.list} onFocus={() => handleFocus(true)} onBlur={() => handleFocus(false)}>
      {data.map((item) => (
        <DropdownListItem
          key={item.label}
          {...props}
          item={item}
          inneroOnClick={onChooseOption}
          handleFocus={handleFocus}
        />
      ))}
      {actionLinks?.map((link) => (
        <DropdownLinkItem key={link.title} actionLink={link} />
      ))}
    </ul>
  );
};

export default memo(DropdownList);
