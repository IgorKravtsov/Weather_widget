import { useMemo } from 'react';
import { IValidations } from 'types';
import { IInputAdditional, IInputInteraction, IUseInputConfig, useInput } from './useInput';
import { IValidationResult, useValidation } from './useValidation';

interface IUseInputWithValidation extends IUseInputConfig {
  validations?: Partial<IValidations>;
}

export const useInputWithValidation = (
  initialValue: string,
  config?: IUseInputWithValidation
): [IInputInteraction, Required<IValidationResult>, IInputAdditional] => {
  const [inputState, inputAdditionalState] = useInput(initialValue, config);
  const { errorMessage, ...validationErrors } = useValidation(inputState.value, config?.validations);
  const isValid = useMemo(() => {
    if (!inputAdditionalState.isDirty) return true;
    return Object.values(validationErrors).every((err) => !err);
  }, [validationErrors]);

  return [{ ...inputState }, { isValid, ...validationErrors, errorMessage }, { ...inputAdditionalState }];
};
