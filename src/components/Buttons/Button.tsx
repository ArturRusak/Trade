import React from 'react';

import './button.css';

type ButtonProps = {
  onClick: () => void;
  [key: string]: any;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { value, onClick, children, ...rest } = props;
  return (
    <button
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}