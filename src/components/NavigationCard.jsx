import { QuickLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PoultryFeeding from "@/app/assets/images/poultry/poultry-1.jpg";
import Bernice from "@/app/assets/images/staff/bernice.png";

const NavigationCard = () => {
  return (
    <section
      className="w-[80vw] mx-auto bg-slate-100 border-b-4 rounded-2xl shadow-sm border-b-[var(--orange)] py-8 px-6 md:px-10 space-y-8"
      aria-label="Navigation Section"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-[var(--blue)]">Navigations</h3>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left: Links + Image */}
        <div className="flex flex-col md:flex-row items-start gap-6 w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {QuickLinks.map((quick, key) => (
              <Link
                key={key}
                href={quick.title}
                className="text-base md:text-lg flex items-center gap-3 group"
              >
                <span className="text-[var(--blue)] hover:text-[var(--orange)] duration-300 ease-in-out">
                  {quick.title}
                </span>
                <FaArrowRightLong className="group-hover:translate-x-2 duration-500 ease-in-out opacity-0 group-hover:opacity-100 text-[var(--orange)]" />
              </Link>
            ))}
          </div>
          <div className="w-full md:w-48 h-40 rounded-2xl overflow-hidden">
            <Image
              src={PoultryFeeding}
              alt="Poultry feeding image representing feed options"
              width={1080}
              height={1080}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Right: Contact Person */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="w-full h-40 rounded-xl overflow-hidden">
            <Image
              alt="Supplementary poultry feed visual"
              src={PoultryFeeding}
              className="object-cover w-full h-full"
              width={1080}
              height={1080}
            />
          </div>

          <Link
            href="mailto:sales@bigstars.ltd"
            className="flex items-center gap-4"
          >
            <Image
              src={Bernice}
              width={80}
              height={96}
              className="w-16 h-20 rounded-lg object-cover"
              alt="Bernice - Sales Manager at Big Stars Animal Feed"
            />
            <div className="space-y-1">
              <h4 className="text-base md:text-lg font-semibold italic text-[var(--blue)]">
                Bernice - Sales Manager
              </h4>
              <p className="text-sm text-slate-600">
                Email our sales manager for orders and queries. We’re here to serve you.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavigationCard;
// This component renders a navigation section with quick links and a contact person.