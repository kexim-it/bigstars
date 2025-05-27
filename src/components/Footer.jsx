import { footerLinks } from '@/data'
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--blue)] border-t-8 border-t-[var(--orange)] text-white py-10 px-6">
      <div className="max-w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  pb-10">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4 uppercase text-white">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:underline  underline-offset-0 hover:underline-offset-4  hover:text-[var(--orange)] duration-300 ease-in-out text-sm text-gray-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social and Bottom Bar */}
      <div className="flex items-center justify-between max-w-[80vw] px-28 mx-auto">
        <div className=""></div>
        <div className="w-[10rem]">
          <h4 className="text-xl font-bold text-[var(--orange)] tracking-widest">Social Media</h4>
          <div className="flex items-center justify-between">
            <Link className='text-2xl hover:text-[var(--orange)] duration-300 ease-in-out' href={"https://facebook.com"} target='_blank'>
            <RiFacebookCircleLine />
            </Link>
            <Link className='text-2xl hover:text-[var(--orange)] duration-300 ease-in-out' href={"https://instagram.com"} target='_blank'>
            <RiInstagramLine />
            </Link>
            <Link className='text-2xl hover:text-[var(--orange)] duration-300 ease-in-out' href={"https://twitter.com"} target='_blank'>
            <FaXTwitter />
            </Link>
            <Link className='text-2xl hover:text-[var(--orange)] duration-300 ease-in-out' href={"https://linkedin.com"} target='_blank'>
            <CiLinkedin />
            </Link>
          </div>

        </div>
        
      </div>
      <div className="max-w-[80vw] border-t pt-4 border-white mx-auto mt-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white">Privacy policy</Link>
          {/* <Link href="#" className="hover:text-white">Cookie Policy</Link> */}
          <Link href="#" className="hover:text-white">Disclaimer</Link>
          {/* <Link href="#" className="hover:text-white">Manage cookies</Link> */}
        </div>
        <p>© Big Stars Animal Feed</p>
      </div>
    </footer>
  )
}

export default Footer