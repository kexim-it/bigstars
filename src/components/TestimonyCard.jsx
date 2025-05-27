import Image from "next/image";
import React from "react";
import Dummy from "@/app/assets/images/ai/dummy-farmer.jpeg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const TestimonyCard = ({url,img, desc,ctaText, name, location}) => {
  return (
    <Link
      href={url}
      className="w-96  group flex flex-col items-start justify-center"
    >
      <div className="w-96 h-96 relative">
        <div className="overflow-hidden w-96 h-96 rounded-t-lg">
          <Image
            src={img}
            height={1080}
            width={1080}
            alt="Testimonial Image"
            className="w-full h-full transform transition-transform object-cover scale-110 group-hover:scale-100 duration-300 ease-in-out"
          />
        </div>
        <div className="absolute bottom-4 left-0 w-96 h-32 bg-black/70 px-10">
          <p className="text-white line-clamp-3 my-4 text-sm">
            {desc}
          </p>
          <p className="text-sm text-white">{name} - {location}</p>
        </div>
      </div>
      <div className="bg-white group-hover:bg-[var(--orange)] border border-slate-100 h-20 w-96 flex items-center gap-5 px-5">
        <div className=" border-slate-200 group-hover:border-white border w-8 h-8 text-center rounded-full group-hover:translate-x-4 duration-300 ease-in-out">
          <FaArrowRight className="text-[var(--orange)] group-hover:text-white text-sm mx-auto mt-2 text-center" />
        </div>
          <span className="capitalize text-[var(--blue)] group-hover:text-white duration-300 ease-in-out">{ctaText}</span>
      </div>
    </Link>
  );
};

export default TestimonyCard;
