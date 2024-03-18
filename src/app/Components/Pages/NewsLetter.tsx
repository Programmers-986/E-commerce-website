import React from "react";

const NewsLetter = () => {
    return(
      <>
      <div className="w-65% h-[40vh] flex flex-col items-center justify-center m-auto pt-0 pb-0 pl-140 pl-140 mb-150 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-7">
        <h1 className="text-[#454545] text-6xl font-semibold"> Get Exclusive Offers on Your Email </h1>
        <p className="text-[#454545] text-xl"> Subscribe to our NewsLetter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-730 h-70 rounded-full border-1 border-[#e3e3e3]">
            <input type="email" placeholder="Your Email Id" className="w-500 ml-8 border-none outline-none text-[#616161] font-serif text-xs" />
            <button className="w-210 h-70 rounded-full bg-black text-white text-xs cursor-pointer"> Subscribe </button>

        </div>

      </div>

      
      </>

    );
}
export default NewsLetter;