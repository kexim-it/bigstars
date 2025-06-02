import Image from 'next/image'
import React from 'react'
import AnimalFeed from "@/app/assets/images/poultry/feed-3.jpg"


const Purpose = () => {
  return (
    <div className='relative'>
        <Image src={AnimalFeed} className='w-screen h-screen object-cover' width={1080} height={1080} alt='animal feed' />
        <div className="w-full h-full absolute top-0 left-0" />
        <div className="bg-[var(--deep-blue)]/50 w-[40rem] p-10 rounded-lg h-96 absolute z-10  bottom-20 left-20 space-y-4">
            <h4 className="text-white text-3xl">Our Purpose</h4>
            <p className="text-white">
              Big Stars Animal Feed exists to deliver premium-quality feed solutions that promote healthy livestock, increase farm productivity, and support the success of farmers across Ghana and beyond.
            </p>
        </div>
    </div>
  )
}

export default Purpose