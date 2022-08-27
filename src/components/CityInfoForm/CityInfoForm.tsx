import React, { memo } from 'react';
import styles from './city-info.module.scss';

import { useNavigate } from 'react-router-dom';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

import { RouteName } from 'routes';

import { useInputWithValidation } from 'hooks/useInputWithValidation';
import { ICityInfoForm } from './interfaces';

interface CityInfoProps {
  handleSubmit: (data: ICityInfoForm) => void;
  initialData?: ICityInfoForm;
  onBackClick?: () => void;
}

const latRegex = '^-?([0-8]?[0-9]|90)(\\.[0-9]{1,10})?$';
const lonRegex = '^-?([0-9]{1,2}|1[0-7][0-9]|180)(\\.[0-9]{1,10})?$';

const CityInfoForm: React.FC<CityInfoProps> = ({ handleSubmit, initialData, onBackClick }) => {
  const [name, { isValid: isNameValid }] = useInputWithValidation(initialData?.name || '', {
    validations: { minLength: 1 },
  });
  const [lat, { isValid: isLatValid }] = useInputWithValidation(initialData?.lat.toString() || '', {
    validations: { matches: latRegex },
  });
  const [lon, { isValid: isLonValid }] = useInputWithValidation(initialData?.lon.toString() || '', {
    validations: { matches: lonRegex },
  });
  const isFormValid = isNameValid && isLatValid && isLonValid;
  const navigate = useNavigate();

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFormValid) {
      handleSubmit({ name: name.value, lat: Number(lat.value), lon: Number(lon.value) });
      navigate(RouteName.EnterCity);
    }
  };

  const onBack = (e: React.MouseEvent) => {
    e.preventDefault();
    onBackClick ? onBackClick() : navigate(-1);
  };

  return (
    <form>
      <Input {...name} className={styles.nameinput} label={'City name'} error={!isNameValid ? 'Error' : ''} required />
      <div className={styles.flexwrapper}>
        <Input
          {...lat}
          label={'Latitude'}
          type={'number'}
          wrapperClassName={styles.coordsinput_wrapper}
          className={styles.coordsinput}
          error={!isLatValid ? 'Error' : ''}
          required
        />
        <Input
          {...lon}
          label={'Longtitude'}
          type={'number'}
          wrapperClassName={styles.coordsinput_wrapper}
          className={styles.coordsinput}
          error={!isLonValid ? 'Error' : ''}
          required
        />
      </div>
      <div className={styles.btnwrapper}>
        <Button color={'danger'} className={styles.backbtn} onClick={onBack}>
          Back
        </Button>
        <Button color="secondary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default memo(CityInfoForm);
