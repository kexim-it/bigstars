import React from "react";
import BigStarsVideo from "./BigStarsVideo";

const VideoCard = () => {
  return (
    <div className="flex items-center justify-center gap-32 w-[80vw] mx-auto">
      <div className="">
        <h3 className="text-3xl font-bold capitalize text-[var(--deep-blue)]">Behind the Feed: The Big Stars Mission</h3>
        <p className="my-4 text-sm text-slate-700">
            This video documentary takes you inside Big Stars Animal Feed — where quality, innovation, and dedication come together to support the agricultural backbone of our communities. From raw material sourcing to advanced production processes, and from quality control to farmer partnerships, discover how we work every day to produce nutritious, reliable animal feed that powers livestock health and farm productivity across the region.
        </p>
      </div>
      <div className="relative">
        <div className="">
          <BigStarsVideo />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
