import React from "react";
import "../styles/themes/mac.css";
import {
  hooskaichamfered,
  spaceGroteskRegular,
  spaceGroteskBold,
} from "./fonts";

import GlobalBackgroundVideo from "./GlobalBackgroundVideo";

import Hero from "./Hero";
import WhoWeServeSection from "./WhoWeServeSection";
import FounderChallengeSection from "./FounderChallengeSection";
import ChallengesSection from "./ChanllengesSection";
import WhatWeOfferSection from "./WhatWeOfferSection";
import EngagementModelsSection from "./EnagagementModel";
import AdvisorySprintsSection from "./AdvisorySprintsSection";
import WhyMacWorksSection from "./WhyMacWorksSection";
import FounderFirstSection from "./FounderFirstSection";
import FounderForFoundersSection from "./FounderForFoundersSection";
import ReadyToScaleSection from "../last-hashtag/ReadyToScaleSection";
import BreakthroughHero from "./BreakthroughHero";
import BusinessLinker from "../vikava/component/BusinessLinker";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import FAQSection from "../design-library-of-india/FAQSection";

import { MAC_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Founder Advisory, Mentorship & Compliance | MAC by Vikava Labs",
  description:
    "Founder operating system offering mentorship, governance, compliance, and execution support for startups, brands, and businesses.",
  keywords: "founder advisory and compliance services india",
};

export default function Page() {
  return (
    <>
      {/* GLOBAL FIXED VIDEO */}
      <GlobalBackgroundVideo />

      {/* PAGE CONTENT */}
      <main
        className={`
          ${hooskaichamfered.variable}
          ${spaceGroteskRegular.variable}
          ${spaceGroteskBold.variable}
          page-mac
          relative
          w-full
          min-h-screen
          bg-transparent
        `}
      >
        <Hero />
        <GrowthStatsSection />

        <WhoWeServeSection />

        <FounderChallengeSection />
        <ChallengesSection />
        <WhatWeOfferSection />

        <EngagementModelsSection />
        <AdvisorySprintsSection />
        <WhyMacWorksSection />
        <FounderFirstSection />
        <FounderForFoundersSection />
        <FAQSection faqs={MAC_FAQ} name="MAC" />

        <BusinessLinker />

        {/* <ReadyToScaleSection /> */}
        {/* <BreakthroughHero /> */}
        <CommunityInviteSection />
        <BuildScaleHero />

        <ScaleWithConfidence />
      </main>
    </>
  );
}
