import React, { PropsWithChildren } from 'react';
import styles from './list.module.scss';

interface ListProps extends PropsWithChildren {
  className?: string;
}

export const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul className={[styles.wrapper, className ?? ''].join(' ')}>{children}</ul>;
};
