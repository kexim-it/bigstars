"use client";
import React, { useState } from "react";
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

const AnimalNutrition = () => {
  const [animaldropdownMenu, setAnimalDropdownMenu] = useState(false);

  //Animal Nutrition
  const animalNutrition = ["Animals", "Feed Types"];

  const animalContent = {
    Animals: {
      title: "Animals",
      body: "Know more about the animals we deal in",
      image: MainImage,
      imageText: "",
      links: [
        {
          title: "Poultry",
          url: "/animal-nutrition/poultry",
        },
        {
          title: "Swine",
          url: "/animal-nutrition/swine",
        },
      ],
    },
    "Feed Types": {
      title: "Feed Types",
      body: "Get to know more about our feed types",
      image: MainImage,
      imageText: "",
      links: [
        // {
        //   title: "Poultry Feed",
        //   url: "/feed-type/poultry-feed",
        // },
        // {
        //   title: "Swine Feed",
        //   url: "/feed-type/swine-feed",
        // },
        {
          title: "Concentrates",
          url: "/feed-type/concentrates",
        },
      ],
    },
  };
  const [activeAnimal, setActiveAnimal] = useState("Feed Types");

  const router = useRouter();
  return (
    <div
      onMouseEnter={() => setAnimalDropdownMenu(true)}
      onMouseLeave={() => setAnimalDropdownMenu(false)}
      className="px-2 py-5"
    >
      <span className="cursor-pointer hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">Animal Nutrition</span>
      {animaldropdownMenu && (
        <div className="absolute h-[70vh] bg-slate-200 z-30 top-20 inset-0 left-0 w-screen flex items-start">
          <div className="w-1/4 bg-[var(--deep-blue)] h-full">
            <h2 className="text-2xl font-semibold text-white text-center py-10">
              Animal Nutrition
            </h2>
            <div className="w-[20rem] ml-20">
              {animalNutrition.map((animal) => (
                <li
                  className={`cursor-pointer text-xl transition py-3 px-4  ${
                    activeAnimal === animal
                      ? "bg-slate-200  text-[var(--deep-blue)]"
                      : "text-white"
                  }`}
                  key={animal}
                  onMouseEnter={() => setActiveAnimal(animal)}
                >
                  {animal}
                </li>
              ))}
            </div>
          </div>
          <div className="w-3/4 p-32 flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              {animalContent[activeAnimal].links.map((link) => (
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
                src={animalContent[activeAnimal].image}
                alt={animalContent[activeAnimal].title}
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

export default AnimalNutrition;
