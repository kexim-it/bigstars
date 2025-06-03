import PageHero from '@/components/PageHero'
import React from 'react'
import Maize from "@/app/assets/images/maize/corn-crop.webp"
import FirstSection from '@/components/about/FirstSection'
import MainAbout from '@/components/MainAbout'
import KingsSeedMain from '@/components/KingsSeedMain'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <div>
        <PageHero heroImage={Maize} subTitle={"Get to know more about Kings Seeds"} title={"Kings Seeds"} />
        <FirstSection title={"About Kings Seeds"} detail={"Kings Seeds is a trusted provider of premium agricultural seeds, committed to supporting farmers with high-yield, disease-resistant, and climate-resilient seed varieties. We specialize in offering a diverse range of vegetable, cereal, and legume seeds that are carefully selected and tested to meet the needs of modern farming."} />
        
      <MainAbout/>
      <KingsSeedMain />
      <Testimonials />
    </div>
  )
}

export default page