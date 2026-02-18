"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  "09 integrated growth capabilities",
  "26+ Years Experience",
  "Founder-first execution governance",
];

export default function GrowthStatsSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Controlled zoom that won't cause overflow
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.18]);

  const baseStart = 0.2;
  const step = 0.12;

  return (
    <section
      ref={ref}
      className="relative  w-full min-h-[200vh] overflow-x-clip mb-32"
    >
      <div className="sticky top-0 flex w-full h-screen justify-center items-center overflow-hidden">
        <motion.div
          style={{
            scale,
            // Constrain transform origin to prevent overflow
            transformOrigin: "center center",
          }}
          className="
            relative 
            w-full 
            h-screen 
            overflow-hidden
          "
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/ecomm/newcard.avif"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="95vw"
            />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center px-4 max-w-[75%] md:max-w-[90%]">
              {stats.map((item, index) => {
                const start = baseStart + index * step;
                const end = start + 0.15;

                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1]
                );

                const y = useTransform(scrollYProgress, [start, end], [40, 0]);

                return (
                  <motion.p
                    key={index}
                    style={{ opacity, y }}
                    className="
                      monasans-600 text-black leading-snug md:leading-none
                      text-[clamp(14px,3vw,32px)]
                      text-center max-w-[90vw]
                    "
                  >
                    {item}
                  </motion.p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
