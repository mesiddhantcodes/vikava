"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const titleWave = {
  hidden: { opacity: 0, y: -40, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 90,
    },
  },
};

const mediaWave = {
  hidden: { opacity: 0, y: 40, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 85,
      delay: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: 80 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: 0.2 + i * 0.08,
    },
  }),
};

const data = [
  {
    id: "01",
    title: "STARTUPS & FOUNDERS",
    body: "Early-stage or scaling D2C brand founders in fashion, lifestyle, or consumer products.",
  },
  {
    id: "02",
    title: "D2C & CONSUMER BRANDS",
    body: "Brands struggling with fragmented identity, packaging, UI/UX, and storytelling.",
  },
  {
    id: "03",
    title: "B2B BUSINESSES",
    body: "Service or product companies needing credible, scalable brand identity and digital presence.",
  },
  {
    id: "04",
    title: "PROFESSIONALS",
    body: "Doctors, lawyers, consultants, creators who want personal branding and premium identity systems.",
  },
  {
    id: "05",
    title: "INVESTORS & VCS",
    body: "Portfolio companies needing structured brand identity, pitch decks, and scalable visual systems.",
  },
];

const wavyText = "WHO WE | SERVE?";
const words = wavyText.split(" ");

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

let globalIndex = 0;
export default function WhoWeServeSection() {
  return (
    <section className="w-full bg-[#ffe600] text-[#3D7EFF] flex flex-col items-center overflow-hidden">
      {/* TOP CONTAINER */}
      {/* HEADING */}
      <div className="w-[60vw] max-w-6xl px-4 md:px-8 pt-16 md:pt-20 mx-auto flex flex-wrap justify-center text-center leading-none">
        {words.map((word, wordIndex) =>
          word === "|" ? (
            <div key={wordIndex} className="w-full h-0"></div>
          ) : (
            <span
              key={wordIndex}
              className="inline-flex mx-2 big-shoulders-black uppercase tracking-tight 
        text-[56px] sm:text-[80px] md:text-[100px] lg:text-[130px]"
            >
              {word.split("").map((char, charIndex) => {
                const delay =
                  globalIndex * LETTER_STAGGER +
                  wordIndex * WORD_GAP +
                  charIndex * LETTER_STAGGER;

                globalIndex++;

                return (
                  <motion.span
                    key={charIndex}
                    custom={{ delay }}
                    variants={letterVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          )
        )}
      </div>

      {/* MEDIA (Video/Image) */}
      {/* MEDIA (Video/Image) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={mediaWave}
        className="
    mt-10 md:mt-12 mb-12 md:mb-16
    rounded-[20px] overflow-hidden shadow-lg
    mx-auto
    w-[92%] md:w-[95%]
    lg:max-w-[880px]
  "
      >
        <div
          className="
      w-full
      aspect-[880/370]          /* maintains ratio on all screens */
      lg:h-[370px]              /* exact height on lg */
      lg:aspect-auto            /* stop ratio enforcement on lg */
    "
        >
          <video
            src="/vikavalab/laddyy.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </motion.div>

      {/* DIVIDER */}
      {/* <div className="w-full border-t " /> */}

      {/* LIST SECTION */}
      <div className="w-full max-w-[95%] px-2 md:px-8 pb-26 pt-4 md:pb-20">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listItem}
            className="flex flex-col md:flex-row md:items-start py-12 border-b "
          >
            {/* NUMBER */}
            <div className="md:w-[4%] mb-2 md:mb-0">
              <p className="text-[14px] md:text-[20px] tracking-tight ">
                {item.id}
              </p>
            </div>

            {/* TITLE */}
            <div className="md:w-[30%] mb-1 md:mb-0">
              <p className="text-[18px] sm:text-[22px] md:text-[32px] lg:text-[32px] poppins-bold uppercase leading-tight">
                {item.title}
              </p>
            </div>

            {/* BODY */}
            <div className="md:w-[62%] ">
              <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[20px] poppins-medium leading-snug">
                {item.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
