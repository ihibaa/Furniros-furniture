"use client"

import React from "react";
import Button from "./Button";
import Productcart from "./Productcart";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="p-0 m-0 w-full">
      {/* Banner Section */}
      <div className="relative w-full h-auto bg-white overflow-hidden">
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-12 gap-3 sm:gap-4 md:gap-5 z-10">
          <div className="flex flex-col gap-2 sm:gap-3 bg-yellow-50 text-brown p-4 sm:p-6 md:p-8 rounded-none max-w-md sm:max-w-lg md:max-w-xl">
            <h2 className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
              New Arrivals
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Discover Our
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              New Collection
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum similique dolorum, dolorem magnam dignissimos.
            </p>
            <Button className="w-32 sm:w-36 md:w-48 py-2 sm:py-3 text-xs sm:text-sm md:text-lg mt-3 sm:mt-4 bg-brown text-white hover:bg-yellow-50 hover:text-brown rounded-none">
              <Link href="/shop" className="opacity-75">Buy Now</Link>
            </Button>
          </div>
        </div>

        {/* Banner Image */}
        <img
          src="/home.jpg"
          alt="Sample banner for section"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover"
        />
      </div>

      {/* Product Range Section */}
      <div className="mt-8 sm:mt-10 px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <h1 className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Browse The Range
          </h1>
          <p className="font-medium text-black mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <Productcart />
      </div>
    </div>
  );
};

export default Banner;