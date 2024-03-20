"use client" 
import Image from "next/image";
import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Footer from "./Components/Pages/Footer";
import Offers from "./Components/Pages/Offers";
import NewsLetter from "./Components/Pages/NewsLetter";
import Popular from "./Components/Pages/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Product";
import Cart from "./Cart";
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"


export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner = {kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

      <Hero />
      <Offers />
      <Popular />
      <NewsLetter />
      <Footer />
    </>
  );
}
