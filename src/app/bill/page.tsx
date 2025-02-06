"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState, useEffect } from "react";

const BillingDetails = () => {
  // 🟢 useCart hook ko sabse upar rakha hai taake React Hooks rule na toote
  const { cartItems } = useCart(); // removeFromCart hata diya kyunki use nahi ho raha
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown"></div>
      </div>
    );
  }

  const getSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[320px] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className="absolute inset-1 bg-black bg-opacity-30"></div>
        <div className="relative mt-[100] z-10">
          <h1 className="text-black text-4xl mb-2 font-bold">Checkout</h1>
          <Link href="/" className="opacity-75 text-sm">
            Home
          </Link>{" "}
          &gt; <span className="text-black font-bold">Checkout</span>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between p-10 gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl mt-10 text-black font-bold">Billing Details</h2>

          <div className="text-black p-10 w-full max-w-lg mt-5">
            <form className="grid grid-cols-1 gap-6">
              {/* First and Last Name */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h1 className="font-bold text-black mb-2">First Name</h1>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-black mb-2">Last Name</h1>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <h1 className="font-bold text-black mb-2">Email Address</h1>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mr-[10] mt-[50]">
          {/* Cart Totals */}
          <div className="w-[600px] bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Products</h2>
              <h2 className="text-xl font-bold">Subtotal</h2>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}

              {/* Subtotal */}
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">
                  Rs. {getSubtotal().toLocaleString()}
                </span>
              </div>

              {/* Total */}
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold">
                  Rs. {getSubtotal().toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Direct Bank Transfer</h3>
            <p className="text-gray-400">
              Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared.
            </p>
            <div>
              <label className="flex items-center text-gray-500 mt-5 mb-2">
                <input type="radio" name="payment" className="mr-2" />
                Direct Bank Transfer
              </label>
              <label className="flex text-gray-500 items-center">
                <input type="radio" name="payment" className="mr-2" />
                Cash On Delivery
              </label>
            </div>
            <p className="mt-7">Your personal data will be used to manage access to your account and for other purposes described in our Privacy Policy.</p>

            <div className="flex justify-center -mt-[500] items-center h-screen">
              <button className="w-[250px] border-2 border-black mt-[50] bg-white text-black py-3 hover:bg-black hover:text-white rounded-md font-bold">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
