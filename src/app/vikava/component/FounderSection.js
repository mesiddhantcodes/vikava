// app/components/FounderSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay,
    },
  }),
};

export default function FounderSection() {
  return (
    <section className="relative w-full bg-[#F4F0E9] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 md:py-20 lg:py-24 z-10">
      {" "}
      <div className="mx-auto max-w-[1280px] w-full">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* ========== LEFT: IMAGE ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="w-full"
            style={{ willChange: "transform" }}
          >
            <div className="relative w-full h-[450px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[700px] overflow-hidden rounded-md bg-neutral-200">
              <Image
                src="/vikava/owner.avif"
                alt="Modern glass and steel building with warm wooden ceilings, surrounded by lush greenery, blending contemporary architecture with nature."
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* ⭐ LinkedIn Icon - Perfect Bottom-Right Corner */}
              <a
                href=" https://www.linkedin.com/in/puuneet-aggarwal-22003011/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 z-20 group" /* ⭐ Corner positioning */
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 bg-[#F4F0E9] hover:bg-[#F4F0E9]/100 backdrop-blur-sm rounded-tl-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-[#F4F0E9] hover:border-[#F4F0E9]/80"
  fill="#000000"   // ✅ BLACK ICON
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ========== RIGHT: CONTENT ========== */}
          <div className="w-full flex flex-col justify-between">
            {/* Top: Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.1}
              className="mb-8 lg:mb-0"
              style={{ willChange: "transform" }}
            >
              <h3 className="leading-none text-[#201F24]">
                <span className="block geist-semibold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[48px]">
                  Meet the Founder-
                </span>
                <br />
                <span className="block greatvibes-regular text-[36px] sm:text-[42px] md:text-[48px] lg:text-[48px]">
                  Path pradarshak
                </span>
              </h3>
            </motion.div>

            {/* Bottom: Bio Paragraph */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2}
              style={{ willChange: "transform" }}
            >
              <p className="geist-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] text-[#201F24]">
                Puuneet Aggarwal has spent 26+ years across fashion, sourcing,
                and brand growth. From building Sun International into an
                ethical manufacturing partner to enabling labels for India and
                global markets, his journey has one constant: trust with
                execution. Vikava Labs is his answer to a fragmented ecosystem -
                a place where founders get one growth partner from idea to
                impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
