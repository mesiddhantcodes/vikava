"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CombinedSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // First phase: Text mask grows vertically revealing WhyNow image (0 to 0.5)
  const maskHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // Second phase: WhyNow grayscale and text animation (0.5 to 1)
  const grayscaleHeight = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["0%", "100%"]
  );
  const textX = useTransform(scrollYProgress, [0.6, 0.9], ["-100%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "400vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Text background layer - Bottom layer */}
        <div className="absolute inset-0 bg-white flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20">
          <h2
            className="garamond-400 text-[#1b1c18] text-center"
            style={{
              fontSize: "clamp(32px, 8vw, 112px)",
              lineHeight: "1.1",
            }}
          >
            Turning Couture
            <br />
            Chaos Into Global
            <br />
            Clarity.
          </h2>
        </div>

        {/* WhyNow image reveal - grows vertically from center - Middle layer */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            className="relative w-full overflow-hidden"
            style={{
              height: maskHeight,
            }}
          >
            <div
              className="w-full h-screen absolute top-1/2 left-0"
              style={{ transform: "translateY(-50%)" }}
            >
              <Image
                src="/ifx/whynow.avif"
                alt="Why Now"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Grayscale Image with Text - Reveals from bottom to top - Top layer */}
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

          {/* "Why Now" Text revealed by grayscale mask */}
          <div className="absolute bottom-0 w-full h-screen flex items-center justify-center overflow-hidden px-4">
            <motion.h2
              style={{
                x: textX,
                fontSize: "clamp(40px, 15vw, 240px)",
                letterSpacing: "0.05em",
              }}
              className="text-white garamond-400 tracking-wide "
            >
              Why Now
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
