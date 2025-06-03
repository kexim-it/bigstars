"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import About from "./nav/About";
import AnimalNutrition from "./nav/AnimalNutrition";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm z-50 relative">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Big Stars Animal Feed"
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">
            <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)] cursor-pointer">
              Home
            </li>
          </Link>
          <About />
          <AnimalNutrition />
          {/* <Sustainability /> */}
          <Link href="/kings-seeds">
            <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)] cursor-pointer">
              Kings Seeds
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="hover:text-[var(--orange)] duration-300 ease-in-out text-[var(--blue)] cursor-pointer">
              Contact Us
            </li>
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-[var(--blue)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start gap-6 px-6 py-4 bg-white border-t md:hidden font-medium">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-[var(--orange)] text-[var(--blue)]">Home</li>
          </Link>
          <About />
          <AnimalNutrition />
          {/* <Sustainability /> */}
          <Link href="/kings-seeds" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-[var(--orange)] text-[var(--blue)]">Kings Seeds</li>
          </Link>
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            <li className="hover:text-[var(--orange)] text-[var(--blue)]">Contact Us</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
