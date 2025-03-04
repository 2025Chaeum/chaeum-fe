'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

function Button({ children, color = 'bg-black', onClick }: ButtonProps) {
  return (
    <button
      className={`w-[200px] py-3 text-white ${color} transition duration-200 hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
