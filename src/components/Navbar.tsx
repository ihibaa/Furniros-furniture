"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlinePerson2, MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";

const navBarList = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
  { title: "Sign In", link: "/signin" },
];

type NavbarProps = {
  toggleCart: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full h-20 bg-accentWhite border-b-[1px] border-b-white fixed top-0 left-0 z-50">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        {/* Logo */}
        <Logo />

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-7">
          {navBarList.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-xl text-gray-700 font-medium hover:text-brown hover:border-b-2 border-transparent transition-colors duration-300 ml-8"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Icons and Search Input */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {/* Account Icon */}
          <Link href="/account">
            <MdOutlinePerson2 className="text-black text-2xl sm:text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </Link>

          {/* Search Input (Hidden on Mobile) */}
          <div className="hidden md:block">
            <SearchInput />
          </div>

          {/* Wishlist Icon */}
          <Link href="/wishlist">
            <GoHeart className="text-black text-2xl sm:text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </Link>

          {/* Cart Icon */}
          <button
            onClick={toggleCart}
            className="relative"
            aria-label="View Cart"
          >
            <MdOutlineShoppingCart className="text-black text-2xl sm:text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </button>
        </div>

        {/* Menu Toggle (Visible only on Mobile) */}
        <HiMenuAlt2
          className="inline-flex md:hidden cursor-pointer text-2xl hover:text-brown"
          onClick={toggleMenu}
        />
      </Container>

     
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 flex flex-col items-start gap-4 md:hidden z-40">
          {navBarList.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-lg text-gray-700 font-medium hover:text-brown transition-colors duration-300"
              onClick={toggleMenu} 
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;