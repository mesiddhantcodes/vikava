"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const gridCards = [
  { src: "/lasttag/last1.avif", alt: "Card 1" },
  { src: "/lasttag/last2.avif", alt: "Card 2" },
  { src: "/lasttag/last3.avif", alt: "Card 3" },
  { src: "/lasttag/last4.avif", alt: "Card 4" },
  { src: "/lasttag/last5.avif", alt: "Card 5" },
  { src: "/lasttag/last6.avif", alt: "Card 6" },
  { src: "/lasttag/last7.avif", alt: "Card 7" },
  { src: "/lasttag/last8.avif", alt: "Card 8" },
  { src: "/lasttag/last9.avif", alt: "Card 9" },
  { src: "/lasttag/last10.avif", alt: "Card 10" },
  { src: "/lasttag/last11.avif", alt: "Card 11" },
  { src: "/lasttag/last12.avif", alt: "Card 12" },
];

export default function ClassicWinsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /** 👇 UNIQUE FLIP DIRECTIONS - SAME POSITION */
  const flipConfig = useMemo(
    () =>
      gridCards.map((_, i) => {
        // Each card flips from its OWN CORNER - NO MOVEMENT
        const row = Math.floor(i / 4);
        const col = i % 4;

        return {
          // Flip from card's own corner (no translate)
          rotateX: (row + col) * 25 + 90, // 90° to 210°
          rotateY: (col * 2 + row) * 15 - 75, // -75° to 90°
          originX: col === 0 ? "0%" : col === 3 ? "100%" : "50%",
          originY: row === 0 ? "0%" : row === 2 ? "100%" : "50%",
        };
      }),
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#effaf0]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="relative w-[1150px] max-w-[95vw]">
          {/* 👇 GRID - FLIP IN PLACE FROM CORNERS */}
          <div className="grid grid-cols-4 gap-6 pointer-events-none">
            {gridCards.map((card, i) => {
              const config = flipConfig[i];

              // 👇 EXTENDED SCROLL RANGE: 0 to 0.7 instead of 0 to 0.4
              const rotateX = useTransform(
                scrollYProgress,
                [0, 0.7],
                [config.rotateX, 0]
              );
              const rotateY = useTransform(
                scrollYProgress,
                [0, 0.7],
                [config.rotateY, 0]
              );
              const scale = useTransform(scrollYProgress, [0, 0.7], [0.75, 1]);
              const opacity = useTransform(
                scrollYProgress,
                [0, 0.2, 0.7],
                [0, 1, 1]
              );

              return (
                <motion.div
                  key={card.src}
                  style={{
                    opacity,
                    scale,
                    rotateX,
                    rotateY,
                    transformOrigin: `${config.originX} ${config.originY}`,
                  }}
                  className="
                    w-[85px] h-[85px]
                    lg:w-[260px] lg:h-[260px]
                    rounded-[22px]
                    overflow-hidden
                    will-change-transform
                    [transform-style:preserve-3d]
                    pointer-events-none
                  "
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={260}
                    height={260}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* 👇 CENTER OVERLAY - UNCHANGED */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto flex flex-col items-center gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="galindo-regular text-[48px] md:text-[52px] font-bold text-[#111] text-center"
              >
                Our Classic Wins
              </motion.h2>
              <Link href="/portfolio?tab=photography">
                {" "}
                <motion.button
                  type="submit"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative bg-[#F3F0EB] geist-medium rounded-full px-4 py-2 flex items-center text-black text-[14px] sm:text-[16px] overflow-hidden hover:border-[#15151B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="relative  whitespace-nowrap"
                  >
                    Explore Our Work
                  </motion.span>

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
                    className="absolute left-4 sm:left-6 z-0 whitespace-nowrap"
                  >
                    Explore Our Work{" "}
                  </motion.span>

                  {/* ARROW */}
                  <span className="ml-3 sm:ml-4 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] text-[18px] sm:text-[20px] rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden flex-shrink-0">
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
        </div>
      </div>
    </section>
  );
}
