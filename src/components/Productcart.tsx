"use client"

import React from 'react';

const Productcart = () => {
  return (
    <div className="mx-auto mt-9">

      <div className="flex flex-wrap gap-6 justify-center px-4">
        
        <div className="flex flex-col items-center">
          <img
            src="/banner1.jpg"
            alt="Modern dining room furniture"
            className="w-80 h-80 object-cover rounded-none"
          />
          <h1 className="text-center mt-3 text-black font-bold">
           dinnig room
          </h1>
        </div>

      
        <div className="flex flex-col items-center">
          <img
            src="/banner2.jpg"
            alt="Stylish living room setup"
            className="w-80 h-80 object-cover rounded-none"
          />
          <h1 className="text-center mt-3 text-black font-bold">
           living room
          </h1>
        </div>

        
        <div className="flex flex-col items-center">
          <img
            src="/banner3.jpg"
            alt="Cozy bedroom arrangement"
            className="w-80 h-80 object-cover rounded-none"
          />
          <h1 className="text-center mt-3 text-black font-bold">
           Bed room
          </h1>
        </div>
      </div>



      
    </div>
  );
};

export default Productcart;




