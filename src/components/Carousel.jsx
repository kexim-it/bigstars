"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper max-w-[100vw]"
      >
        {sliderData.map((slide, key) => (
          <SwiperSlide className="" key={key}>
            <Image
        alt="Feed Factory"
        src={slide.img}
        priority
        width={1080}
        height={1080}
        className="w-full h-full object-cover"
      />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
