import React from "react";
import "./fonts";
import "../styles/themes/vikavalab.css";

import {
  barlowCondensedExtraBold,
  bigShouldersBlack,
  poppinsBold,
  poppinsMedium,
} from "./fonts";
import VikavaHero from "./VikavaHero";
import StorySection from "./StorySection";
import AboutSection from "./AboutSection";
import WhoWeServeSection from "./WhoWeServeSection";
import ZoomSection from "./ZoomSection";
import WorkHubSection from "./Workhub";
import WhyVikavaSection from "./WhyVikavaSection";
import FoundersNoteSection from "./FoundersNoteSection";
import ContactBuildSection from "./ContactBuildSection";
import DigitalCommerceStack from "./DigitalCommerceStack";
import ScientificBrandingSection from "./ScientificBrandingSection";
import ChallengesSection from "./ChallengesSection";
import ServiceSlidesSection from "./ServiceSlidesSection";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import BusinessLinker from "../vikava/component/BusinessLinker";
import FAQSection from "../design-library-of-india/FAQSection";

import { VIKAVA_DESIGN_LAB_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Brand Identity, Packaging & UI UX Design | Vikava Design Lab",
  description:
    "Brand clarity through identity, packaging, UI/UX, and content systems designed for recall, trust, and conversion.",
  keywords: "brand identity and design studio india",
};

export default function Page() {
  return (
    <main
      className={`${barlowCondensedExtraBold.variable} ${bigShouldersBlack.variable} ${poppinsBold.variable} ${poppinsMedium.variable} page-vikavalab bg-white w-full`}
    >
      <section className=" mx-auto bg-[#3D86FF]">
        <VikavaHero />
        <ZoomSection />
        <StorySection />
        <GrowthStatsSection />
        <AboutSection />
        <WhoWeServeSection />
        <ChallengesSection />
        {/* <CreativeCapabilitiesHero /> */}
        {/* <div className="h-[100vh]" /> */}
        <ServiceSlidesSection />

        <DigitalCommerceStack />
        <ScientificBrandingSection />
        <WorkHubSection />

        <WhyVikavaSection />
        <FoundersNoteSection />
        <FAQSection faqs={VIKAVA_DESIGN_LAB_FAQ} name="Vikava Design Lab" />
        <BusinessLinker />

        <CommunityInviteSection />

        <BuildScaleHero />

        <ScaleWithConfidence />
        {/* <ContactBuildSection /> */}
      </section>
    </main>
  );
}
