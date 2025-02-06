
"use client"
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-white text-base text-brown hover:bg-brown border border-brown hover:text-white transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-none font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

