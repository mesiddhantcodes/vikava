"use client";

import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    tag: "[1]",
    heading: "One Ecosystem",
    description: "Nine verticals, one integrated growth engine.",
  },
  {
    tag: "[2]",
    heading: "Founders-First",
    description:
      "Built to reduce overwhelm and shorten timelines for entrepreneurs.",
  },
  {
    tag: "[3]",
    heading: "Proven Expertise",
    description: "26+ years across sourcing, operations, and consumer brands.",
  },
  {
    tag: "[4]",
    heading: "Scalable Pods",
    description:
      "Agile teams to reduce cost, increase speed, and improve delivery.",
  },
  {
    tag: "[5]",
    heading: "Investor-Ready",
    description:
      "Delivering clarity and execution that portfolio companies rely on.",
  },
  {
    tag: "[6]",
    heading: "Trust & Sustainability",
    description:
      "Values as infrastructure; ethical, transparent, impact-driven.",
  },
  {
    tag: "[7]",
    heading: "Future-Ready",
    description:
      "Tech implementation, AI-assisted execution, and global expansion playbooks.",
  },
];

const upVariant = {
  initial: { opacity: 0, y: 24 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 56,
      damping: 16,
      delay: i * 0.12,
    },
  }),
};

export default function WhyVikava() {
  return (
    <section className="w-full bg-[#F4F0E9] pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 pb-12">
      <div className="flex flex-col lg:flex-row">
        {/* Left / Sticky Heading */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-20 lg:self-start mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 26,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative max-w-[612px] mx-auto lg:ml-18 lg:mt-8"
          >
            {/* Desktop Heading */}
            <h2 className="hidden md:block text-neutral-900 leading-tight">
              <span className="flex items-baseline">
                <span className="greatvibes-regular text-[clamp(40px,5vw,72px)]">
                  Why
                </span>
                <span className="ml-1 geist-bold text-[clamp(40px,5vw,72px)]">
                  Vikava
                </span>
              </span>
              <span className="block geist-bold text-[clamp(40px,5vw,72px)] mt-1">
                Labs?
              </span>
            </h2>

            {/* Mobile Heading */}
            <h2 className="block md:hidden text-center">
              <span className="greatvibes-regular text-4xl">Why</span>
              <span className="block geist-bold text-4xl">Vikava Labs?</span>
            </h2>
          </motion.div>
        </div>

        {/* Right / Content */}
        <div className="w-full lg:w-1/2 flex flex-col lg:-ml-8">
          <div className="w-full max-w-[640px] mx-auto lg:mx-0 flex flex-col gap-4 lg:pl-6 py-4 sm:py-6 lg:py-8">
            {SERVICES_DATA.map((item, idx) => (
              <motion.div
                key={item.heading}
                custom={idx}
                variants={upVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full py-6 sm:py-7 lg:py-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 sm:gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="geist-bold text-[#222] leading-none text-[clamp(32px,5vw,72px)] mb-2">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="geist-semibold text-[#222] leading-tight text-lg sm:text-xl md:text-2xl">
                      {item.heading}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="flex items-end sm:max-w-xs">
                    <p className="geist-semibold text-[#232323] leading-relaxed text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
