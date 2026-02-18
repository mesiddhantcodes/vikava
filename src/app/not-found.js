"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlurText from "@/Components/BlurText";

export default function NotFound() {
  return (
    <div className="min-h-[90dvh] bg-[#F3F0EB] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      >
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#1b1c18] rounded-full blur-3xl" />
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#1b1c18] rounded-full blur-3xl" />
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center">
        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="garamond-400 font-bold mb-4 sm:mb-6"
          style={{
            fontSize: "clamp(42px, 15vw, 120px)", // ↓ min only
            lineHeight: "0.95",
            color: "#1b1c18",
            letterSpacing: "-0.02em",
          }}
        >
          <BlurText
            text=" 404 – Lost your "
            animateBy="words"
            delay={0.15}
            direction="up"
            className="geist-bold text-[#202020] leading-none text-[clamp(48px,8vw,100px)]"
            style={{ lineHeight: 1 }}
          />
          <BlurText
            text="way?"
            animateBy="words"
            delay={0.15}
            direction="up"
            className="geist-bold text-[#202020] justify-center leading-none text-[clamp(48px,8vw,100px)]"
            style={{ lineHeight: 1 }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-8 sm:mb-10 space-y-2 flex flex-col items-center max-w-xl"
        >
          <BlurText
            text="Looks like this page doesn't exist :( But your journey with Vikava Labs is just getting started."
            animateBy="words"
            direction="up"
            className=" justify-center
                            mt-3 
                            text-[clamp(14px,2.2vw,20px)] 
                            text-[#2b2622] 
                            geist-semibold 
                            tracking-wide 
                            max-w-[90%] 
                            sm:max-w-[80%] 
                            lg:max-w-[75%]
                            pointer-events-auto
                        "
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Link href="/">
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
                relative bg-[#F3F0EB] geist-medium
                rounded-full
                px-5 py-3 sm:px-6
                inline-flex items-center justify-center
                text-[#232323]
                text-[clamp(14px,1.2vw,16px)]
                 overflow-hidden cursor-pointer
              "
            >
              {/* TEXT */}
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
                Back to Home
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
                className="absolute left-5 sm:left-6 z-0 whitespace-nowrap"
              >
                Back to Home
              </motion.span>

              {/* Arrow */}
              <span
                className="
                  ml-3 sm:ml-4
                  w-[30px] h-[30px]
                  sm:w-[36px] sm:h-[36px]
                  text-[18px] sm:text-[20px]
                  rounded-full bg-[#232323]
                  flex items-center justify-center
                  text-white relative overflow-hidden
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
  );
}
