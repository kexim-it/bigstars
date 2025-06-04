import PageHero from '@/components/PageHero'
import React from 'react'
import Concentrate from "@/app/assets/images/poultry/concentrate.webp"
import FirstSection from '@/components/about/FirstSection'
import SwineFeed from '@/components/animal-nutrition/SwineFeed'
import MainAbout from '@/components/MainAbout'
import CTA from '@/components/CTA'
import KeyFeatures from '@/components/animal-nutrition/KeyFeatures'
import Mashes from '@/components/animal-nutrition/Mashes'
import ConcentratePercent from '@/components/animal-nutrition/ConcentratePercent'

const page = () => {
  return (
    <div>
      <PageHero heroImage={Concentrate} subTitle={"Get to know about our feed concentrates"} title={"Feed Concentrates"}/>
       <FirstSection title={"Customize Your Feed with Big Stars Concentrates"} detail={"Big Stars Animal Feed Concentrates are expertly formulated premixed supplements designed to be combined with local energy sources like maize, wheat bran, or rice bran to produce complete feed. Our concentrates offer farmers a cost-effective way to create high-quality, balanced rations while maintaining control over raw materials."}  />
        
       <KeyFeatures />
       <ConcentratePercent />
       <Mashes />
        <MainAbout />
        <CTA />
    </div>
  )
}

export default page