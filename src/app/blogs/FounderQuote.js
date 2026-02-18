"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CommunityJoinModal from "../vikava/component/CommunityJoinModal";

export default function FounderQuote() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F4F0E9] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex w-[1305px] max-w-full flex-col items-center justify-center rounded-[12px] bg-[#18181D] px-6 py-12 md:h-[420px] md:px-8 md:py-0 text-center"
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 md:gap-4">
          <p className="text-[18px] md:text-[24px] lg:text-[28px] geist-medium leading-snug text-[#F4F0E9]/80 max-w-3xl">
            If you want a room that respects builders and improves decisions - request an invite.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[24px] md:text-[32px] lg:text-[36px] geist-semibold leading-snug text-[#F4F0E9]">
              “We built this so no founder walks alone”
            </p>

            <p className="text-[16px] md:text-[32px] lg:text-[36px] geist-semibold leading-snug text-[#F4F0E9]">
              — Puuneet Aggarwal - Founder & Mentor, Vikava Labs
            </p>
          </div>

          <motion.div className="mt-4 md:mt-2">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
        relative 
        bg-[#EEEDE7]
        geist-medium rounded-full
        px-3 py-2
        flex items-center justify-between
        w-auto
        text-[#232323]
        text-[14px] md:text-[16px]
         overflow-hidden
        min-w-[180px] md:min-w-0
      "
            >
              {/* TEXT WRAPPER */}
              <span className="relative flex-1 min-w-0 overflow-hidden px-2">
                {/* Visible Text */}
                <motion.span
                  variants={{
                    rest: { y: 0, opacity: 1 },
                    hover: { y: 80, opacity: 0 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="relative z-10 block truncate text-center"
                >
                  Request an invite
                </motion.span>

                {/* Hover-in Text */}
                <motion.span
                  variants={{
                    rest: { y: -80, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute inset-0 z-0 block truncate text-center"
                >
                  Request an invite
                </motion.span>
              </span>

              {/* ARROW */}
              <span className="shrink-0 w-[34px] h-[34px] md:w-[38px] md:h-[38px] text-[18px] md:text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
          </motion.div>
        </div>
      </motion.div>

      <CommunityJoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
