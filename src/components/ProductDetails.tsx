"use client";

import React from "react";

type ProductDetailProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    formattedPrice: string;
    originalPrice?: string;
    image: string;
  };
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          Product not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded-lg mb-6"
      />
      <div className="text-gray-600 text-lg mb-4">
        <p>{product.description}</p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Price: {product.formattedPrice}</h2>
      {product.originalPrice && (
        <p className="text-gray-500 line-through mb-2">
          Original Price: {product.originalPrice}
        </p>
      )}
      <button
        className="bg-brown text-white py-2 px-4 rounded font-semibold mt-4 hover:scale-105 transition-transform"
        onClick={() => alert(`Added ${product.name} to cart`)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
