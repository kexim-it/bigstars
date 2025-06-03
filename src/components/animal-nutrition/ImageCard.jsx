import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const ImageCard = ({ img, alt }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="w-96 hover:w-[30rem] h-52 overflow-hidden relative group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[var(--blue)] rounded"
      aria-label={`View more about ${alt}`}
    >
      <Image
        alt={alt}
        src={img}
        width={1080}
        height={1080}
        className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-300 ease-in-out filter grayscale group-hover:grayscale-0"
        priority={false}
      />
      <div className="absolute inset-0 z-10 bg-black/0 duration-300 ease-in-out group-hover:bg-black/20" />
      <FaPlus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-[var(--blue)] w-7 h-7 p-1 rounded-full opacity-0 duration-300 ease-in-out group-hover:opacity-100" />
    </div>
  )
}

export default ImageCard
