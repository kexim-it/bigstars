import Link from "next/link";
import React from "react";
import MainBtn from "../MainBtn";

const FirstSection = ({ title, detail }) => {
  return (
    <section
      className="w-full lg:px-32 px-6 py-10 flex flex-col items-start justify-center max-w-5xl space-y-6"
      aria-label="Introductory section"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)]">
        {title}
      </h2>

      <p className="text-slate-600 text-base sm:text-lg text-justify leading-relaxed">
        {detail}
      </p>

      <MainBtn btnText="Contact Us" url="/contact-us" urlTarget="" />
    </section>
  );
};

export default FirstSection;
