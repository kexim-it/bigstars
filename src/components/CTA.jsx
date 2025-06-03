import Image from "next/image";
import React from "react";
import CTAImage from "@/app/assets/images/products/mashes.jpg";
import MainBtn from "./MainBtn";

const CTA = () => {
  return (
    <section
      className="max-w-6xl mx-auto bg-[var(--deep-blue)] p-8 md:p-10 rounded-2xl text-white border-b-8 border-b-[var(--orange)] mb-10 flex flex-col md:flex-row items-center gap-8"
      aria-label="Call to action to contact Big Stars Animal Feed"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h4 className="text-2xl md:text-3xl font-semibold leading-snug">
          Reach out for expert feed advice and solutions.
        </h4>
        <p className="text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Whether you're a farmer looking for the best feed for your livestock or a partner seeking collaboration, we're here to help. Contact Big Stars Animal Feed and let's find the right solution together.
        </p>
        <MainBtn btnText="Talk To Us" url="/contact-us" urlTarget="" />
      </div>
      <div className="w-full max-w-sm h-48 md:h-60 relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={CTAImage}
          alt="Big Stars Animal Feed product example"
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
};

export default CTA;
