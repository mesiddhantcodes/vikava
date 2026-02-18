"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FounderVoiceSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* -------------------------------------------
     SCALE
     Desktop: 1.2 → 1.5 (unchanged)
     Mobile:  1.1 → 1.3 (safer)
  ------------------------------------------- */
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [
      typeof window !== "undefined" && window.innerWidth < 1024 ? 1.1 : 1.2,
      typeof window !== "undefined" && window.innerWidth < 1024 ? 1.3 : 1.5,
    ],
  );

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const quoteText = `"Indian couture doesn't fail for lack of talent — it fails for lack of structure. IFX exists to bring governance, clarity, and global growth into this industry."`;

  const attributionText = "— Puuneet Aggarwal, Founder & Mentor, Vikava Labs";

  const quoteChars = quoteText.split(" ");
  const attributionChars = attributionText.split("");

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[160vh]     /* mobile */
        md:h-[180vh]
        lg:h-[200vh]  /* desktop unchanged */
      "
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="/ifx/founder.avif"
            alt="Founder working"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* White overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-white"
        />

        {/* Content */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="
            relative z-10 h-full
            flex flex-col items-center justify-center
            px-6 md:px-12 lg:px-20
          "
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center garamond-400 text-[#1b1c18] mb-6 md:mb-8 lg:mb-10"
            style={{
              fontSize: "clamp(40px, 8vw, 112px)",
              lineHeight: "1.1",
            }}
          >
            Founder's Voice
          </motion.h2>

          {/* Quote */}
          <div
            className="text-center mont-400 text-[#1b1c18] max-w-xl mb-6 md:mb-8 "
            style={{
              fontSize: "clamp(15px, 1.5vw, 20px)",
              lineHeight: "1.6",
            }}
          >
            {quoteChars.map((word, wordIndex) => (
              <span
                key={`word-${wordIndex}`}
                className="inline-block whitespace-nowrap"
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`char-${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.025,
                      delay: (wordIndex * 4 + charIndex) * 0.008,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {/* space after each word */}
                <span>&nbsp;</span>
              </span>
            ))}
          </div>

          {/* Attribution */}
          <div
            className="text-center mont-600 text-[#1b1c18]"
            style={{
              fontSize: "clamp(14px, 1.2vw, 18px)",
            }}
          >
            {attributionChars.map((char, index) => (
              <motion.span
                key={`attr-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.025,
                  delay: quoteChars.length * 0.008 + index * 0.008,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
