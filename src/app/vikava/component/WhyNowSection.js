// app/components/WhyNowSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WhyNowSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPos = sessionStorage.getItem("vikava_scroll_pos");
      if (savedPos) {
        // 1. Disable browser interference
        if ("scrollRestoration" in history) {
          history.scrollRestoration = "manual";
        }

        const targetY = parseInt(savedPos);
        const attemptScroll = () => window.scrollTo(0, targetY);

        // 2. Aggressive retry loop (extended to 1000ms)
        attemptScroll();
        const intervals = [50, 100, 200, 500, 800, 1000];
        intervals.forEach((t) => setTimeout(attemptScroll, t));

        // 3. Cleanup and re-enable browser control
        setTimeout(() => {
          sessionStorage.removeItem("vikava_scroll_pos");
          if ("scrollRestoration" in history) {
            history.scrollRestoration = "auto";
          }
        }, 1200);
      }
    }
  }, []);
  return (
    <section className="w-full bg-[#201F24] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] w-full">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1.5">
          {/* ========== LEFT: TEXT CONTENT ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col"
            style={{ willChange: "transform" }}
          >
            {/* Heading */}
            <div className="mb-6 md:mb-8">
              <h3 className="leading-none text-[#F3F0EB]">
                <span className="geist-semibold text-[36px] sm:text-[42px] md:text-[48px]">
                  Why Now-{" "}
                </span>
                <span className="greatvibes-regular text-[36px] sm:text-[42px] md:text-[48px]">
                  Ab nahi <br /> toh kab?
                </span>
              </h3>
            </div>

            {/* Main paragraph */}
            <div className="mb-6">
              <p className="geist-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-[#F3F0EB]">
                The internet made reach easy — building well is still hard.
                Information is abundant; reliable execution is rare. The market
                is fragmented; founders waste time and money stitching vendors
                together.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <div>
                <p className="geist-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-[#F3F0EB]">
                  Vikava Labs gives you one operating system —
                </p>
              </div>
              <div>
                <p className="geist-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-[#F3F0EB]">
                  Idea → product → supply → store → marketing → scale.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ========== RIGHT: BUTTON + IMAGE ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col gap-6 items-start lg:items-end mt-8 lg:mt-10"
            style={{ willChange: "transform" }}
          >
            <Link
              href="/contact"
              passHref
              onClick={() => {
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("vikava_scroll_pos", window.scrollY.toString());
                }
              }}
            >
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative bg-[#EEEDE7] geist-medium rounded-full px-3 py-2 flex items-center text-[#232323] text-[16px]  overflow-hidden flex-shrink-0"
              >
                {/* TEXT visible */}
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

                {/* TEXT on hover */}
                <motion.span
                  variants={{
                    rest: { y: -80, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute left-4 z-0 whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                {/* ARROW */}
                <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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

            {/* Image */}
            <div className="relative mt-34 w-full h-[250px] sm:h-[300px] md:h-[340px] lg:h-[388px] overflow-hidden rounded-sm bg-neutral-800">
              <Image
                src="/vikava/help.avif"
                alt="Modern bathroom with wooden cabinetry, minimalist design, large windows, and a view of greenery outside."
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
