import React, { PropsWithChildren } from 'react';
import styles from './text.module.scss';

interface FooterTextProps extends PropsWithChildren {
  className?: string;
}

export const FooterText: React.FC<FooterTextProps> = ({ className, children }) => {
  return <p className={[styles.footertext, className ?? ''].join(' ')}>{children}</p>;
};
