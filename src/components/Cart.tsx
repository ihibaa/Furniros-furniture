"use client";

import Image from "next/image";
import Link from "next/link";

// Define the type for cart items
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartProps = {
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, onRemove, isCartOpen, toggleCart }) => {
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 md:w-96 sm:w-full flex flex-col">
          {/* Header */}
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button onClick={toggleCart} className="text-brown">
              X
            </button>
          </div>

          {/* Cart Items */}
          <div className="p-4 space-y-4 flex-grow overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <Image
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p>
                      {item.quantity} x Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-brown">
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* Subtotal and Buttons */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between text-brown mb-4">
                <span>Subtotal:</span>
                <span className="font-bold">Rs. {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex space-x-2">
                <Link href="/cart">
                  <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-brown hover:text-white w-[90px]">
                    Cart
                  </button>
                </Link>
                <Link href="/bill">
                  <button className="bg-gray-200 hover:bg-brown hover:text-white px-4 py-2 rounded-full w-[130px]">
                    Checkout
                  </button>
                </Link>
                <Link href="/compare">
                  <button className="bg-gray-200 px-4 py-2 hover:bg-brown hover:text-white rounded-full w-[130px]">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
