"use client";
import React, { useState, useEffect } from "react";
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

const AnimalNutrition = () => {
  const [animalDropdownMenu, setAnimalDropdownMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeAnimal, setActiveAnimal] = useState("Feed Types");
  const router = useRouter();

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setAnimalDropdownMenu(!animalDropdownMenu);
    }
  };

  const animalTabs = ["Animals", "Feed Types"];
  const animalContent = {
    Animals: {
      title: "Animals",
      body: "Know more about the animals we deal in",
      image: MainImage,
      imageText: "",
      links: [
        { title: "Poultry", url: "/animal-nutrition/poultry" },
        { title: "Swine", url: "/animal-nutrition/swine" },
      ],
    },
    "Feed Types": {
      title: "Feed Types",
      body: "Get to know more about our feed types",
      image: MainImage,
      imageText: "",
      links: [
        // { title: "Poultry Feed", url: "/feed-type/poultry-feed" },
        // { title: "Swine Feed", url: "/feed-type/swine-feed" },
        { title: "Concentrates", url: "/feed-type/concentrates" },
      ],
    },
  };

  return (
    <div
      onMouseEnter={() => !isMobile && setAnimalDropdownMenu(true)}
      onMouseLeave={() => !isMobile && setAnimalDropdownMenu(false)}
      onClick={handleClick}
      className="px-2 py-5 cursor-pointer"
    >
      <span className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">
        Animal Nutrition
      </span>

      {animalDropdownMenu && (
        <div className="absolute z-30 top-full md:top-24 left-0 w-screen bg-slate-200">
          <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-1/4 bg-[var(--deep-blue)] p-4 md:p-10">
              <h2 className="text-2xl font-semibold text-white text-center py-5">
                Animal Nutrition
              </h2>
              <ul className="space-y-2 md:ml-10">
                {animalTabs.map((tab) => (
                  <li
                    key={tab}
                    onMouseEnter={() => !isMobile && setActiveAnimal(tab)}
                    onClick={() => isMobile && setActiveAnimal(tab)}
                    className={`cursor-pointer text-lg md:text-xl px-4 py-2 transition rounded ${
                      activeAnimal === tab
                        ? "bg-slate-200 text-[var(--deep-blue)]"
                        : "text-white"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-start justify-between p-6 md:p-32 gap-6">
              <div className="flex flex-col space-y-3">
                {animalContent[activeAnimal].links.map((link) => (
                  <div
                    key={link.title}
                    onClick={() => router.push(link.url)}
                    className="hover:text-[var(--orange)] text-[var(--deep-blue)] duration-300 ease-in-out py-2 px-2 group flex items-center gap-1 cursor-pointer"
                  >
                    <h4>{link.title}</h4>
                    <HiOutlineArrowNarrowRight className="text-xl md:text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 md:group-hover:translate-x-5 duration-700 ease-in-out" />
                  </div>
                ))}
              </div>
              <div className="w-full md:w-auto">
                <Image
                  src={animalContent[activeAnimal].image}
                  alt={animalContent[activeAnimal].title}
                  width={400}
                  height={400}
                  className="w-full max-w-xs md:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalNutrition;
