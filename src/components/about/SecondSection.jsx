import Image from "next/image";
import React from "react";
import FeedImage from "@/app/assets/images/poultry/feed-1.jpg";
import ImageBox from "../ImageBox";

const SecondSection = () => {
  return (
    <section
      className="w-full max-w-[90vw] px-6 mx-auto my-16 flex flex-col md:flex-row items-center justify-between gap-10"
      aria-label="Sustainable agriculture feed mill"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--blue)] leading-snug">
          Powering Agriculture Sustainably, One Tonne at a Time
        </h3>
        <p className="text-slate-600 text-base leading-relaxed text-justify">
          The company operates a 12-metric-tonne-per-hour feed mill equipped with advanced, energy-efficient machinery designed to minimize waste and conserve resources. They prioritize using locally grown, non-GMO soybeans and other ingredients to support Ghana’s agricultural sector and reduce transportation emissions. By processing soybeans in-house, they reduce external supply chains, allowing them to maintain strict quality standards while minimizing their carbon footprint.
        </p>
      </div>
      <div className="flex-1 w-full">
        <ImageBox img={FeedImage} alt="Feed mill operations using sustainable agriculture methods" />
      </div>
    </section>
  );
};

export default SecondSection;
