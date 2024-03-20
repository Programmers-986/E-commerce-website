"use client"
import React, { useState, useEffect } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import Link from 'next/link';
import Image from "next/image";
import LoginPage from './LoginPage';
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showLoginPage, setShowLoginPage] = useState(false);

  interface LoginPageProps {
    onClose: () => void;
  }
  
  const handleLoginClick = () => {
    
    setShowLoginPage(true);
  
  };

  const handleCloseLoginPage = () => {
    setShowLoginPage(false);

    
  };

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
    
    <div>
    <nav className="bg-white text-black border-2 border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              {/*  logo image here */}
              <Image src={logo} height={70} width={70} alt="Logo" className="pr-auto" />
            </div>
            {/* Navbar Content */}
            <a href="/" className="ml-2 text-black font-bold text-2xl ">
              Shopper's hub
            </a>
          </div>

        
          <div className=" flex justify-end  md:flex items-center space-x-4 gap-10">
            <a href="/" className="text-black hover:bg-gray-300 rounded-md p-4 font-semibold text-2xl">
              About
            </a>
           
            <div className=" flex justify-end  md:flex items-center space-x-4 gap-10">
            <a href="/" className="text-black hover:bg-gray-300 rounded-md p-4 font-semibold text-2xl">
              Men
            </a>
            </div>

            <div className=" flex justify-end  md:flex items-center space-x-4 gap-10">
            <a href="/" className="text-black hover:bg-gray-300 rounded-md p-4 font-semibold text-2xl">
              Women
            </a>
            </div>

            <div className=" flex justify-end  md:flex items-center space-x-4 gap-10">
            <a href="/" className="text-black hover:bg-gray-300 rounded-md p-4 font-semibold text-2xl">
              Kids
            </a>
            </div>

            <a href="/cart" className="text-black p-4 font-semibold relative pr-2 text-2xl flex items-center gap-7" style={{ cursor: "pointer" }}>
              <Image src={cart_icon} height={50} width={50} alt="Cart icon" />
              <span className="ml-1"></span>
            </a>

            {/*Login Button */}
            <button onClick={handleLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto focus:outline-none focus:ring focus:border-blue-300">
  Login
  </button>
            </div>
          </div>
        </div>
      </nav>

      {/*Conditional rendering of the Login Page when clicked*/}
      {showLoginPage && (
        <div className="fixed inset-0 z-40 bg-gray-700 bg-opacity-75"> 
        <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen margin: auto">
          <div className="bg-white p-8 rounded-lg shadow-md margin: auto ">
            <LoginPage onClose={handleCloseLoginPage} />
          </div>
        </div>
        </div>
      
      )}
    </div>
  );
};

export default Navbar;
