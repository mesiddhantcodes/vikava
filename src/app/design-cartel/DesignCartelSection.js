"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/designcartel/top.avif",
  "/designcartel/top1.avif",
  "/designcartel/top2.avif",
];

export default function DesignCartelSection() {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Responsive image dimensions - scales properly across all breakpoints
  const responsiveWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["min(1900px, 100vw)", "min(1300px, clamp(90vw, 1100px, 90vw))"],
  );

  const responsiveHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["min(950px, 100vh)", "min(588px, clamp(60vh, 550px, 65vh))"],
  );

  // Responsive background text - smaller on mobile, appears at right time
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textFontSize = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["clamp(18px, 4vw, 46px)", "clamp(24px, 6vw, 66px)"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#E8E4E0] "
      style={{ height: "400vh" }}
    >
      {/* Main content - responsive padding */}
      <div className="sticky top-[90px] sm:top-0 h-[calc(100vh-90px)] sm:h-screen w-full overflow-hidden flex items-center justify-center ">
        <div className="relative w-full h-full max-w-[100%] lg:max-w-full flex items-center justify-center">
          {/* Scrolling background text - RESPONSIVE */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <motion.div
              className="absolute left-0 top-1/2 flex whitespace-nowrap w-full"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transform: "translateY(-50%)",
                width: "100vw", // 🔑 ensures full coverage
                fontSize: "clamp(24px, 6vw, 66px)",
              }}
            >
              {/* BLOCK 1 */}
              <span className="karantina-400 text-[#1b1c18]">
                SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE.
                SCALE. SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE. SCALE. SKETCH.
                SAMPLE. SCALE.
              </span>

              {/* BLOCK 2 (duplicate) */}
              <span className="karantina-400 text-[#1b1c18] ">
                SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE.
                SCALE. SKETCH. SAMPLE. SCALE. SKETCH. SAMPLE. SCALE. SKETCH.
                SAMPLE. SCALE.
              </span>
            </motion.div>
          </motion.div>

          {/* Background Image Container - RESPONSIVE SCALING */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              width: responsiveWidth,
              height: responsiveHeight,
              scale: isHovered ? 0.95 : 1,
              zIndex: 10,
            }}
          >
            <div className="w-full h-full relative overflow-hidden ">
              {images.map((img, index) => {
                const isLastImage = index === images.length - 1;

                let yPosition;

                if (index === 0) {
                  // First image: 0 to 0.3
                  yPosition = useTransform(
                    scrollYProgress,
                    [0, 0.15, 0.3],
                    ["0%", "0%", "-100%"],
                  );
                } else if (index === 1) {
                  // Second image: 0.3 to 0.6
                  yPosition = useTransform(
                    scrollYProgress,
                    [0.15, 0.3, 0.45, 0.6],
                    ["100%", "0%", "0%", "-100%"],
                  );
                } else {
                  // Last image: 0.6 to end (stays)
                  yPosition = useTransform(
                    scrollYProgress,
                    [0.45, 0.6, 1],
                    ["100%", "0%", "0%"],
                  );
                }

                return (
                  <motion.div
                    key={img}
                    className="absolute inset-0"
                    style={{
                      y: yPosition,
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Design Cartel ${index + 1}`}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1300px"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Text overlay - RESPONSIVE TYPOGRAPHY & STROKE */}
          <div className="relative pointer-events-none" style={{ zIndex: 20 }}>
            <h2
              className="karantina-400 text-black text-center leading-none tracking-tight"
              style={{
                fontSize: "clamp(88px, 16vw, 364px)", // smaller mobile max
                WebkitTextStroke: "clamp(1px, 0.15vw, 2px) black",
                textStroke: "clamp(1px, 0.15vw, 2px) black",
                lineHeight: 0.85,
              }}
            >
              DESIGN CARTEL
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
