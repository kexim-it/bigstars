"use client"
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { slideData } from "@/data";

const ImageSlide = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-screen">
              <Image
                alt="Big Stars Animal Feed"
                src={slide.img}
                className="w-full h-full object-cover"
                width={1080}
                height={1080}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlide;
