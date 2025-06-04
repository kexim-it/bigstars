import PageHero from '@/components/PageHero'
import React from 'react'
import WelfareImage from "@/app/assets/images/poultry/hen-3.jpg"
import FirstSection from '@/components/about/FirstSection'
import WelfareCard from '@/components/animal-welfare/WelfareCard'
import WelfareCommit from '@/components/animal-welfare/WelfareCommit'
import MainAbout from '@/components/MainAbout'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import WelfareMatters from '@/components/animal-welfare/WelfareMatters'

const page = () => {
  return (
    <div>
        <PageHero heroImage={WelfareImage} subTitle={"Big Stars Animal Feed Limited — Committed to Ethical Nutrition and Sustainable Farming Practices"} title={"Animal Welfare"}/>
        <FirstSection detail={"At Big Stars Animal Feed Limited, we believe that animal welfare is at the heart of sustainable and ethical livestock farming. Our mission goes beyond producing high-quality animal feeds — we are committed to supporting the health, comfort, and well-being of farm animals across Ghana and beyond. We understand that healthy, well-cared-for animals perform better, produce higher yields, and contribute to a more sustainable food system. That’s why all our feeds are formulated to meet the nutritional needs that promote not only growth but also the vitality and natural behavior of animals."} title={"Nurturing Healthy Livestock Through Superior Animal Welfare"}/>
        <WelfareCommit />
        <WelfareMatters />
        <CTA />
        <MainAbout />
        <Testimonials />
    </div>
  )
}

export default page