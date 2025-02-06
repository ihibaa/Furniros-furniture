"use client";
import React, { useState, useEffect } from "react";
import { MdPerson3 } from "react-icons/md";
import { FaCalendar, FaTag } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import Facilities from "../../components/Facilities";
import Link from "next/link";


const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown">
          
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[320px] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-black text-4xl mb-3 font-bold">Blog</h1>
          <Link href="/" className="opacity-75 font-bold text-sm">
            Home
          </Link>{" "}
          &gt; <span className="font-bold">Blog</span>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap gap-8 mt-10 px-4">
        {/* Left Section (Blog Posts) */}
        <div className="flex flex-col gap-8 w-[700px]">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-start">
                <img
                  src={`/b${index + 1}.jpg`}
                  alt={`Blog post ${index + 1}`}
                  className="w-[550px] h-[380px] rounded-md object-cover mb-4"
                />
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <MdPerson3 className="text-lg" />
                    <h2>Admin</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-lg" />
                    <h2>14 Oct 2022</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag className="text-lg" />
                    <h2>Wood</h2>
                  </div>
                </div>
                <h1 className="font-bold text-2xl mb-2">
                  {index === 0
                    ? "Going all-in with millennial design"
                    : index === 1
                    ? "Exploring new ways of decorating"
                    : "Handmade piece that took time to make"}
                </h1>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  excepturi quas iure, Corrupti ea dignissimos quod adipisci
                  dolorem perferendis ullam iure voluptates dicta? Ducimus,
                  consequatur provident!
                </p>
                <button className="px-4 py-2 font-bold text-brown-600 underline hover:text-brown transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Search, Categories, Recent Posts) */}
        <div className="w-full -mr-[300] relative mt-3 md:w-1/3">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full h-12 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none"
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h2 className="font-bold text-2xl mb-4">Categories</h2>
            <ul className="text-gray-600">
              {["Craft", "Design", "Hand Made", "Interior", "Wood"].map(
                (category, index) => (
                  <li key={index} className="flex justify-between mb-4">
                    <span>{category}</span>
                    <span>{Math.floor(Math.random() * 10)}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="font-bold text-2xl mb-10">Recent Posts</h2>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={`im${index + 1}.png`}
                  alt={`Recent post ${index + 1}`}
                  className="w-20 h-20 rounded-lg"
                />
                <div className="ml-4">
                  <h1 className="font-bold">
                    {index === 0
                      ? "Going all-in with millennial design"
                      : index === 1
                      ? "Exploring new ways of decorating"
                      : index === 2
                      ? "Handmade pieces that took time to make"
                      : index === 3
                      ? "Modern home in Milan"
                      : "Colorful office redesign"}
                  </h1>
                  <p className="text-gray-400">03 Aug 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-10 gap-2 mt-5">
        {["1", "2", "3", "Next"].map((item, index) => (
          <button
            key={index}
            className={`flex items-center justify-center h-8 w-10 ${
              item === "1"
                ? "bg-brown text-white"
                : "bg-pink text-black hover:bg-brown"
            } rounded-lg transition-colors`}
          >
            {item}
          </button>
        ))}
      </div>

      <Facilities />
    </div>
  );
};

export default Blog;