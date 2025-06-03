import Image from "next/image";
import React from "react";
import Maize from "@/app/assets/images/maize/maize-2.avif";
import Link from "next/link";

const KingsSeedMain = () => {
  return (
    <section
      aria-labelledby="kings-seed-heading"
      className="flex justify-center items-center py-16 px-4"
    >
      <div className="relative w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image: Left Side */}
        <div className="w-full md:w-[45%] h-[20rem] md:h-[35rem] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={Maize}
            alt="Hybrid maize seed from Kings Seeds Ghana"
            width={1080}
            height={1080}
            className="w-full h-full object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Text Card */}
        <article
          role="region"
          aria-label="About Kings Seeds"
          className="w-full md:w-[50%] relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/4 md:-translate-y-1/2 bg-[var(--deep-blue)] text-white rounded-2xl p-8 border-b-[10px] border-b-[var(--orange)] shadow-lg"
        >
          <header>
            <h2
              id="kings-seed-heading"
              className="text-xl md:text-2xl font-semibold capitalize mb-4"
            >
              <span className="text-[var(--orange)] text-4xl block leading-tight">
                Kings Seeds
              </span>
              provides the most quality seeds
            </h2>
          </header>

          <p className="text-sm md:text-base text-justify mb-8">
            Kings Seeds is the seed division of Big Stars Animal Feed,
            delivering high-quality, certified hybrid maize and legume seeds
            tailored for Ghanaian farmers. With a focus on yield, resilience,
            and sustainability, Kings Seeds empowers agriculture with trusted
            varieties like Supreme and Teemeer 02 Hybrid Maize.
          </p>

          <Link
            href="/kingseeds"
            className="inline-block bg-[var(--orange)] hover:bg-[var(--deep-orange)] text-white text-sm font-medium py-3 px-8 rounded-lg transition-colors duration-300 ease-in-out"
          >
            Know More
          </Link>
        </article>
      </div>
    </section>
  );
};

export default KingsSeedMain;
