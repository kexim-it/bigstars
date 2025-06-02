import Image from 'next/image'
import React from 'react'
import FeedImage from "@/app/assets/images/poultry/feed-1.jpg"
import ImageBox from '../ImageBox'

const SecondSection = () => {
  return (
    <div className='my-10 w-[80vw] mx-auto flex items-center justify-between'>
        <div className="w-1/2">
            <h3 className="text-3xl text-[var(--blue)]">Powering Agriculture Sustainably, One Tonne at a Time</h3>
            <p className="text-justify">
                The company operates a 12-metric-tonne-per-hour feed mill equipped with advanced, energy-efficient machinery designed to minimize waste and conserve resources. They prioritize using locally grown, non-GMO soybeans and other ingredients to support Ghana’s agricultural sector and reduce transportation emissions. By processing soybeans in-house, they reduce external supply chains, allowing them to maintain strict quality standards while minimizing their carbon footprint.
            </p>
        </div>
        <ImageBox img={FeedImage} />
    </div>
  )
}

export default SecondSection