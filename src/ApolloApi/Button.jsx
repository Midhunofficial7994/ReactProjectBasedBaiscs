

import React from 'react';

export const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
    >
      {children}
    </button>
  );
};
