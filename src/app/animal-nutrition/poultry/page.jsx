import PageHero from '@/components/PageHero'
import React from 'react'
import PoultryImage from "@/app/assets/images/poultry/poultry-3.jpg"
import FirstSection from '@/components/about/FirstSection'
import PoultryFeed from '@/components/animal-nutrition/PoultryFeed'
import CTA from '@/components/CTA'
import MainAbout from '@/components/MainAbout'
import AnimalImages from '@/components/animal-nutrition/AnimalImages'

const page = () => {
  return (
    <div>
        <PageHero heroImage={PoultryImage} title={"Poultry"} subTitle={"Get to know more about our poultry services"} />
        <FirstSection title={"Our Poultry Feed"} detail={"Big Stars Animal Feed offers a comprehensive range of poultry services designed to support farmers across Ghana and West Africa. Established in 2017, the company specializes in producing high-quality, scientifically formulated feeds tailored to meet the nutritional needs of poultry at various growth stages."}  />
        <AnimalImages />
        <PoultryFeed />
        <MainAbout />
        <CTA />

    </div>
  )
}

export default page