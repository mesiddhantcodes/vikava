// app/components/BuiltInIndiaSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "India Sourcing Edge",
    body: "Competitive costs, skilled artisans, and sustainable supply chains",
    icons: [
      "/vikava/small1.avif",
      "/vikava/small2.avif",
      "/vikava/small3.avif",
    ],
  },
  {
    id: "02",
    title: "Global Standards",
    body: "Compliance, governance, and export-readiness baked into every process",
    icons: ["/vikava/small4.avif", "/vikava/small5.jpg", "/vikava/small6.avif"],
  },
  {
    id: "03",
    title: "Cross-Border Growth",
    body: "Supporting brands from India to USA, Europe, Middle East, and beyond",
    icons: [
      "/vikava/small7.avif",
      "/vikava/small8.avif",
      "/vikava/small9.avif",
    ],
  },
];

export default function BuiltInIndiaSection() {
  return (
    <section className="w-full bg-[#F4F0E9] px-4 md:px-8 py-20">
      <div className="mx-auto max-w-[97%] text-center">
        {/* ================== HEADING ================== */}
        <h2 className="leading-tight text-[#15141B] flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {["Built", "in", "India,"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="geist-bold text-[40px] md:text-[64px] lg:text-[88px] leading-none inline-block"
            >
              {word}
            </motion.span>
          ))}

          {["ready", "for", "the", "world"].map((word, i) => (
            <motion.span
              key={"w2-" + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (i + 4) * 0.15,
              }}
              className="greatvibes-regular text-[45px] md:text-[64px] lg:text-[88px] leading-none inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* ================== SUBHEADING ================== */}
        <p className="mx-auto mt-6 max-w-md text-[14px] sm:text-[16px] md:text-[18px] geist-semibold leading-relaxed text-[#26252D] px-4 sm:px-0">
          Vikava Labs builds business infrastructure that combines India’s
          execution strength with global standards of scale, governance, and
          growth.
        </p>

        {/* ================== MOBILE VERTICAL TIMELINE (visible only on mobile) ================== */}
        <div className="mt-12 block md:hidden">
          {pillars.map((p, index) => (
            <div key={p.id} className="mb-10 last:mb-0">
              {/* Horizontal line with dot */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-[#000000]" />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#15141B] text-[14px] font-semibold text-white">
                  {p.id}
                </div>
              </div>

              {/* Content below */}
              <div className="flex flex-col items-center text-center px-4">
                {/* Icons */}
                <div className="mb-4 flex gap-2">
                  {p.icons.map((src, i) => (
                    <div
                      key={src + i}
                      className="relative h-9 w-9 overflow-hidden rounded-[10px] bg-[#DDD6C8]"
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>

                {/* Title */}
                <p className="text-[18px] geist-medium text-[#201f24]">
                  {p.title}
                </p>

                {/* Body */}
                <p className="mt-3 max-w-xs text-[14px] geist-medium leading-relaxed text-[#201f24]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================== DESKTOP TIMELINE DOTS (hidden on mobile) ================== */}
        <div className="mt-16 hidden md:block">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-0">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-[#000000]" />

            {pillars.map((p) => (
              <div
                key={p.id}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#15141B] text-[16px] font-semibold text-white flex-shrink-0"
              >
                {p.id}
              </div>
            ))}
          </div>
        </div>

        {/* ================== DESKTOP 3 COLUMNS (hidden on mobile) ================== */}
        <div className="mt-12 hidden md:grid gap-10 grid-cols-3 px-0">
          {pillars.map((p) => (
            <div key={p.id} className="flex flex-col items-center text-center">
              {/* Icons */}
              <div className="mb-5 flex gap-2">
                {p.icons.map((src, i) => (
                  <div
                    key={src + i}
                    className="relative h-10 w-10 overflow-hidden rounded-[10px] bg-[#DDD6C8]"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Title */}
              <p className="text-[24px] geist-medium text-[#201f24]">
                {p.title}
              </p>

              {/* Body */}
              <p className="mt-3 max-w-xs text-[18px] geist-medium leading-relaxed text-[#201f24]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
