"use client"
import React, { useState, useEffect } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import Image from "next/image";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white text-black border-2 border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              {/* Place the logo image here */}
              <Image src={logo} height={70} width={70} alt="Logo" className="pr-auto" />
            </div>
            {/* E-Commerce Website text */}
            <a href="/" className="ml-2 text-black font-bold text-2xl ">
              Shopper's hub
            </a>
          </div>

          {/* Navigation links */}
          <div className=" flex justify-end  md:flex items-center space-x-4 gap-10">
            <a href="/" className="text-black hover:bg-gray-300 rounded-md p-4 font-semibold text-2xl">
              About
            </a>
            {/* Products dropdown */}
            <div
              className="text-black hover:bg-gray-300 rounded-sm p-4 font-semibold relative text-2xl"
              onClick={toggleProductsDropdown}
              style={{ cursor: "pointer", marginRight: "8px" }}
            >
              Products 
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 w-50 bg-[#EEE7FE] border-b shadow-sm mt-2">
                  <a href="/" className="block text-black hover:bg-gray-300 rounded-lg p-4 font-semibold border-b border-gray-500">
                    Clothing
                  </a>
                  <a href="/" className="block text-black hover:bg-gray-300 rounded-md p-4 font-semibold border-b border-gray-500">
                    Electronics
                  </a>
                  <a href="/" className="block text-black hover:bg-gray-300 rounded-md p-4 font-semibold border-b border-gray-500">
                    Footwear
                  </a>
                </div>
              )}
            </div>
            {/* Add to Cart link */}
            <a href="/" className="text-black p-4 font-semibold relative pr-2 text-2xl flex items-center gap-7" style={{ cursor: "pointer" }}>
              <Image src={cart_icon} height={50} width={50} alt="Cart icon" />
              <span className="ml-1"></span>
            </a>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto focus:outline-none focus:ring focus:border-blue-300 "> Login</button>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
