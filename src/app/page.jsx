import MainAbout from "@/components/MainAbout";
import MainHero from "@/components/MainHero";
import Timeline from "@/components/Timeline";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";
import FeedNutrients from "@/components/FeedNutrients";
import KingsSeedMain from "@/components/KingsSeedMain";
import Testimonials from "@/components/Testimonials";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  return (
    <div className="">
      <MainHero />
      <WhatWeDo />
      <FeedNutrients />
      <VideoCard />
      <MainAbout/>
      <KingsSeedMain />
      <Testimonials />
    </div>
  );
}
