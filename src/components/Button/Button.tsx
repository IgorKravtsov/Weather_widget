import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
};
