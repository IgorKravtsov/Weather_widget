import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import styles from './input.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>;
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ className, label, error, wrapperClassName, disabled, ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        {label && <p className={`${styles.label} ${disabled && styles.disabled}`}>{label}</p>}
        <input
          {...props}
          ref={ref}
          className={`${styles.input} ${className} ${error && styles.error_input} ${disabled && styles.disabled}`}
          disabled={disabled}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
