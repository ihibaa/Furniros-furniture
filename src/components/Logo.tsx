import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
     
      <img src="/ll.png" alt="Logo" className="h-12 w-12" />

     
      <h2
        className={twMerge(
          "text-2xl text-accent hover:text-brown font-bold uppercase hoverEffect relative group overflow-hidden"
        )}
      >
        Furniro
       
        <span className="absolute left-0 bottom-0 w-full h-px bg-brown -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h2>
    </Link>
  );
};

export default Logo;
