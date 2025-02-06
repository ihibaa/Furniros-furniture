"use client";

import React from "react";

import { MdShare, MdOutlineCompareArrows } from "react-icons/md";
import { GoHeart } from "react-icons/go";


const products = [
  {
    id: 1,
    name: "Syitherine",
    description: "Stylish cafe chair",
    price: 2500000,
    formattedPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/product1.jpg",
    quantity: 1,
    discount: false,
    discounts: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    formattedPrice: "Rp 2.500.000",
    image: "/product2.jpg",
    quantity: 1,
    discount: false,
    discounts: false,
    isNew: false,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    formattedPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/3.png",
    quantity: 1,
    discount: true,
    discounts: false,
    isNew: false,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    formattedPrice: "Rp 500.000",
    image: "/product4.jpg",
    quantity: 1,
    discount: false,
    discounts: false,
    isNew: true,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    formattedPrice: "Rp 1.500.000",
    image: "/product3.jpg",
    quantity: 1,
    discount: false,
    discounts: false,
    isNew: false,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    formattedPrice: "Rp 150.000",
    image: "/61.png",
    quantity: 1,
    discount: false,
    discounts: false,
    isNew: true,
  },
  {
    id: 7,
    name: "Pinkgy",
    description: "Cute bed set",
    price: 7000000,
    formattedPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/product5.jpg",
    quantity: 1,
    discount: true,
    discounts: false,
    isNew: false,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    formattedPrice: "Rp 500.000",
    image: "/product6.jpg",
    quantity: 1,
    discount: false,
    discounts: false,
    isNew: true,
  },
];

type Product = typeof products[0];

type OurProductProps = {
  addToCart: (product: Product) => void;
};

const OurProduct: React.FC<OurProductProps> = ({ addToCart }) => {
  return (
    <div>
      <div className="mt-10 px-4 sm:px-6 md:px-10">
        <h1 className="font-bold text-center text-3xl md:text-5xl mt-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group flex flex-col items-center bg-grey p-4 rounded-lg shadow-md"
            >
              {product.discount && (
                <span className="absolute top-6 right-6 bg-red text-white text-sm font-bold w-12 h-12 flex justify-center items-center rounded-full">
                  -50%
                </span>
              )}
              {product.discounts && (
                <span className="absolute top-6 right-6 bg-red text-white text-sm font-bold w-12 h-12 flex justify-center items-center rounded-full">
                  -30%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-6 right-6 bg-green text-white text-sm font-bold w-12 h-12 flex justify-center items-center rounded-full">
                  New
                </span>
              )}

              <div className="w-full h-full">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-60 object-cover rounded"
                  loading="lazy"
                />
              </div>
              <h1 className="text-center mt-3 text-black font-bold">
                {product.name}
              </h1>
              <p className="text-center text-gray-600">{product.description}</p>
              <h1 className="text-center text-black font-bold">
                {product.formattedPrice}
              </h1>
              {product.originalPrice && (
                <p className="text-center text-gray-500 line-through">
                  {product.originalPrice}
                </p>
              )}

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                <button
                  className="bg-white text-brown py-2 px-4 rounded font-bold mb-2 w-48 hover:scale-105 transition-transform"
                  onClick={() =>
                    addToCart({
                      ...product,
                      quantity: product.quantity,
                    })
                  }
                  aria-label={`Add ${product.name} to Cart`}
                >
                  Add to Cart
                </button>
                <div className="flex space-x-4 text-white mt-2">
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <MdShare />
                    <span>Share</span>
                  </button>
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <MdOutlineCompareArrows />
                    <span>Compare</span>
                  </button>
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <GoHeart />
                    <span>Like</span>
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
