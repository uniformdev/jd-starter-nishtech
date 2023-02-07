import React, { FC } from 'react';

const IconDropdown: FC<Type.IconProps> = ({ width = 18, height = 11, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9676 1.87795L16.0896 0L8.9838 7.10713L1.87795 0L0 1.87795L8.98383 10.8605L17.9676 1.87795Z"
      fill="black"
    />
  </svg>
);

export default IconDropdown;
