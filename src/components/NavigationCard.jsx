import { QuickLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PoultryFeeding from "@/app/assets/images/poultry/poultry-1.jpg";
import Bernice from "@/app/assets/images/staff/bernice.png";

const NavigationCard = () => {
  return (
    <div className="w-[85vw] 2xl:w-[] mx-auto bg-slate-100 border-b-4 rounded-2xl shadow-sm border-b-[var(--orange)] h-96 py-5 px-10">
      <h3 className="text-2xl font-semibold text-[var(--blue)]">Navigations</h3>
      <div className=" flex items-end justify-between gap-5">
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-x-10 space-y-5">
            {QuickLinks.map((quick, key) => (
              <Link
                key={key}
                href={quick.title}
                className="text-xl flex items-center gap-5 group"
              >
                <span className="text-[var(--blue)] hover:text-[var(--orange)] duration-300 ease-in-out">
                  {quick.title}
                </span>
                <FaArrowRightLong className="group-hover:translate-x-5 duration-1000 ease-in-out group-hover:block group-hover:text-[var(--orange)] translate-x-0 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
          <div className="w-52 h-70 rounded-2xl">
            <Image
              src={PoultryFeeding}
              alt="Navigation-image"
              width={1080}
              height={1080}
              className="object-cover h-full w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="">
          <div className="w-96 h-44 overflow-hidden rounded-xl">
            <Image alt="" src={PoultryFeeding} className="object-cover" />
          </div>
          <Link
            href={"mailto:sales@bigstars.ltd"}
            className="flex items-end gap-6"
          >
            <Image
              src={Bernice}
              width={1080}
              height={1080}
              className="w-20 h-24 object-cover"
              alt="Big Stars Animal Feed Sales Manager"
            />
            <div className="">
              <div className="w-72">
                <h4 className="text-lg font-semibold italic text-[var(--blue)]">
                  Bernice - Sales Manager
                </h4>
                <p className="text-slate-600 text-sm">
                  Contact our sales manager via email for your offers. We are
                  always happy to get in touch with our customers
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationCard;
