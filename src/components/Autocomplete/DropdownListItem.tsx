import React from 'react';
import styles from './autocomplete.module.scss';
import { IAutocompleteOption } from './interfaces';
import { IconButton } from '../IconButton/IconButton';

import { ReactComponent as DeleteIcon } from 'assets/images/delete-icon.svg';
import { ReactComponent as EditIcon } from 'assets/images/edit-icon.svg';

interface DropdownListItemProps {
  item: IAutocompleteOption;
  // handleFocus: (focused: boolean) => void;
  inneroOnClick?: (value: IAutocompleteOption) => void;
  userClick?: (key: IAutocompleteOption) => void;
  onEditClick?: (...params: any[]) => void;
  onDeletedClick?: (...params: any[]) => void;
}

export const DropdownListItem: React.FC<DropdownListItemProps> = ({
  item,
  inneroOnClick,
  userClick,
  onEditClick,
  onDeletedClick,
}) => {
  const onListClick = userClick ?? inneroOnClick;
  const handleClick = () => {
    onListClick && onListClick(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      onListClick && onListClick(item);
    }
  };

  return (
    <li
      className={styles.item}
      tabIndex={0}
      // onBlur={() => handleFocus(false)}
    >
      <p onKeyDown={handleKeyDown} onClick={handleClick} className={styles.item_text}>
        {item.label}
      </p>
      <ul className={styles.btnwrapper}>
        <li style={{ width: '20px', height: '20px', marginRight: '10px' }}>
          <IconButton icon={<EditIcon width={'100%'} height={'100%'} />} onClick={onEditClick} />
        </li>
        <li style={{ width: '20px', height: '20px' }}>
          <IconButton icon={<DeleteIcon width={'100%'} height={'100%'} />} onClick={onDeletedClick} />
        </li>
      </ul>
    </li>
  );
};
