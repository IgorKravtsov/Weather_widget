import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  wrapperId: string;
}

export const Portal: React.FC<PortalProps> = ({ wrapperId, children }) => {
  return createPortal(children, document.getElementById(wrapperId) as HTMLElement);
};
