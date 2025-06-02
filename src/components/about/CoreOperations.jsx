"use client";
import { companyProfileData } from "@/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MashImage from "@/app/assets/images/products/mashes.jpg";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const CoreOperations = () => {
  const coreOps = companyProfileData.coreOperations;

  return (
    <div className="max-w-[80vw] mx-auto my-10 flex">
      <div className="w-1/2 bg-slate-100 p-4">
        <h2 className="text-3xl font-semibold text-[var(--orange)]">
          Feed Mill
        </h2>
        <p className="">{coreOps.feedMill}</p>
      </div>
      <div className="w-1/2 bg-[var(--blue)]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          modules={[Autoplay]}
          className="mySwiper max-w-[100vw]"
        >
          {coreOps.productRange.mashes.map((product, key) => (
            <SwiperSlide className="" key={key}>
              <div className="flex items-center justify-between">
                <div className="px-10">
                  <h3 className="text-white text-2xl">{product.title}</h3>
                </div>
                <div className="w-72 h-32 overflow-hidden">
                  <Image
                    src={MashImage}
                    alt="Product Range"
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoreOperations;
