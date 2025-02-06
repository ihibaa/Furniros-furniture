"use client"

import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GrDeliver } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";


const data = [
  {
    title: "High Quality",
    description: "Crafted from top materials",
    icon: <Link href="/faqs"><HiOutlineTrophy /></Link>,
  },
  {
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: <Link href="/faqs"><SiTicktick /> </Link>,
  },
  {
    title: "Free Shipping",
    description: "Order over $150",
    icon: <Link href="/faqs"> <GrDeliver  /> </Link>,
  },
  {
    title: "24/7 Support",
    description: "Dedicated Support",
    icon: <Link href="/faqs"><MdSupportAgent /> </Link>,
  },
];

const Facilities = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 bg-lpink  md:grid-cols-4  gap-5 w-full">
      
      {data?.map((item) => (
        <div
          key={item?.title}
          className="flex items-center gap-3 p-4   bg-lpink "
        >
          <span className="text-3xl text-brown">{item?.icon}</span>
          <div>
            <h2 className="uppercase text-left font-bold">{item?.title}</h2>
            <p className="text-sm text-left text-lightText">{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
