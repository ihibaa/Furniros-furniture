import React from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import ReviewPage from "@/components/Review";
import ProductOptions from "@/components/ProductOptions"; // Import the Client Component
import OurProduct from "@/components/Ourproduct";

const sanity = createClient({
  projectId: "rt0teuto",
  dataset: "production",
  apiVersion: "v2025-01-19",
  useCdn: true,
})


export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch the product data from Sanity
  const product = await sanity.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      name,
      title,
      price,
      description,
      discountPercentage,
      "imageUrl": productImage.asset->url,
      tags
    }`,
    { id }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  function addToCart(product: { id: number; name: string; description: string; price: number; formattedPrice: string; originalPrice: string; image: string; quantity: number; discount: boolean; discounts: boolean; isNew: boolean; } | { id: number; name: string; description: string; price: number; formattedPrice: string; image: string; quantity: number; discount: boolean; discounts: boolean; isNew: boolean; originalPrice?: undefined; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="top-[50%]">
      <div className="bg-black mt-[300]">
        <h1>hwyyy</h1>
      </div>
      <div className="min-h-screen bg-gray-100 mt-[150] py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-brown">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop" className="hover:text-brown">
              Shop
            </Link>{" "}
            / <span className="text-brown">{product.title}</span>
          </div>

          {/* Product Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT COLUMN: Image & Product Options */}
            <div className="flex flex-col space-y-6">
              {/* Product Image */}
              <div className="relative w-full h-96">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Product Options Below Image */}
              <ProductOptions
                productId={product._id}
                productName={product.title}
                productPrice={product.price}
                productImage={product.imageUrl}
              />
            </div>

            {/* RIGHT COLUMN: Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-gray-700">{product.description}</p>

              {/* Price & Discount */}
              <div className="flex items-center space-x-4">
                <p className="text-2xl font-bold text-brown">
                  Rs. {product.price.toLocaleString()}
                </p>
                {product.discountPercentage > 0 && (
                  <p className="text-red-500 font-semibold">
                    {product.discountPercentage}% OFF
                  </p>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-brown px-3 py-1 rounded-none text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <ReviewPage />
        <Link href="/faqs">
          <button className="font-bold text-3xl text-black">FAQs</button>
        </Link>
      </div>

      <div>
        <h1  className="font-bold text-black  text-2xl mt-10 text-center"> Realates Products</h1>
        <div  className="mt-10">
        <OurProduct addToCart={addToCart} />
        </div>

      </div>
    </div>
  );
}