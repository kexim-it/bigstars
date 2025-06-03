import Image from "next/image";
import React from "react";
import Dummy from "@/app/assets/images/ai/dummy-farmer.jpeg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const TestimonyCard = ({ url, img = Dummy, desc, ctaText, name, location }) => {
  return (
    <Link
      href={url}
      aria-label={`Testimonial by ${name} from ${location}`}
      className="w-full max-w-md group flex flex-col items-start justify-center"
    >
      <div className="relative w-full aspect-square">
        <div className="overflow-hidden w-full h-full rounded-t-lg">
          <Image
            src={img}
            alt={`Photo of ${name}`}
            fill
            className="object-cover transform transition-transform scale-110 group-hover:scale-100 duration-300 ease-in-out"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black/70 px-6 py-4">
          <p className="text-white line-clamp-3 text-sm mb-2">{desc}</p>
          <p className="text-sm text-white font-medium">
            {name} – {location}
          </p>
        </div>
      </div>

      <div className="bg-white group-hover:bg-[var(--orange)] border border-slate-100 h-16 w-full flex items-center gap-4 px-5 transition-colors duration-300 ease-in-out">
        <div className="border border-slate-200 group-hover:border-white w-8 h-8 rounded-full flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
          <FaArrowRight className="text-[var(--orange)] group-hover:text-white text-sm" />
        </div>
        <span className="capitalize text-[var(--blue)] group-hover:text-white transition-colors duration-300">
          {ctaText}
        </span>
      </div>
    </Link>
  );
};

export default TestimonyCard;
