"use client";

import React from "react";
import { useUser, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function UserAccountPage() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[320px] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-black text-4xl mb-3 font-bold">Account</h1>
          <Link href="/" className="opacity-75 text-black font-bold text-sm">
            Home
          </Link>{" "}
          &gt; <span className="font-bold text-black">Account</span>
        </div>
      </div>

      {/* User Account Details */}
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-100 py-10">
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            User Account
          </h2>

          {/* Profile Image and UserButton */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.imageUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
            <UserButton afterSignOutUrl="/" />
          </div>

          {/* User Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700">Name</label>
              <p className="mt-1 text-lg text-gray-900">{user.fullName}</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Username</label>
              <p className="mt-1 text-lg text-gray-900">{user.username || "N/A"}</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">Email</label>
              <p className="mt-1 text-lg text-gray-900">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">User ID</label>
              <p className="mt-1 text-lg text-gray-900">{user.id}</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Account Created
              </label>
              <p className="mt-1 text-lg text-gray-900">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex justify-center">
            <button
              onClick={() => signOut()}
              className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}