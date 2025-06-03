import Image from "next/image";
import React from "react";
import AnimalFeed from "@/app/assets/images/poultry/feed-3.jpg";

const Purpose = () => {
  return (
    <section
      className="relative w-full h-screen"
      aria-label="Our Purpose - Big Stars Animal Feed"
    >
      <Image
        src={AnimalFeed}
        alt="Healthy livestock feeding on premium animal feed"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--deep-blue)]/60 z-0" />

      {/* Text content */}
      <div className="absolute z-10 bottom-10 left-5 md:left-20 bg-[var(--deep-blue)]/80 p-8 md:p-10 rounded-lg max-w-md md:max-w-lg text-white space-y-4">
        <h4 className="text-2xl md:text-3xl font-semibold">Our Purpose</h4>
        <p className="text-base md:text-lg leading-relaxed">
          Big Stars Animal Feed exists to deliver premium-quality feed solutions
          that promote healthy livestock, increase farm productivity, and support
          the success of farmers across Ghana and beyond.
        </p>
      </div>
    </section>
  );
};

export default Purpose;
