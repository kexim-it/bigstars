import PageHero from '@/components/PageHero'
import React from 'react'
import StrategyImage from "@/app/assets/images/other/strategy.jpg"
import FirstSection from '@/components/about/FirstSection'
import Strategies from '@/components/about/Strategies'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'

const page = () => {
  return (
    <div>
      <PageHero heroImage={StrategyImage} subTitle={"Driving Sustainable Growth Through Innovation, Local Partnerships, and Nutritional Excellence"} title={"Our Strategy"} />
      <FirstSection title={"Empowering Farmers, Strengthening Agriculture"} detail={"Big Stars Animal Feed Limited's business strategy is centered on delivering high-quality, sustainable animal nutrition solutions while supporting Ghana's agricultural sector. Here's an overview of their strategic pillars"}  />
      <Strategies />
      <MainAbout/>
      <CTA />
    </div>
  )
}

export default page