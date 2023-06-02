import React from 'react';
import clsx from 'clsx';

const Column = ({ as, className = '', children }) => {
  const Element = as ? as : 'div';

  return (
    <Element className={clsx(`flex flex-col justify-center ${className}`)}>{children}</Element>
  );
};

export default Column;
