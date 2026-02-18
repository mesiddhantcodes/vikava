"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useRef } from "react";

const services = [
  {
    id: 1,
    number: "[1]",
    title: "FOUNDER COACHING & HANDHOLDING",
    description: "1:1 MENTORSHIP, MINDSET BUILDING, ACCOUNTABILITY CHECK-INS.",
    icon: "/mac/icon7.avif",
  },
  {
    id: 2,
    number: "[2]",
    title: "BUSINESS FORMATION & COMPLIANCE",
    description:
      "INCORPORATION, GST/MSME/FSSAI, IP & TRADEMARKS, LEGAL, CONTRACTS, HR POLICIES & FINANCES.",
    icon: "/mac/icon8.avif",
  },
  {
    id: 3,
    number: "[3]",
    title: "ADVISORY & STRATEGY",
    description:
      "MARKET RESEARCH, GO-TO-MARKET, PRICING, COMPETITIVE ANALYSIS, GROWTH ROADMAPS.",
    icon: "/mac/icon5.avif",
  },
  {
    id: 4,
    number: "[4]",
    title: "INVESTOR READINESS",
    description: "PITCH DECKS, DATA ROOMS, GOVERNANCE, DUE DILIGENCE PREP",
    icon: "/mac/icon6.avif",
  },
  {
    id: 5,
    number: "[5]",
    title: "TEAM BUILDING & TRAINING",
    description:
      "ORG DESIGN, HIRING, JOB DESCRIPTIONS, ONBOARDING, TEAM & LEADERSHIP COACHING.",
    icon: "/mac/icon9.avif",
  },
  {
    id: 6,
    number: "[6]",
    title: "PROCESS AUTOMATION & SYSTEMS",
    description:
      "CRM, PROJECT TOOLS, AI-ASSISTED WORKFLOWS TO RUN LIKE CLOCKWORK.",
    icon: "/mac/icon11.avif",
  },
  {
    id: 7,
    number: "[7]",
    title: "FRACTIONAL LEADERSHIP",
    description:
      "CXOS (CEO, CMO, CFO, CTO) ON-DEMAND FOR LAUNCHES, TURNAROUNDS, FUNDRAISING.",
    icon: "/mac/icon12.avif",
  },
  {
    id: 8,
    number: "[8]",
    title: "GROWTH & SCALE PLAYBOOKS",
    description:
      "SALES FUNNELS, MARKETING CAMPAIGNS, DIGITAL EXPANSION, GLOBAL MARKET ENTRY.",
    icon: "/mac/icon13.avif",
  },
];

export default function WhatWeOfferSection1() {
  const containerRef = useRef(null);
  const rightSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rightSectionRef,
    offset: ["start start", "end end"],
  });

  // Rocket travels from top to bottom
  const rocketY = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* LEFT SIDE - STICKY ON DESKTOP, STATIC ON MOBILE */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-start justify-start p-6 sm:p-8 lg:p-12 pt-8 sm:pt-12 lg:pt-24">
          <div className="max-w-xl">
            <h2 className="text-white spacegrotesk-bold uppercase text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6 mt-8 leading-[0.9]">
              WHAT WE OFFER – 360° SERVICES FOR FOUNDERS
            </h2>
            <p className="text-white/80 spacegrotesk-regular uppercase text-sm sm:text-base lg:text-lg leading-relaxed">
              WE DELIVERS END-TO-END SUPPORT — FROM MENTORSHIP AND COMPLIANCE TO
              BRANDING, SOURCING, MARKETING, AND GOVERNANCE — HELPING BUSINESSES
              MOVE FROM IDEA TO EXECUTION WITH CLARITY AND SPEED.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - CHECKERBOARD ON DESKTOP, SINGLE COLUMN ON MOBILE */}
        <div
          ref={rightSectionRef}
          className="relative w-full lg:w-2/3 lg:min-h-[200vh]"
        >
          {/* ROCKET - ONLY ON DESKTOP */}
          <motion.div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            style={{ top: rocketY }}
          >
            <motion.img
              src="/mac/rocket.avif"
              alt="Rocket"
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* DESKTOP: CHECKERBOARD GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-0">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <React.Fragment key={service.id}>
                  {/* LEFT COLUMN */}
                  {isEven ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="w-full h-[354px] p-6 flex flex-col justify-between"
                      style={{
                        border: "1px solid rgba(245, 245, 247, 0.2)",
                        background:
                          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.01) 70%)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-[121px] h-[121px] flex-shrink-0">
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-white spacegrotesk-regular text-4xl uppercase tracking-wider">
                          {service.number}
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h4 className="text-white spacegrotesk-bold text-[22px] uppercase tracking-wide leading-tight mb-2">
                          {service.title}
                        </h4>
                        <p className="text-white/90 spacegrotesk-regular text-[18px] leading-relaxed uppercase">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-full h-[354px]" />
                  )}

                  {/* RIGHT COLUMN */}
                  {!isEven ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="w-full h-[354px] p-6 flex flex-col justify-between"
                      style={{
                        border: "1px solid rgba(245, 245, 247, 0.2)",
                        background:
                          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.01) 70%)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-[121px] h-[121px] flex-shrink-0">
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-white spacegrotesk-regular text-4xl uppercase tracking-wider">
                          {service.number}
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h4 className="text-white spacegrotesk-bold text-[22px] uppercase tracking-wide leading-tight mb-2">
                          {service.title}
                        </h4>
                        <p className="text-white/90 spacegrotesk-regular text-[18px] leading-relaxed uppercase">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-full h-[354px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* MOBILE: SINGLE COLUMN */}
          <div className="lg:hidden flex flex-col gap-4 p-4 sm:p-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full min-h-[280px] sm:min-h-[320px] p-5 sm:p-6 flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.01) 70%)",
                  border: "1px solid rgba(245, 245, 247, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white spacegrotesk-regular text-2xl sm:text-3xl uppercase tracking-wider">
                    {service.number}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-white spacegrotesk-bold text-lg sm:text-xl uppercase tracking-wide leading-tight mb-2">
                    {service.title}
                  </h4>
                  <p className="text-white/90 spacegrotesk-regular text-sm sm:text-base leading-relaxed uppercase">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
