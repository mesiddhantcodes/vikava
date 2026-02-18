"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    id: 1,
    title: "Inconsistent Brand Identity",
    desc: "Logos, packaging, and content that don't align confuse your audience.",
    image: "/vikavalab/scroll1.avif",
  },
  {
    id: 2,
    title: "Low PDP/PLP Conversions",
    desc: "Weak product and listing pages bleed sales, even when traffic is strong.",
    image: "/vikavalab/scroll2.avif",
  },
  {
    id: 3,
    title: "Low Recall & Weak Storytelling",
    desc: "Without a sharp brand story, you blend into the noise.",
    image: "/vikavalab/scroll3.avif",
  },
  {
    id: 4,
    title: "Poor On-Shelf & Digital Standout",
    desc: "Packaging that doesn't attract or PDP/PLP pages that don't convert = lost sales.",
    image: "/vikavalab/scroll4.avif",
  },
  {
    id: 5,
    title: "Fragmented Creative Execution",
    desc: "Multiple vendors for design, shoots, and digital assets cause leaks and wasted spend.",
    image: "/vikavalab/scroll5.avif",
  },
  {
    id: 6,
    title: "Founder–Brand Mismatch",
    desc: "Identity doesn't feel authentic to the founder leading it.",
    image: "/vikavalab/scroll6.avif",
  },
  {
    id: 7,
    title: "No System for Scale",
    desc: "Assets aren't built to flex across ads, marketplaces, and retail.",
    image: "/vikavalab/scroll7.avif",
  },
];

export default function ChallengesSection() {
  const bandRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection with useState + useEffect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start center", "end center"],
  });

  const breakX = useTransform(scrollYProgress, [0, 0.35], [0, -320]);
  const barriersX = useTransform(scrollYProgress, [0, 0.35], [0, 320]);
  const LETTER_STAGGER = 0.035;
  const WORD_GAP = 0.14;

  const desktopBreakX = useTransform(scrollYProgress, [0, 0.05], [0, -320]);
  const desktopBarriersX = useTransform(scrollYProgress, [0, 0.05], [0, 320]);
  const mobileBreakX = useTransform(scrollYProgress, [0, 0.8], [0, -200]); // Y movement only
  const mobileBarriersX = useTransform(scrollYProgress, [0, 0.8], [0, -200]); // Y movement only
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

  const text = "THE CHALLENGES WE SOLVE";
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <section className="w-full bg-[#11110A] text-[#FFE400] py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Heading - Responsive container */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <motion.h2
          className="big-shoulders-black font-black leading-[0.85] sm:leading-[0.88] md:leading-[0.9]  text-[56px] sm:text-[80px] md:text-[100px] lg:text-[130px] flex flex-wrap justify-center text-center px-2 sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {words.map((word, wordIndex) => {
            const letters = word.split("");
            const wordStartIndex = globalIndex;
            globalIndex += letters.length;

            return (
              <span
                key={wordIndex}
                className="inline-flex mr-1 sm:mr-2 md:mr-3"
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
        <p
          className="poppins-regular mt-3 sm:mt-4 md:mt-6 max-w-xl mx-auto px-2 sm:px-4"
          style={{ fontSize: "clamp(13px, 2vw, 16px)", lineHeight: "1.7" }}
        >
          At Vikava Design Lab, every design decision connects to marketing,
          sourcing, and ecommerce – so your brand story is consistent, scalable,
          and built to perform.
        </p>
      </div>

      {/* Band: Break / Barriers stick, cards scroll */}
      <div
        ref={bandRef}
        className="relative max-w-5xl mx-auto pb-16 sm:pb-20 md:pb-28 lg:pb-40"
      >
        {/* Sticky row in middle of viewport */}
        <div className="sticky top-[10vh] sm:top-[15vh] md:top-1/3 lg:top-1/2 -translate-y-1/2 z-20">
          <div className="relative flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
            {/* Center slot for cards */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-20 max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]" />

            {/* Break - Follows cards up on mobile */}
            <motion.span
              style={{
                x: isMobile ? 0 : desktopBreakX, // Static X on mobile
                y: isMobile ? mobileBreakX : 0, // Y movement on mobile
              }}
              className={`absolute left-1/2 font-bold whitespace-nowrap drop-shadow-2xl big-shoulders-black poppins-bold ${
                isMobile
                  ? "-translate-x-[115%] text-[20px] leading-none"
                  : "-translate-x-[110%] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[60px]"
              }`}
            >
              Break
            </motion.span>

            {/* Barriers - Follows cards up on mobile */}
            <motion.span
              style={{
                x: isMobile ? 0 : desktopBarriersX, // Static X on mobile
                y: isMobile ? mobileBarriersX : 0, // Y movement on mobile
              }}
              className={`absolute left-1/2 font-bold whitespace-nowrap drop-shadow-2xl big-shoulders-black poppins-bold ${
                isMobile
                  ? "translate-x-[10%] text-[20px] leading-none"
                  : "translate-x-[0%] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[60px]"
              }`}
            >
              Barriers
            </motion.span>
          </div>
        </div>

        {/* Cards - Fully responsive */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-4">
          {CARDS.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[14px] bg-[#FFE400] shadow-[0_12px_30px_rgba(0,0,0,0.45)] w-full max-w-[440px] overflow-hidden
              h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[444px]"
            >
              {/* inner border */}
              <div className="absolute inset-2 sm:inset-3 rounded-[14px] border border-[#2156FF]" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 text-center">
                {/* Title */}
                <h3
                  className="text-[#2156FF] poppins-medium font-semibold leading-tight mb-2 sm:mb-3 md:mb-4"
                  style={{ fontSize: "clamp(18px, 3.5vw, 28px)" }}
                >
                  {card.title}
                </h3>

                {/* Image */}
                <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] mb-2 sm:mb-3 md:mb-4 flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 220px"
                  />
                </div>

                {/* Description */}
                <p
                  className="text-[#2156FF] poppins-medium leading-snug px-1 sm:px-2"
                  style={{ fontSize: "clamp(13px, 2.5vw, 20px)" }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
