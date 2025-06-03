"use client";

import { companyProfileData } from "@/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MashImage from "@/app/assets/images/products/mashes.jpg";

// Swiper modules
import {Autoplay } from "swiper/modules";

const CoreOperations = () => {
  const coreOps = companyProfileData.coreOperations;

  return (
    <section
      className="max-w-7xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-6"
      aria-label="Core operations - Feed Mill and Product Range"
    >
      {/* Feed Mill Section */}
      <div className="md:w-1/2 w-full bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[var(--orange)] mb-4">
          Feed Mill
        </h2>
        <p className="text-gray-700 leading-relaxed">{coreOps.feedMill}</p>
      </div>

      {/* Swiper Section */}
      <div className="md:w-1/2 w-full bg-[var(--blue)] rounded-lg overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {coreOps.productRange.mashes.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                </div>
                <div className="w-full sm:w-72 h-32 overflow-hidden rounded-md">
                  <Image
                    src={MashImage}
                    alt={`Product image: ${product.title}`}
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoreOperations;
