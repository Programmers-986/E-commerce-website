import React from "react";
import Image from "next/image";
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className="flex h-screen bg-gradient-to-b from-purple-100 to-green-200 bg-opacity-50">
            <div className="flex-1 flex flex-col justify-start pl-16 leading-7">
                <h2 className="text-4xl font-bold pt-10 mb-10">New Releases Only <Image src={hand_icon} alt="" width={50} height={50} /></h2>

                <div className="flex items-center justify-start gap-3 mt-80">
                    <div className="bg-red-500 text-white rounded-full py-2 px-6 text-lg font-semibold flex items-center">
                        Latest Collection
                        <Image src={arrow_icon} alt="" width={30} height={30} className="ml-2" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src={hero_image} alt="" width={400} height={400} />
            </div>
        </div>
    );
}

export default Hero;