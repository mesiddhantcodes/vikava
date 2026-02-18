"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "./Particles";
import AnimatedHeading from "./AnimateHeading";

export default function ScientificBrandingSection() {
  return (
    <section className="relative w-full bg-[#3D7EFF] text-[#FFE400] py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.12}
          particleBaseSize={40}
          sizeRandomness={0.1}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Foreground */}
      <div className="relative max-w-[97%] mx-auto flex flex-col items-center text-center px-2 sm:px-4">
        {/* Animated heading already responsive via clamp inside component if you use it.
            If not, adjust there; here we just center it. */}
        <AnimatedHeading text="Scientific Branding Founder-Aligned Systems" />

        <motion.p
          className="poppins-bold mt-16 sm:mt-12 max-w-xl sm:max-w-2xl text-[#FFE400]"
          style={{
            fontSize: "clamp(14px, 2.1vw, 20px)",
            lineHeight: "1.7",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We ensure your brand identity resonates not only with the market but
          also with you as a founder. Our approach blends semiotics, consumer
          psychology, and color science to build a strong, scientific foundation
          for your brand. Optional cultural layers like astrology, numerology,
          or vastu can align your visual system with your personal vision while
          still performing in the market.
        </motion.p>

        {/* Image block */}
        <div className="mt-10 md:mt-14 w-full flex justify-center">
          <div className="relative w-full max-w-[1440px] aspect-[16/9] sm:aspect-[1440/855] rounded-[24px] md:rounded-[32px] lg:rounded-[48px] overflow-hidden">
            <Image
              src="/vikavalab/bgbgbg.avif"
              alt="Colorful planets representing scientific branding"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1440px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
