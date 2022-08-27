import React from 'react';
import styles from './autocomplete.module.scss';
import { IAutocompleteOption } from './interfaces';
import { IconButton } from '../IconButton/IconButton';

import { ReactComponent as DeleteIcon } from 'assets/images/delete-icon.svg';
import { ReactComponent as EditIcon } from 'assets/images/edit-icon.svg';

interface DropdownListItemProps {
  item: IAutocompleteOption;
  inneroOnClick?: (value: IAutocompleteOption) => void;
  userClick?: (key: IAutocompleteOption) => void;
  onEditClick?: (item: IAutocompleteOption) => void;
  onDeleteClick?: (item: IAutocompleteOption) => void;
  handleFocus: (focused: boolean) => void;
}

export const DropdownListItem: React.FC<DropdownListItemProps> = ({
  item,
  inneroOnClick,
  userClick,
  onEditClick,
  onDeleteClick,
  handleFocus,
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

  const onClick = (e: React.MouseEvent, fn: typeof onEditClick) => {
    e.preventDefault();
    fn && fn(item);
    handleFocus(false);
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
        <li className={styles.iconbtn}>
          <IconButton icon={<EditIcon width={'100%'} height={'100%'} />} onClick={(e) => onClick(e, onEditClick)} />
        </li>
        <li className={styles.iconbtn}>
          <IconButton icon={<DeleteIcon width={'100%'} height={'100%'} />} onClick={(e) => onClick(e, onDeleteClick)} />
        </li>
      </ul>
    </li>
  );
};
