import Link from "next/link";
import React from "react";
import Image from "next/image";
import FeedFactory from "@/app/assets/images/ai/feed-factory.png";

const MainHero = () => {
  return (
    <div className=" relative group h-[80vh] w-screen">
      <Image
        alt="Feed Factory"
        src={FeedFactory}
        priority
        width={1080}
        height={1080}
        className="w-full h-full object-cover"
      />

      <div className="absolute lg:top-[28rem] lg:left-60 z-20 space-x-5  top-[60%] left-1/2 -translate-x-1/2 ">
        <div className="flex items-center gap-4 md:gap-6 text-center md:text-left">
          <Link
            className="bg-[var(--orange)] text-white px-5 py-3 lg:px-10 lg:py-5 rounded-full font-semibold text-sm"
            href={"/contact-us"}
          >
            Contact Us
          </Link>
          <Link
            className="bg-white text-[var(--orange)] px-5 py-3 lg:px-10 lg:py-5  rounded-full font-semibold text-sm"
            href={"/our-business"}
          >
            Our Business
          </Link>
        </div>
      </div>

      <span className="w-screen h-full absolute bg-black opacity-50 inset-0 z-10 "></span>

      <div className="absolute z-20 bottom-36 lg:bottom-24 right-32 px-10 lg:-translate-y-10 group-hover:translate-y-0 duration-600 ease-in-out">
        <div className="lg:group-hover:translate-y-10 duration-700 ease-in-out">
          <h1 className="text-xl lg:group-hover:text-2xl duration-700 ease-in-out font-semibold text-white">
            Big Stars Animal Feed
          </h1>
          <p className="text-xs text-white">Your business is our business</p>
        </div>
        <span className="absolute bg-[var(--orange)] h-0 group-hover:h-8 lg:group-hover:h-20 duration-500 ease-in-out w-2 inset-0 z-20 top-2 left-7 "></span>
        <span className="absolute bg-[var(--blue)] h-0 group-hover:h-6 lg:group-hover:h-10 duration-500 ease-in-out w-2 inset-0 z-30 top-2 left-7 "></span>
      </div>
    </div>
  );
};

export default MainHero;
