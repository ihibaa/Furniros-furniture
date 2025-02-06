"use client"

import React from "react";
import Button from "./Button";
import Productcart from "./Productcart";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="p-0 m-0 w-full">
     
      <div className="relative w-full h-auto bg-white overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-10 md:items-end md:px-12 gap-5 z-10">
          <div className="flex flex-col gap-3 bg-yellow-50 text-brown p-4 sm:p-6 md:p-8 rounded-none">
            <h2 className="text-black font-bold text-lg sm:text-xl md:text-2xl text-center md:text-left">
              New Arrivals
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left">
              Discover Our
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left">
              New Collection
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit</p> 
              <p className="text-sm sm:text-base md:text-lg text-black text-center md:text-left"> Nostrum similique dolorum, dolorem magnam dignissimos.</p>
            
            <Button className="w-36 sm:w-48 py-2 sm:py-3 text-sm sm:text-lg mt-4 bg-brown text-white hover:bg-yellow-50 hover:text-brown rounded-none">
              
              <Link href="/shop" className="opacity-75"> Buy Now</Link> 
        
            </Button>
          </div>
        </div>

       
        <img
          src="/home.jpg"
          alt="Sample banner for section"
          className="w-full h-80 sm:h-96 md:h-auto object-cover"
        />
      </div>

     
      <div className="mt-10 px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <h1 className="font-bold text-black text-xl sm:text-2xl md:text-4xl">
            Browse The Range
          </h1>
          <p className="font-medium text-black mt-2 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <Productcart />
      </div>
    </div>
  );
};

export default Banner;
