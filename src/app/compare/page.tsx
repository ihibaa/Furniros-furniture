"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facilities from "@/components/Facilities";

// Define TypeScript types
type ProductDetails = {
  general: {
    "Sales Package": string;
    "Model Number": string;
    "Secondary Material": string;
    Configuration: string;
    "Upholstery Material": string;
    "Upholstery Color": string;
  };
  product: {
    "Filling Material": string;
    "Finish Type": string;
    "Adjustable Headrest": string;
    "Maximum Load Capacity": string;
    "Origin of Manufacture": string;
  };
  dimensions: {
    Width: string;
    Height: string;
    Depth: string;
    Weight: string;
    "Seat Height": string;
    "Leg Height": string;
  };
  warranty: {
    "Warranty Summary": string;
    "Warranty Service Type": string;
    "Covered in Warranty": string;
    "Not Covered In Warranty": string;
    "Domestic Warranty": string;
  };
};

type Product = {
  image: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  details: ProductDetails;
};

const ProductComparison = () => {
  const products: Product[] = [
    {
      image: "/sofa.png",
      name: "Asgaard Sofa",
      price: "Rs. 250,000.00",
      rating: 4.7,
      reviews: 204,
      details: {
        general: {
          "Sales Package": "1 sectional sofa",
          "Model Number": "TFCUBGRL68SRHS",
          "Secondary Material": "Solid Wood",
          Configuration: "L-shaped",
          "Upholstery Material": "Fabric + Cotton",
          "Upholstery Color": "Bright Grey & Lion",
        },
        product: {
          "Filling Material": "Foam",
          "Finish Type": "Bright Grey & Lion",
          "Adjustable Headrest": "No",
          "Maximum Load Capacity": "280 KG",
          "Origin of Manufacture": "India",
        },
        dimensions: {
          Width: "265.32 cm",
          Height: "76 cm",
          Depth: "167.76 cm",
          Weight: "45 KG",
          "Seat Height": "41.52 cm",
          "Leg Height": "5.46 cm",
        },
        warranty: {
          "Warranty Summary": "1 Year Manufacturing Warranty",
          "Warranty Service Type": "For Warranty Claims or Any Product Related Issues Please Email at operations@trevi.furniture.com",
          "Covered in Warranty": "Warranty Against Manufacturing Defect",
          "Not Covered In Warranty": "The Warranty Does Not Cover Damages Due To Usage Beyond Intended Use and Normal Wear & Tear",
          "Domestic Warranty": "1 year",
        },
      },
    },
    {
      image: "/sofa.png",
      name: "Outdoor Sofa Set",
      price: "Rs. 224,000.00",
      rating: 4.2,
      reviews: 165,
      details: {
        general: {
          "Sales Package": "1 Three Seater, 2 Single Seater",
          "Model Number": "DTUBLGRBL568",
          "Secondary Material": "Solid Wood",
          Configuration: "L-shaped",
          "Upholstery Material": "Fabric + Cotton",
          "Upholstery Color": "Bright Grey & Lion",
        },
        product: {
          "Filling Material": "Matte",
          "Finish Type": "Bright Grey & Lion",
          "Adjustable Headrest": "Yes",
          "Maximum Load Capacity": "300 KG",
          "Origin of Manufacture": "India",
        },
        dimensions: {
          Width: "265.32 cm",
          Height: "76 cm",
          Depth: "167.76 cm",
          Weight: "65 KG",
          "Seat Height": "41.52 cm",
          "Leg Height": "5.46 cm",
        },
        warranty: {
          "Warranty Summary": "1.2 Year Manufacturing Warranty",
          "Warranty Service Type": "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
          "Covered in Warranty": "Warranty Limited to Manufacturing Defects Only",
          "Not Covered In Warranty": "Damages Due To Usage Beyond Intended Use and Normal Wear & Tear",
          "Domestic Warranty": "3 Months",
        },
      },
    },
  ];

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[320px] bg-cover bg-center flex flex-col justify-center items-center text-center" style={{ backgroundImage: `url('/bg.png')` }}>
        <div className="absolute inset-1 bg-black bg-opacity-30"></div>
        <div className="relative mt-[100] z-10">
          <h1 className="text-black text-4xl mb-2 font-bold">Product Comparison</h1>
          <Link href="/" className="opacity-75 text-sm">Home</Link> &gt; <span className="text-black font-bold">Comparison</span>
        </div>
      </div>

      {/* Product Comparison Table */}
      <div className="overflow-x-auto mt-10 ml-10">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-3xl text-left">Go to Product Page for More Products</th>
              {products.map((product, index) => (
                <th key={index} className="p-4 text-center">
                  <div className="bg-lightpink rounded-md">
                    <Image src={product.image} alt={product.name} width={280} height={197} className="rounded-md" />
                  </div>
                  <h2 className="font-semibold text-center mt-2">{product.name}</h2>
                  <p className="text-gray-500 text-center">{product.price}</p>
                  <p className="text-yellow-500 text-center">{product.rating} ★ ({product.reviews} Reviews)</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(products[0].details).map((category) => {
              const categoryKey = category as keyof ProductDetails;
              return (
                <React.Fragment key={categoryKey}>
                  <tr>
                    <td className="text-black font-bold text-2xl p-6 text-start" colSpan={products.length + 1}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </td>
                  </tr>
                  {Object.keys(products[0].details[categoryKey]).map((key) => {
                    const detailKey = key as keyof ProductDetails[typeof categoryKey];
                    return (
                      <tr key={detailKey}>
                        <td className="p-4 font-md">{key}</td>
                        {products.map((product, productIndex) => (
                          <td key={productIndex} className="p-4 text-center">
                            {product.details[categoryKey]?.[detailKey] || "-"}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <Facilities />
      </div>
    </div>
  );
};

export default ProductComparison;
