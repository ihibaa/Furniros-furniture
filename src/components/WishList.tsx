"use client";

import React from "react";
import { useWishlist } from "@/context/WishListContext";
import Link from "next/link";
import Image from "next/image";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10">
      <h2 className="font-bold text-center text-3xl md:text-5xl mt-10">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 px-4">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              {/* Product Image */}
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={product.image} // Use the product image URL
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Product Name */}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              {/* Product Price */}
              <p className="text-gray-700">${product.price}</p>
              {/* View Product Link */}
              <Link
                href={`/products/${product.id}`}
                className="text-brown hover:underline mt-2 inline-block"
              >
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