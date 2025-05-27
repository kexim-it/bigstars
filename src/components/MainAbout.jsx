"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const tabs = [
  'Our Vision',
  'Our Mission',
  'Company profile',
  'Our Story',
];

const tabContent = {
  'Company profile': {
    title: 'Company profile',
    body: 'Big Stars Animal Feed Ltd is a trusted name in high-quality animal nutrition solutions, dedicated to supporting farmers with scientifically formulated feeds for poultry, livestock, and aquaculture. With a focus on innovation, quality, and sustainability, we help drive productivity and growth across the agricultural sector.',
    linkText: 'Get To know More',
    url:"/about/company-profile"
  },
  'Our Vision': {
    title: 'Our Vision',
    body: 'To be a leading provider of innovative and sustainable animal nutrition solutions that empower farmers, enhance livestock health, and contribute to food security across Africa.',
    linkText: 'Get To know More',
    url:"/about/our-mission-and-vision"
  },
  'Our Story': {
    title: 'Our Story',
    body: 'Big Stars Animal Feed Ltd was born from a passion to support farmers with reliable, high-quality animal nutrition. What started as a small venture has grown into a trusted brand known for consistency, innovation, and care. Guided by a deep understanding of local farming needs, we produce scientifically balanced feeds that boost animal health and farm productivity. Every bag we produce reflects our commitment to excellence, sustainability, and the success of the agricultural communities we serve.',
    linkText: 'Get To know More',
    url:"/about/our-story"
  },
  'Our Mission': {
    title: 'Our Mission',
    body: 'To produce high-quality, nutritionally balanced animal feeds that support the health, growth, and productivity of livestock, while empowering farmers with reliable solutions, expert support, and a commitment to sustainable agriculture.',
    linkText: 'Get To know More',
    url:"/about/our-mission-and-vision"
  },
};

const MainAbout = () => {
  const [activeTab, setActiveTab] = useState('Our Vision');

  return (
    <div className="max-w-[80vw] mx-auto px-4 py-8">
      <div className="h-2 w-full bg-[var(--orange)]"></div>
      <h2 className="text-2xl font-bold mb-6 text-[var(--blue)]">BigStars in Brief</h2>
      <div className="flex rounded overflow-hidden h-[22rem]">
        {/* Sidebar */}
        <div className="w-1/2 bg-slate-200 p-8 space-y-6">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer font-semibold mt-6 text-xl transition  hover:text-[var(--orange)] duration-300 ease-in-out ${
                activeTab === tab ? 'text-[var(--orange)]' : 'text-[var(--blue)]'
              }`}
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Content */}
        <div className="w-1/2 bg-[var(--blue)] text-white p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">{tabContent[activeTab].title}</h3>
          <p className="mb-6 text-sm text-justify">{tabContent[activeTab].body}</p>
          {tabContent[activeTab].linkText && (
            <Link href={tabContent[activeTab].url} className="bg-[var(--orange)] hover:bg-[var(--deep-orange)] duration-300 ease-in-out text-white text-sm py-2 px-6 rounded w-fit">
              {tabContent[activeTab].linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default MainAbout