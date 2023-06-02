import React from 'react';

const Column = ({ as, className = '', children }) => {
  const Element = as ? as : 'div';

  return <Element className={`flex flex-col justify-center ${className}`}>{children}</Element>;
};

export default Column;
