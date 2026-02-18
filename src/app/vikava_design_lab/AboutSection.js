"use client";

import { motion } from "framer-motion";
import BlurText from "./BlurText";
const wordVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 900, // strong spring
      damping: 18, // a bit of bounce
      mass: 0.6,
      delay: i * 0.06, // word‑by‑word
    },
  }),
};
const text = "About Vikava Design Lab";

const LETTER_DURATION = 0.28;
const LETTER_STAGGER = 0.035;
const WORD_GAP = 0.14;

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.95,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 620,
      damping: 22,
      mass: 0.8,
      delay: custom.delay,
    },
  }),
};

// inside your component render:
const words = text.split(" ");
let globalIndex = 0;

const AboutSection = () => {
  return (
    <section className="w-full bg-[#3D86FF] flex justify-center px-6 md:px-10 py-24">
      <div className="w-full max-w-[97%] mx-auto flex flex-col items-center">
        {/* TOP GRID */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-28 place-items-center">
          {/* LEFT — HEADING */}
          <div className="w-full flex justify-center lg:justify-start">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="
      w-full
      big-shoulders-black text-[#FFE600]
      leading-[0.85]
      flex flex-wrap justify-center lg:justify-start
      text-center lg:text-left  text-[56px] sm:text-[80px] md:text-[100px] lg:text-[130px]
    "
            >
              {words.map((word, wordIndex) => {
                const letters = word.split("");
                const wordStartIndex = globalIndex;
                globalIndex += letters.length;

                return (
                  <span
                    key={word + wordIndex}
                    className="inline-flex mr-3 sm:mr-4 md:mr-6"
                  >
                    {letters.map((char, charIndex) => {
                      const delay =
                        wordStartIndex * LETTER_STAGGER +
                        wordIndex * WORD_GAP +
                        charIndex * LETTER_STAGGER;

                      return (
                        <motion.span
                          key={char + charIndex}
                          custom={{ delay }}
                          variants={letterVariants}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              })}
            </motion.h2>
          </div>

          {/* RIGHT — PARAGRAPH */}
          <div className="w-full max-w-[540px] ml-auto text-left">
            <p className="text-[#FFE600] poppins-medium text-[20px] md:text-[24px] leading-[1.45]">
              Unlike a traditional agency, Vikava Design Lab is a story-led,
              craft-obsessed studio embedded in the Vikava Labs ecosystem. Every
              creative decision connects to sourcing, ecommerce, and marketing –
              so your brand story scales without breaking. We combine premium
              craftsmanship with end-to-end execution: from naming and logo
              design to packaging, websites, campaigns, and content creation.
              Every deliverable is crafted to tell your story and build a
              cohesive identity across touchpoints.
            </p>
          </div>
        </div>

        {/* IMAGES ROW */}
        {/* IMAGES ROW */}
        {/* IMAGES ROW */}
        <div className="mt-20 w-full max-w-[95%] flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* SMALL IMAGE — always ~33% width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
      w-full
      lg:w-[33%]
      aspect-[567/504]
      rounded-[32px]
      overflow-hidden
      self-start
    "
          >
            <img
              src="/vikavalab/cup.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* LARGE IMAGE — always ~67% width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="
      w-full
      lg:w-[67%]
      aspect-[1155/672]
      rounded-[32px]
      overflow-hidden
    "
          >
            <img
              src="/vikavalab/girl.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
