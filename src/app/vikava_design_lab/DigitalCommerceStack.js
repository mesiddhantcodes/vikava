"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DigitalCommerceStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      id: 1,
      title: "DIGITAL & PRODUCT DESIGN",
      description:
        "UI/UX for websites & apps, investor pitch decks, digital ads.",
      image: "/vikavalab/card1.jpg",
      alt: "Digital product design workspace",
    },
    {
      id: 2,
      title: "CAMPAIGNS & CONTENT CREATION",
      description:
        "Ads, social media, catalogues, lookbooks, motion graphics, OOH.",
      image: "/vikavalab/card2.avif",
      alt: "Content creation",
    },
    {
      id: 3,
      title: "CONTENT & COLLABORATION",
      description:
        "On-brand marketing assets to keep your story fresh and consistent.",
      image: "/vikavalab/card3.avif",
      alt: "Content collaboration workspace",
    },
    {
      id: 4,
      title: "AI-ENHANCED EXPLORATION",
      description:
        "Moodboards, variations, rapid design sprints accelerated by Al.",
      image: "/vikavalab/card4.avif",
      alt: "AI exploration with VR",
    },
    {
      id: 5,
      title: "DESIGN FOR COMMERCE",
      description:
        "Optimized PDP/PLP, A+ content, marketplace imagery for conversions.",
      image: "/vikavalab/card5.avif",
      alt: "Commerce design",
    },
    {
      id: 6,
      title: "INTEGRATED CAMPAIGN DESIGN",
      description:
        "Concepts that flex seamlessly across digital, print, and retail.",
      image: "/vikavalab/card6.avif",
      alt: "Integrated campaign design",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

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

  const text = "Digital & | Commerce | Stack";
  const words = text.split(" ");

  return (
    <section className="w-full bg-[#FFE400] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.h1
            className="big-shoulders-black text-black leading-[0.9] flex flex-wrap justify-center"
            style={{ fontSize: "clamp(40px, 7vw, 130px)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {(() => {
              let globalIndex = 0;
              return words.map((word, wordIndex) =>
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
                      globalIndex++;

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
                ),
              );
            })()}
          </motion.h1>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="relative group cursor-pointer"
            >
              {/* <motion.div
                className="
                  relative
                  w-full
                  aspect-[4/3] sm:aspect-[4/3] lg:aspect-[540/520]
                  lg:w-[540px] lg:h-[520px]
                  rounded-[32px] sm:rounded-[40px] lg:rounded-[100px]
                  overflow-hidden shadow-lg bg-[#3B7DFA]
                  mx-auto
                "
                initial="initial"
                whileHover="hover"
              > */}
              <motion.div
                className=" 
                  relative
                  w-full
                  aspect-[4/3] lg:aspect-[1/1]
                                rounded-[32px] sm:rounded-[40px] lg:rounded-[100px]
                  overflow-hidden shadow-lg bg-[#3B7DFA]
                "
                initial="initial"
                whileHover={!isMobile ? "hover" : undefined}
                animate={isMobile ? "hover" : "initial"}
              >
                {/* Default State */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { opacity: 1 },
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    priority={card.id <= 3}
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h3 className="text-black poppins-bold font-bold text-center text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-tight tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Hover State */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
                  variants={{
                    initial: { opacity: 0 },
                    hover: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  <motion.div
                    className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[252px] lg:h-[252px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden mb-3 sm:mb-4 md:mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-black poppins-bold font-bold text-center text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4"
                    variants={{
                      initial: { y: -20, opacity: 0 },
                      hover: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    className="text-black poppins-medium text-center text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-tight max-w-[90%]"
                    variants={{
                      initial: { y: -15, opacity: 0 },
                      hover: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {card.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
