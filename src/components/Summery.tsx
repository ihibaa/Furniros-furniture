import React from "react";
import Image from "next/image";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

interface SummeryProps {
  cart: CartItem[];
}

const Summery: React.FC<SummeryProps> = ({ cart }) => {
  return (
    <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-center items-center bg-white shadow-sm p-4 rounded-md">
              <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
              </div>

              <Image
                src={item.imageUrl}
                alt={item.title}
                width={50}
                height={50}
                className="rounded-md"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-black text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default Summery;
