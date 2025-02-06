"use client";

import React from "react";
import Cart from "@/components/Cart";
import { useCart, CartProvider } from "@/context/CartContext";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  return (
    <div>
      <Cart
        cartItems={cartItems}
        onRemove={removeFromCart} 
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      {children}
    </div>
  );
};

const WrappedClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CartProvider>
    <ClientWrapper>{children}</ClientWrapper>
  </CartProvider>
);

export default WrappedClientWrapper;
