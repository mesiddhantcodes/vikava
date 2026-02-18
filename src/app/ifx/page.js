import GrowthStatsSection from "../design-library-of-india/GrowthStatsSection";
import "../styles/themes/ifx.css";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import BusinessLinker from "../vikava/component/BusinessLinker";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import FAQSection from "../design-library-of-india/FAQSection";
import { IFX_FAQ } from "../../constants/faqData";
import AboutIFX from "./AboutIFX";


import ChallengesWesolve from "./ChallengesWesolve";
import ConnectingPillars from "./ConnectingPillars";
import ContactSection from "./ContactSection";
import EmpoweringDesigners from "./EmpoweringDesigners";
import { ebgaramond, montserrat } from "./font";
import FounderVoiceSection from "./FounderVoiceSection";
import IndianFashionExchange from "./IndianFashionExchange";
import RotatingCardsSection from "./RotatingCardsSection";
import SCStackCard from "./SCStackCard";
import StrengtheningRetailPartnerships from "./StrengtheningRetailPartnerships";
import TurningChaosSection from "./TurningChaosSection";
import WhoWeServeSection from "./WhoWeServeSection";
import WhyIFXSection from "./WhyIFXSection";
import WhyNowSection from "./WhyNowSection";

export const metadata = {
  title: "Couture Commerce Platform for Indian Designers | IFX",
  description:
    "Structured couture commerce connecting designers, retail stores, and buyers with governance and growth systems.",
  keywords: "indian couture commerce platform",
};

export default function IfxPage() {
  return (
    <main
      className={`${ebgaramond.variable} ${montserrat.variable} page-ifx w-full min-h-screen bg-white`}
    >
      <IndianFashionExchange />
      <AboutIFX />
      <GrowthStatsSection />
      <WhyIFXSection />
      <TurningChaosSection />
      <SCStackCard />
      <WhoWeServeSection />
      <ConnectingPillars />
      <ChallengesWesolve />
      <EmpoweringDesigners />
      <StrengtheningRetailPartnerships />
      <RotatingCardsSection />
      <FounderVoiceSection />
      {/* <ContactSection /> */}
      <FAQSection faqs={IFX_FAQ} name="IFX" />

      <BusinessLinker />
      <CommunityInviteSection />
      <BuildScaleHero />

      <ScaleWithConfidence />
    </main>
  );
}
