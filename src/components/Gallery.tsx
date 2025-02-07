"use client";

import React from 'react';

const Gallery = () => {
  return (
    <div className="h-auto w-full">
      <p className="mt-10 text-center">Share your setup with</p>
      <h1 className="text-3xl md:text-5xl font-bold text-center">#FurniroFurnitures</h1>

      {/* Parent container for the gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-4">
        {/* Image 1 */}
        <div className="w-[260px]  left-[40] bg-black h-auto">
          <img
            src="g1.jpg"
            alt="img1"
            className="w-[260px] h-auto transition-transform  duration-300 hover:scale-105"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full h-auto">
          <img
            src="g2.jpg"
            alt="img2"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full h-auto">
          <img
            src="g3.jpg"
            alt="img3"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full h-auto">
          <img
            src="g4.jpg"
            alt="img4"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 5 */}
        <div className="w-full h-auto">
          <img
            src="g5.jpg"
            alt="img5"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 6 */}
        <div className="w-full h-auto">
          <img
            src="g6.jpg"
            alt="img6"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 7 */}
        <div className="w-full h-auto">
          <img
            src="g7.jpg"
            alt="img7"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 8 */}
        <div className="w-full h-auto">
          <img
            src="g8.jpg"
            alt="img8"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 9 */}
        <div className="w-full h-auto">
          <img
            src="g9.jpg"
            alt="img9"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;