"use client";
import { useCart } from "@/context/CartContext";
import Header from "./Header";

function HeaderWrapper() {
  const { toggleCart } = useCart();
  return <Header toggleCart={toggleCart} />;
}

export default HeaderWrapper;