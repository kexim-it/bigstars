"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ImageCard from "./ImageCard";
import { poultryImageData } from "@/data";
import { Autoplay, Pagination} from "swiper/modules";

const AnimalImages = () => {
  return (
    <div className="my-10 flex items-center justify-center">
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-screen"
        breakpoints={{
  0: {        // Mobile devices
    slidesPerView: 1,
  },
  480: {      // Small phones / large mobiles
    slidesPerView: 2,
  },
  768: {      // Tablets
    slidesPerView: 3,
  },
  1024: {     // Small laptops / desktops
    slidesPerView: 4,
  },
  1280: {     // Larger desktops
    slidesPerView: 5,
  },
}}

      >
        {poultryImageData.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageCard alt={image.alt} img={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimalImages;
