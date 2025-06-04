"use client";
import Link from "next/link";
import React, { useState } from "react";

const tabs = ["Our Vision", "Our Mission", "Company profile", "Our Story"];

const tabContent = {
  "Company profile": {
    title: "Company profile",
    body: "Big Stars Animal Feed Ltd is a trusted name in high-quality animal nutrition solutions, dedicated to supporting farmers with scientifically formulated feeds for poultry, livestock, and aquaculture. With a focus on innovation, quality, and sustainability, we help drive productivity and growth across the agricultural sector.",
    linkText: "Get To know More",
    url: "/about-us/company-profile",
  },
  "Our Vision": {
    title: "Our Vision",
    body: "To be a leading provider of innovative and sustainable animal nutrition solutions that empower farmers, enhance livestock health, and contribute to food security across Africa.",
    linkText: "Get To know More",
    url: "about-us/vision-and-mission",
  },
  "Our Story": {
    title: "Our Story",
    body: "Big Stars Animal Feed Ltd was born from a passion to support farmers with reliable, high-quality animal nutrition. What started as a small venture has grown into a trusted brand known for consistency, innovation, and care. Guided by a deep understanding of local farming needs, we produce scientifically balanced feeds that boost animal health and farm productivity. Every bag we produce reflects our commitment to excellence, sustainability, and the success of the agricultural communities we serve.",
    linkText: "Get To know More",
    url: "/about-us/vision-and-mission",
  },
  "Our Mission": {
    title: "Our Mission",
    body: "To produce high-quality, nutritionally balanced animal feeds that support the health, growth, and productivity of livestock, while empowering farmers with reliable solutions, expert support, and a commitment to sustainable agriculture.",
    linkText: "Get To know More",
    url: "/about-us/vision-and-mission",
  },
};

const MainAbout = () => {
  const [activeTab, setActiveTab] = useState("Our Vision");

  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-[90vw] mx-auto px-4 py-10"
    >
      <div className="h-2 w-full bg-[var(--orange)] mb-6" />
      <h2
        id="about-heading"
        className="text-2xl md:text-3xl font-bold mb-6 text-[var(--blue)]"
      >
        BigStars in Brief
      </h2>

      <div className="flex flex-col md:flex-row rounded overflow-hidden bg-slate-100 shadow-md" role="tablist">
        {/* Tabs */}
        <nav
          className="w-full md:w-1/2 bg-slate-200 p-6 space-y-5"
          aria-label="About navigation"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out ${
                activeTab === tab ? "text-[var(--orange)]" : "text-[var(--blue)]"
              } hover:text-[var(--orange)]`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`${tab.replace(/\s+/g, "-").toLowerCase()}-panel`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Content */}
        <article
          id={`${activeTab.replace(/\s+/g, "-").toLowerCase()}-panel`}
          className="w-full md:w-1/2 bg-[var(--blue)] text-white p-8 flex flex-col justify-center"
          role="tabpanel"
        >
          <header>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {tabContent[activeTab].title}
            </h3>
          </header>
          <p className="mb-6 text-sm md:text-base text-justify">
            {tabContent[activeTab].body}
          </p>
          <Link
            href={tabContent[activeTab].url}
            className="bg-[var(--orange)] hover:bg-[var(--deep-orange)] duration-300 ease-in-out text-white text-sm py-2 px-6 rounded w-fit"
          >
            {tabContent[activeTab].linkText}
          </Link>
        </article>
      </div>
    </section>
  );
};

export default MainAbout;
