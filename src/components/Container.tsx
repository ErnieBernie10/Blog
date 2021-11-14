import React from 'react';

import { DivProps } from '../interface/htmlProps';

export const Container: React.FC<DivProps> = ({ className, children }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};
