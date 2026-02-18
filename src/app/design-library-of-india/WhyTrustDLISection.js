"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Search, Workflow, Eye } from "lucide-react";

export default function WhyTrustDLISection() {
  const heading =
    "DLI is a private digital infrastructure that allows export houses and exporters to:";

  return (
    <section className="w-full bg-white min-h-screen flex flex-col justify-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[97%] mx-auto">
        {/* HEADER */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#6D6D6D] text-[16px]  monasans-400 md:text-[18px] tracking-[-0.03em] leading-[150%] uppercase mb-4"
          // style={{ fontFamily: "'Mona Sans', sans-serif" }}
          >
            WHAT DLI IS{" "}
          </motion.p>

          <motion.h2 className="text-[36px] sm:text-[48px] md:text-[56px]  monasans-500 lg:text-[62px] leading-[125%] tracking-[-0.04em] max-w-[95%]">
            {heading.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                {word.split("").map((char, charIndex) => {
                  const globalIndex = heading.split(" ").slice(0, wordIndex).join("").length + charIndex;
                  return (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: globalIndex * 0.015,
                        ease: "easeOut",
                      }}
                      className="inline-block"
                      style={{ willChange: "transform" }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
          {/* LEFT IMAGE - 32% width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
    w-full
    sm:w-[90%]
    md:w-[75%]
    lg:w-[515px]
    lg:max-w-[515px]
  "
            style={{ willChange: "transform" }}
          >
            <div
              className="
      relative
      w-full
      aspect-[515/520]
      rounded-lg
      overflow-hidden
    "
            >
              <Image
                src="/design-library-of-india/newww.avif"
                alt="Design Library"
                fill
                sizes="
        (max-width: 640px) 90vw,
        (max-width: 768px) 75vw,
        (max-width: 1024px) 60vw,
        515px
      "
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Cards with dividers */}
          <div className="flex-1 flex flex-col lg:h-auto lg:gap-8 lg:justify-between">
            {/* Top divider */}
            <div className="w-full h-[1px] bg-[#EEEEEE] mb-8 lg:mb-10" />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">
              {[
                {
                  icon: Brain,
                  title: "Preserve Design Memory as a System",
                  text: "Digitize and preserve complete design and sample history so work is never lost or recreated unnecessarily.",
                },
                {
                  icon: Search,
                  title: "Respond Faster Without Chasing Files",
                  text: "Search and retrieve designs using keywords and visual similarity instead of depending on people or folders.",
                },
                {
                  icon: Workflow,
                  title: "Run Buyer Workflows in One Place",
                  text: "Organize buyer queries, references, and RFQs within a single structured flow, not across WhatsApp and emails.",
                },
                {
                  icon: Eye,
                  title: "Plan Collections with Visibility, Not Guesswork",
                  text: "Reduce repeat sampling and prepare collections based on what exists and what buyers repeatedly ask for.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                  style={{ willChange: "transform" }}
                >
                  <div className="mb-4 text-[#C1C1C1]">
                    <item.icon size={28} strokeWidth={1} />
                  </div>

                  <h4
                    className="text-[20px] md:text-[24px] tracking-[-0.04em] leading-[140%] "
                    style={{
                      fontFamily: "'Mona Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-[#6D6D6D] text-[15px] md:text-[16px] tracking-[-0.02em] leading-[140%]"
                    style={{ fontFamily: "'Mona Sans', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Middle divider - between rows */}
            <div className="w-full h-[1px] bg-[#EEEEEE] my-8 lg:my-15 md:hidden" />

            {/* Bottom divider */}
            <div className="w-full h-[1px] bg-[#EEEEEE] mt-2 lg:mt-4" />
            <p className="text-[32px] md:text-[36px] monasans-500 text-[#6D6D6D] leading-tight [word-spacing:-0.05em] mr-2">
              Each business operates in an isolated environment. No shared
              libraries. No data exposure. No marketplace pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
