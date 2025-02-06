"use client";

import React from 'react';

const Gallery = () => {
  return (
    <div className="h-auto w-full">
      <p className="mt-10 text-center">Share your setup with</p>
      <h1 className="text-3xl md:text-5xl font-bold text-center">#FurniroFurnitures</h1>

      {/* Parent container for the gallery */}
      <div className="relative  h-[850px] w-full mt-10">
        {/* Image 1 */}
        <div className="absolute -left-[15%] -ml-[200] top-[0]">
          <img
            src="g1.jpg"
            alt="img1"
            className="w-[340px] h-[360px] -ml-[200] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 2 */}
        <div className="absolute left-[11.7%] top-[100px]">
          <img
            src="g2.jpg"
            alt="img2"
            className="w-[330px] h-[260px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="absolute left-[37.4%] top-[160px]">
          <img
            src="g3.jpg"
            alt="img3"
            className="w-[300px] h-[390px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 4 */}
        <div className="absolute left-[60.8%] top-[90px]">
          <img
            src="g4.jpg"
            alt="img4"
            className="w-[250px] h-[350px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 5 */}
        <div className="absolute left-[80.9%] top-[10px]">
          <img
            src="g5.jpg"
            alt="img5"
            className="w-[260px] h-[430px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 6 */}
        <div className="absolute left-[%] top-[380px]">
          <img
            src="g6.jpg"
            alt="img6"
            className="w-[200px] h-[400px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 7 */}
        <div className="absolute left-[16%] top-[380px]">
          <img
            src="g7.jpg"
            alt="img7"
            className="w-[270px] h-[220px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 8 */}
        <div className="absolute left-[60.9%] top-[460px]">
          <img
            src="g8.jpg"
            alt="img8"
            className="w-[170px] h-[230px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 9 */}
        <div className="absolute left-[75%] top-[460px]">
          <img
            src="g9.jpg"
            alt="img9"
            className="w-[260px] h-[180px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;