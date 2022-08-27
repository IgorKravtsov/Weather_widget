import { ChangeEvent, useState } from 'react';

export interface IUseInputConfig {
  onChangeSideEffect?: (...params: any) => void;
  paramsChangeSideEffect?: any;
}

export type IInputInteraction = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

export type IInputAdditional = {
  setDirectly: (val: string) => void;
  isDirty: boolean;
};

export type IUseInputResult = IInputInteraction & IInputAdditional;

export const useInput = (initialValue: string, config?: IUseInputConfig): [IInputInteraction, IInputAdditional] => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    config?.onChangeSideEffect && config.onChangeSideEffect(config.paramsChangeSideEffect);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  const setDirectly = (val: string) => {
    setValue(val);
  };

  return [
    { value, onChange, onBlur },
    { setDirectly, isDirty },
  ];
};
