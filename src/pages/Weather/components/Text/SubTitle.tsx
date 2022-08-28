import React, { PropsWithChildren } from 'react';
import styles from './text.module.scss';

interface SubTitleProps extends PropsWithChildren {
  className?: string;
}

export const SubTitle: React.FC<SubTitleProps> = ({ className, children }) => {
  return <h2 className={[styles.text, styles.subtitle, className].join(' ')}>{children}</h2>;
};
