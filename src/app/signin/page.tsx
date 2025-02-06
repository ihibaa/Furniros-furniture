"use client";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[320px] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-black text-4xl mb-3 font-bold">Sign In</h1>
          <Link href="/" className="opacity-75 text-black font-bold text-sm">
            Home
          </Link>{" "}
          &gt; <span className="font-bold text-black">SignIn</span>
        </div>
      </div>

      {/* SignIn Component */}
      <div className="flex items-center justify-center h-screen">
        <div className="w-[400px] mt-10">
          <SignedIn>
            <div className="text-center">
              <h1 className="font-bold text-black text-2xl mb-4">
                You are signed in!
              </h1>
              <p className="text-gray-700 mb-4">
                Welcome back to your account. You can now access all features.
              </p>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="text-center">
              <h1 className="font-bold text-black text-2xl mb-4">
                Make an account or sign in
              </h1>
              <p className="text-gray-700 mb-6">
                Sign in to access your dashboard and manage your account.
              </p>
              <SignIn />
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;