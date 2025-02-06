"use client";
import React, { useState } from "react";

const ImgSlider = () => {
  const images = [
    { src: "./im1.png", title: "Inner Peace", subtitle: "Bed Room" },
    { src: "./im2.png", title: "Cozy Vibes", subtitle: "Living Room" },
    { src: "./im3.png", title: "Bright Space", subtitle: "Dining Room" },
    { src: "./im4.png", title: "Modern Style", subtitle: "Office Room" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container w-full h-[100vh] bg-[#f8f8f8] flex items-center justify-between relative overflow-hidden px-10">
     
      <div className="text-container w-1/3 p-8 flex-shrink-0">
        <h2 className="text-4xl font-bold mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="px-6 py-2 bg-brown text-white rounded-lg shadow-lg hover:bg-yellow-600">
          Explore More
        </button>
      </div>

    
      <div className="image-container w-2/3 relative flex items-center justify-center overflow-hidden">
        <div
          className="image-wrapper flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="single-slide flex-shrink-0 flex items-center justify-center relative w-full"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-[40vw] h-[80vh] object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm text-gray-500 mb-1">{`0${index + 1} — ${image.subtitle}`}</p>
                <h3 className="text-2xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="dots absolute bottom-5 flex justify-center space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-yellow-500"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      <button
        className="prev-button absolute left-5 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        onClick={prevSlide}
      >
        &#x3c;
      </button>
      <button
        className="next-button absolute right-5 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        onClick={nextSlide}
      >
        &#x3e;
      </button>
    </div>
  );
};

export default ImgSlider;
