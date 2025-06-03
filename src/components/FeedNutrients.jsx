import Image from "next/image";
import React from "react";
import Poultry1 from "@/app/assets/images/poultry/poultry.png";
import Feed3 from "@/app/assets/images/poultry/feed-3.jpg";
import Pig2 from "@/app/assets/images/swine/pig-2.jpg";

const FeedNutrients = () => {
  return (
    <section
      className="min-h-screen py-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between max-w-[90vw] mx-auto gap-10"
      aria-label="Essential Nutrients for Livestock"
    >
      {/* Left Content: Text + Main Image */}
      <div className="md:w-3/5 w-full flex flex-col items-start justify-center space-y-8">
        <div className="w-full h-[18rem] md:h-[24rem] shadow-lg rounded-2xl overflow-hidden">
          <Image
            alt="Nutritious livestock feed with grains"
            src={Feed3}
            className="w-full h-full object-cover rounded-2xl"
            width={1080}
            height={1080}
            priority
          />
        </div>
        <div className="px-2 md:px-5">
          <span className="text-xs text-[var(--orange)] font-bold uppercase tracking-wide">
            Balanced Nutrition, Better Performance
          </span>
          <h3 className="text-[var(--blue)] font-semibold text-lg md:text-xl mt-2">
            Essential Nutrients for Livestock Growth & Productivity
          </h3>
          <p className="text-justify my-4 text-sm md:text-base text-slate-600 leading-relaxed">
            At Big Stars Animal Feed Ltd, we formulate our feeds with a precise blend of
            essential nutrients designed to promote optimal health, growth, and productivity
            in livestock. Our feeds contain a scientifically balanced mix of proteins,
            carbohydrates, fats, vitamins, minerals, and trace elements—each selected to meet
            the specific nutritional needs of poultry, cattle, goats, and other animals.
            With our commitment to quality and consistency, farmers can trust Big Stars to
            deliver results that lead to stronger animals, higher yields, and sustainable
            farming success.
          </p>
        </div>
      </div>

      {/* Right Content: Supplementary Images */}
      <div className="md:w-2/5 w-full flex flex-col items-start justify-center gap-6">
        <div className="w-full h-[14rem] md:h-[18rem] overflow-hidden shadow-lg rounded-2xl">
          <Image
            src={Poultry1}
            alt="Healthy poultry raised on Big Stars feed"
            className="w-full h-full object-cover"
            width={1080}
            height={1080}
          />
        </div>
        <div className="w-full h-[14rem] md:h-[18rem] overflow-hidden shadow-lg rounded-2xl">
          <Image
            src={Pig2}
            alt="Swine feed for growth and health"
            className="w-full h-full object-cover"
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default FeedNutrients;
