"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import InterestModal from "../careers/InterestModal";
import Link from "next/link";
// import InterestModal from "../../careers/InterestModal";
export default function PromiseHeroSection() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // larger scroll window for tall layout
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  // Paragraph + Button fade IN only (no fade out)
  const paraOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const paraY = useTransform(scrollYProgress, [0, 0.18], [40, 0]);

  // Heading appears later
  const headingOpacity = useTransform(scrollYProgress, [0.3, 0.05], [1, 1]);
  const headingY = useTransform(scrollYProgress, [0.3, 0.55], [40, 0]);

  return (
    <section className="w-full flex justify-center bg-white relative">
      <div
        ref={ref}
        className="
        relative w-full 
        h-auto lg:h-[1000px]
        min-h-[780px]
        overflow-hidden rounded-sm
      "
      >
        {/* BACKGROUND */}
        <Image
          src="/design-library-of-india/lddd.jpg"
          alt="Knit promise"
          fill
          priority
          className="object-cover"
        />

        {/* HEADING — appears later */}
        <motion.h1
          style={{ opacity: headingOpacity, y: headingY }}
          className="
          absolute
          left-6 sm:left-10 
          bottom-44 sm:bottom-40 lg:bottom-48 2xl:bottom-56
          text-white
          text-[32px] sm:text-[72px] lg:text-[96px]
          monasans-500 leading-[0.95] 
          max-w-[95%] sm:max-w-[1400px]
          z-30
        "
        >
          Design memory instead of repetition.
          <br />
          Clarity instead of guesswork. <br />
          Structure instead of chaos.{" "}
        </motion.h1>

        {/* BUTTON — positioned below heading */}
        {/* TWO BUTTONS SIDE BY SIDE */}
        <div className="absolute left-6 sm:left-10 bottom-10 sm:bottom-16 flex gap-4 flex-wrap z-40">
          {/* BUTTON 1 */}


          {/* BUTTON 2 - Duplicate with different text */}
          <Link href="/contact"><motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            // initial="rest"
            whileHover="hover"
            animate="rest"
            className="cursor-pointer relative bg-[#EEEDE7] geist-medium rounded-full px-3 py-2 flex items-center text-[#232323] text-[16px]  overflow-hidden flex-shrink-0"
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
              Connect With Us            </motion.span>

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
              className="absolute left-6 z-0 whitespace-nowrap"
            >
              Connect With Us              </motion.span>

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

        </div>
      </div>
      <InterestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
