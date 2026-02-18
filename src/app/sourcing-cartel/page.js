import React from "react";
import "../styles/themes/sourcingcartel.css";
import {
  aileronRegular,
  aileronBold,
  alumnisansBold,
  bespokestencilMedium,
} from "./font";
import AboutSection from "./AboutSection";
import WhyWeExistSection from "./WhyWeExistSection";
import SourcingCartelHeroSection from "./SourcingCartelHeroSection";
import SourcingCartelImageScrollSection from "./SourcingCartelImageScrollSection";
import WhoWeServeSection from "./Circular";
import SCStackCard from "./SCStackCard";
import { ScrollStackDemo } from "@/Components/StackCard";
import PartnersSection from "./PartnersSection";
import HorizontalImageSections from "./HorizontalImageSections";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import BusinessLinker from "../vikava/component/BusinessLinker";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import FinishedGoodsCategories from "./FinishedGoodsCategories";
import RawMaterialCategories from "./RawMaterialCategories";
import WhyPartnerWithUs from "./WhyPartnerWithUs";
import SLAAndKPIsSection from "./SLAAndKPIsSection";
import AWordFromTheFounder from "./AWordFromTheFounder";
import FAQSection from "../design-library-of-india/FAQSection";
import { SOURCING_CARTEL_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Apparel & Textile Sourcing Partner in India | Sourcing Cartel",
  description:
    "End-to-end sourcing for apparel, home furnishings, lifestyle products, and raw materials with compliance and reliability.",
  keywords: "apparel sourcing company india",
};

const Page = () => {
  return (
    <main
      className={`${aileronRegular.variable} ${aileronBold.variable} ${alumnisansBold.variable} ${bespokestencilMedium.variable} page-sourcingcartel bg-[#F5F5F5] w-full max-w-[100vw] flex flex-col items-center h-full`}
    >
      {/* FIXED HERO - sits at the back */}
      <SourcingCartelHeroSection />

      {/* SPACER equal to hero height so content starts after it */}
      <div className="h-dvh" />

      {/* All content ABOVE the hero via z-index */}
      <section className="relative z-10 w-full bg-[#F5F5F5]">
        <AboutSection />
      </section>

      <section className="relative z-10 w-full bg-[#F5F5F5]">
        <GrowthStatsSection />

        <WhyWeExistSection />

        <SourcingCartelImageScrollSection />
        <WhoWeServeSection />
        <SCStackCard />
        <HorizontalImageSections />
        <PartnersSection />
        <FinishedGoodsCategories />
        <RawMaterialCategories />
        <WhyPartnerWithUs />
        <SLAAndKPIsSection />
        <AWordFromTheFounder />
        <FAQSection faqs={SOURCING_CARTEL_FAQ} name="Sourcing Cartel" />
        <BusinessLinker />
        <CommunityInviteSection />
        <BuildScaleHero />

        <ScaleWithConfidence />
      </section>
    </main>
  );
};

export default Page;
