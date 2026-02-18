// app/components/AboutHero.jsx

import { motion } from "framer-motion";
import Image from "next/image";

import AboutVikavaIntro from "../vikava/component/AboutVikavaIntro";
import MissionSection from "../vikava/component/MissionSection";
import FounderSection from "../vikava/component/FounderSection";
import WhyNowSection from "../vikava/component/WhyNowSection";
import HistorySection from "../vikava/component/HistorySection";
import ValuesSection from "../vikava/component/ValuesSection";
import BuiltInIndiaSection from "../vikava/component/BuiltInIndiaSection";
import WhoWeServeAbout from "../vikava/component/WhoWeServeAbout";
import WhyVikavaLabAbout from "../vikava/component/WhyVikavaLabAbout";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import HeroSection from "./HeroSection";

export default function AboutHero() {
  return (
    <>
      <HeroSection />
      {/* Rest sections untouched */}
      <AboutVikavaIntro />
      <ValuesSection />
      <HistorySection /> <BuiltInIndiaSection />
      <WhoWeServeAbout />
      <WhyNowSection /> <FounderSection />
      <MissionSection /> <WhyVikavaLabAbout />
      <CommunityInviteSection />
      <BuildScaleHero />
      <ScaleWithConfidence />
    </>
  );
}
