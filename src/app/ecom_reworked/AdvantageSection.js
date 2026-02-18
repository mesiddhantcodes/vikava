"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AdvantageSection = () => {
  const advantages = [
    {
      icon: "/ecomm/icon1.webp",
      title: "SALES-FIRST PARTNER",
      description:
        "Not just tools or storefronts, but sales strategies + execution.",
    },
    {
      icon: "/ecomm/icon12.webp",
      title: "ONE ECOSYSTEM, ONE PARTNER",
      description: "Strategy, Tech, and delivery under one accountable roof.",
    },
    {
      icon: "/ecomm/icon13.webp",
      title: "INDIA + GLOBAL READY",
      description:
        "From UPI to Stripe, Amazon India to Amazon Global, ONDC to cross-border exports.",
    },
    {
      icon: "/ecomm/icon14.webp",
      title: "FUTURE-READY",
      description:
        "AI-powered analytics, predictive insights, GA4, Meta CAPI automation from day one.",
    },
    {
      icon: "/ecomm/icon15.webp",
      title: "MULTI-SEGMENT FRIENDLY",
      description:
        "Serving D2C, B2B, product-based, service-based businesses, and professionals.",
    },
    {
      icon: "/ecomm/icon16.webp",
      title: "PART OF VIKAVA LABS",
      description: "Connected with sourcing, design, and marketing pods.",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.175,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.175,
        delayChildren: 0.1,
      },
    },
  };

  const advantageCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
      },
    }),
  };

  const advantagesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const whyUsText = "why us?";

  return (
    <>
      <section className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 py-20 md:py-16 lg:py-20">
        {/* Left Side - Sticky Heading */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-36 lg:self-start h-fit">
          <div className="relative">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-6xl font-bold uppercase primary boldonse-400 leading-tight py-2 pl-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 30,
                mass: 1,
                delay: 0,
              }}
              viewport={{ once: true, amount: 0.8 }}
            >
              THE ADVANTAGE OF ECOM REWORKED
            </motion.h2>
            <span className="w-full flex justify-center items-center">
              <motion.h3
                className="meowscript-400 text-8xl md:text-8xl lg:text-8xl xl:text-9xl secondary -mt-10 md:-mt-15 z-10 w-fit"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
              >
                {whyUsText.split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={textVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h3>
            </span>
            <motion.p
              className="text-[#f8fcf7] pt-18 text-[20px] py-8 clashdisplay-400 leading-relaxed max-w-[80%]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Because good design isn’t enough — we build systems that sell,
              scale, and sustain your brand across markets.
            </motion.p>
            <Link href="/contact">
              {" "}
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="
          relative 
          bg-[#EEEDE7] geist-medium 
          rounded-full px-3 py-2 
          flex items-center 
          text-[#232323] 
          text-[clamp(14px,1.2vw,16px)]
           overflow-hidden
        "
              >
                {/* VISIBLE TEXT */}
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

                {/* HOVER TEXT */}
                <motion.span
                  variants={{
                    rest: { y: -80, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute left-6 whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                {/* ARROW */}
                <span
                  className="
            ml-4 
            w-[32px] h-[32px] 
            md:w-[36px] md:h-[36px] 
            rounded-full bg-[#232323] 
            flex items-center justify-center 
            text-white 
            relative overflow-hidden
          "
                >
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

        {/* Right Side - 3 Column Rows */}
        <motion.div
          className="w-full lg:w-[60%] grid grid-cols-1 gap-6 md:gap-15 lg:gap-15"
          variants={advantagesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-10 lg:pb-12 border-b border-white/10 last:border-b-0"
              custom={index}
              variants={advantageCardVariants}
            >
              {/* Icon */}
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 flex-shrink-0 relative opacity-60"
                initial={{ opacity: 0.6, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.44, 0, 0.56, 1],
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Content Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
                {/* Title */}
                <motion.h4
                  className="text-[#f8fcf7] font-bold text-lg md:text-xl lg:text-2xl uppercase clashdisplay-600 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.44, 0, 0.56, 1],
                    delay: index * 0.1 + 0.05,
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {advantage.title}
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-[#f8fcf7] text-sm md:text-base lg:text-lg clashdisplay-500 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.44, 0, 0.56, 1],
                    delay: index * 0.1 + 0.1,
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {advantage.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default AdvantageSection;
