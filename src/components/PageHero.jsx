import Image from "next/image";
import React from "react";

const PageHero = ({ title, subTitle, heroImage }) => {
  return (
    <section
      className="w-full bg-[var(--deep-blue)] overflow-hidden py-10"
      aria-labelledby="page-hero-title"
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        {/* Text Section */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h1
            id="page-hero-title"
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            {title}
          </h1>
          <p className="text-lg text-[var(--orange)] font-medium">
            {subTitle}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-72 h-40 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={heroImage}
            alt={`${title} hero image`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
