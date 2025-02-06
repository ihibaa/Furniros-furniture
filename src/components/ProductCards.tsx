"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { MdShare, MdOutlineCompareArrows } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { useWishlist } from "@/context/WishListContext";

const sanity = createClient({
  projectId: "rt0teuto",
  dataset: "production",
  apiVersion: "v2025-01-19",
  useCdn: true,
});

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

type ProductCardsProps = {
  addToCart: (product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }) => void;
};

const ShareButton = ({ productName, productUrl }: { productName: string; productUrl: string }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: `Check out this amazing product: ${productName}!`,
          url: productUrl,
        });
        console.log("Product shared successfully!");
      } catch (error) {
        console.error("Error sharing the product:", error);
      }
    } else {
      alert("Web Share API not supported in this browser.");
    }
  };

  return (
    <button onClick={handleShare} className="hover:text-gray-300 flex items-center space-x-1">
      <MdShare />
      <span>Share</span>
    </button>
  );
};

const LikeButton = ({ productId }: { productId: number }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isLiked = wishlist.includes(productId);

  const handleLike = () => {
    if (isLiked) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-1 ${
        isLiked ? "text-brown" : "hover:text-gray-300"
      }`}
    >
      <GoHeart />
      <span>{isLiked ? "Liked" : "Like"}</span>
    </button>
  );
};

const ProductCards: React.FC<ProductCardsProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

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
      const data = await sanity.fetch(query);

      setProducts(
        data.slice(0, 8).map((product: { _id: string; }) => ({
          ...product,
          id: product._id,
        }))
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10">
      <h2 className="font-bold text-center text-3xl md:text-5xl mt-10">Our Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-11 px-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <div className="relative group flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded"
              />
              <div className="mt-4">
                <h2 className="text-center mt-3 text-black font-bold">{product.title}</h2>
                <p className="text-center text-gray-600">{truncateDescription(product.description)}</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-center text-black font-bold">
                      Rs. {product.price.toLocaleString()}
                    </p>
                    {product.discountPercentage > 0 && (
                      <p className="text-red-500 font-semibold">{product.discountPercentage}% OFF</p>
                    )}
                  </div>
                </div>

                <div className="mt-2 space-x-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-brown mt-3 rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                  <button
                    className="bg-white text-brown py-2 px-4 rounded font-bold mb-2 w-48 hover:scale-105 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        quantity: 1,
                        image: product.imageUrl,
                      });
                    }}
                  >
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white mt-2">
                    <ShareButton productName={product.name} productUrl={`/products/${product.id}`} />
                    <button className="hover:text-gray-300 flex items-center space-x-1">
                      <MdOutlineCompareArrows />
                      <span>Compare</span>
                    </button>
                    <LikeButton productId={product.id} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
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