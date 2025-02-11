import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <Image
        src="/assets/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-nowrap">
          Welcome to Our Site
        </h1>
        <p className="text-lg md:text-xl mb-6 text-nowrap">
          Discover amazing experiences with us.
        </p>
        <button className="px-6 py-3 bg-white text-black  text-lg rounded-3xl text-nowrap">
          Stream now
        </button>
      </div>
    </div>
  );
}
