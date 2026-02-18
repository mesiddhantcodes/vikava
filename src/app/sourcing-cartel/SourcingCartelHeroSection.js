// components/sourcingcartel/SourcingCartelHeroSection.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: {
    y: 120, // start below
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const SourcingCartelHeroSection = () => {
  return (
    <section className="fixed inset-0 w-full max-w-[100vw] h-full flex items-center justify-center overflow-hidden z-0 max-h-[945px]">
      {" "}
      {/* Background Image - Optimized with Next.js Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden max-w-[100vw] z-[-1]">
        <Image
          src="/sc/scbg.avif"
          alt="Sourcing Cartel Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full h-full bg-black/5"></div>
      </div>
      {/* Content Container */}
      <div className="relative z-0 w-full flex flex-col items-center justify-start align-start h-[300px] text-center">
        {/* Main Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }} // 👈 triggers on scroll
          className="
        bespokestencil-medium
        text-[60px] md:text-[100px] lg:text-8xl
        text-[#1D1D1F]
        leading-[0.85]
        mb-6 md:mb-8
        -mt-16 md:-mt-28 lg:-mt-35
      "
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              SOURCING
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              CARTEL
            </motion.span>
          </span>
        </motion.h1>
        {/* Tagline */}
        <p className="alumnisans-bold text-[14px] md:text-[16px] tracking-relaxed leading-tight uppercase max-w-[300px] text-[#1D1D1F]">
          ONE ECOSYSTEM. TWO STACKS. <br /> ENDLESS RELIABILITY.
        </p>
      </div>
    </section>
  );
};

export default SourcingCartelHeroSection;
