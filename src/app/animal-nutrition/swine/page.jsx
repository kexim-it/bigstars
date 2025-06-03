import PageHero from '@/components/PageHero'
import React from 'react'
import SwineImage from "@/app/assets/images/swine/pig-farming.webp"
import FirstSection from '@/components/about/FirstSection'
import SwineImages from '@/components/animal-nutrition/SwineImages'
import SwineFeed from '@/components/animal-nutrition/SwineFeed'
import MainAbout from '@/components/MainAbout'
import CTA from '@/components/CTA'

const page = () => {
  return (
    <div>
        <PageHero heroImage={SwineImage} subTitle={"Know more about our Pig Feed Services"} title={"Swine"} />
        <FirstSection title={"Our Swine Feed"} detail={"Big Stars Animal Feed offers a comprehensive range of swine services designed to support farmers across Ghana and West Africa. Established in 2017, the company specializes in producing high-quality, scientifically formulated feeds tailored to meet the nutritional needs of pigs at various growth stages."}  />
        <SwineImages />
        <SwineFeed />
        <MainAbout />
        <CTA />
    </div>
  )
}

export default page