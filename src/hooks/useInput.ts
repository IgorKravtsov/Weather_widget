import { ChangeEvent, useCallback, useState } from 'react';

export interface IUseInputConfig {
  onChangeSideEffect?: (...params: any) => void;
  paramsChangeSideEffect?: any;
}

export const useInput = (initialValue: string, config?: IUseInputConfig) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    config?.onChangeSideEffect && config.onChangeSideEffect(config.paramsChangeSideEffect);
  }, []);

  const setDirectly = useCallback((val: string) => {
    setValue(val);
  }, []);

  return { value, onChange, setDirectly };
};
