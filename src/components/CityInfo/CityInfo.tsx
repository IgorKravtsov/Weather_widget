import React, { memo } from 'react';
import styles from './city-info.module.scss';

import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/useInput';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { ICityInfoForm } from './interfaces';

interface CityInfoProps {
  handleSubmit: (data: ICityInfoForm) => void;
  initialData?: ICityInfoForm;
  onBackClick?: () => void;
}

const CityInfoForm: React.FC<CityInfoProps> = ({ handleSubmit, initialData, onBackClick }) => {
  const name = useInput(initialData?.name || '');
  const lat = useInput(initialData?.lat.toString() || '');
  const lon = useInput(initialData?.lon.toString() || '');

  const navigate = useNavigate();

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSubmit({ name: name.value, lat: Number(lat.value), lon: Number(lon.value) });
  };

  const onBack = (e: React.MouseEvent) => {
    e.preventDefault();
    onBackClick ? onBackClick() : navigate(-1);
  };

  return (
    <form>
      <Input {...name} className={styles.nameinput} label={'City name'} />
      <div className={styles.flexwrapper}>
        <Input {...lat} label={'Latitute'} type={'number'} className={styles.coordsinput} />
        <Input {...lon} label={'Longtitute'} type={'number'} className={styles.coordsinput} />
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
