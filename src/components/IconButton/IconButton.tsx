import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './icon-button.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ className, icon, ...props }) => {
  return (
    <button {...props} className={[styles.btn, className ?? ''].join(' ')}>
      {icon}
    </button>
  );
};
