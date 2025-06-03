"use client";
import React from "react";
import TestimonyCard from "./TestimonyCard";
import { TestimonialsData } from "@/data";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonial-heading"
      className="max-w-[90vw] md:max-w-[80vw] mx-auto my-24 px-4"
    >
      {/* Heading */}
      <div className="mb-6">
        <h2
          id="testimonial-heading"
          className="text-2xl md:text-3xl font-bold text-[var(--blue)]"
        >
          Empowering Farmers Through Quality Feed
        </h2>
        <p className="text-left text-sm md:text-base text-slate-500 mt-2 max-w-xl mx-auto">
          From our feed to their fields — discover how farmers thrive with Big
          Stars.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-1 bg-[var(--orange)] mb-6"></div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        aria-label="Testimonials carousel"
        className="mySwiper"
      >
        {TestimonialsData.map((test, index) => (
          <SwiperSlide key={index}>
            <TestimonyCard
              ctaText={test.cta}
              desc={test.testimonial}
              img={test.image}
              location={test.location}
              name={test.name}
              url={test.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
