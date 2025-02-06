
"use client"
import React from "react";
import Link from "next/link"; 

const Baanner: React.FC = () => {
  return (
    <div
      className="relative w-full h-[320px] bg-cover blur-4 bg-center flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url('/bg.png')`, 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-black text-4xl mb-7 font-semibold">Shop</h1>
        <button className="text-black text-sm mt-2">
          <Link href="/home" className="opacity-75">Home</Link> &gt;{" "}
          <span>Shop</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-[#f7f3ed] px-6 py-3 border-t">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-700">
            <span className="text-lg">&#x1F50D;</span> 
            <span className="font-medium">Filter</span>
          </button>
          <div className="flex space-x-2">
            <button className="w-6 h-6 bg-gray-300 rounded flex justify-center items-center">
              &#x25A1; 
            </button>
            <button className="w-6 h-6 bg-gray-300 rounded flex justify-center items-center">
              &#x25AF; 
            </button>
          </div>
          <p className="text-gray-500 text-sm">Showing 1–16 of 32 results</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">Show</span>
            <input
              type="text"
              className="w-12 border border-gray-300 rounded text-center text-sm"
              defaultValue="16"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">Sort by</span>
            <select
              className="border border-gray-300 rounded text-sm px-2 py-1"
              defaultValue="Default"
            >
              <option value="Default">Default</option>
              <option value="Popularity">Popularity</option>
              <option value="Rating">Rating</option>
              <option value="Newest">Newest</option>
              <option value="Price">Price</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baanner;
