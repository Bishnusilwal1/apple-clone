"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { AppWindow, Menu, Search, X } from "lucide-react";
import NavContent from "./NavContent";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
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
      <div className="bg-[#161617CC] flex gap-8 md:justify-center p-2 ">
        <Image
          src="/assets/logo.png"
          width={20}
          height={20}
          alt="Picture of the author"
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
        <Search className="text-gray-300 hover:text-white" />
        <AppWindow className="text-gray-300 hover:text-white" />

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
      <NavContent hoveredItem={hoveredItem} />{" "}
      {/* Pass hovered item to NavContent */}
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
