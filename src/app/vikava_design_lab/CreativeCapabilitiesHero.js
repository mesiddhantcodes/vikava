"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CreativeCapabilitiesHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseSize = 250;
  const bgSize = Math.max(baseSize - scrollY / 8, 120);

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

  const text = "Our Creative | Capabilities";
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <div className="sticky" style={{ height: "300vh" }}>
      <section className="sticky top-0 w-full h-screen overflow-hidden z-10">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 z-0 transition-all duration-200 ease-out"
            style={{
              backgroundImage: `url('/vikavalab/tc.avif')`,
              backgroundSize: `${bgSize}%`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "background-size 0.3s ease",
            }}
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-20 w-full h-full flex flex-col items-start justify-start px-6 md:px-16 pt-24 md:pt-32">
          <motion.h1
            className="big-shoulders-black text-[#2156ff] leading-[0.9] flex flex-wrap"
            style={{ fontSize: "clamp(40px, 7vw, 130px)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {words.map((word, wordIndex) =>
              word === "|" ? (
                <div key={wordIndex} className="w-full h-0"></div>
              ) : (
                <span key={wordIndex} className="inline-flex mr-3">
                  {word.split("").map((char, charIndex) => {
                    const delay =
                      globalIndex * LETTER_STAGGER +
                      wordIndex * WORD_GAP +
                      charIndex * LETTER_STAGGER;

                    const currentDelay = delay;
                    if (word !== "|") globalIndex++;

                    return (
                      <motion.span
                        key={charIndex}
                        custom={{ delay: currentDelay }}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              )
            )}
          </motion.h1>

          <p className="mt-8 text-[#2156ff] text-lg md:text-xl max-w-3xl poppins-medium">
            Two stacks, one system: Identity that inspires and design that
            sells.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CreativeCapabilitiesHero;
