import PageHero from '@/components/PageHero'
import React from 'react'
import Feeding from "@/app/assets/images/poultry/chick-6.avif"
import FirstSection from '@/components/about/FirstSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'

const page = () => {
  return (
    <div>
        <PageHero heroImage={Feeding} subTitle={"Get to know more about our reponsible feeding measures"} title={"Responsible Feeding"} />
        <FirstSection detail={"At Big Stars Animal Feed Limited, responsible feeding is more than just providing quality feed—it’s about fostering a sustainable and ethical approach to animal nutrition that benefits farmers, animals, and the environment alike. We understand that the foundation of healthy, productive livestock lies in balanced and mindful feeding practices. Our feeds are carefully formulated to meet the nutritional needs of various livestock species while minimizing waste and environmental impact. By encouraging farmers to adopt responsible feeding strategies, we help ensure that animals receive the right nutrients in the right amounts, promoting optimal growth, improved immunity, and overall well-being. We also emphasize educating farmers on proper feed storage, handling, and rationing to reduce spoilage and overfeeding. Responsible feeding at Big Stars is a holistic approach that supports animal welfare, enhances farm productivity, and contributes to a sustainable food system for Ghana and beyond. Choosing Big Stars Animal Feed means partnering with a company that is dedicated to responsible, science-backed nutrition practices—helping you raise healthier animals while protecting natural resources for future generations."} title={"Responsible Feeding: The Big Stars Commitment to Sustainable Livestock Nutrition"} />
        <Testimonials />
        <CTA />
        <MainAbout />
    </div>
  )
}

export default page