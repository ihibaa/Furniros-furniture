"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdShare, MdOutlineCompareArrows } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import Link from "next/link";

const sanity = createClient({
  projectId: "rt0teuto",
  dataset: "production",
  apiVersion: "v2025-01-19",
  useCdn: true,
});

interface Product {
  _id: string; // Explicitly adding _id
  name: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

type ProductCardsProps = {
  addToCart: (product: CartItem) => void; // Updated type to match CartItem
};

interface CartItem {
  id: string; // Use string for id to match _id from sanity
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ProductCards: React.FC<ProductCardsProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          name,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data.map((product) => ({ ...product, id: product._id }))); // Use _id for id
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10">
      <h2 className="font-bold text-center text-3xl md:text-5xl mt-10">
        our popular products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 px-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative group flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => router.push(`/products/${product._id}`)}
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-60 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-center mt-3 text-black font-bold">
                {product.title}
              </h2>
              <p className="text-center text-gray-600">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-center text-black font-bold">
                    Rs. {product.price.toLocaleString()}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-red-500 font-semibold">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                <button
                  className="bg-white text-brown py-2 px-4 rounded font-bold mb-2 w-48 hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    const newProduct: CartItem = {
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.imageUrl,
                    };
                    const storedCart = localStorage.getItem("cart");
                    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
                    const existingProduct = cart.find((item) => item.id === product._id);

                    if (existingProduct) {
                      existingProduct.quantity += 1;
                    } else {
                      cart.push(newProduct);
                    }

                    localStorage.setItem("cart", JSON.stringify(cart));
                    addToCart(newProduct);
                  }}
                >
                  Add to Cart
                </button>

                <div className="flex space-x-4 text-white mt-2">
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <MdShare />
                    <span>Share</span>
                  </button>
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <MdOutlineCompareArrows />
                    <span>Compare</span>
                  </button>
                  <button className="hover:text-gray-300 flex items-center space-x-1">
                    <GoHeart />
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-white text-center text-base text-brown hover:bg-brown border border-brown hover:text-white transition-transform duration-300 hover:scale-105 px-8 py-3 rounded font-semibold">
          <Link href="/shop" className="opacity-75">
            Show More
          </Link>
        </button>
      </div>

      
    </div>
  );
};

export default ProductCards;
