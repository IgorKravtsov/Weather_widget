import React, { PropsWithChildren } from 'react';
import styles from './layout.module.scss';

import { HtmlID } from 'enums';

import { storageManager } from 'packages/storage-manager';

import { useAppDispatch, useAppSelector } from 'storage/hooks';
import { clear, selectSnackbar } from 'storage/slices';

import { Snackbar } from 'components/Snackbar/Snackbar';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpenedSnack, ...snackbarState } = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clear({ message: '' }));
  };

  const additionalClick = () => {
    storageManager.setShowFlag(false);
  };

  return (
    <>
      <main className={styles.contentWrapper}>{children}</main>
      <Snackbar
        {...snackbarState}
        isOpened={isOpenedSnack}
        wrapperId={HtmlID.Snackbar}
        onCloseClick={handleClose}
        handleAdditionalClick={additionalClick}
      />
    </>
  );
};
