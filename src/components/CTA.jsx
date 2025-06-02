import Image from "next/image";
import React from "react";
import CTAImage from "@/app/assets/images/products/mashes.jpg"
import MainBtn from "./MainBtn";
const CTA = () => {
  return (
    <div className="max-w-[80vw] mx-auto flex items-center justify-around bg-[var(--deep-blue)] p-10 rounded-2xl text-white border-b-8 border-b-[var(--orange)] mb-10">
      <div className="w-1/2 space-y-4">
        <h4 className="text-3xl font-semibold">Reach out for expert feed advice and solutions.</h4>
        <p className="">
          Whether you're a farmer looking for the best feed for your livestock
          or a partner seeking collaboration, we're here to help. Contact Big
          Stars Animal Feed and let's find the right solution together.
        </p>
        <MainBtn btnText={"Talk To Us"} url={"/contact-us"} urlTarget={""} />
      </div>
      <div className="w-96 h-60">
        <Image src={CTAImage} alt="CTA Image" width={1080} height={1080} className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default CTA;
