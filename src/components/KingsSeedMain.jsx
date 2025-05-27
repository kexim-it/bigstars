import Image from "next/image";
import React from "react";
import Maize from "@/app/assets/images/maize/maize-2.avif";
import Link from "next/link";

const KingsSeedMain = () => {
  return (
    <div className="flex items-center max-w-[80vw] 3xl:max-w-[70vw] mx-auto">
      <div className="w-[50rem] 3xl:w-[60rem] h-[35rem] rounded-2xl">
        <Image
          src={Maize}
          alt="Kings-seed-image"
          width={1080}
          height={1080}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="relative">
        <div className="w-[40rem] rounded-2xl h-96 bg-[var(--deep-blue)] p-10 absolute -left-52 -top-10 border-b-[var(--orange)] border-b-[10px]">
            <h3 className="text-white text-lg capitalize font-semibold mt-10">
                <span className="text-[var(--orange)] text-4xl">Kings Seeds</span><br/> provides the most quality seeds </h3>
            <p className="mt-4 mb-10 text-justify text-white">
                Kings Seeds is the seed division of Big Stars Animal Feed, delivering high-quality, certified hybrid maize and legume seeds tailored for Ghanaian farmers. With a focus on yield, resilience, and sustainability, Kings Seeds empowers agriculture with trusted varieties like Supreme and Teemeer 02 Hybrid Maize.
            </p>
            <Link href={"/kingseeds"} className="text-white bg-[var(--orange)] py-3 px-10 rounded-lg hover:bg-[var(--deep-orange)] duration-300 ease-in-out">Know More</Link>
        </div>
      </div>
    </div>
  );
};

export default KingsSeedMain;
