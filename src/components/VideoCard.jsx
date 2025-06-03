import React from "react";
import BigStarsVideo from "./BigStarsVideo";

const VideoCard = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-32 w-[90vw] mx-auto py-10"
      aria-label="Big Stars Video Overview"
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold capitalize text-[var(--deep-blue)] leading-snug">
          Behind the Feed: The Big Stars Mission
        </h2>
        <p className="my-4 text-sm md:text-base text-slate-700">
          This video documentary takes you inside Big Stars Animal Feed —
          where quality, innovation, and dedication come together to support
          the agricultural backbone of our communities. From raw material
          sourcing to advanced production processes, and from quality control
          to farmer partnerships, discover how we work every day to produce
          nutritious, reliable animal feed that powers livestock health and
          farm productivity across the region.
        </p>
      </div>

      {/* Video Content */}
      <div className="w-full lg:w-1/2 relative">
        <BigStarsVideo />
      </div>
    </section>
  );
};

export default VideoCard;
