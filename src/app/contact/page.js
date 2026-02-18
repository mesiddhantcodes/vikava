// app/components/LetsConnectHero.jsx

import { motion } from "framer-motion";
import Image from "next/image";
import ContactSection from "../vikava/component/ContactSection";
import YourDoubt from "../vikava/component/YourDoubt";
import CommunityInviteSection from "../vikava/component/CommunityInviteSection";
import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import Footer from "../vikava/component/Footer";
import HomeContact from "./HomeContact";

// export const metadata = {
//   title: "Contact Vikava Labs | Start a Conversation",

//   description:
//     "Get in touch with Vikava Labs to explore how our founder-first business-building infrastructure can support your venture.",

//   keywords: [
//     "contact vikava labs",
//     "vikava labs contact",
//     "connect with vikava labs",
//     "vikava labs india",
//   ],
// };

export default function LetsConnectHero() {
  return (
    <>
      <HomeContact />
      <ContactSection />
      <YourDoubt />
      <CommunityInviteSection />
      <ScaleWithConfidence />
      {/* <Footer/> */}
    </>
  );
}
