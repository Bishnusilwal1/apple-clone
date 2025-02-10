import React from "react";
import Image from "next/image";

export default function Iphone() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <Image
        src="/assets/iphone2.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">iPhone 16 Pro</h1>
        <p className="text-lg md:text-xl mb-6">Hello, Apple Intelligence.</p>
        <div className="flex gap-8">
          <button className="px-6 py-3 bg-blue-800 text-white  text-base rounded-3xl">
            Stream now
          </button>
          <button className="px-6 py-3 text-blue-700 text-lg rounded-3xl border-2 border-blue-700">
            Stream now
          </button>
        </div>
      </div>
    </div>
  );
}
