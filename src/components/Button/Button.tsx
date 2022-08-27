import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ children, className, color, ...props }) => {
  const colorClass = color === undefined ? '' : color === 'danger' ? styles.danger : styles.secondary;
  return (
    <button {...props} className={`${styles.btn} ${colorClass} ${className}`}>
      {children}
    </button>
  );
};
