"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { AppWindow, Menu, Search, X } from "lucide-react";
import NavContent from "./NavContent";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    "Store",
    "Mac",
    "Iphone",
    "Watch",
    "Vision",
    "AirPods",
    "TV and Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <Fragment>
      <div className="bg-[#161617CC] flex gap-8  justify-between md:justify-center p-2 ">
        <Image
          src="/assets/logo.png"
          width={20}
          height={20}
          alt="Logo"
          className="filter invert brightness-0 "
        />

        <div className="gap-8 hidden md:flex">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="text-gray-300 font-serif line-clamp-1 text-sm hover:text-white"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem("")}
            >
              {item}
            </h1>
          ))}
        </div>

        <div className="flex  gap-8  ">
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHoveredSearch(true)}
            onMouseLeave={() => setIsHoveredSearch(false)}
          >
            <Search className="text-gray-300 hover:text-white cursor-pointer" />

            {isHoveredSearch && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-56">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:outline-none"
                />
                <h1>bishnu</h1>
                <h1>bishnu</h1>
                <h1>bishnu</h1>
                <h1>bishnu</h1>
                <h1>bishnu</h1>
              </div>
            )}
          </div>

          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AppWindow className="text-gray-300 hover:text-white cursor-pointer" />

            {isHovered && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-56">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 rounded-md bg-gray-700 text-white border-none focus:outline-none"
                />
                <h1>silwal</h1>
                <h1>silwal</h1>
                <h1>silwal</h1>
                <h1>silwal</h1>
                <h1>silwal</h1>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="text-gray-300 hover:text-white" />
              ) : (
                <Menu className="text-gray-300 hover:text-white block md:hidden" />
              )}
            </button>
          </div>
        </div>
      </div>

      <NavContent hoveredItem={hoveredItem} />

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-[#161617CC] p-4`}
      >
        {menuItems.map((item, index) => (
          <h1
            key={index}
            className="text-gray-300 font-serif line-clamp-1 text-sm hover:text-white"
          >
            {item}
          </h1>
        ))}
      </div>
    </Fragment>
  );
}
