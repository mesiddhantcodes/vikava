"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhyNowSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Grayscale mask height rises from bottom (0% to 100%)
  const grayscaleHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Text slides in from left to right
  const textX = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["-100%", "0%"]
  );

  return (
    <section ref={sectionRef} className="relative bg-black" style={{ height: "300vh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Original Color Image - Bottom layer */}
        <div className="absolute inset-0">
          <Image
            src="/ifx/whynow.avif"
            alt="Why Now"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Grayscale Image with Text - Reveals from bottom to top */}
        <motion.div
          className="absolute inset-x-0 bottom-0 overflow-hidden"
          style={{
            height: grayscaleHeight,
          }}
        >
          {/* Grayscale background */}
          <div 
            className="absolute w-full h-screen bottom-0" 
            style={{ filter: "grayscale(100%)" }}
          >
            <Image
              src="/ifx/whynow.avif"
              alt="Why Now"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text revealed by grayscale mask */}
          <div className="absolute bottom-0 w-full h-screen flex items-center justify-center overflow-hidden">
            <motion.h2
              style={{
                x: textX,
                fontSize: "clamp(128px, 30vw, 340px)",
                letterSpacing: "0.05em",
              }}
              className="text-white garamond-400 tracking-wide whitespace-nowrap"
            >
              Why Now
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
