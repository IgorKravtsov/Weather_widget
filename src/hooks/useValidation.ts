import { useEffect, useState } from 'react';
import { IValidations } from 'types';

export interface IValidationResult {
  isValid?: boolean;
  minLengthError: boolean;
  maxLengthError: boolean;
  maxError: boolean;
  minError: boolean;
  errorMessage: string;
  matchesError: boolean;
}

export const defaultValidations: IValidations = {
  minLength: 0,
  maxLength: Infinity,
  errorMessage: '',
  max: Infinity,
  min: -Infinity,
  matches: '',
};

export const useValidation = (value: string, comingValidations?: Partial<IValidations>): IValidationResult => {
  const validations = {
    ...defaultValidations,
    ...comingValidations,
  };

  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  const [matchesError, setMatchesError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;

        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;

        case 'min':
          Number(value) < validations[validation] ? setMinError(true) : setMinError(false);
          break;

        case 'max':
          Number(value) > validations[validation] ? setMaxError(true) : setMaxError(false);
          break;

        case 'matches':
          const regExp = new RegExp(validations[validation]);
          setMatchesError(!regExp.test(value));
          break;

        default:
          break;
      }
    }
  }, [value]);

  return {
    maxLengthError,
    minLengthError,
    minError,
    maxError,
    errorMessage: validations.errorMessage,
    matchesError,
  };
};
