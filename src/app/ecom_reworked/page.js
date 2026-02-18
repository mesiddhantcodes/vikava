import { boldonse, clashDisplay, meowScript } from "./fonts";
import "../styles/themes/ecomm.css";
import Herocomm from "./Herocomm";
import ScrollImage from "./ScrollImage";
import Home from "./test";
import TextSection from "./TextSection";
import Aboutusecomm from "./Aboutusecomm";
import WhoWeServe from "./WhoWeServe";
import ChallengesSection from "./ChallengesSection";
import ServicesGrid from "./serviceGrid";
import VideoOverText from "./VideoOverText";
import FeaturesSection from "./FeaturesSection";
import AdvantageSection from "./AdvantageSection";
import LastText from "./LastText";
import EcommFounder from "./EcommFounder";
import CTASection from "./EcommCTA";
import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import FAQSection from "../design-library-of-india/FAQSection";
import BusinessLinker from "../vikava/component/BusinessLinker";

import { ECOMMERCE_FAQ } from "../../constants/faqData";

export const metadata = {
  title: "Ecommerce Growth Systems for D2C & B2B | Ecom Reworked",
  description:
    "End-to-end ecommerce systems covering storefronts, funnels, CRM, payments, logistics, and sales workflows.",
  keywords: "ecommerce growth systems india",
};

export default function EcommPage() {
  return (
    <main
      className={`${boldonse.variable} ${clashDisplay.variable} ${meowScript.variable} page-ecomm bg-[#171717] w-full flex flex-col justify-center items-center h-full`}
    >
      <section className="w-[95%] h-full flex flex-col justify-center items-center gap-10">
        <Herocomm />
        <hr className="border-b border-white/20 w-full border-[1px]" />
        <ScrollImage />
        {/* <TextSection /> */}
        <Home />
        <GrowthStatsSection />
        <Aboutusecomm />
        <WhoWeServe />
        <ChallengesSection />
        <ServicesGrid />
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center gap-10">
        <VideoOverText />
        <div className="w-[95%] md:w-full flex justify-end">
          <FeaturesSection />
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center gap-10">
        <LastText />
      </section>
      <section className="w-[95%] h-full flex flex-col justify-center items-center gap-10">
        <AdvantageSection />
        <EcommFounder />
      </section>
      <FAQSection faqs={ECOMMERCE_FAQ} name="Ecom-Reworked" />
      <BusinessLinker />
      <CommunityInviteSection />

      <BuildScaleHero />

      <ScaleWithConfidence />
      <section className="w-full h-full flex flex-col justify-center items-center gap-10">
        {/* <CTASection /> */}
      </section>
    </main>
  );
}
