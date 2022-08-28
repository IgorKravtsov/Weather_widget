import React, { PropsWithChildren } from 'react';
import styles from './text.module.scss';

interface SubTextProps extends PropsWithChildren {
  className?: string;
}

export const SubText: React.FC<SubTextProps> = ({ className, children }) => {
  return <h3 className={[styles.text, styles.subtext, className].join(' ')}>{children}</h3>;
};
