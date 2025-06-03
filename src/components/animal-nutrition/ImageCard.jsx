import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
const ImageCard = ({img, alt}) => {
  return (
    <div className='w-96 hover:w-[30rem] h-52 overflow-hidden relative group  cursor-pointer'>
        <Image alt={alt} src={img} width={1080} height={1080} className='w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-300 ease-in-out filter grayscale group-hover:grayscale-0'/>
        <div className="h-full w-full duration-300 ease-in-out group-hover:bg-black/0 bg-black/0 absolute z-10 inset-0" />
        <FaPlus className='text-white bg-[var(--blue)] w-5 h-5 p-1 rounded-full absolute z-20 top-24 left-40 text-sm opacity-0 duration-300 ease-in-out group-hover:opacity-100' />
    </div>
  )
}

export default ImageCard