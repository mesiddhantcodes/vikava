import React from "react";
import { absansRegular, karantinaRegular } from "./fonts";
// import "./styles/designcartel.css";
import "../styles/themes/designcartel.css";
import DesignCartelSection from "./DesignCartelSection";
import SketchToSampleSection from "./SketchToSampleSection";
import CreativeEngineSection from "./CreativeEngineSection";
import ChallengesSolutionSection from "./ChallengesSolutionSection";
import CategoriesSection from "./CategoriesSection";
import FounderVoiceSection from "./FounderVoiceSection";
import CTASection from "./CTASection";
import PortfolioSection from "./PortfolioSection";
import CartelEdgeSection from "./CartelEdgeSection";
import EngagementModelsSection from "./EngagementModelsSection";
import ScrollTextSection from "./ScrollTextSection";
import WhoWeServeSection from "./WhoWeServeSection";
import ServiceSlidesSection from "./ServiceSlidesSection";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import BusinessLinker from "../vikava/component/BusinessLinker";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import FAQSection from "../design-library-of-india/FAQSection";
import { DESIGN_CARTEL_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Product Design Studio for Apparel & Lifestyle | Design Cartel",
  description:
    "Production-ready product design for apparel, home, and lifestyle categories with speed, margins, and manufacturability.",
  keywords: "product design studio india",
};

const Page = () => {
  return (
    <main
      className={`
        ${absansRegular.variable}
        ${karantinaRegular.variable}
        page-designcartel
        bg-[#F5F5F5]
        w-full h-full 
      `}
    >
      {/* <section className="w-[95%] flex flex-col gap-6">
        <h1 className="karantina-400  text-5xl primary">Design Cartel</h1>

        <p className="absans-400 text-lg secondary">
          Absans body text for Design Cartel page.
        </p>
      </section> */}
      <DesignCartelSection />
      <SketchToSampleSection />
      <GrowthStatsSection />
      <CreativeEngineSection />
      <ScrollTextSection />
      <WhoWeServeSection />
      <ChallengesSolutionSection />
      <ServiceSlidesSection />
      <EngagementModelsSection />

      <CategoriesSection />
      <PortfolioSection />

      <CartelEdgeSection />

      <FounderVoiceSection />
      {/* <CTASection /> */}
      <FAQSection faqs={DESIGN_CARTEL_FAQ} name="Design Cartel" />

      <BusinessLinker />
      <CommunityInviteSection />
      <BuildScaleHero />

      <ScaleWithConfidence />
    </main>
  );
};

export default Page;
