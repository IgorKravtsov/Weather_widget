import React, { useEffect } from 'react';
import styles from './snackbar.module.scss';

import { SnackbarType } from 'enums';
import { Portal } from 'components/Portal/Portal';

interface SnackbarProps {
  wrapperId: string;
  snackbarType?: SnackbarType;
  isOpened?: boolean;
  message?: string;
  onCloseClick?: () => void;
  additionalBtnLabel?: string;
  handleAdditionalClick?: () => void;
  ms?: number;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  snackbarType = SnackbarType.NotSet,
  message,
  isOpened,
  wrapperId,
  onCloseClick,
  additionalBtnLabel,
  handleAdditionalClick,
  ms = 3000,
}) => {
  useEffect(() => {
    const timerId = setTimeout(() => onCloseClick && onCloseClick(), ms);
    return () => clearTimeout(timerId);
  }, [onCloseClick, ms]);

  const additionalOnClick = () => {
    handleAdditionalClick && handleAdditionalClick();
    onCloseClick && onCloseClick();
  };

  const getAdditionalClass = (snackbarType: SnackbarType) => {
    switch (snackbarType) {
      case SnackbarType.Success:
        return styles.success;

      case SnackbarType.Warning:
        return styles.warning;

      case SnackbarType.Error:
        return styles.error;

      case SnackbarType.Info:
        return styles.info;

      default:
        return '';
    }
  };

  return isOpened ? (
    <Portal wrapperId={wrapperId}>
      <div className={[styles.snackbar__container, getAdditionalClass(snackbarType)].join(' ')}>
        <p className={styles.snackbar__label}>{message}</p>
        <div className={styles.snackbar__btnwrapper}>
          {additionalBtnLabel && (
            <button
              onClick={additionalOnClick}
              className={[styles.snackbar__additional, getAdditionalClass(snackbarType)].join(' ')}
            >
              {additionalBtnLabel}
            </button>
          )}
          <button
            className={[styles.snackbar__dismiss, getAdditionalClass(snackbarType)].join(' ')}
            onClick={onCloseClick}
          >
            &times;
          </button>
        </div>
      </div>
    </Portal>
  ) : null;
};
