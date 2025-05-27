import React from "react";
import Card from "./Card";
import { MainServiceData, QuickLinks } from "@/data";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import NavigationCard from "./NavigationCard";

const WhatWeDo = () => {
  return (
    <div className="">
      <div className="relative h-[65rem] max-w-[90vw] mx-auto">
        <div className="-top-10 left-16 absolute z-30 space-y-5">
          <div className="grid grid-cols-2 gap-4 items-center ">
            {MainServiceData.map((data, key) => (
              <Card
                key={key}
                description={data.description}
                title={data.title}
                icon={data.icon}
                url={data.link}
              />
            ))}
          </div>
          <NavigationCard />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
