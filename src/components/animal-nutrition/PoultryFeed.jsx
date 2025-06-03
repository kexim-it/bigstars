import React from "react";
import NutritionCard from "./NutritionCard";
import { poultryFeedData } from "@/data";

const PoultryFeed = () => {
  return (
    <div className="my-10 max-w-[90vw] mx-auto flex items-center justify-center flex-wrap gap-10">
      {poultryFeedData.services.feed_products.map((product, index) => (
        <NutritionCard desc={product.description} icon={product.icon} title={product.name} key={index} />
      ))}
    </div>
  );
};

export default PoultryFeed;
