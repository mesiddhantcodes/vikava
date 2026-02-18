"use client";

import React from "react";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "FRAGMENTED VENDORS",
    subtitle: "5–6 agencies = leaks, confusion, wasted spend",
  },
  {
    title: "VANITY METRICS",
    subtitle: "Likes ≠ sales; you need ROI and pipeline",
  },
  {
    title: "DIGITAL-OFFLINE DISCONNECT",
    subtitle: "Only ads or only activations = missed opportunities",
  },
  {
    title: "SCALING STRUGGLES",
    subtitle: "No proven playbooks = slow, costly, overwhelming growth",
  },
];

const waveVariants = {
  hidden: (idx) => ({
    opacity: 0,
    y: 80 + Math.sin(idx * 1.2) * 18,
    scale: 0.96,
  }),
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + idx * 0.16,
      type: "easeInOut",
      stiffness: 48,
      damping: 13,
    },
  }),
};

export function ChallengesSection() {
  return (
    <section className="relative w-full bg-[#eaeaea]">
      <div
        className="relative mx-auto w-full  h-screen min-h-[900px]"
        style={{
          // desktop reference height; mobile will just min-h
          // minHeight: "620px",
        }}
      >
        {/* Background video */}
        <video
          src="/lasttag/globe.mp4"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", zIndex: 1 }}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay for contrast (light on desktop, more on mobile) */}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 85%, rgba(255,255,255,0.2) 30%, transparent 100%)",
            zIndex: 3,
          }}
        />
        {/* CONTENT LAYER */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16">
          {/* Title */}
          <div className="max-w-5xl">
            <h2 className="galindo-regular font-bold leading-tight text-[#101010] text-[24px] sm:text-[32px] md:text-[44px] lg:text-[60px]">
              The Challenges We Solve:
              <br />
              Last Hashtag fixes these with one end-to-end partner.
            </h2>
          </div>

          {/* Bottom row – same idea as desktop, but responsive */}
          <div className="mt-10 md:mt-0">
            <div
              className="
                flex flex-wrap md:flex-nowrap
                items-stretch md:items-end
                justify-between
                gap-6 md:gap-4
              "
            >
              {challenges.map((challenge, idx) => (
                <React.Fragment key={challenge.title}>
                  <ChallengeCardResponsive challenge={challenge} idx={idx} />
                  {/* Divider only on desktop‑ish widths and only between columns */}
                  {idx < challenges.length - 1 && (
                    <div className="w-full md:w-auto flex justify-center">
                      {/* mobile horizontal line */}
                      <div className="block md:hidden w-[75%] h-px bg-[#232323]/20 my-1" />
                      {/* desktop vertical line */}
                      <div className="hidden md:block h-[160px] w-px bg-[#232323]/65 self-end mx-2" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ChallengeCardResponsive({ challenge, idx }) {
  return (
    <motion.div
      custom={idx}
      variants={waveVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="
        flex flex-col justify-between text-center
        md:bg-transparent
        md:rounded-none
        md:px-0 md:py-0
        md:shadow-none
        flex-1
        min-w-[240px] sm:min-w-[280px] md:min-w-0
        mx-auto md:mx-0
      "
      style={{
        maxWidth: "320px",
        height: "auto",
        minHeight: "120px",
      }}
    >
      {/* TITLE - FIXED SINGLE LINE */}
      <div
        className="font-bold inter-bold text-black tracking-tight leading-[0.95] uppercase"
        style={{
          fontSize: "clamp(22px, 4vw, 32px)", // Increased from 32px max
          lineHeight: "0.95", // Tighter line height for single line
          minHeight: "2.2em",
          letterSpacing: "0.025em", // Slight tracking boost
        }}
      >
        {challenge.title}
      </div>

      {/* Subtitle */}
      <div
        className="inter-medium text-black mt-4"
        style={{
          fontSize: "clamp(14px, 1.8vw, 20px)", // Slightly smaller subtitle
          color: "#232323",
          fontWeight: 400,
          lineHeight: "1.3",
        }}
      >
        {challenge.subtitle}
      </div>
    </motion.div>
  );
}
