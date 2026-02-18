// app/components/ChallengesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 32,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

const cards = [
  {
    title: "Fragmented vendors and unreliable agencies",
    icon: "/vikava/card1.avif",
  },
  {
    title: "Rising customer acquisition costs (CACs)",
    icon: "/vikava/card1.avif",
  },
  {
    title: "Leaks in execution and missed investor readiness",
    icon: "/vikava/card1.avif",
  },
];

import { useState, useEffect } from "react";

export default function ChallengesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <>
      {" "}
      {/* FULL-WIDTH IMAGE */}
      <div
        className="
    relative w-full 
    h-[290px] 
    sm:h-[410px] 
    md:h-[520px] 
    lg:h-[110vh] 
    max-h-[900px]
    bg-[#F4F0E9]
   "
      >
        <Image
          src="/vikava/system.avif" // <-- your image path
          alt="Challenges faced by modern founders"
          fill
          priority
          className="object-contain"
        />
      </div>
      <section className="w-full bg-[#f4f0e9] px-4 pt-20 pb-20">
        <div className="mx-auto flex max-w-8xl flex-col items-center text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-y-1 text-center"
          >
            <span className="flex flex-wrap items-baseline justify-center gap-x-3">
              <span className="geist-semibold leading-tight text-[40px] md:text-[84px] text-neutral-900">
                What worked
              </span>
              <span className="greatvibes-regular leading-tight text-[40px] md:text-[84px] text-neutral-900">
                yesterday
              </span>
            </span>

            <span className="flex flex-wrap items-baseline justify-center gap-x-3">
              <span className="geist-semibold leading-tight text-[40px] md:text-[84px] text-neutral-900">
                doesn&apos;t solve
              </span>
              <span className="greatvibes-regular leading-tight text-[40px] md:text-[84px] text-neutral-900">
                today&apos;s
              </span>
              <span className="geist-semibold leading-tight text-[40px] md:text-[84px] text-neutral-900">
                challenges
              </span>
            </span>

            <p className="mt-6 max-w-3xl text-[clamp(14px,1.3vw,20px)] leading-tight text-neutral-700 geist-medium">
              We are not an agency; we are a complete support system covering
              strategy, design, sourcing, marketing, and commerce – everything a
              founder needs, under one roof.
            </p>
          </motion.h2>

          {/* Cards */}
          <motion.div
            className="
            mt-12 grid w-full 
            grid-cols-1 
            gap-6
            md:grid-cols-2 md:gap-6
            lg:grid-cols-3 lg:gap-6
            items-stretch
            justify-center
          "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {cards.map((card) => (
              <motion.article
                key={card.title}
                variants={cardVariants}
                className="
                group mx-auto w-full max-w-[450px]
                flex flex-col justify-around
                rounded-2xl bg-[#151518] px-6 py-6 text-left
                shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                will-change-transform
              "
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Icon */}
                  <div
                    className="
                    relative flex-shrink-0
                    w-[86px] h-[92px]
                    sm:w-[98px] sm:h-[106px]
                    md:w-[109px] md:h-[117px]
                  "
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 86px, (max-width: 1024px) 98px, 109px"
                      className={`
                      object-contain
                      transition-all duration-300
                      ${isMobile ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"}
                    `}
                    />
                  </div>

                  {/* Dot */}
                  <span
                    className={`
                    mt-1 h-4 w-4 shrink-0 rounded-full
                    transition-colors duration-300
                    ${isMobile ? "bg-white" : "bg-neutral-500 group-hover:bg-white"}
                  `}
                  />
                </div>

                {/* Title */}
                <p
                  className={`
                  mt-6 text-[clamp(16px,1.5vw,24px)]
                  leading-snug 
                  geist-semibold transition-colors duration-300
                  ${isMobile ? "text-white" : "text-[#666161] group-hover:text-white"}
                `}
                >
                  {card.title}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
