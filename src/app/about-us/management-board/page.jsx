import FirstSection from '@/components/about/FirstSection'
import MgtBoard from '@/components/about/MgtBoard'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'
import PageHero from '@/components/PageHero'
import React from 'react'
import MGT from "@/app/assets/images/other/mgt.jpg"

const page = () => {
  return (
    <div>
      <PageHero title={"Management Board"} heroImage={MGT} subTitle={"Get to know more about the management body of Big Stars Animal Feed"} />
      <FirstSection title={"The Management Team"} detail={"At Big Stars Animal Feed, our management team is the driving force behind our commitment to excellence in animal nutrition. With a blend of visionary leadership, technical expertise, and deep industry experience, our leaders ensure the company remains at the forefront of innovation, quality, and customer satisfaction in Ghana’s animal feed sector"} />
      <MgtBoard />
      <MainAbout />
      <CTA />
    </div>
  )
}

export default page