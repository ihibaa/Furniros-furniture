"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Define the WishlistContext type
interface WishlistContextType {
  wishlist: Product[]; // Array of product objects
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}

// Create the context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Create the provider
export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add a product to the wishlist
  const addToWishlist = (product: Product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};