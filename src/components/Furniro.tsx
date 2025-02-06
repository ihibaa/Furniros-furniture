"use client";

import React from "react";

const imageList = [
  "/assets/b1.jpg",
  "/assets/product3.jpg",
  "/assets/product3.jpg",
  "/assets/pg11.png",
  "/assets/b1.jpg",
  "/assets/product3.jpg",
  "/assets/pg11.png",
  "/assets/b1.jpg",
  "/assets/product3.jpg",
  "/assets/pg11.png",
  "/assets/lap.jpg",
];

const Furniro = () => {
  return (
    <div className="grid grid-cols-6 gap-2 max-w-7xl mx-auto mt-10">
      {imageList.map((image, index) => (
        <div
          key={index}
          className={`relative ${
            index === 0
              ? "col-span-3 row-span-2 h-[400px] w-56"
              : index === 1
              ? "col-span-2 row-span-2 h-[400px] w-56"
              : index === 2
              ? "col-span-1 row-span-1 h-[200px] w-56"
              : index === 3
              ? "col-span-2 row-span-1 h-[200px] w-56"
              : index === 4
              ? "col-span-1 row-span-1 h-[200px] w-56"
              : "col-span-2 row-span-1 h-[200px] w-56"
          }`}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-56 h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Furniro;

