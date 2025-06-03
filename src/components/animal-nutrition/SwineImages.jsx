"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageCard from "./ImageCard";
import { swineImageData } from "@/data";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwineImages = () => {
  return (
    <div className="my-10 flex items-center">
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
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
      {swineImageData.map((image, index) => (
        <SwiperSlide>
        <ImageCard key={index} alt={image.alt} img={image.src} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default SwineImages