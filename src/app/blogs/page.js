// app/components/LetsConnectHero.jsx

import { motion } from "framer-motion";
import Image from "next/image";
import BlogInsights from "../vikava/component/BlogInsights";
import BlogsCopy from "./BlogsCopy";
import FounderQuote from "./FounderQuote";
import HomeBlog from "./HomeBlog";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";

export const metadata = {
  title: "Insights & Perspectives on Building Businesses | Vikava Labs",

  description:
    "Insights, frameworks, and perspectives from Vikava Labs on building, governing, and scaling businesses with clarity and accountability.",

  keywords: [
    "business building insights",
    "founder perspectives",
    "startup governance insights",
    "business execution frameworks",
    "vikava labs blog",
  ],
};

export default function Blogs() {
  return (
    <>
      <HomeBlog />

      <BlogInsights />
      <CommunityInviteSection />
      <BuildScaleHero />

      <ScaleWithConfidence />
    </>
  );
}
