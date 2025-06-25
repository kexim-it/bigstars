import { footerLinks } from '@/data';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { CiLinkedin } from 'react-icons/ci';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--blue)] border-t-8 border-t-[var(--orange)] text-white py-10 px-6 w-full">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4 uppercase text-white">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url || '#'} // use `link.url` if available
                    className="hover:underline underline-offset-4 hover:text-[var(--orange)] transition duration-300 text-sm text-gray-200"
                    aria-label={link}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}

      {/* Social Media Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-6 md:gap-0 px-6">
        <h4 className="text-xl font-bold text-[var(--orange)] tracking-widest">Follow Us</h4>
        <div className="flex items-center gap-6">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--orange)] transition duration-300"
          >
            <RiFacebookCircleLine />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--orange)] transition duration-300"
          >
            <RiInstagramLine />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--orange)] transition duration-300"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--orange)] transition duration-300"
          >
            <CiLinkedin />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl border-t pt-6 border-white mx-auto mt-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {/* <Link href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-white transition duration-300">Disclaimer</Link> */}
        </div>
        <p className="text-center">© {new Date().getFullYear()} Big Stars Animal Feed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
