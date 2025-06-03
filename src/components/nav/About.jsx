"use client";
import React, { useEffect, useState } from 'react';
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image';

const About = () => {
  const router = useRouter();
  const [aboutDropdownMenu, setAboutDropdownMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Who We Are");

  const tabs = ["Who We Are", "Management"];

  const tabContent = {
    "Who We Are": {
      title: "Company profile",
      body: "Learn more about our mission, vision, and strategy as a company.",
      image: MainImage,
      imageText: "",
      links: [
        {
          title: "Vision & Mission",
          url: "/about-us/vision-and-mission",
        },
        {
          title: "Strategy",
          url: "/about-us/strategy",
        },
        {
          title: "Company Profile",
          url: "/about-us/company-profile",
        },
      ],
    },
    Management: {
      title: "Management",
      body: "Get to know the leadership team and their roles in our company.",
      linkText: "Meet the Team",
      image: MainImage,
      imageText: "",
      links: [
        {
          title: "Management Board & Executive Team",
          url: "/about-us/management-board",
        },
        {
          title: "Team Members",
          url: "/about-us/team-members",
        },
      ],
    },
  };
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleClick = () => {
    if (isMobile) {
      setAboutDropdownMenu(!aboutDropdownMenu);
    }
  };

  return (
    
    <div
      onMouseEnter={() => !isMobile && setAboutDropdownMenu(true)}
      onMouseLeave={() => !isMobile && setAboutDropdownMenu(false)}
      onClick={handleClick}
      className="px-2 py-5 cursor-pointer"
    >
      <span className="cursor-pointer hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">
        About us
      </span>

      {aboutDropdownMenu && (
        <div className="absolute top-full md:top-24 left-0 right-0 w-screen bg-slate-200 z-50 shadow-xl">
          <div className="flex flex-col md:flex-row h-full md:h-[70vh] overflow-y-auto">
            {/* Sidebar */}
            <div className="md:w-1/4 w-full bg-[var(--deep-blue)] p-6">
              <h2 className="text-2xl font-semibold text-white text-center py-6 md:py-10">
                About Big Stars Animal Feed
              </h2>
              <ul className="space-y-2 md:ml-10">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    onMouseEnter={() => setActiveTab(tab)}
                    className={`cursor-pointer text-xl py-3 px-4 rounded transition ${
                      activeTab === tab
                        ? "bg-slate-200 text-[var(--deep-blue)]"
                        : "text-white"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Area */}
            <div className="md:w-3/4 w-full p-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                {tabContent[activeTab].links.map((link) => (
                  <div
                    key={link.title}
                    onClick={() => router.push(link.url)}
                    className="hover:text-[var(--orange)] text-[var(--deep-blue)] duration-300 ease-in-out py-4 px-2 group flex items-center gap-2 cursor-pointer"
                  >
                    <h4 className="text-lg">{link.title}</h4>
                    <HiOutlineArrowNarrowRight className="text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300 ease-in-out" />
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
