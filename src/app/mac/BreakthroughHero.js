"use client";

import React from "react";
import { motion } from "framer-motion";
export default function BreakthroughHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background gradient / image layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ] opacity-90" />
        {/* If you want to use the image as bg, uncomment below and update path */}
        {/* <Image
          src="/path/to/image.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-70"
        /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 min-h-screen text-center">
        <h1
          className="
            font-bold text-white tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[120px]
            leading-tight md:leading-[1.05] spacegrotesk-bold
          "
        >
          LET’S BUILD YOUR
          <br className="hidden md:block" />
          <span className="md:inline block"> NEXT BREAKTHROUGH!</span>
        </h1>

        {/* Button */}
        {/* ✅ FIXED BUTTON - Self-aligned, inline-block */}
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative bg-[#EEEDE7] inter-medium rounded-full px-2 py-1 lg:px-4 flex items-center text-[#232323] text-[16px] shadow-lg overflow-hidden self-center-safe lg:self-center-safe max-w-max inline-flex"
        >
          <motion.span
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: 80, opacity: 0 },
            }}
            transition={{
              duration: 0.45,
              ease: [0.56, 0.51, 0.85, 0.84],
            }}
            className="relative z-10 whitespace-nowrap spacegrotesk-regular"
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
            className="absolute left-6 z-0 whitespace-nowrap spacegrotesk-regular"
          >
            Connect With Us{" "}
          </motion.span>

          <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
      </div>
    </section>
  );
}
