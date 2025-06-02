"use client"
import React, { useState } from 'react'
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image';

const About = () => {
    const router = useRouter()
    const [aboutdropdownMenu, setAboutDropdownMenu] = useState(false);
    const [activeTab, setActiveTab] = useState("Who We Are");
      //About US 
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
        // "Who We Are": {
        //   title: "Who We Are",
        //   body: "Explore key statistics and operational figures for our business.",
        //   image: MainImage,
        //   imageText: "",
        //   links: [
        //     {
        //       title: "Company Profile",
        //       url: "/about-us/company-profile",
        //     },
        //     {
        //       title: "Our Business",
        //       url: "/about-us/our-business",
        //     },
        //     {
        //       title: "Our Story",
        //       url: "/about-us/our-story",
        //     },
        //   ],
        // },
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
            // {
            //   title: "Supervisory Board",
            //   url: "/about-us/supervisory-board",
            // },
            {
              title: "Team Members",
              url: "/about-us/team-members",
            },
          ],
        },
      };
  return (
              <div
                onMouseEnter={() => setAboutDropdownMenu(true)}
                onMouseLeave={() => setAboutDropdownMenu(false)}
                className="px-2 py-5"
              >
                <span className="cursor-pointer hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">About us</span>
                {aboutdropdownMenu && (
                  <div className="absolute h-[70vh] bg-slate-200 z-30 top-20 inset-0 left-0 w-screen flex items-start">
                    <div className="w-1/4 bg-[var(--deep-blue)] h-full">
                      <h2 className="text-2xl font-semibold text-white text-center py-10">
                        About Big Stars Animal Feed
                      </h2>
                      <div className="w-[20rem] ml-20">
                        {tabs.map((tab) => (
                          <li
                            className={`cursor-pointer text-xl transition py-3 px-4  ${
                              activeTab === tab
                                ? "bg-slate-200  text-[var(--deep-blue)]"
                                : "text-white"
                            }`}
                            key={tab}
                            onMouseEnter={() => setActiveTab(tab)}
                          >
                            {tab}
                          </li>
                        ))}
                      </div>
                    </div>
                    <div className="w-3/4 p-32 flex items-center justify-between">
                      <div className="flex flex-col space-y-2">
                        {tabContent[activeTab].links.map((link) => (
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
                          src={tabContent[activeTab].image}
                          alt={tabContent[activeTab].title}
                          width={400}
                          height={400}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

  )
}

export default About