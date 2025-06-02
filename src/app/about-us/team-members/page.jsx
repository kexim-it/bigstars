import FirstSection from '@/components/about/FirstSection'
import PageHero from '@/components/PageHero'
import React from 'react'
import MGT from "@/app/assets/images/other/mgt.jpg"
import MainAbout from '@/components/MainAbout'
import CTA from '@/components/CTA'
import Team from '@/components/about/Team'

const page = () => {
  return (
    <div>
      <PageHero title={"Team Members"} heroImage={MGT} subTitle={"Get to know more about the Team Members of Big Stars Animal Feed"} />
      <FirstSection title={"Meet Our Team"} detail={"At Big Stars Animal Feed, our team is a dynamic blend of experienced agricultural professionals, nutritionists, supply chain experts, and dedicated field agents. Led by visionary leaders from the Kingdom Exim Group, we work together with a shared mission—to deliver premium animal feed solutions that empower farmers and boost food security across Ghana and beyond. Our passion for excellence drives innovation, quality, and customer satisfaction at every stage."} />
      <Team />
      <MainAbout />
      <CTA />
    </div>
  )
}

export default page