import React, { memo } from 'react';
import styles from './city-info.module.scss';

import { useNavigate } from 'react-router-dom';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { ICityInfoForm } from './interfaces';
import { useInputWithValidation } from '../../hooks/useInputWithValidation';

interface CityInfoProps {
  handleSubmit: (data: ICityInfoForm) => void;
  initialData?: ICityInfoForm;
  onBackClick?: () => void;
}

const CityInfoForm: React.FC<CityInfoProps> = ({ handleSubmit, initialData, onBackClick }) => {
  const [name, { isValid: isNameValid }] = useInputWithValidation(initialData?.name || '', {
    validations: { minLength: 1 },
  });
  const [lat, { isValid: isLatValid }] = useInputWithValidation(initialData?.lat.toString() || '', {
    validations: { min: 1 },
  });
  const [lon, { isValid: isLonValid }] = useInputWithValidation(initialData?.lon.toString() || '', {
    validations: { min: 1 },
  });

  const navigate = useNavigate();

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isNameValid && isLatValid && isLonValid) {
      handleSubmit({ name: name.value, lat: Number(lat.value), lon: Number(lon.value) });
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
          min={1}
          wrapperClassName={styles.coordsinput_wrapper}
          className={styles.coordsinput}
          error={!isLatValid ? 'Error' : ''}
          required
        />
        <Input
          {...lon}
          label={'Longtitude'}
          type={'number'}
          min={1}
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
