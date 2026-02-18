"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// Portfolio images data
const portfolioImages = [
  "/designcartel/port1.avif",
  "/designcartel/port2.avif",
  "/designcartel/port3.avif",
  "/designcartel/port4.avif",
  "/designcartel/port5.avif",
  "/designcartel/port6.avif",
  "/designcartel/port7.avif",
  "/designcartel/port8.avif",
  "/designcartel/port9.avif",

  "/designcartel/port10.avif",
  "/designcartel/port11.avif",
  "/designcartel/port12.avif",
  "/designcartel/port13.avif",
  "/designcartel/port14.avif",
  "/designcartel/port15.avif",
  "/designcartel/port16.avif",
  "/designcartel/port17.avif",
  "/designcartel/port18.avif",

  "/designcartel/port19.avif",
  "/designcartel/port20.avif",
  "/designcartel/port21.avif",
  "/designcartel/port22.avif",
  "/designcartel/port23.avif",
  "/designcartel/port24.avif",
  "/designcartel/port25.avif",
  "/designcartel/port26.avif",
  "/designcartel/port23.avif",

  "/designcartel/port28.avif",
  "/designcartel/port29.avif",
  "/designcartel/port30.avif",
  "/designcartel/port31.avif",
  "/designcartel/port32.avif",
  "/designcartel/port33.avif",
  "/designcartel/port34.avif",
  "/designcartel/port35.avif",
  "/designcartel/port36.avif",
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Header
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -200]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Button
  const buttonY = useTransform(scrollYProgress, [0.5, 0.7], [150, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  // Initial X offset per column
  const getInitialX = (col) => {
    const centerCol = 4;
    if (col < centerCol) return -1200;
    if (col > centerCol) return 1200;
    return col % 2 === 0 ? -1200 : 1200;
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F5F6F0] min-h-[300vh] overflow-clip -mt-[60px]"
    >
      {/* Sticky container - Flex Column Layout */}
      <div className="sticky top-[70px] sm:top-[98px] h-[calc(100vh-70px)] sm:h-[calc(100vh-98px)] overflow-hidden flex flex-col px-1 sm:px-2 md:px-4 lg:px-8">

        {/* Header - Absolute (Fades out) */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 pt-12 pointer-events-none"
        >
          <p className="tracking-[0.2em] absans-400 text-[#090502] mb-3 uppercase text-center text-sm">
            OUR PORTFOLIO
          </p>
          <h2 className="text-[clamp(42px,8vw,96px)] absans-400 font-light text-[#090502] leading-none text-center max-w-[90vw]">
            See Our Work in Action
          </h2>
        </motion.div>

        {/* Grid Container - Flex-1 taking remaining space */}
        <div className="flex-1 w-full relative flex items-center justify-center z-0 min-h-0 overflow-hidden pb-4 sm:pb-4">
          <div className="w-full max-w-[1400px] mx-auto h-full px-2 sm:px-4 flex items-center justify-center" style={{ perspective: "2000px" }}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1.5 sm:gap-2.5" style={{ transformStyle: "preserve-3d" }}>
              {portfolioImages.map((image, index) => {
                const row = Math.floor(index / 9);
                const col = index % 9;

                // Center offsets
                const rRow = row - 1.5;
                const rCol = col - 4;

                const progress = useTransform(
                  scrollYProgress,
                  [0.1, 0.6],
                  [0, 1]
                );

                // Deep Sphere Scatter Animation:
                // Images fly in from far off-screen (Top/Bottom/Left/Right) 
                // assembling into a sphere shape before flattening.

                // Position: Extreme scatter
                const x = useTransform(progress, [0, 1], [rCol * 300, 0]);
                const y = useTransform(progress, [0, 1], [rRow * 350, 0]);

                // Rotation: Maintain deep curvature
                const rotateY = useTransform(progress, [0, 1], [rCol * -20, 0]);
                const rotateX = useTransform(progress, [0, 1], [rRow * 15, 0]);

                // Depth: Deep z-arch
                const archZ = Math.abs(rCol) * -180 - Math.abs(rRow) * -120;
                const z = useTransform(progress, [0, 1], [-1000 + archZ, 0]);

                const scale = useTransform(progress, [0, 1], [0.5, 1]);
                const opacity = useTransform(progress, [0, 0.4], [0, 1]);

                return (
                  <motion.div
                    key={index}
                    style={{
                      x, y, z,
                      rotateX, rotateY,
                      scale, opacity,
                      transformStyle: "preserve-3d"
                    }}
                    className="relative w-[85px] h-[120px] sm:w-[110px] sm:h-[155px] md:w-[120px] md:h-[170px] lg:w-[140px] lg:h-[195px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 transform-gpu"
                  >
                    <Image
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index < 12}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Button Container - Dedicated Footer Layout */}
        <motion.div
          style={{
            y: buttonY,
            opacity: buttonOpacity,
          }}
          className="relative z-20 w-full flex justify-center pb-8 pt-4 shrink-0 bg-transparent pointer-events-auto"
        >
          <Link href="/portfolio?tab=branding">
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
        </motion.div>
      </div>
    </div>
  );
}
