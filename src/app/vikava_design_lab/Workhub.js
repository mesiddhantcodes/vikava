"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";
import Link from "next/link";

// Text letters - W and B start lower, K at center
const letters = [
  { char: "W", speed: 150, startOpacity: 0.4 },
  { char: "O", speed: 120, startOpacity: 0.5 },
  { char: "R", speed: 80, startOpacity: 0.6 },
  { char: "K", speed: 0, startOpacity: 1 },
  { char: "H", speed: 80, startOpacity: 0.6 },
  { char: "U", speed: 120, startOpacity: 0.5 },
  { char: "B", speed: 150, startOpacity: 0.4 },
];

// Image arrays - each column has 5 images from your folder structure
const col1Images = [
  "/vikavalab/workhub/col1/1.avif",
  "/vikavalab/workhub/col1/2.avif",
  "/vikavalab/workhub/col1/3.avif",
  "/vikavalab/workhub/col1/4.avif",
  "/vikavalab/workhub/col1/5.avif",
];

const col2Images = [
  "/vikavalab/workhub/col2/1.avif",
  "/vikavalab/workhub/col2/2.avif",
  "/vikavalab/workhub/col2/3.avif",
  "/vikavalab/workhub/col2/4.avif",
  "/vikavalab/workhub/col2/5.avif",
];

const col3Images = [
  "/vikavalab/workhub/col3/1.avif",
  "/vikavalab/workhub/col3/2.avif",
  "/vikavalab/workhub/col3/3.avif",
  "/vikavalab/workhub/col3/4.avif",
  "/vikavalab/workhub/col3/5.avif",
];

const col4Images = [
  "/vikavalab/workhub/col4/1.avif",
  "/vikavalab/workhub/col4/2.avif",
  "/vikavalab/workhub/col4/3.avif",
  "/vikavalab/workhub/col4/4.avif",
  "/vikavalab/workhub/col4/5.avif",
];

const col5Images = [
  "/vikavalab/workhub/col5/1.avif",
  "/vikavalab/workhub/col5/2.avif",
  "/vikavalab/workhub/col5/3.avif",
  "/vikavalab/workhub/col5/4.avif",
  "/vikavalab/workhub/col5/5.avif",
];

const col6Images = [
  "/vikavalab/workhub/col6/1.avif",
  "/vikavalab/workhub/col6/2.avif",
  "/vikavalab/workhub/col6/3.avif",
  "/vikavalab/workhub/col6/4.avif",
  "/vikavalab/workhub/col6/5.avif",
];

const col7Images = [
  "/vikavalab/workhub/col7/1.avif",
  "/vikavalab/workhub/col7/2.avif",
  "/vikavalab/workhub/col7/3.avif",
  "/vikavalab/workhub/col7/4.avif",
  "/vikavalab/workhub/col7/5.avif",
];

export default function WorkHubSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["start end", "end start"] : ["start start", "end end"],
  });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#3D7EFF] pt-10 lg:pt-32">
      {/* Text Animation Section */}
      <div className="relative h-[30vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-2 md:gap-4">
          {letters.map((letter, index) => {
            const y = useTransform(
              scrollYProgress,
              [0, 0.2],
              [letter.speed, 0]
            );

            const motionOpacity = useTransform(
              scrollYProgress,
              [0, 0.2],
              [letter.startOpacity, 1]
            );

            return (
              <motion.div
                key={index}
                style={{ y, opacity: motionOpacity }}
                className="text-[60px] big-shoulders-black  sm:text-[80px] md:text-[120px] lg:text-[160px] font-bold text-[#FFD700]"
              >
                {letter.char}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="relative w-full h-auto overflow-hidden">
        {/* Blue gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#4A90E2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#4A90E2] to-transparent z-10 pointer-events-none" />

        <div className="w-full flex gap-1 sm:gap-2 p-2 sm:p-4">
          {/* Column 1 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 200 : 600, 0]
              ),
            }}
          >
            {col1Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 150 : 500, 0]
              ),
            }}
          >
            {col2Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 100 : 400, 0]
              ),
            }}
          >
            {col3Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 4 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 20 : 50, 0]
              ),
            }}
          >
            {col4Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 5 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 100 : 400, 0]
              ),
            }}
          >
            {col5Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 6 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 150 : 500, 0]
              ),
            }}
          >
            {col6Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Column 7 */}
          <motion.div
            className="flex-1 flex flex-col gap-2"
            style={{
              y: useTransform(
                scrollYProgress,
                isMobile ? [0, 0.6] : [0.2, 0.8],
                [isMobile ? 200 : 600, 0]
              ),
            }}
          >
            {col7Images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Button Section */}
      <div className="relative flex items-center justify-center pt-6 pb-12">
        <Link href="/portfolio?tab=design">
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
  );
}
