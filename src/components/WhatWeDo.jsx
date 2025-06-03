import React from "react";
import Card from "./Card";
import NavigationCard from "./NavigationCard";
import { MainServiceData } from "@/data";

const WhatWeDo = () => {
  return (
    <section
      className="py-16 px-4 max-w-7xl mx-auto"
      aria-labelledby="what-we-do-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="what-we-do-heading"
          className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)]"
        >
          What We Do
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore our core services tailored to support sustainable animal nutrition and agricultural success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {MainServiceData.map((data, index) => (
          <article key={index} className="relative">
            <Card
              description={data.description}
              title={data.title}
              icon={data.icon}
              url={data.link}
            />
          </article>
        ))}
      </div>

      <div className="mt-10">
        <NavigationCard />
      </div>
    </section>
  );
};

export default WhatWeDo;
