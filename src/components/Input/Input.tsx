import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import styles from './input.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>;
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ className, label, error, wrapperClassName, ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        {label && <p className={styles.label}>{label}</p>}
        <input {...props} ref={ref} className={`${styles.input} ${className} ${error && styles.error_input}`} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
