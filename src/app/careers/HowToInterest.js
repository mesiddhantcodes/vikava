"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InterestModal from "./InterestModal";

export default function HowToInterest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F3F0EB] px-4 py-16">
      <div className="flex flex-row w-full justify-center md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
    w-full
    md:w-[95%]
    md:max-w-[75%]
    bg-[#201F24]
    rounded-xl
    px-6 py-12
    sm:px-10 sm:py-16
    lg:px-16 lg:py-20
    text-white
    flex flex-col
    items-center
    text-center
  "
        >
          {/* HEADING */}
          <h2
            className="
      geist-semibold
      text-[24px]
      sm:text-[28px]
      md:text-[32px]
      mb-4 md:mb-6
      text-[#F3F0EB]
    "
          >
            How to Express Interest
          </h2>

          {/* BODY TEXT */}
          <p
            className="
      geist-medium
      text-[20px]
      sm:text-[24px]
      md:text-[32px]
      leading-[1.2]
      text-[#F3F0EB]
      w-full md:max-w-[92%]
      mb-8 md:mb-10
    "
          >
            We do not advertise open roles. When there is strong alignment, we
            reach out. If the way we think resonates with you, you can express
            interest.
          </p>

          {/* CTA — UNCHANGED */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
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
                Express Interest
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
                Express Interest
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
          </div>

          <InterestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.div>
      </div>
    </section>
  );
}
