import React from "react";
import "../styles/themes/designlibrary.css";
import { monasans } from "./font";
import DesignLibraryHero from "./DesignLibraryHero";
import DliAboutSection from "./DliAboutSection";
import GrowthStatsSection from "./GrowthStatsSection";
import WhyTrustDLISection from "./WhyTrustDLISection";
import ProblemsWeSolve from "./ProblemsWeSolve";
import SmarterWaySection from "./SmarterWaySection";
import DesignedForSection from "./DesignedForSection";
import DLIWorkflows from "./DLIWorkflows";
import StackedCategoriesSection from "./StackedCategoriesSection";
import KnitwearDesignSection from "./KnitwearDesignSection";
import LibraryCoverageSection from "./LibraryCoverageSection";
import MeasuredImpactSection from "./MeasuredImpactSection";
import FAQSection from "./FAQSection";
import PromiseHeroSection from "./PromiseHeroSection";
import TextSplitReveal from "./TextSplitReveal";
import HowDli from "./HowDli";
import BusinessLinker from "../vikava/component/BusinessLinker";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import YourDoubt from "../vikava/component/YourDoubt";

const Page = () => {
  return (
    <main
      className={`${monasans.variable}  page-designlibrary bg-[#ffffff] w-full flex flex-col justify-center items-center h-full`}
    >
      {/* <section className="w-full h-full flex flex-col justify-center items-center gap-10"> */}
      <DesignLibraryHero />
      <DliAboutSection />
      <GrowthStatsSection />
      <LibraryCoverageSection />

      {/* <GrowthStatsSection /> */}
      <WhyTrustDLISection />

      <StackedCategoriesSection />
      <DesignedForSection />
      <SmarterWaySection />
      <HowDli />
      <KnitwearDesignSection />

      {/* <ProblemsWeSolve />
      <DLIWorkflows />
      <MeasuredImpactSection /> */}
      <PromiseHeroSection />

      <FAQSection />

      <BusinessLinker />
      <CommunityInviteSection />
      <BuildScaleHero />

      <ScaleWithConfidence />
      {/* <TextSplitReveal/> */}
      {/* <HeroSection /> */}
      {/* </section> */}
    </main>
  );
};

export default Page;
