import React from 'react';
import clsx from 'clsx';

const Row = ({ as, className = '', children }) => {
  const Element = as ? as : 'div';

  return <Element className={clsx(`flex items-center ${className}`)}>{children}</Element>;
};

export default Row;
