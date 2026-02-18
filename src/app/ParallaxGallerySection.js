"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Separate arrays for each column
const col1Images = [
  "/vikavalab/workhub/port/1.png",
  "/vikavalab/workhub/port/2.png",
  "/vikavalab/workhub/port/3.png",
  "/vikavalab/workhub/port/4.png",
  "/vikavalab/workhub/port/5.jpg",
];

const col2Images = [
  "/vikavalab/workhub/port/6.jpeg",
  "/vikavalab/workhub/port/7.jpeg",
  "/vikavalab/workhub/port/8.png",
  "/vikavalab/workhub/port/9.png",
  "/vikavalab/workhub/port/10.png",
];

const col3Images = [
  "/vikavalab/workhub/port/11.png",
  "/vikavalab/workhub/port/12.png",
  "/vikavalab/workhub/port/13.png",
  "/vikavalab/workhub/port/14.png",
  "/vikavalab/workhub/port/15.png",
];

const col4Images = [
  "/vikavalab/workhub/port/16.png",
  "/vikavalab/workhub/port/17.png",
  "/vikavalab/workhub/port/18.png",
  "/vikavalab/workhub/port/19.png",
];

export default function ParallaxGallerySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop: Column animations (vertical scroll)
  const y1 = useTransform(scrollYProgress, [0, 1], [-400, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-400, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [150, -450]);

  // Mobile: Row animations (horizontal scroll)
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const x4 = useTransform(scrollYProgress, [0, 1], [100, -200]);

  return (
    <>
      <section className="w-full flex flex-col bg-[#F3F0EB] justify-center items-center gap-10 py-20">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h2 className="flex flex-col text-black text-center leading-tight">
            <span className="geist-medium text-[clamp(48px,7vw,88px)] tracking-tight">
              Build with
            </span>
            <span className="greatvibes-regular text-[clamp(48px,7vw,88px)]">
              Vikava
            </span>
          </h2>
          <span className="geist-medium text-[clamp(18px,2vw,24px)] text-[#555155]">
            From sketches to scale — real stories of design, strategy, and
            execution.
          </span>
        </div>
        <div className="w-full max-w-7xl">
          <div ref={containerRef} className="relative h-[300dvh] md:h-[300dvh]">
            {/* Fixed container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              {/* Desktop Layout - Columns */}
              <div className="hidden md:flex h-full w-full gap-4 p-4">
                {/* Column 1 - Scroll DOWN */}
                <motion.div
                  className="flex-1 flex flex-col gap-4"
                  style={{ y: y1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col1Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Column 2 - Scroll UP */}
                <motion.div
                  className="flex-1 flex flex-col gap-4"
                  style={{ y: y2 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col2Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Column 3 - Scroll DOWN */}
                <motion.div
                  className="flex-1 flex flex-col gap-4"
                  style={{ y: y3 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col3Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Column 4 - Scroll UP */}
                <motion.div
                  className="flex-1 flex flex-col gap-4"
                  style={{ y: y4 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col4Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Layout - Rows */}
              <div className="flex md:hidden flex-col h-full w-full gap-4 px-4 pb-4 pt-[110px]">
                {/* Row 1 - Scroll LEFT */}
                <motion.div
                  className="flex-1 flex flex-row gap-4"
                  style={{ x: x1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col1Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-[200px] h-full rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Row 2 - Scroll RIGHT */}
                <motion.div
                  className="flex-1 flex flex-row gap-4"
                  style={{ x: x2 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col2Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-[200px] h-full rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Row 3 - Scroll LEFT */}
                <motion.div
                  className="flex-1 flex flex-row gap-4"
                  style={{ x: x3 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col3Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-[200px] h-full rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Row 4 - Scroll RIGHT */}
                <motion.div
                  className="flex-1 flex flex-row gap-4"
                  style={{ x: x4 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  {col4Images.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-[200px] h-full rounded-2xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/portfolio">
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
      </section>
    </>
  );
}
