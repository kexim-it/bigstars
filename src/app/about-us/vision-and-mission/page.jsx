import FirstSection from '@/components/about/FirstSection'
import Purpose from '@/components/about/Purpose'
import SecondSection from '@/components/about/SecondSection'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'
import PageHero from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import React from 'react'

import VisionMission from "@/app/assets/images/other/vision_mission.webp"

const page = () => {
  return (
    <div>
      <PageHero title={"Vision and Mission"} subTitle={"Get to know more about our mission and vision"} heroImage={VisionMission} />
      <FirstSection title={"Advanced Nutrition for Livestock Well-being"} detail={"Big Stars Animal Feed Limited is a Ghanaian company established in 2017, specializing in the production of high-quality animal feed to support the nation's livestock and poultry industries. Their product range includes compounded mashes, concentrates, and soybean meal tailored for poultry, pigs, rabbits, and guinea fowl ."} />
      <SecondSection />
      <MainAbout/>
      <Purpose />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default page