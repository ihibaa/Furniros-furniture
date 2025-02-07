import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
      {/* Logo Image */}
      <img
        src="/ll.png"
        alt="Logo"
        className="h-8 w-8 sm:h-12 sm:w-12" // Smaller size on mobile, larger on desktop
      />

      {/* Logo Text */}
      <h2
        className={twMerge(
          "text-xl sm:text-2xl text-accent hover:text-brown font-bold uppercase hoverEffect relative group overflow-hidden"
        )}
      >
        Furniro
        {/* Hover Effect */}
        <span className="absolute left-0 bottom-0 w-full h-px bg-brown -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h2>
    </Link>
  );
};

export default Logo;