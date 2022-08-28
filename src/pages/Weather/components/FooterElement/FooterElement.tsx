import React, { PropsWithChildren } from 'react';
import styles from './footer-element.module.scss';

interface FooterElementProps extends PropsWithChildren {
  side: 'right' | 'left';
  className?: string;
}

export const FooterElement: React.FC<FooterElementProps> = ({ className, side, children }) => {
  return (
    <div className={[styles.wrapper, side === 'right' ? styles.right : styles.left, className ?? ''].join(' ')}>
      {children}
    </div>
  );
};
