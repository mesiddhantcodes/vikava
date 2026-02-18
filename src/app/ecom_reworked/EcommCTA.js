// src/app/ecomm/CTASection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Galaxy from "./Galaxy";

export default function CTASection() {
  return (
    <section className="relative w-full mt-10 pt-30 h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-10">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-3xl font-bold uppercase primary boldonse-400 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          READY TO SWITCH YOUR <br/> COMMERCE FULLY ON?
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-white/80 clashdisplay-500 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Partner with Ecom Reworked and
          <br className="hidden md:block" />
          unlock a sales system that works
          <br className="hidden md:block" />
          end-to-end.
        </motion.p>
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative  bg-[#EEEDE7] mx-auto mt-8 clashdisplay-500 rounded-full px-4 py-2 flex items-center text-[#232323] text-[16px] shadow overflow-hidden"
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
            className="absolute left-6 z-0 whitespace-nowrap"
          >
            Connect With Us
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
              &rarr;
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
              &rarr;
            </motion.span>
          </span>
        </motion.button>
      </div>
    </section>
  );
}
