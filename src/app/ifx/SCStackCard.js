"use client";

import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "./Scroll";

/* ------------------------------------------------------------------ */
/* Data (unchanged) */
/* ------------------------------------------------------------------ */

const challenges = [
  {
    id: 1,
    title:
      "Global demand for Indian design is rising, but structured access is missing.",
    image: "/ifx/stack1.avif",
  },
  {
    id: 2,
    title:
      "Designer retail stores are expanding, but lack reliable systems and curated discovery.",
    image: "/ifx/serve10.webp",
  },
  {
    id: 3,
    title:
      "Designers are abundant in talent but short on visibility, mentoring, and global reach.",
    image: "/ifx/stack3.avif",
  },
  {
    id: 4,
    title:
      "Consignment-led models are straining cashflows, and governance is absent.",
    image: "/ifx/stack4.avif",
  },
];

/* ------------------------------------------------------------------ */
/* Scroll Reveal Text */
/* ------------------------------------------------------------------ */

const ScrollRevealText = () => {
  const textRef = useRef(null); // ✅ FIXED - Simple JavaScript syntax

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.6", "end 0.7"],
  });

  const text =
    "The time is ripe for IFX — an organised ecosystem to make couture commerce structured, fair, and growth-ready.";

  const words = text.split(" ");

  return (
    <section
      ref={textRef}
      className="
        relative bg-[#1B1C18]
        flex items-center justify-center
        overflow-hidden
        py-20 md:py-32 lg:py-40
        px-6 md:px-12 lg:px-20
      "
    >
      <div className="w-full max-w-[95%] mx-auto">
        <h2
          className="mont-400 text-center"
          style={{
            fontSize: "clamp(28px, 5.5vw, 80px)",
            lineHeight: "1.2",
          }}
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={index} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Animated Word (memoized) */
/* ------------------------------------------------------------------ */

const Word = memo(({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "rgba(255,255,255,0.2)",
    "rgba(255,255,255,1)",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-2 md:mr-3 will-change-[opacity,color]"
    >
      {children}
    </motion.span>
  );
});

Word.displayName = "Word";

/* ------------------------------------------------------------------ */
/* Stack Card Wrapper */
/* ------------------------------------------------------------------ */

const SCStackCard = () => {
  return (
    <section className="relative w-full bg-[#1B1C18] overflow-x-hidden">
      {/* Stack cards */}
      <ScrollStack useWindowScroll>
        {challenges.map((challenge, index) => (
          <ScrollStackItem
            key={challenge.id}
            index={index}
            title={challenge.title}
            image={challenge.image}
          />
        ))}
      </ScrollStack>

      {/* Scroll reveal text */}
      <ScrollRevealText />
    </section>
  );
};

export default SCStackCard;
