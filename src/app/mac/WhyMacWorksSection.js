"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyMacWorksSection() {
  return (
    <section className="relative w-full bg-transparent py-12 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 w-[97%] mx-auto">
        {/* Grid with bottom alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* LEFT - Two Stacked Titles (Exact Framer Style) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-0 lg:space-y-2"
          >
            {/* Line 1 - "Why MAC Works" */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white spacegrotesk-bold uppercase block"
              style={{
                fontSize: "clamp(52px, 12vw, 80px)",
                fontWeight: 700,
                lineHeight: "clamp(52px, 12vw, 80px)",
                letterSpacing: "-3px",
                textAlign: "left",
              }}
            >
              Why MAC Works
            </motion.h2>

            {/* Line 2 - "Our Edge" */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white spacegrotesk-bold uppercase block"
              style={{
                fontSize: "clamp(52px, 12vw, 80px)",
                fontWeight: 700,
                lineHeight: "clamp(52px, 12vw, 80px)",
                letterSpacing: "-3px",
                textAlign: "left",
              }}
            >
              Our Edge
            </motion.h2>
          </motion.div>

          {/* RIGHT - Description + Framer Button (bottom aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-end space-y-8"
          >
            {/* Body Text - Exact Framer Specs */}
            <p
              className="text-white spacegrotesk-regular uppercase"
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                letterSpacing: "0.4px",
                lineHeight: "34px",
                fontWeight: 400,
              }}
            >
              MAC combines{" "}
              <strong className="spacegrotesk-bold">
                mentorship, compliance, branding, sourcing, and growth
              </strong>{" "}
              under one roof — giving founders, professionals, and investors the
              clarity, speed, and execution they need.
            </p>

            {/* ✅ FIXED BUTTON - Self-aligned, inline-block */}
            <Link href="/contact" className="lg:self-end">
              {" "}
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative bg-[#EEEDE7] geist-medium rounded-full px-3 py-2 flex items-center text-[#232323] text-[16px] shadow-lg overflow-hidden self-start lg:self-end max-w-max inline-flex"
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
                  className="relative z-10 whitespace-nowrap "
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
                  className="absolute left-6 z-0 whitespace-nowrap "
                >
                  Connect With Us{" "}
                </motion.span>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
