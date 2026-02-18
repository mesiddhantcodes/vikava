import React from "react";
import {
  geistBold,
  geistMedium,
  geistSemiBold,
  greatVibesRegular,
} from "./fonts";
import "./styles/themes/vikava.css";
import FounderFirstHero from "./vikava/component/FounderFirstHero";
import TogetherWeBuildSection from "./vikava/component/TogetherWeBuildSection";
import WhoWeServe from "./vikava/component/WhoWeServe";
import BrandsServedSection from "./vikava/component/BrandsServeSection";
import ChallengesSection from "./vikava/component/ChanllengesSection";
import WhyVikava from "./vikava/component/WhyVikava";
import ProofPrinciplesSection from "./vikava/component/ProofPrinciplesSection";
import GuidingVisionSection from "./vikava/component/GuidingVisionSection";
import YourDoubt from "./vikava/component/YourDoubt";
import InsightsSection from "./vikava/component/InsightsSection";
import CommunityInviteSection from "./vikava/component/CommunityInviteSection";
import BuildScaleHero from "./vikava/component/BuildScaleHero";
import ScaleWithConfidence from "./vikava/component/ScaleWithConfidence";
import dynamic from "next/dynamic";
import HeroSection from "./Hero";
import ImageParticles from "./Hero";
import FoundersPainSection from "./vikava/component/FoundersPainSection";
import Footer from "./vikava/component/Footer";
import TestimonialsSection from "./Testimonial";
import ParallaxGallerySection from "./ParallaxGallerySection";
import Services from "./vikava/component/Services";
import NotFound from "./not-found";
import BusinessLinker from "./vikava/component/BusinessLinker";
import { VIKAVA_FAQ } from "@/constants/faqData";

const images = [
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
  "/ecomm/ecomm1.jpg",
];
const Particles = dynamic(() => import("./Particles"), { ssr: false });

export const metadata = {
  title: "Business Building Infrastructure for Founders | Vikava Labs",
  description:
    "Founder-first business-building infrastructure for clarity, governance, and accountable execution across design, sourcing, growth, and commerce.",
  keywords: "business building infrastructure india",
};

export default function Page() {
  return (
    <main
      className={`
          ${geistBold.variable} ${geistMedium.variable} ${geistSemiBold.variable} ${greatVibesRegular.variable}
          page-vikava bg-white w-full`}
    >
      <section>
        <HeroSection />
      </section>
      <FounderFirstHero />
      <FoundersPainSection />
      <TogetherWeBuildSection />
      <BrandsServedSection />
      <WhoWeServe />
      <Services />
      <ChallengesSection />
      <WhyVikava />
      <ProofPrinciplesSection />
      <ParallaxGallerySection />
      <GuidingVisionSection />
      <TestimonialsSection />
      <YourDoubt faqs={VIKAVA_FAQ} />
      {/* <InsightsSection /> */}
      <CommunityInviteSection />

      <BuildScaleHero />

      <ScaleWithConfidence />
      {/* <BusinessLinker/> */}
      {/* <NotFound/> */}

    </main>
  );
}
