
import Image from "next/image";
import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Footer from "./Components/Pages/Footer";
import Offers from "./Components/Pages/Offers";
import NewsLetter from "./Components/Pages/NewsLetter";
import Item from "./Components/Pages/Item";
import Popular from "./Components/Pages/Popular";


export default function Home() {
  return (
    
    <>
    <Navbar />
    <Hero />
    <Offers />
    <Popular />
    <NewsLetter />
    <Footer />
    
    </>
 
    


    
  );
}
