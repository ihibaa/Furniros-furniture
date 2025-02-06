"use client";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import Facilities from "../../components/Facilities";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";



const Contact = () => {
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
        <div className="relative mt-[90] z-10">
          <h1 className="text-black text-4xl mb-3 font-bold">Contact</h1>
          <Link href="/" className="opacity-75 font-bold text-sm mt-2">
            Home
          </Link>{" "}
          &gt; <span className="font-bold">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full h-full mt-10">
        <div>
          <h1 className="font-bold text-center text-2xl md:text-4xl mt-[70px]">
            Get in Touch With Us
          </h1>
          <p className="text-center text-gray-600 mt-7 text-sm">
            For more information about our products and services, please feel
            free to drop us
          </p>
          <p className="text-center text-gray-600 text-sm">
            an email. Our staff will always be there to help you out. Do not
            hesitate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {/* Contact Details */}
          <div className="text-black p-10 w-full max-w-[400px]">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaLocationDot
                  className="text-2xl text-black"
                  aria-label="Location icon"
                />
                <div>
                  <h1 className="font-bold text-2xl">Address</h1>
                  <p>236 5th SE Avenue, New</p>
                  <p>York, NY 10000, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone
                  className="text-2xl text-black"
                  aria-label="Phone icon"
                />
                <div>
                  <h1 className="font-bold text-2xl">Phone</h1>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 546-6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IoTime
                  className="text-2xl text-black"
                  aria-label="Clock icon"
                />
                <div>
                  <h1 className="font-bold text-2xl">Working Time</h1>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-4 mt-6">
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

          {/* Contact Form */}
          <div className="text-black p-5 w-full max-w-[500px] mt-5">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <h1 className="font-bold text-black mb-2">Your Name</h1>
                <input
                  type="text"
                  placeholder="abc"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <h1 className="font-bold text-black mb-2">Email Address</h1>
                <input
                  type="email"
                  placeholder="abc@def.com"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <h1 className="font-bold text-black mb-2">Subject</h1>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <h1 className="font-bold text-black mb-2">Message</h1>
                <textarea
                  placeholder="Hi! I'd like to ask you"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brown text-white p-3 hover:bg-white hover:text-brown transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Facilities />
      </div>
    </div>
  );
};

export default Contact;
