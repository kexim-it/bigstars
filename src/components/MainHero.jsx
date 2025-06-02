import Link from "next/link";
import React from "react";
import BigStarsVideo from "./BigStarsVideo";
import Image from "next/image";
import FeedFactory from "@/app/assets/images/ai/feed-factory.png"

const MainHero = () => {
  return (
    <div className=" relative group h-[90vh] w-screen">
      {/* <video
        width={2048}
        height={2048}
        className="w-screen object-cover h-[80vh]"
        loop
        autoPlay
        playsInline
        muted
        preload="none"
      >
        <source src="/videos/BIG_STARS.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video> */}
      <Image alt="Feed Factory" src={FeedFactory} priority width={1080} height={1080} className="w-full h-full object-cover" />

      <div className="absolute top-[28rem] left-32 z-20 space-x-5">
        <Link className="bg-[var(--orange)] text-white px-10 py-5 rounded-full font-semibold" href={"/contact-us"}>Contact Us</Link>
        <Link className="bg-white text-[var(--orange)] px-10 py-5 rounded-full font-semibold" href={"/our-business"}>Our Business</Link>
      </div>

      <span className="w-screen h-full absolute bg-black opacity-50 inset-0 z-10 "></span>

      <div className="absolute z-20 bottom-24 right-32 px-10 -translate-y-10 group-hover:translate-y-0 duration-600 ease-in-out">
          <div className="group-hover:translate-y-10 duration-700 ease-in-out">
            <h1 className="text-xl group-hover:text-2xl duration-700 ease-in-out font-semibold text-white">
              Big Stars Animal Feed
            </h1>
            <p className="text-xs text-white">Your business is our business</p>
          </div>
          <span className="absolute bg-[var(--orange)] h-0 group-hover:h-20 duration-500 ease-in-out w-2 inset-0 z-30 top-2 left-7 "></span>
          <span className="absolute bg-[var(--blue)] h-0 group-hover:h-10 duration-500 ease-in-out w-2 inset-0 z-30 top-2 left-7 "></span>
      </div>
    </div>
  );
};

export default MainHero;
