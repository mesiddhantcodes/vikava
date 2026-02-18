"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommunityJoinModal from "./CommunityJoinModal";

export default function CommunityInviteSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          src="/vikava/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex w-full justify-center px-4 py-48">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            w-full max-w-[1215px] 
            rounded-[22px] bg-[#15171C]/96 
            px-6 py-10 
            md:px-12 md:py-12 
            lg:px-20 lg:py-16 
            text-center text-white 
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
          "
        >
          {/* ================= EYEBROW ================= */}
          <div className="mb-6 flex items-center justify-center gap-2 text-[clamp(14px,1.2vw,18px)] text-[#E7E7E7]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="text-white"
              >
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z"></path>
              </svg>
            </span>

            <span className="geist-medium text-[#F3F0EB]">
              A quiet room for serious business owners.{" "}
            </span>
          </div>

          {/* ================= MAIN HEADING ================= */}
          <div className="mx-auto max-w-5xl leading-tight">
            <p className="text-[clamp(32px,5vw,48px)] text-[#F3F0EB]">
              <span className="greatvibes-regular text-[clamp(32px,5vw,48px)]">
                no marketing. no noise.{" "}
              </span>{" "}
              <span className="geist-bold">
                JUST REAL PROBLEMS, <br />
                REAL BUILDERS, AND HIGH <br />
                SIGNAL SUPPORT!{" "}
              </span>
            </p>
          </div>

          {/* ================= BODY ================= */}
          <p className="mx-auto mt-8 max-w-3xl text-[clamp(16px,1.5vw,20px)] leading-relaxed text-[#F3F0EB] geist-medium">
            The Vikava Labs WhatsApp Community is invite-only - built for
            founders and operators who want clarity, execution discipline, and
            trusted peer support. If you’re building something real and want a
            high-signal room, request an invite.
          </p>

          {/* ================= BUTTON ================= */}
          <div className="mt-10 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch md:items-center w-full">
            {/* BUTTON 1 */}
            <Link
              href="/blogs/vikava-labs-founders-community-ek-saath-safar"
              // aria-label="Read the House Rules"
              className="w-full md:w-auto"
            >
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="
        relative mt-2 md:mt-4
        bg-[#EEEDE7]
        geist-medium rounded-full
        px-3 py-2
        flex items-center justify-between
        w-full md:w-auto
        text-[#232323]
        text-[clamp(14px,1.2vw,16px)]
         overflow-hidden
        min-w-0
      "
              >
                {/* TEXT WRAPPER (IMPORTANT) */}
                <span className="relative flex-1 min-w-0 overflow-hidden">
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
                    className="relative z-10 block truncate"
                  >
                    Read the House Rules
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
                    className="absolute inset-0 z-0 block truncate"
                  >
                    Read the House Rules
                  </motion.span>
                </span>

                {/* ARROW */}
                <span className="ml-3 shrink-0 w-[34px] h-[34px] md:w-[38px] md:h-[38px] text-[18px] md:text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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

            {/* BUTTON 2 - NOW HANDLES MODAL */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
      relative mt-2 md:mt-4
      bg-[#EEEDE7]
      geist-medium rounded-full
      px-3 py-2
      flex items-center justify-between
      w-full md:w-auto
      text-[#232323]
      text-[clamp(14px,1.2vw,16px)]
       overflow-hidden
      min-w-0
    "
            >
              {/* TEXT WRAPPER */}
              <span className="relative flex-1 min-w-0 overflow-hidden">
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
                  className="relative z-10 block truncate"
                >
                  Fill our EOI form
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
                  className="absolute inset-0 z-0 block truncate"
                >
                  Fill our EOI form
                </motion.span>
              </span>

              {/* ARROW */}
              <span className="ml-3 shrink-0 w-[34px] h-[34px] md:w-[38px] md:h-[38px] text-[18px] md:text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
        </motion.div>
      </div>

      <CommunityJoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
