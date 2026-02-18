"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STRIPS = [
  { id: 1, src: "/lasttag/layer1.avif", alt: "Strip 1" },
  { id: 2, src: "/lasttag/layerr2.avif", alt: "Strip 2" },
  { id: 3, src: "/lasttag/layer3.avif", alt: "Strip 3" },
  { id: 4, src: "/lasttag/layer4.avif", alt: "Strip 4" },
  { id: 5, src: "/lasttag/layer5.avif", alt: "Strip 5" },
  { id: 6, src: "/lasttag/layer6.avif", alt: "Strip 6" },
];

const NAV_HEIGHT = 98; // px

export default function MarketLoudClearSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-[#F4FFF4]"
      style={{
        minHeight: `calc(${(1 + STRIPS.length) * 100}vh - ${NAV_HEIGHT}px)`,
        paddingTop: NAV_HEIGHT,
      }}
    >
      {/* Sticky viewport under navbar */}
      <div
        className="sticky w-full overflow-hidden"
        style={{
          top: NAV_HEIGHT,
          height: `calc(100vh - ${NAV_HEIGHT}px)`,
        }}
      >
        {/* Base black */}
        <div className="absolute inset-0 bg-black" />

        {/* Strips row (full width) */}
        <div className="absolute inset-0 flex justify-between">
          {STRIPS.map((strip, index) => {
            const totalSlots = STRIPS.length + 1;
            const slotStart = (index + 1) / totalSlots;
            const slotEnd = (index + 2) / totalSlots;

            const localProgress = useTransform(
              scrollYProgress,
              [slotStart, slotEnd],
              [0, 1]
            );

            // Bottom → center, then stick
            const y = useTransform(localProgress, [0, 0.7, 1], [800, 0, 0]);
            const opacity = useTransform(
              localProgress,
              [0, 0.1, 1],
              [0, 1, 1]
            );

            return (
              <motion.div
                key={strip.id}
                style={{ y, opacity }}
                className="
                  relative flex-1 h-full overflow-hidden
                "
              >
                <Image
                  src={strip.src}
                  alt={strip.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Centered heading with blend effect */}
        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
          <h2
            className="
              galindo-regular text-center leading-none tracking-tight 
              text-[20px] sm:text-[34px] md:text-[54px] lg:text-[78px] xl:text-[84px] 2xl:text-[98px]
              mix-blend-difference text-white
            "
          >
            MARKET, LOUD &amp; CLEAR.
          </h2>
        </div>
      </div>
    </section>
  );
}
