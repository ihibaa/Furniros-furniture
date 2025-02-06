// src/app/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ImgSlider from "@/components/ImgSlider";
import Gallery from "@/components/Gallery";
import Cart from "@/components/Cart";
import ProductCards from "@/components/ProductCards";
import OurProduct from "@/components/Ourproduct";
import { SignIn } from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";


export default function Home() {
  const { cartItems, addToCart, removeFromCart, isCartOpen, toggleCart } = useCart();

  return (
    <div className="p-0 m-0 w-full">
      <Navbar toggleCart={toggleCart} />
      <Banner />
      <ProductCards addToCart={addToCart} />
      <OurProduct addToCart={addToCart} />
      <ImgSlider />
      <Gallery />
      
     
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onRemove={removeFromCart}
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
        />
      )}
    </div>
  );
}

export function SignInPage() {
  return <SignIn />;
}