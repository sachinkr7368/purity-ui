import React from 'react';

const FacebookIcon = ({
  size = 24,
  color = 'currentColor',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <g clipPath="url(#clip0_92_243)">
        <path
          d="M28.4163 15.5C28.4163 8.36998 22.6297 2.58331 15.4997 2.58331C8.36967 2.58331 2.58301 8.36998 2.58301 15.5C2.58301 21.7516 7.02634 26.9571 12.9163 28.1583V19.375H10.333V15.5H12.9163V12.2708C12.9163 9.7779 14.9443 7.74998 17.4372 7.74998H20.6663V11.625H18.083C17.3726 11.625 16.7913 12.2062 16.7913 12.9166V15.5H20.6663V19.375H16.7913V28.3521C23.3143 27.7062 28.4163 22.2037 28.4163 15.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_92_243">
          <rect width="31" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;