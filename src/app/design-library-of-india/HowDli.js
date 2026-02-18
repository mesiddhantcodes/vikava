"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HowDli() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
    viewport: { once: true },
  });
  return (
    <section className="w-full flex justify-center bg-white px-6 md:px-12 py-24">
      {" "}
      <div
        className="py-12
          w-[85%] grid grid-cols-1 
          md:grid-cols-[1.2fr_1fr] 
          gap-12 mx-auto
        "
      >
        {/* LEFT TEXT */}
        <div>
          <p className="text-[18px] monasans-400 text-[#6d6d6d] mb-4 uppercase">
            HOW DLI IS OFFERED{" "}
          </p>
          <motion.h2
            className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500
            leading-[1.2]
            w-full
            mb-16
            flex flex-wrap
          "
          >
            {[
              "Private",
              "onboarding,",
              "annual,",
              "infrastructure,",
              "no",
              "public",
              "access.",
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: i * 0.05,
                  },
                }}
                viewport={{ once: true }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            {...fadeUp(0.25)}
            className="
                text-[clamp(15px,1.2vw,18px)]
                monasans-500 text-[#4b4b4b]
                max-w-[600px] leading-tight
              "
          >
            DLI is not publicly listed or open-access. Businesses are onboarded
            selectively and offered DLI as annual business infrastructure—not as
            a tool subscription.
          </motion.p>
          <motion.div style={{}} className="pt-4">
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
                  className="absolute left-4 sm:left-5 md:left-4 z-0 whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                <span
                  className="
              ml-1 sm:ml-1.5 md:ml-2 md:ml-4
              w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] 
              text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]
              rounded-full bg-[#232323] flex items-center justify-center text-white 
              relative overflow-hidden flex-shrink-0
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

        {/* RIGHT SMALL IMAGE — RESPONSIVE ASPECT RATIO */}
        <motion.div
          {...fadeUp(0.25)}
          className="relative rounded-[20px] overflow-hidden w-full aspect-[3/2]"
        >
          <Image
            src="/design-library-of-india/card1.avif"
            alt="Knitwear development"
            fill
            sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     40vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
