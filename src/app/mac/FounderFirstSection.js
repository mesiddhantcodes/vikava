"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FounderFirstSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sections = [
    {
      id: 1,
      number: "[01]",
      title: "FOUNDER-FIRST",
      description: "BUILT AROUND YOUR JOURNEY WITH REAL HANDHOLDING.",
      image: "/mac/mann.avif",
    },
    {
      id: 2,
      number: "[02]",
      title: "PRACTICAL & ACTIONABLE",
      description: "NO JARGON, JUST STEP-BY-STEP EXECUTION.",
      image: "/mac/man2.avif",
    },
    {
      id: 3,
      number: "[03]",
      title: "INTEGRATED",
      description:
        "MENTORSHIP, ADVISORY, COMPLIANCE, AND EXECUTION IN ONE ECOSYSTEM.",
      image: "/mac/man3.avif",
    },
    {
      id: 4,
      number: "[04]",
      title: "PROVEN EXPERIENCE",
      description: "OUR 26+ YEARS OF BUILDING AND SCALING BRANDS.",
      image: "/mac/man4.avif",
    },
    {
      id: 5,
      number: "[05]",
      title: "FRACTIONAL EDGE",
      description: "ACCESS SEASONED CXOS WITHOUT FULL-TIME COST.",
      image: "/mac/man5.avif",
    },
    {
      id: 6,
      number: "[06]",
      title: "INVESTOR FRIENDLY",
      description: "GOVERNANCE AND TRANSPARENCY INVESTORS TRUST.",
      image: "/mac/clock.avif",
    },
    {
      id: 7,
      number: "[07]",
      title: "AI-FIRST ADVISORY",
      description:
        "OPS COPILOTS, FORECASTING DASHBOARDS, DOCUMENTATION VAULTS.",
      image: "/mac/hand.avif",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[98%] mx-auto px-6 md:px-12">
        <div className="space-y-0">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative border-b border-white/20 py-10 md:py-14 lg:py-16 group"
            >
              {/* ================= DESKTOP LAYOUT ================= */}
              <div className="hidden lg:grid grid-cols-[auto_1fr_1fr] items-center gap-10">
                {/* Number */}
                <div>
                  <p className="text-[#A8B5BE] spacegrotesk-regular text-lg uppercase tracking-wider group-hover:text-white transition-colors">
                    {section.number}
                  </p>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[#A8B5BE] group-hover:text-white   spacegrotesk-bold text-5xl uppercase leading-tight">
                    {section.title}
                  </h3>
                </div>

                {/* Description – pushed right, text LEFT aligned */}
                <div className="flex justify-self-end">
                  <p className="text-[#A8B5BE] spacegrotesk-regular group-hover:text-white text-[16px] uppercase leading-relaxed max-w-[620px] ">
                    {section.description}
                  </p>
                </div>
              </div>
              {/* ================= MOBILE / TABLET LAYOUT ================= */}
              <div className="lg:hidden flex flex-col gap-4">
                <p className="text-[#A8B5BE] spacegrotesk-regular group-hover:text-white text-sm uppercase tracking-wider">
                  {section.number}
                </p>

                <h3 className="text-[#A8B5BE] spacegrotesk-bold group-hover:text-white text-[28px] sm:text-[34px] uppercase leading-tight">
                  {section.title}
                </h3>

                <p className="text-[#A8B5BE] spacegrotesk-regular group-hover:text-white text-[14px] uppercase leading-relaxed max-w-full">
                  {section.description}
                </p>
              </div>{" "}
              <AnimatePresence>
                {(isMobile || hoveredId === section.id) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative mt-4 lg:hidden w-full max-w-[230px] mx-auto rounded-lg overflow-hidden border-[2px] border-white p-[15px] bg-white/10"
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[230px] object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* ================= HOVER IMAGE (DESKTOP ONLY) ================= */}
              <AnimatePresence>
                {hoveredId === section.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: -5 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-50 hidden lg:block border-[2px] border-white p-[15px] bg-white/10 rounded-lg shadow-2xl"
                    style={{
                      left: "50%", // 👈 between middle & right column
                      transform: "translate(-50%, -50%)",
                      width: "clamp(220px, 35vw, 260px)",
                      height: "clamp(240px, 38vw, 285px)",
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
