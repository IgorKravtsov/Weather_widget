import React from 'react';
import styles from './card-header.module.scss';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow-left.svg';

import { IconButton } from 'components/IconButton/IconButton';
import { Title } from 'components/Title/Title';

export const CardHeader: React.FC = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);
  return (
    <div className={styles.wrapper}>
      <IconButton icon={<ArrowIcon />} onClick={handleBackClick} className={styles.icon} />
      <Title variant={'h2'} className={styles.title}>
        Weather App
      </Title>
    </div>
  );
};
