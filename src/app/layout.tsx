import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/CartContext"; // Import useCart
import ProductPage from "./products/[id]/page";
import HeaderWrapper from "@/components/HeaderWrapper";
import { WishlistProvider } from "@/context/WishListContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Furniro for educational purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <CartProvider>
          <WishlistProvider>
            <HeaderWrapper />
            {children}
            <Footer />
            <ProductPage params={{ id: "your-product-id" }} />
            </WishlistProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

