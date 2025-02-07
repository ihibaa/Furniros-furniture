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
    <div className="slider-container mt-10 w-full h-[100vh] bg-[#f8f8f8] flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-10">
      {/* Text Container */}
      <div className="text-container w-full md:w-1/3 p-4 md:p-8 flex-shrink-0 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-base md:text-lg mb-6 text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="px-6 py-2 bg-brown text-white rounded-lg shadow-lg hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      {/* Image Container */}
      <div className="image-container w-full md:w-2/3 relative flex items-center justify-center overflow-hidden">
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
                className="w-[80vw] md:w-[40vw] h-[50vh] md:h-[80vh] object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
              <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 bg-white p-2 md:p-4 rounded-lg shadow-lg">
                <p className="text-xs md:text-sm text-gray-500 mb-1">{`0${index + 1} — ${image.subtitle}`}</p>
                <h3 className="text-lg md:text-2xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="dots absolute bottom-2 md:bottom-5 flex justify-center space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot w-2 h-2 md:w-3 md:h-3 rounded-full ${
                index === currentIndex
                  ? "bg-yellow-500"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="prev-button absolute left-2 md:left-5 bg-black/30 text-white p-2 md:p-3 rounded-full hover:bg-black/50"
        onClick={prevSlide}
      >
        &#x3c;
      </button>
      <button
        className="next-button absolute right-2 md:right-5 bg-black/30 text-white p-2 md:p-3 rounded-full hover:bg-black/50"
        onClick={nextSlide}
      >
        &#x3e;
      </button>
    </div>
  );
};

export default ImgSlider;