"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MissionSection() {
  const missionScrollRef = useRef(null);
  const visionScrollRef = useRef(null);

  /* ---------------- MISSION IMAGE SCROLL ---------------- */

  const { scrollYProgress: missionProgress } = useScroll({
    target: missionScrollRef,
    offset: ["start end", "end start"],
  });

  const missionImageY = useTransform(
    missionProgress,
    [0, 0.25, 0.75, 1],
    [80, 0, 0, 80]
  );

  const missionImageOpacity = useTransform(
    missionProgress,
    [0, 0.18, 0.2],
    [0, 0, 1]
  );

  const missionImageYSpring = useSpring(missionImageY, {
    stiffness: 120,
    damping: 28,
    mass: 0.9,
  });

  /* ---------------- VISION IMAGE SCROLL ---------------- */

  const { scrollYProgress: visionProgress } = useScroll({
    target: visionScrollRef,
    offset: ["start end", "end start"],
  });

  const visionImageY = useTransform(
    visionProgress,
    [0, 0.25, 0.75, 1],
    [160, 0, 0, 100]
  );

  const visionImageOpacity = 1;

  const visionImageYSpring = useSpring(visionImageY, {
    stiffness: 120,
    damping: 28,
    mass: 0.9,
  });

  return (
    <section
      ref={missionScrollRef}
      className="bg-[#F3F0EB] overflow-visible relative min-h-screen"
    >
      {/* ================= MISSION ================= */}

      <div className="sticky top-0 min-h-screen flex items-center justify-start py-16 bg-[#F3F0EB]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pl-0  lg:pr-16">
          {/* IMAGE */}
          <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[700px] order-2 lg:order-1 overflow-hidden">
            <div className="absolute inset-0 flex flex-col overflow-hidden pointer-events-none select-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <h2
                  key={i}
                  className="geist-bold text-[90px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px]
                               uppercase leading-[0.85] tracking-[-0.04em] text-[rgba(32,31,36,0.08)]
                               whitespace-nowrap"
                >
                  MISSION
                </h2>
              ))}
            </div>

            <div className="absolute inset-0 flex items-end justify-center">
              <motion.div
                style={{
                  y: missionImageYSpring,
                  opacity: missionImageOpacity,
                }}
                className="
                    relative w-full max-w-[650px]
                    h-[420px] sm:h-[520px] md:h-[640px]
                    lg:w-[665px] lg:h-[820px] lg:max-w-none
                  "
              >
                <Image
                  src="/vikava/family.avif"
                  alt="Mission - People collaborating"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </motion.div>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 lg:order-2 ml-0 lg:ml-24">
            <h3 className="text-[#201F24] mb-6">
              <span className="block geist-semibold text-[36px]  px-4 md:px-0  md:text-[48px]">
                Our Mission–
              </span>
              <span className="block greatvibes-regular text-[36px]  px-4 md:px-0  md:text-[48px] -mt-2">
                Humara uddeshya
              </span>
            </h3>

            <p className="geist-semibold text-[18px] md:text-[22px] px-4 md:px-0  max-w-[100%] lg:max-w-[60%] text-[#3a3836]">
              To ensure no founder fails because of broken systems, scattered
              vendors, or lack of support. We turn ideas into operationally
              strong, investor-ready, market-fit brands.
            </p>
          </div>
        </div>
      </div>

      {/* ================= VISION ================= */}
      <div ref={visionScrollRef} className="relative overflow-hidden ">
        <div className="top-0 min-h-screen flex items-center justify-end py-16 bg-[#201F24]">
          <div className="w-full max-w-[1600px] ml-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pr-6 lg:pr-16">
            {/* TEXT */}
            <div className="flex flex-col items-left px-4 text-[#F3F0EB]">
              {/* Heading */}
              <h3 className="mb-6 text-left px-4 md:px-0 ">
                <span className="block geist-semibold text-left text-[36px] md:text-[48px]">
                  Our Vision–
                </span>
                <span className="block greatvibes-regular text-left text-[36px] md:text-[48px] -mt-2">
                  Nazariya naya
                </span>
              </h3>

              {/* Paragraph */}
              <p className="geist-semibold text-[18px] md:text-[22px] max-w-[520px] text-left leading-relaxed px-4 md:px-0">
                A future where creativity meets governance and growth is
                repeatable. Where founders can build confidently in India for
                the world — with one partner for strategy and execution.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] items-end">
              <div className="absolute inset-0 flex flex-col overflow-hidden pointer-events-none select-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <h2
                    key={i}
                    className="geist-bold text-[120px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px]
                               uppercase leading-[0.85] tracking-[-0.04em] text-[rgba(243,240,235,0.08)]
                               whitespace-nowrap"
                  >
                    VISION
                  </h2>
                ))}
              </div>

              <div className="absolute inset-0 flex items-end  ">
                <motion.div
                  style={{
                    y: visionImageYSpring,
                    opacity: visionImageOpacity,
                  }}
                  className="
                    relative w-full max-w-[665px]
                    h-[360px] sm:h-[420px] md:h-[460px]
                    lg:w-[880px] lg:h-[550px] xl:h-[600px] 2xl:h-[765px] 
                  "
                >
                  <Image
                    src="/vikava/eye.avif"
                    alt="Vision - Looking forward"
                    fill
                    priority
                    className="object-contain object-bottom"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
