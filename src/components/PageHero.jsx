import Image from 'next/image'
import React from 'react'

const PageHero = ({title, subTitle, heroImage}) => {
  return (
    <div className='w-screen h-[30vh] bg-[var(--deep-blue)] overflow-hidden'>
        <div className="w-[80vw] py-10 mx-auto text-white flex items-center justify-between">
            <div className="">
            <h1 className=" text-5xl font-semibold">{title}</h1>
            <p className="text-[var(--orange)]">{subTitle}</p>
            </div>
            <div className="w-72 h-40">
                <Image src={heroImage} alt='' width={1080} height={1080} className='rounded-2xl object-cover w-full h-full' />
            </div>
                

        </div>
    </div>
  )
}

export default PageHero