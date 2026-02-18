"use client";

import ScrollStack, { ScrollStackItem } from "./Scroll";
import { motion } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    id: 1,
    title: "Story First, Design Next",
    desc: "Distinctive ideas before visuals; brands people remember and choose.",
  },
  {
    id: 2,
    title: "Integrated by Design",
    desc: "Creative tied to sourcing, e-commerce, and growth — no hand-off gaps..",
  },
  {
    id: 3,
    title: "Premium Craftsmanship",
    desc: "Expect meticulous, high-end design and production standards in every deliverable..",
  },
  {
    id: 4,
    title: "Built to Perform",
    desc: "Systems designed to work in ads, packaging, storefronts, and marketplaces.",
  },
  {
    id: 5,
    title: "Faster & Smarter",
    desc: "Human creativity, accelerated by AI-assisted workflows.",
  },
];

const wavyText = "WHY | VIKAVA | DESIGN LAB";
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

export default function WhyVikavaSection() {
  return (
    <section className="relative w-full bg-[#FFE400] text-[#1B1A17]">
      {/* CONTAINER - Flex row on desktop */}
      <div className="absolute inset-0 bg-[#FFE300]" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#C8B900 2px, transparent 3px),
            linear-gradient(to bottom, #FFE400 0%, #FFF9C4 100%)
          `,
          backgroundSize: "10px 10px, 100% 100%", // Grid spacing, background cover
          maskImage:
            "linear-gradient(to bottom, transparent 0px, transparent 190px, #FFE300 1300px)", // Fade in after 90px
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0px, transparent 610px, #FFE300 1300px)",
        }}
      />
      {/* Top Fade Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-[280px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #FFE500 0%, transparent 100%)",
        }}
      />
      {/* Bottom White Fade Gradient Overlay */}


      <div className="relative mx-auto max-w-[1400px] flex flex-col lg:flex-row min-h-screen">
        {/* LEFT: STICKY HEADING */}
        <div className="lg:w-1/2 lg:sticky lg:top-10 z-20 lg:h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-8xl flex flex-col items-center lg:items-start">
            {/* HEADING */}
            <div className="flex flex-wrap justify-center lg:justify-start text-left leading-none">
              {words.map((word, wordIndex) =>
                word === "|" ? (
                  <div key={wordIndex} className="w-full h-0" />
                ) : (
                  <span
                    key={wordIndex}
                    className="inline-flex mx-1 sm:mx-2 items-center big-shoulders-black text-[#2156FF] uppercase tracking-tight text-[56px] sm:text-[80px] md:text-[100px] lg:text-[130px]"
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
                ),
              )}
            </div>

            {/* CTA — NOW BELOW HEADING */}
            <Link href="/contact" className="mt-6 sm:mt-8">
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="
        relative bg-[#EEEDE7] geist-medium 
        rounded-full px-3 py-2 
        flex items-center gap-1.5 sm:gap-2 md:gap-3
        text-[#232323] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
        shadow-md sm:shadow-lg hover:shadow-xl overflow-hidden 
        flex-shrink-0 min-w-[120px] sm:min-w-[140px]
      "
              >
                {/* TEXT */}
                <motion.span
                  variants={{
                    rest: { y: 0, opacity: 1 },
                    hover: { y: 80, opacity: 0 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="relative z-10 whitespace-nowrap"
                >
                  Connect With Us
                </motion.span>

                <motion.span
                  variants={{
                    rest: { y: -80, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute left-4 sm:left-5 md:left-6 z-0 whitespace-nowrap"
                >
                  Connect With Us
                </motion.span>

                {/* ARROW */}
                <span className="ml-2 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
                  <motion.span
                    variants={{
                      rest: { x: -80, opacity: 0 },
                      hover: { x: 0, opacity: 1 },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.56, 0.51, 0.85, 0.84],
                    }}
                    className="absolute"
                  >
                    →
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { x: 0, opacity: 1 },
                      hover: { x: 80, opacity: 0 },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.56, 0.51, 0.85, 0.84],
                    }}
                    className="absolute"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* RIGHT: SCROLL STACK */}
        <div className="lg:w-1/2 relative px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="w-full max-w-[570px] lg:ml-auto flex justify-center lg:justify-end">
            <ScrollStack
              useWindowScroll
              className="w-full"
              disableLenis={true}
              itemStackDistance={80} // Increased from default (30) to fix stacking overlap
            >
              {CARDS.map((card, index) => (
                <ScrollStackItem
                  key={card.id}
                  number={card.id}
                  title={card.title}
                  desc={card.desc}
                  index={index}
                />
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
}
