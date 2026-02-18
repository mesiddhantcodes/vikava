"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const cardsData = [
  {
    image: "/designcartel/cart4.jpg",
    leftTitle: "MANUFACTURABILITY",
    leftSubtitle: "FIRST",
    rightTitle: "Every design engineered for MOQ,",
    rightSubtitle: "costing, and quality standards",
    bgColor: "#C5B9A0", // Original beige
    fadeColor: "rgba(197, 185, 160, 0.3)", // Light fade
  },
  {
    image: "/designcartel/cart2.jpg",
    leftTitle: "ELASTIC",
    leftSubtitle: "CAPACITY",
    rightTitle: "Surge design output without",
    rightSubtitle: "fixed overheads.",
    bgColor: "#B8A890", // Slightly darker beige
    fadeColor: "rgba(184, 168, 144, 0.3)",
  },
  {
    image: "/designcartel/cart1.jpg",
    leftTitle: "BREADTH",
    leftSubtitle: "ON TAP",
    rightTitle: "Apparel, home, and accessories —",
    rightSubtitle: "all under one roof.",
    bgColor: "#D4C4AC", // Lighter warm beige
    fadeColor: "rgba(212, 196, 172, 0.3)",
  },
  {
    image: "/designcartel/cart5.jpg",
    leftTitle: "TRUST &",
    leftSubtitle: "GOVERNANCE",
    rightTitle: "NDAs, SLAs, structured approvals, and",
    rightSubtitle: "transparent delivery.",
    bgColor: "#A89780", // Darker taupe
    fadeColor: "rgba(168, 151, 128, 0.3)",
  },
  {
    image: "/designcartel/cart3.jpg",
    leftTitle: "INTEGRATED",
    leftSubtitle: "ECOSYSTEM",
    rightTitle: "Instant handoffs to Sourcing Cartel",
    rightSubtitle: "Ecom-Reworked, Sustainable Design Library, and IFX.",
    bgColor: "#CDB FA8", // Warm sand
    fadeColor: "rgba(205, 191, 168, 0.3)",
  },
  {
    image: "/designcartel/cart6.jpg",
    leftTitle: "26+ YEARS OF",
    leftSubtitle: "EXPERIENCE",
    rightTitle: "Deep roots in global sourcing and",
    rightSubtitle: "brand growth.",
    bgColor: "#B5A58D", // Muted brown-beige
    fadeColor: "rgba(181, 165, 141, 0.3)",
  },
];

export default function CartelEdgeSection() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const buttonY = useTransform(scrollYProgress, [0.5, 0.7], [150, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest * cardsData.length;
    const newIndex = Math.floor(progress);
    setCurrentIndex(Math.max(0, Math.min(newIndex, cardsData.length - 1)));
  });

  const currentCard = cardsData[currentIndex];

  return (
    <section ref={sectionRef} className="relative h-[700vh]">
      {/* Animated Background */}
      <motion.div
        animate={{ backgroundColor: currentCard.bgColor }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Radial Gradient Fade Overlay */}
      <motion.div
        key={`fade-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 20%, ${currentCard.fadeColor} 60%, ${currentCard.bgColor} 100%)`,
        }}
      />

      {/* Sticky Container - Flex Column Layout for Responsiveness */}
      <div className="sticky top-0 md:top-[98px] h-screen md:h-[calc(100vh-98px)] overflow-hidden flex flex-col items-center px-4 md:px-6 lg:px-12">
        {/* Top Label - Stacked relative */}
        <div className="relative z-20 mt-2 md:mt-4 mb-2">
          <p className="text-[10px] sm:text-[11px] md:text-[14px] absans-400 text-[#090502] uppercase tracking-widest text-center">
            WHY US?
          </p>
        </div>

        {/* Main Heading & CTA - Stacked relative */}
        <div className="relative z-20 flex flex-col items-center gap-4 sm:gap-6 mb-2 md:mb-0">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px] font-light text-[#090502] px-2 text-center leading-[0.8] max-w-[90%]"
          >
            The Cartel Edge
          </motion.h1>

          {/* CTA BUTTON */}
          <motion.div>
            <Link href="/contact">
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="
        relative bg-[#EEEDE7] geist-medium 
        rounded-full px-3 py-2 
        flex items-center gap-1.5 sm:gap-2 md:gap-3
        text-[#232323] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
        overflow-hidden 
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
                  Connect With Us{" "}
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
                  Connect With Us{" "}
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
          </motion.div>
        </div>

        {/* MOBILE LAYOUT - Scale fit */}
        <div className="md:hidden flex-1 w-full relative flex flex-col justify-center items-center gap-4 px-4 py-2">
          {/* Left Text - Top on mobile */}
          <motion.div
            key={`left-mobile-${currentIndex}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-[280px]"
          >
            <p className="text-[14px] sm:text-[16px] absans-400 text-[#090502] font-semibold leading-tight mb-1">
              {currentCard.leftTitle}
            </p>
            <p className="text-[14px] sm:text-[16px] absans-400 text-[#090502] leading-tight">
              {currentCard.leftSubtitle}
            </p>
          </motion.div>

          {/* Image - Responsive Height Constraints */}
          <div
            className="relative w-[220px] sm:w-[260px] h-[40vh] min-h-[220px] max-h-[300px]"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              key={`mobile-image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: [0, -6, 0],
                rotateX: [0, 3, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotateY: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                rotateX: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute inset-0 shadow-2xl rounded-2xl border-2 border-white/50"
            >
              <Image
                src={currentCard.image}
                alt={`Card ${currentIndex + 1}`}
                fill
                className="object-cover rounded-2xl"
                sizes="240px"
                priority
              />
            </motion.div>

            {/* Background cards - simplified for mobile */}
            {Array.from({ length: 2 }, (_, i) => (
              <div
                key={i}
                className="absolute inset-0 w-[90%] h-[90%] mx-auto top-[5%] rounded-xl bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30"
                style={{
                  transform: `translateZ(-${200 + i * 100}px) rotateX(20deg) scale(${0.6 - i * 0.1})`,
                  transformStyle: "preserve-3d",
                  zIndex: -(i + 1),
                  opacity: 0.4 - i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Right Text - Bottom on mobile */}
          <motion.div
            key={`right-mobile-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-[280px]"
          >
            <p className="text-[13px] sm:text-[14px] absans-400 text-[#090502] leading-snug mb-1">
              {currentCard.rightTitle}
            </p>
            <p className="text-[13px] sm:text-[14px] absans-400 text-[#090502] leading-snug">
              {currentCard.rightSubtitle}
            </p>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT - Flexbox (Center Alignment to prevent cutoff) */}
        <div className="hidden md:flex w-full flex-1 items-center justify-center pt-2 lg:pt-6 gap-6 lg:gap-16 xl:gap-24 relative z-10">
          {/* LEFT TEXT */}
          <motion.div
            key={`left-${currentIndex}`}
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex-1 text-right z-10 min-w-0"
          >
            <p className="text-[18px] lg:text-[24px] xl:text-[32px] absans-400 text-[#090502] font-semibold leading-tight mb-1">
              {currentCard.leftTitle}
            </p>
            <p className="text-[18px] lg:text-[24px] xl:text-[32px] absans-400 text-[#090502] leading-tight text-balance">
              {currentCard.leftSubtitle}
            </p>
          </motion.div>

          {/* CENTER IMAGE - Responsive Height */}
          <div className="relative z-0 w-[260px] lg:w-[320px] xl:w-[360px] h-[55vh] min-h-[350px] max-h-[550px] flex-shrink-0">
            <div
              className="w-full h-full relative"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                key={`desktop-image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: [0, -8, 0],
                  rotateX: [0, 4, 0],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  rotateY: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  rotateX: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-0 shadow-2xl rounded-3xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
              >
                <Image
                  src={currentCard.image}
                  alt={`Active Card ${currentIndex + 1}`}
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 1024px) 300px, 340px"
                  priority
                />
              </motion.div>

              {/* Background cards */}
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 w-[90%] h-[90%] mx-auto top-[5%] rounded-2xl bg-gradient-to-br from-white/20 to-white/10 shadow-xl border border-white/30"
                  style={{
                    transform: `translateZ(-${250 + i * 80}px) rotateX(25deg) scale(${0.55 - i * 0.08})`,
                    transformStyle: "preserve-3d",
                    zIndex: -(i + 1),
                    opacity: 0.35 - i * 0.07,
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT TEXT */}
          <motion.div
            key={`right-${currentIndex}`}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex-1 text-left z-10 min-w-0"
          >
            <p className="text-[18px] lg:text-[24px] xl:text-[32px] absans-400 text-[#090502] font-semibold leading-tight mb-1">
              {currentCard.rightTitle}
            </p>
            <p className="text-[18px] lg:text-[24px] xl:text-[32px] absans-400 text-[#090502] leading-tight text-balance">
              {currentCard.rightSubtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
