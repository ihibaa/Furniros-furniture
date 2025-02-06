"use client";
import { useState } from "react";

import Container from "./Container";
import Logo from "./Logo";
import { navBarList } from "@/constants";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { MdOutlinePerson2, MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import SearchInput from "./SearchInput";

type HeaderProps = {
  toggleCart: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full h-20 bg-accentWhite border-b-[1px] border-b-white fixed top-0 left-0 z-50">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        <Logo />
 
        <nav className="hidden md:flex items-center gap-7">
          {navBarList.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-xl text-gray-700 font-medium hover:text-brown hover:border-b-2 border-transparent transition-colors duration-300 ml-8"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-10">
          <Link href="/account" aria-label="Account">
            <MdOutlinePerson2 className="text-black text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </Link>

          <SearchInput />

          <Link href="/wishlist" aria-label="Blog">
            <GoHeart className="text-black text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </Link>

          <button
            onClick={toggleCart}
            type="button"
            className="text-lg"
            aria-label="View Cart"
          >
            <MdOutlineShoppingCart className="text-black text-3xl cursor-pointer hover:text-brown transition-colors duration-300" />
          </button>
        </div>

        
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="inline-flex md:hidden cursor-pointer text-2xl hover:text-brown"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
        </button>
      </Container>

     
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 flex flex-col items-start gap-4 md:hidden z-40">
          {navBarList.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-lg text-gray-700 font-medium hover:text-brown transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;