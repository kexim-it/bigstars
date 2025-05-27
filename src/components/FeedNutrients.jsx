import Image from "next/image";
import React from "react";
import Poultry1 from "@/app/assets/images/poultry/poultry.png"
import Feed3 from "@/app/assets/images/poultry/feed-3.jpg"
import Pig2 from "@/app/assets/images/swine/pig-2.jpg"

const FeedNutrients = () => {
  return (
    <div className="min-h-screen flex items-center justify-between max-w-[80vw] mx-auto gap-10">
      <div className="w-3/5 flex flex-col items-start justify-center space-y-10">
        <div className="w-full h-[24rem] shadow-lg rounded-2xl">
          <Image alt="FeedNutrients Image" src={Feed3} className="w-full h-full object-cover rounded-2xl" width={1080} height={1080} />
        </div>
        <div className="px-5">
          <span className="text-xs text-[var(--orange)] font-bold">Balanced Nutrition, Better Performance</span>
          <h3 className="text-[var(--blue)] font-semibold text-lg">
            Essential Nutrients for Livestock Growth & Productivity
          </h3>
          <p className="text-justify my-4 text-sm text-slate-500">
            At Big Stars Animal Feed Ltd, we formulate our feeds with a precise
            blend of essential nutrients designed to promote optimal health,
            growth, and productivity in livestock. Our feeds contain a
            scientifically balanced mix of proteins, carbohydrates, fats,
            vitamins, minerals, and trace elements—each selected to meet the
            specific nutritional needs of poultry, cattle, goats, and other
            animals. With our commitment to quality and consistency, farmers can
            trust Big Stars to deliver results that lead to stronger animals,
            higher yields, and sustainable farming success
          </p>
        </div>
      </div>
      <div className="w-2/5 flex flex-col items-start justify-center space-y-10">
        <div className="w-full h-[18rem] overflow-hidden shadow-lg rounded-2xl">
          <Image src={Poultry1} alt="" className="w-full h-full object-cover" width={1080} height={1080} />
        </div>
        <div className="w-full h-[18rem] overflow-hidden shadow-lg rounded-2xl">
          <Image src={Pig2} alt="" className="w-full h-full object-cover" width={1080} height={1080} />
        </div>
      </div>
    </div>
  );
};

export default FeedNutrients;
