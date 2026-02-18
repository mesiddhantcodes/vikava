import React from "react";
import "../styles/themes/sustain.css";
import { afacadMedium, afacadBold, vintageRough } from "./fonts";
import { Top } from "./Top";
import StackedImageScrollSection from "./StackedImageScrollSection";
import WhySustainableDesign from "./WhySustainableDesign";
import WhoWeServe from "./WhoWeServe";
import FinishedGoodsSourcingSection from "./FinishedGoodsSourcingSection";
import RawMaterialSection from "./RawMaterialSection";
import WhyPartnerSection from "./WhyPartnerSection";
import FounderSustainabilitySection from "./FounderSustainabilitySection";
import SustainableProjectHero from "./SustainableProjectHero";
import ChallengesWeSolve from "./ChallengesWeSolve";
import ExecutionSection from "./ScrollingBg";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import BusinessLinker from "../vikava/component/BusinessLinker";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import FAQSection from "../design-library-of-india/FAQSection";
import { SDL_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Sustainable Apparel & Textile Sourcing India | SDL",
  description:
    "Sustainable sourcing for apparel, home, and lifestyle products using certified materials and handmade processes.",
  keywords: "sustainable sourcing india",
};

const Page = () => {
  return (
    <main
      className={`${afacadMedium.variable} ${afacadBold.variable} ${vintageRough.variable} page-sustain bg-[#D0D0D0] w-full h-full`}
    >
      <Top />
      <StackedImageScrollSection />
      <GrowthStatsSection />
      <WhySustainableDesign />
      <WhoWeServe />
      <ChallengesWeSolve />
      <FinishedGoodsSourcingSection />
      <RawMaterialSection />
      <ExecutionSection />
      <WhyPartnerSection />
      <FounderSustainabilitySection />
      {/* <SustainableProjectHero /> */}
      <FAQSection faqs={SDL_FAQ} name="SDL" />

      <BusinessLinker />
      <CommunityInviteSection />

      <BuildScaleHero />

      <ScaleWithConfidence />
      {/* <p className="font-afacadMedium text-lg">Afacad Medium active</p> */}
      {/* <p className="font-vintageRough text-xl">Vintage Rough font works!</p> */}
    </main>
  );
};

export default Page;
