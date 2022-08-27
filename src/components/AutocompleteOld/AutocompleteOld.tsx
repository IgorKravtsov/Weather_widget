import React, { memo, useCallback, useState } from 'react';
import styles from './autocomplete.module.scss';

import { Input } from '../Input/Input';

import DropdownList from './DropdownList';
import { useInput } from '../../hooks/useInput';
import { IActionLink } from '../Autocomplete';

export interface IAutocompleteOption {
  label: string;
}

interface AutocompleteProps<T> {
  data: T[];
  displayValue: keyof T;
  actionLinks?: IActionLink[];
}

function AutocompleteOld<T>({ data, ...props }: AutocompleteProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const { setDirectly, value, ...state } = useInput('');

  // const filtered = useMemo(
  //   () =>
  //     data.filter((item) => {
  //       const value = item[props.displayValue];
  //       if (typeof value === 'string') {
  //         return value.includes(value);
  //       }
  //       return true;
  //     }),
  //   [value]
  // );

  const handleFocus = (focusVal: boolean) => {
    setIsFocused(focusVal);
  };

  const handleChooseOption = useCallback((option: T) => {
    setDirectly(String(option[props.displayValue]));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Input
        {...state}
        value={value}
        className={styles.input}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
      />
      {isFocused && value && (
        /*// @ts-ignore */
        <DropdownList {...props} data={data} onChooseOption={handleChooseOption} />
      )}
    </div>
  );
}

export default memo(AutocompleteOld);
