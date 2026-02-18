"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const EcommFounder = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 30,
        mass: 1,
        delay: 0.05,
      },
    },
  };

  const founderVoiceText = "founder's voice";

  return (
    <>
      <div className="min-h-screen pt-10 md:pt-20 overflow-hidden flex flex-col justify-center items-center">
        <div className="max-w-6xl text-center ">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-6xl font-bold uppercase primary boldonse-400 leading-tight"
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
            The Vision Behind <br />
            Ecom Reworked
          </motion.h2>
          <span className="w-full flex justify-center items-center">
            <motion.h3
              className="meowscript-400 text-6xl md:text-8xl lg:text-8xl xl:text-8xl secondary -mt-5 md:-mt-10 z-10 w-fit"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              {founderVoiceText.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h3>
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-[45%] flex justify-center lg:justify-start"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full flex justify-center mt-10">
                {/* Card wrapper */}
                <div
                  className="
      relative
      w-full
      max-w-[320px]
      sm:max-w-[360px]
      lg:max-w-[420px]
      rounded-3xl
      overflow-hidden
    "
                >
                  {/* Video container */}
                  <div
                    className="
        relative
        w-full
        h-[70vh]
        sm:h-[75vh]
        lg:h-[520px]
        rounded-2xl
        overflow-hidden
      "
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/ecomm/vid2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Content Section */}
            <motion.div
              className="w-full lg:w-[55%] flex flex-col gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }}
            >
              {/* Quote */}
              <motion.blockquote
                className="text-[#f8fcf7] text-base md:text-lg lg:text-xl leading-relaxed boldonse clashdisplay-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 30,
                  mass: 1,
                  delay: 0.15,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                "Most founders think e-commerce is about a website. In reality,
                it's about the ecosystem and sales engine behind it - strategy,
                sourcing, marketing, logistics, payments, and customer journeys.
                With Ecom Reworked, we give founders the complete sales system."
              </motion.blockquote>

              {/* Author */}
              <motion.p
                className="text-[#f8fcf7] text-base md:text-lg lg:text-xl font-bold clashdisplay-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 30,
                  mass: 1,
                  delay: 0.25,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                — Puuneet Aggarwal - Founder & Mentor, Vikava Labs
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommFounder;
