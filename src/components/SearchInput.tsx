"use client";
import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    let timer: NodeJS.Timeout; 

    if (isVisible && !search) {
      timer = setTimeout(() => {
        setIsVisible(false); 
      }, 3000);
    }

    return () => clearTimeout(timer); 
  }, [isVisible, search]);

  const toggleSearchInput = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full inline-flex flex-1 h-12 relative">
      
      {!isVisible && (
        <IoSearchSharp 
          className="text-3xl -ml-[18] gap-10  absolute mt-2 hover:text-brown text-black cursor-pointer" 
          onClick={toggleSearchInput} 
        />
      )}

     
      {isVisible && (
        <>
          <input
            type="text"
            placeholder="Search products...."
            className="flex-1 h-full outline-none bg-transparent text-black placeholder-text-lightText border-[1px] rounded-sm pl-8 pr-28"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          
          {search && (
            <IoMdClose 
              onClick={() => setSearch("")}
              className="hover:text-brown hoverEffect text-black cursor-pointer absolute right-20 top-4"
            />
          )}

          <button 
            className="bg-brown text-accentWhite absolute right-0 px-3.5 py-1.5 mr-1.5 text-sm hover:bg-white hover:text-brown hoverEffect font-medium top-2"
            onClick={() => {
              setIsVisible(false); 
            }}
          >
            Search
          </button>
        </>
      )}
    </div>
  );

};

{/*final*/}

export default SearchInput;
