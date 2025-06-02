import PageHero from '@/components/PageHero'
import React from 'react'
import FeedImage from "@/app/assets/images/poultry/feed-1.jpg"
import FirstSection from '@/components/about/FirstSection'
import CoreOperations from '@/components/about/CoreOperations'
import MainAbout from '@/components/MainAbout'
import CTA from '@/components/CTA'

const page = () => {
  return (
    <div>
      <PageHero title={"Company Profile"} heroImage={FeedImage} subTitle={"Get to know more about Big Stars Animal Feed Company profile"} />
      <FirstSection title={"Company Overview"} detail={"Big Stars Animal Feed Limited is a Ghanaian-owned agribusiness established in 2017, specializing in the production of high-quality animal feed. The company serves the livestock and poultry sectors across Ghana's 16 regions, offering scientifically formulated feed solutions to enhance animal health and farm productivity. With a commitment to sustainability, quality, and customer satisfaction, Big Stars aims to be a trusted partner for farmers and distributors alike."} />
      <CoreOperations />
      <MainAbout />
      <CTA />
    </div>
  )
}

export default page