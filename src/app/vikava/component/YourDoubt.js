"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VIKAVA_FAQ } from "@/constants/faqData";

const upVariant = {
  initial: { opacity: 0, y: 28 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 56,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

export default function YourDoubt({ faqs = VIKAVA_FAQ }) {
  const [openIds, setOpenIds] = useState([]);

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#F4F0E9] px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="flex flex-col px-0 sm:px-6 lg:flex-row">
        <div className="w-full lg:w-1/2 lg:sticky lg:top-36 lg:self-start mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 30,
              mass: 1,
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-10 w-full md:ml-8 lg:mb-0 lg:w-1/2"
          >
            <div className="max-w-[460px]">
              <h2 className="leading-none text-neutral-900">
                <span className="flex flex-wrap items-baseline gap-x-2">
                  <span className="greatvibes-regular text-[40px] md:text-[88px]">
                    Your
                  </span>
                  <span className="geist-medium text-[40px] md:text-[88px]">
                    Doubts,
                  </span>
                </span>
                <span className="mt-1 block">
                  <span className="geist-medium text-[40px] md:text-[88px]">
                    Our
                  </span>
                  <span className="ml-2 greatvibes-regular text-[40px] md:text-[88px]">
                    Answers.
                  </span>
                </span>
              </h2>

              <p className="mt-10 text-[clamp(14px,1.2vw,18px)] leading-relaxed text-[#232323] geist-medium">
                From who we work with to how we help — here’s everything you
                need to know about Vikava Labs. If you don't see your question
                here, feel free to reach out — We're happy to help!
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE — SCROLL ANIMATED FAQ ITEMS */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="flex w-full max-w-[677px] flex-col py-4 sm:py-6 lg:py-8">
            {faqs.map((item, idx) => {
              const isOpen = openIds.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  custom={idx}
                  variants={upVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full border-b border-[#232323]/15 py-8 sm:py-6 lg:py-12 last:border-b-0"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className="geist-medium text-[26px] text-[#222]">
                        {idx + 1}.
                      </span>

                      <p className="geist-semibold text-[26px] text-[#201F24] text-left">
                        {item.question}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`flex h-6 w-6 items-center justify-center transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-3 text-left geist-medium text-[18px] leading-relaxed text-[#3a3935]"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
