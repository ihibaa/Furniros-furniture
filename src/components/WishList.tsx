"use client";

import React from "react";
import { useWishlist } from "@/context/WishListContext";
import Link from "next/link";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10">
      <h2 className="font-bold text-center text-3xl md:text-5xl mt-10">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 px-4">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          wishlist.map((productId) => (
            <div key={productId} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p>Product ID: {productId}</p>
              <Link href={`/products/${productId}`} className="text-brown hover:underline">
                View Product
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;