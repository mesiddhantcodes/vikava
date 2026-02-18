import BuildScaleHero from "../vikava/component/BuildScaleHero";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import CareersManifestoSection from "./CareersManifestoSection";
import HomeCareer from "./HomeCareer";
import HowToInterest from "./HowToInterest";

export const metadata = {
  title: {
    default: "Careers at Vikava Labs",
    template: "%s | Vikava Labs",
  },

  description:
    "Build Long-Term Business Infrastructure Meta Description: Explore careers at Vikava Labs.Work with teams building business strategy, platforms, and growth systems in India and globally",
}

export default function Careers() {
  return (
    <>
      <HomeCareer />
      <CareersManifestoSection />
      <HowToInterest />
      {/* <CommunityInviteSection /> */}
      <BuildScaleHero />

      <ScaleWithConfidence />
    </>
  );
}
