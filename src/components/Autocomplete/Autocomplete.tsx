import React, { useCallback, useRef, useState } from 'react';
import styles from './autocomplete.module.scss';

import { useInput } from 'hooks/useInput';

import { Input } from 'components/Input/Input';

import { IActionLink, IAutocompleteOption } from './interfaces';
import DropdownList from './DropdownList';

interface AutocompleteProps {
  data: IAutocompleteOption[];
  actionLinks?: IActionLink[];
  className?: string;
  onEditClick?: (...params: any[]) => void;
  onDeleteClick?: (...params: any[]) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ data, className = '', ...props }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isListFocused, setIsListFocused] = useState(false);

  const onChange = () => !isInputFocused && setIsInputFocused(true);

  const { setDirectly, ...autocompleteState } = useInput('', {
    onChangeSideEffect: onChange,
  });
  const filtered = data.filter(({ label }) => label.toLowerCase().includes(autocompleteState.value.toLowerCase()));

  const handleChooseOption = useCallback((newVal: IAutocompleteOption) => {
    setDirectly(newVal.label);
    ref.current?.focus();
    setIsInputFocused(false);
  }, []);

  const handleInputFocus = useCallback((focusVal: boolean) => {
    setTimeout(() => {
      setIsInputFocused(focusVal);
    }, 90);
  }, []);

  const handleListFocus = useCallback((focusVal: boolean) => {
    setIsListFocused(focusVal);
  }, []);

  return (
    <div className={[styles.wrapper, className ?? ''].join(' ')}>
      <Input
        ref={ref}
        {...autocompleteState}
        className={styles.input}
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
      />
      {(isInputFocused || isListFocused) && (
        <DropdownList {...props} data={filtered} onChooseOption={handleChooseOption} handleFocus={handleListFocus} />
      )}
    </div>
  );
};
