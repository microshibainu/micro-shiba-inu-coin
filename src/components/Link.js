import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-8`,
  xl: `py-5 px-16 text-lg`
};

const Link = ({ children, className = '', size, url }) => {
  return (
    <a
      href={url}
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        hover:text-white
        rounded
        text-white
        inline-flex
    `}
    >
      {children}
    </a>
  );
};

export default Link;
