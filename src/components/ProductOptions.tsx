"use client";

import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

interface ProductOptionsProps {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { addToCart } = useCart();

  const colors = [
    { name: "Brown", colorCode: "bg-brown" },
    { name: "black", colorCode: "bg-black" },
    { name: "yellow", colorCode: "bg-yellow-950" },
    { name: "white", colorCode: "bg-white" },
    { name: "blue", colorCode: "bg-slate-700" },
    { name: "slate", colorCode: "bg-slate-400" },
    { name: "lightgrey", colorCode: "bg-slate-200" },
    { name: "green", colorCode: "bg-teal-950" },
  ];

  const sizes = ["Small", "Medium", "Large"];

  const handleQuantityChange = (type: string) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleColorSelect = (color: string | null) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string | null) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      const newItem = {
        id: Number(productId), // Convert productId to a number
        name: `${productName} - ${selectedColor} - ${selectedSize}`,
        price: productPrice,
        quantity: quantity,
        image: productImage,
      };
      addToCart(newItem);
    } else {
      alert("Please select color and size");
    }
  };

  return (
    <div className="p-4 space-y-4 border rounded-lg shadow-sm">
      {/* Color Options */}
      <div className="flex items-center space-x-2">
        <span className="font-medium">Color:</span>
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-6 h-6 rounded-full border ${color.colorCode} ${
              selectedColor === color.name ? "ring-2 ring-offset-2 ring-brown" : ""
            }`}
            onClick={() => handleColorSelect(color.name)}
          ></button>
        ))}
      </div>

      {/* Size Options */}
      <div className="flex items-center space-x-2">
        <span className="font-medium">Size:</span>
        <select
          value={selectedSize || ""}
          onChange={(e) => handleSizeSelect(e.target.value)}
          className="px-3 py-1 border rounded"
        >
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange("decrease")}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          -
        </button>
        <span className="px-4 font-medium">{quantity}</span>
        <button
          onClick={() => handleQuantityChange("increase")}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Add to Cart and Compare Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 px-4 py-2 text-white bg-brown rounded hover:bg-white hover:text-brown"
        >
          Add To Cart
        </button>
        <button className="flex-1 px-4 py-2 border rounded hover:bg-gray-100">
          + Compare
        </button>
      </div>

      {/* Share Buttons */}
      <div className="flex items-center space-x-4">
        <span className="font-medium">Share:</span>
        <a
          href="https://www.facebook.com/hibaimran903?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brown hover:bg-brown hover:text-white p-2 rounded-full"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://linkedin.com/in/hiba-imran-7182052a2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brown hover:bg-brown hover:text-white p-2 rounded-full"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/_ihibaa._/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brown hover:bg-brown hover:text-white p-2 rounded-full"
        >
          <FiInstagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProductOptions;