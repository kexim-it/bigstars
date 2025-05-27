"use client";
import React, { useState } from "react";
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
const Sustainability = () => {
  const [sustainDropdownMenu, setSustainDropdownMenu] = useState(false);

  //Animal Nutrition
  const sustainability = ["Sustainability", "Global Challenges", "Responsible Feeding", "Global Green Goal"];

  const sustainContent = {
  "Sustainability": {
    title: "Sustainability",
    body: "Explore how we promote sustainable animal farming practices and ensure long-term food security.",
    image: MainImage,
    imageText: "Sustainable farming practices in action",
    links: [
      {
        title: "Sustainable Poultry Practices",
        url: "/sustainability/poultry",
      },
      {
        title: "Sustainable Swine Farming",
        url: "/sustainability/swine",
      },
    ],
  },
  "Global Challenges": {
    title: "Global Challenges",
    body: "Discover how our nutritional solutions address food production challenges around the world.",
    image: MainImage,
    imageText: "Tackling global food and feed challenges",
    links: [
      {
        title: "Feeding a Growing Population",
        url: "/challenges/global-demand",
      },
      {
        title: "Combating Feed Resource Scarcity",
        url: "/challenges/feed-scarcity",
      },
      {
        title: "Climate Impact on Livestock",
        url: "/challenges/climate-impact",
      },
    ],
  },
  "Responsible Feeding": {
    title: "Responsible Feeding",
    body: "Learn about our commitment to providing nutritious, safe, and traceable animal feed solutions.",
    image: MainImage,
    imageText: "Responsibly produced feed for healthier livestock",
    links: [
      {
        title: "Ethical Feed Production",
        url: "/responsible-feeding/ethical-production",
      },
      {
        title: "Animal Welfare and Nutrition",
        url: "/responsible-feeding/animal-welfare",
      },
      {
        title: "Feed Safety Standards",
        url: "/responsible-feeding/feed-safety",
      },
    ],
  },
  "Global Green Goal": {
    title: "Global Green Goal",
    body: "See how our operations align with global environmental goals through eco-friendly feed solutions.",
    image: MainImage,
    imageText: "Contributing to a greener, cleaner planet",
    links: [
      {
        title: "Reducing Carbon Footprint",
        url: "/green-goal/carbon-footprint",
      },
      {
        title: "Eco-Efficient Feed Production",
        url: "/green-goal/eco-efficient",
      },
      {
        title: "Sustainable Resource Use",
        url: "/green-goal/resource-use",
      },
    ],
  },
};

  const [activeSustain, setActiveSustain] = useState("Responsible Feeding");

  const router = useRouter();
  return (
    <div
          onMouseEnter={() => setSustainDropdownMenu(true)}
          onMouseLeave={() => setSustainDropdownMenu(false)}
          className="px-2 py-5"
        >
          <span className="cursor-pointer hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">Sustainability</span>
          {sustainDropdownMenu && (
            <div className="absolute h-[70vh] bg-slate-200 z-30 top-20 inset-0 left-0 w-screen flex items-start">
              <div className="w-1/4 bg-[var(--deep-blue)] h-full">
                <h2 className="text-2xl font-semibold text-white text-center py-10">
                  Sustainability
                </h2>
                <div className="w-[20rem] ml-20">
                  {sustainability.map((sustain) => (
                    <li
                      className={`cursor-pointer text-xl transition py-3 px-4  ${
                        activeSustain === sustain
                          ? "bg-slate-200  text-[var(--deep-blue)]"
                          : "text-white"
                      }`}
                      key={sustain}
                      onMouseEnter={() => setActiveSustain(sustain)}
                    >
                      {sustain}
                    </li>
                  ))}
                </div>
              </div>
              <div className="w-3/4 p-32 flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                  {sustainContent[activeSustain].links.map((link) => (
                    <div
                      onClick={() => router.push(link.url)}
                      className="hover:text-[var(--orange)] text-[var(--deep-blue)] duration-300 ease-in-out py-6 px-2 group flex items-center gap-1 cursor-pointer"
                      key={link.title}
                    >
                      <h4>{link.title}</h4>
                      <HiOutlineArrowNarrowRight className="text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-5 duration-1000 ease-in-out" />
                    </div>
                  ))}
                </div>
                <div className="">
                  <Image
                    src={sustainContent[activeSustain].image}
                    alt={sustainContent[activeSustain].title}
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
);
};

export default Sustainability;
