import CoreOperations from '@/components/about/CoreOperations'
import FirstSection from '@/components/about/FirstSection'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'
import PageHero from '@/components/PageHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero title={"Our Business"} heroImage={FeedImage} subTitle={"Get to know more about the business of Big Stars Animal Feed"} />
      <FirstSection title={"Our Business Structure"} detail={"Big Stars Animal Feed Limited is a Ghanaian-owned agribusiness established in 2017, specializing in the production of high-quality animal feed. The company serves the livestock and poultry sectors across Ghana's 16 regions, offering scientifically formulated feed solutions to enhance animal health and farm productivity. With a commitment to sustainability, quality, and customer satisfaction, Big Stars aims to be a trusted partner for farmers and distributors alike."} />
      <CoreOperations />
      <MainAbout />
      <CTA />
    </div>
  )
}

export default page