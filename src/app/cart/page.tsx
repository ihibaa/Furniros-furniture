"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/Logo";
import { IoTrashBinOutline } from "react-icons/io5";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Types are correctly inferred here
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
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <Logo />
        </div>
        <div className="relative z-10">
          <h1 className="text-black text-4xl mb-3 font-bold">Cart</h1>
          <Link href="/" className="opacity-75 font-bold text-sm">
            Home
          </Link>{" "}
          &gt; <span className="font-bold">Cart</span>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div className="flex-grow mx-4">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Rs. {item.price.toLocaleString()} x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brown hover:text-black text-lg"
                    >
                      <IoTrashBinOutline />
                    </button>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-full md:w-1/3 bg-lightpink p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">
                  Rs. {getSubtotal().toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold">
                  Rs. {getSubtotal().toLocaleString()}
                </span>
              </div>
              <Link href="/bill" passHref>
                <button className="w-full mt-10 bg-brown text-white hover:bg-white border hover:text-brown py-2 rounded-lg hover:bg-brown-dark">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
