import React, { PropsWithChildren } from 'react';
import styles from './list-item.module.scss';

interface ListItemProps extends PropsWithChildren {
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ className, children }) => {
  return <li className={[styles.item, className ?? ''].join(' ')}>{children}</li>;
};
