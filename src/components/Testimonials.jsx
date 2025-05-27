"use client"
import React from "react";
import TestimonyCard from "./TestimonyCard";
import { TestimonialsData } from "@/data";
;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';


const Testimonials = () => {
  return (
      <div className="max-w-[80vw] mx-auto my-44">
        <div className="mt-5">
        <h3 className="font-bold text-2xl text-[var(--blue)]">Empowering Farmers Through Quality Feed</h3>
        <p className=" text-sm text-slate-500">From our feed to their fields — discover how farmers thrive with Big Stars.</p>
        </div>
        <div className="w-full my-4 h-1 bg-[var(--orange)]"></div>
        <Swiper
        spaceBetween={1}
        slidesPerView={3}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
      {TestimonialsData.map((test, index) => (
        <SwiperSlide key={index}>
        <TestimonyCard ctaText={test.cta} desc={test.testimonial} img={test.image} location={test.location} name={test.name} url={test.url} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
