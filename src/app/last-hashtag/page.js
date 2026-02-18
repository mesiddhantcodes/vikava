import React from "react";
import "../styles/themes/lasttag.css";
import { galindoRegular, interMedium, interSemiBold } from "./fonts";
import Hero from "./Hero";
import { ImageStaggerSection } from "./SequentialRevealSection";
import { AgencyGrowthSection } from "./AgencyGrowthSection";
import { CoverageSection } from "./CoverageSection";
import { ChallengesSection } from "./ChanllengesSection";
import { B2BGrowthSection } from "./B2BGrowthSection";
import { HowWeWorkSection } from "./HowWeWorkSection";
import { WhyLastTagSection } from "./WhyLastTagSection";
import ClassicWinsSection from "./ClassicWinsSection";
import { FounderIntroSection } from "./FounderIntroSection";
import { BeSeenHero } from "./BeSeenHero";
import MarketLoudClearSection from "./MarketLoudClearSection";
import ServicesCuboidSection from "./ServicesCuboidSection";
import ReadyToScaleSection from "./ReadyToScaleSection";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import BusinessLinker from "../vikava/component/BusinessLinker";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import FAQSection from "../design-library-of-india/FAQSection";
import { LAST_TAG_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Growth Marketing Execution for Brands | Last Hashtag",
  description:
    "Growth execution covering positioning, content, performance, influencers, and demand systems across D2C and B2B.",
  keywords: "growth marketing execution india",
};

const Page = () => {
  return (
    <main
      className={`${galindoRegular.variable} ${interMedium.variable} ${interSemiBold.variable} page-lasttag  w-full h-full`}
    >
      <Hero />
      <MarketLoudClearSection />
      <AgencyGrowthSection />
      <GrowthStatsSection />


      <CoverageSection />

      <ChallengesSection />

      <ServicesCuboidSection />

      <B2BGrowthSection />
      <ReadyToScaleSection />

      <HowWeWorkSection />
      <WhyLastTagSection />
      {/* <ClassicWinsSection /> */}
      <FounderIntroSection />

      {/* <BeSeenHero /> */}
      <FAQSection faqs={LAST_TAG_FAQ} name="Last #Tag" />

      <BusinessLinker />
      <CommunityInviteSection />
      <BuildScaleHero />

      <ScaleWithConfidence />
      {/* content */}
      {/* <h1 className="text-4xl font-semibold mb-6">Last Tag Page</h1> */}
    </main>
  );
};

export default Page;
