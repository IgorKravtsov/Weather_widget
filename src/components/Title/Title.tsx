import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

interface TitleProps extends PropsWithChildren {
  className?: string;
  variant?: 'h1' | 'h2';
}

export const Title: React.FC<TitleProps> = ({ className, variant = 'h1', children }) => {
  return variant === 'h1' ? (
    <h1 className={[styles.title, className].join(' ')}>{children}</h1>
  ) : (
    <h2 className={[styles.title, className].join(' ')}>{children}</h2>
  );
};
