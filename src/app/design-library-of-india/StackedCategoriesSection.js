"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    id: "01. Design Memory & Continuity",
    title: "Old, current, and future designs are stored, tagged, and searchable—so teams reuse before they remake",
    desc: "Outcome: Lower resampling cost and faster internal decision-making.",
    image: "/design-library-of-india/new1.avif",
  },
  {
    id: "02. Buyer Response & Context",
    title: "All queries, references, and discussions remain linked to styles and history in a threaded system instead of being scattered across WhatsApp, emails, and folders.",
    desc: "Outcome: Faster replies, fewer misses, stronger buyer confidence, and reduced approval confusion.",
    image: "/design-library-of-india/new2.avif",
  },
  {
    id: "03. Sampling Control & Accountability",
    title: "DLI introduces Sample Journey Management to track sample status and movement. Returnable workflows, deposits, and logistics controls remain optional.",
    desc: "Outcome: Reduced sample loss and clearer internal ownership.",
    image: "/design-library-of-india/new3.avif",
  },
  {
    id: "04. Collection Planning & Decision Clarity",
    title: "DLI supports demand-gap visibility—helping teams understand what’s repeatedly asked for versus what already exists.",
    desc: "Outcome: Smarter sampling decisions and better seasonal focus.",
    image: "/design-library-of-india/new4.avif",
  },
];

function StackedCard({ card, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <motion.li
      ref={ref}
      style={{
        scale,
        y,
        marginTop: index * 40, // slightly reduced stack spacing too
      }}
      className="sticky top-24 w-full px-0 md:px-4"
    >
      <div className="w-full flex justify-center">
        <div
          className="
            bg-[#F2F4F7]
            rounded-[28px]
            overflow-hidden
            flex flex-col md:flex-row
            w-full md:w-[85%]

            min-h-[200px]
            md:min-h-[260px]
            lg:min-h-[320px]
            xl:min-h-[340px]
            2xl:min-h-[380px]
          "
        >
          {/* IMAGE (reduced height via aspect ratio change) */}
          <div
            className="
              relative
              w-full md:w-[35%]

              /* ↓ Slightly shorter image aspect ratios */
              aspect-[5/3] md:aspect-[7/7]

              md:my-2 md:ml-2
              rounded-none md:rounded-[20px]
              overflow-hidden shrink-0
            "
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     40vw"
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-start  px-6 md:px-10 py-6 w-[90%] md:w-[40%]">
            {/* ID */}
            <p className="text-[clamp(12px,0.9vw,24px)] monasans-400 text-[#646464] mb-1">
              {card.id}
            </p>

            {/* TITLE */}
            <h3 className="text-[clamp(20px,1.2vw,32px)] monasans-500 my-2 text-black leading-[0.95]  mb-2">
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[clamp(14px,0.98vw,26px)] monasans-500 text-[#6d6d6d] mt-4 w-[80%]  leading-[0.95]">
              {card.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function StackedCategoriesSection() {
  return (
    // <section className="w-full flex justify-center bg-white py-24 px-4">
    <section className="w-full flex justify-center px-6 md:px-12 bg-white py-24">
      <div className="max-w-[95%] w-full">
        {/* LABEL */}
        <p className="text-[18px] monasans-400 text-[#6d6d6d] mb-3 uppercase">
          What DLI Stabilizes (at the Root)
        </p>

        {/* HEADING */}
        <motion.h2
          className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500
            leading-[1.2]
            w-full
            mb-16
            flex flex-wrap
          "
        >
          {[
            "DLI",
            "fixes",
            "root-level",
            "breakdowns",
            "in",
            "design",
            "memory",
            "buyer",
            "handling",
            ", and",
            " sampling-not",
            "surface-level",
            "inefficiencies",
          ].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.05,
                },
              }}
              viewport={{ once: true }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* STACK */}
        <ul className="relative w-full">
          {categories.map((card, index) => (
            <StackedCard key={card.id} card={card} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
