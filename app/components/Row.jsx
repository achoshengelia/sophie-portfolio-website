import React from 'react';

const Row = ({ as, className = '', children }) => {
  const Element = as ? as : 'div';

  return <Element className={`flex items-center ${className}`}>{children}</Element>;
};

export default Row;
