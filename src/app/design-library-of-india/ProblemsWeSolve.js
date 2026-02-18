"use client";

import { motion } from "framer-motion";

export default function ProblemsWeSolve() {
  const heading = "Removing the Bottlenecks That Slow Product Development";

  const items = [
    {
      num: "01",
      title: "Unclear Approvals",
      desc: "Endless sampling loops caused by unclear, unaligned approvals.",
    },
    {
      num: "02",
      title: "Scattered Communication",
      desc: "Conversations spread across WhatsApp, email and PDFs—creating confusion.",
    },
    {
      num: "03",
      title: "Specs & Version Errors",
      desc: "Missing specifications, outdated versions and frequent rework.",
    },
    {
      num: "04",
      title: "Courier Ping-Pong",
      desc: "Back-and-forth shipments that waste time, money and carbon.",
    },
    {
      num: "05",
      title: "No Unified Visual Reference",
      desc: "Teams lack a single trusted visual source everyone can align on.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[97%] mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT: HEADER */}
          <div className="max-w-[640px]">
            <div className="mb-12 md:mb-16 lg:mb-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[#6D6D6D] text-[16px] md:text-[18px] tracking-[-0.03em] leading-[150%] uppercase mb-4 monasans-400"
              >
                THE PROBLEM WE SOLVE
              </motion.p>

              <motion.h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[125%] tracking-[-0.04em] monasans-500">
                {heading.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.015,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                    style={{ willChange: "transform" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </div>

          {/* RIGHT: PROCESS LIST */}
          <div className="w-full max-w-[720px]">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 border-b border-[#D6D6D6] py-5 first:pt-0"
                style={{ willChange: "transform" }}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-[44px] h-[28px] flex items-center justify-center">
                  <span className="text-[14px] text-[#646464] tracking-[-0.02em] monasans-500">
                    {item.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <h3 className="text-[20px] md:text-[24px] leading-[1.5] mb-1 monasans-500">
                    {item.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-black/60 tracking-[-0.02em] leading-[1.5] monasans-500 max-w-[400px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
