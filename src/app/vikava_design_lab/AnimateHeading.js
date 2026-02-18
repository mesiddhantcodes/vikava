"use client";

import { motion } from "framer-motion";

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

export default function AnimatedHeading({ text }) {
  if (typeof text !== "string") return null;

  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <motion.h2
      className="w-full
        big-shoulders-black 
        font-black 
        leading-[0.9] 
        flex 
        flex-wrap 
        justify-center 
        text-center
      "
      style={{
        fontSize: "clamp(42px, 8vw, 160px)", // responsive, same max as before
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, wordIndex) => {
        const letters = word.split("");
        const wordStartIndex = globalIndex;
        globalIndex += letters.length;

        return (
          <span
            key={wordIndex}
            className="inline-flex mr-3 sm:mr-4 md:mr-6"
          >
            {letters.map((char, charIndex) => {
              const delay =
                wordStartIndex * LETTER_STAGGER +
                wordIndex * WORD_GAP +
                charIndex * LETTER_STAGGER;

              return (
                <motion.span
                  key={charIndex}
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
  );
}
