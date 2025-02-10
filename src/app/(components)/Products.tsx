import React from "react";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <div className="grid  md:grid-cols-2 h-screen p-4 gap-4">
        <div className="relative bg-white">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-black">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6 text-black">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/watch.jpg"
              alt="hero"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="relative  h-screen bg-gradient-to-b from-lime-600   to-blue-200">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/iphone3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="relative h-screen bg-gradient-to-b from-blue-900  to-blue-200">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/iphone3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="relative  h-screen bg-gradient-to-b from-lime-600   to-blue-200">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/iphone3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="relative h-screen bg-gradient-to-b from-blue-900  to-blue-200">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/iphone3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="relative  h-screen bg-gradient-to-b from-lime-600   to-blue-200">
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              iPhone 16 Pro
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Hello, Apple Intelligence.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-3 bg-blue-800 text-white text-base rounded-3xl">
                Stream now
              </button>
              <button className="px-6 py-3 text-white text-lg rounded-3xl border-2 border-blue-700">
                Buy
              </button>
            </div>
            <Image
              src="/assets/iphone3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
