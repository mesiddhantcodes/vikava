"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ScaleWithConfidence() {
  return (
    <section className="w-full bg-[#F3F0EB] px-4 py-16">
      <div className="flex flex-row w-full justify-center md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-[95%]
            h-auto lg:h-[400px]
            bg-[#05080C]
            px-6 py-10
            md:px-10 md:py-12
            lg:px-16 lg:py-14
            text-white
            flex flex-col justify-between
          "
        >
          {/* HEADING */}
          <div>
            <h2 className="leading-tight text-left text-[#F3F0EB]">
              <span className="greatvibes-regular text-[clamp(40px,7vw,75px)] mr-2">
                are you
              </span>
              <span className="geist-semibold text-[clamp(40px,7vw,75px)] mr-2">
                ready to scale
              </span>

              {/* LINE 2 */}
              <span className="geist-semibold block text-[clamp(40px,7vw,75px)] -mt-2 md:-mt-4">
                with confidence?
              </span>
            </h2>

            {/* SUBTEXT + CTA */}
            {/* SUBTEXT + CTA */}
            <div
              className="
    mt-6
    grid
    grid-cols-1
    md:grid-cols-[1fr_auto]
    items-start
    md:items-center
    gap-6
    w-full
    max-w-[1555px]
  "
            >
              {/* LEFT TEXT */}
              <p className="max-w-xl text-[clamp(16px,1.5vw,20px)] leading-relaxed text-[#F3F0EB] geist-medium">
                Let&apos;s turn your vision into an unstoppable business.
              </p>

              {/* CTA BUTTON – RIGHT ALIGNED */}
              <div className="flex md:justify-end">
                <Link href="/contact" passHref>
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
                      className="absolute left-4 whitespace-nowrap"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
