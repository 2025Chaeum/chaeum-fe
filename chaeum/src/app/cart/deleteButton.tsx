'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  onClick?: () => void;
}

function DeleteButton({ children, color, onClick }: ButtonProps) {
  return (
    <button
      className={`w-[120px] py-2 px-4 mr-2 border bg-white transition duration-200 hover:opacity-80 
                  ${color === 'black' ? 'text-black border-black' : ''}
                  ${color === 'deepGray' ? 'text-deepGray border-deepGray' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DeleteButton;
