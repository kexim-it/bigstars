"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import MainImage from "@/app/assets/images/maize/maize-1.avif";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import About from "./nav/About";
import AnimalNutrition from "./nav/AnimalNutrition";
import Sustainability from "./nav/Sustainability";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 mx-auto font-[] relative w-screen ">
      <Link href={"/"}>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Big Stars Animal Feed"
          className=""
        />
      </Link>
      <ul className="flex items-center gap-5">
        <Link href={"/"}>
        <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">
            Home
          </li>
        </Link>
        {/* ABOUT BIGSTARS */}
        <About />
        {/* ANIMAL FEED */}
        <AnimalNutrition />
        {/* <Sustainability /> */}
        <Link href={"/kings-seeds"}>
          {" "}
          <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">
            Kings Seeds
          </li>
        </Link>

        <Link href={"/contact-us"}>
          {" "}
          <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)]">
            Contact Us
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
