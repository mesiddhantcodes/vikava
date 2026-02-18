"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Organised Commerce",
    subtitle: "Industry problems solved structurally",
    image: "/ifx/1.jpg",
    bgColor: "#D4C4B0",
  },
  {
    id: 2,
    title: "Legacy & Trust",
    subtitle: "26+ years expert backing",
    image: "/ifx/2.jpg",
    bgColor: "#2C2C2C",
  },
  {
    id: 3,
    title: "Integrated Ecosystem",
    subtitle: "Design sourcing marketing aligned",
    image: "/ifx/3.jpg",
    bgColor: "#6B7280",
  },
  {
    id: 4,
    title: "Global-Ready",
    subtitle: "Showcases collaborations buyer access",
    image: "/ifx/4.jpg",
    bgColor: "#7A6B5D",
  },
  {
    id: 5,
    title: "Built in India for the World",
    subtitle: "Indian couture amplified globally",
    image: "/ifx/5.jpg",
    bgColor: "#8B7355",
  },
];

export default function RotatingCardsSection() {
  const containerRef = useRef(null);
  const [gap, setGap] = useState(120); // Default to mobile gap to match initial server render if feasible, or handle hydration

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rotation REVERSED - from 360 to 0
  const rotation = useTransform(scrollYProgress, [0, 1], [450, 0]);

  // Update gap based on window width
  useEffect(() => {
    const handleResize = () => {
      // Mobile < 768px: 120px gap
      // Desktop >= 768px: 250px gap
      setGap(window.innerWidth < 768 ? 120 : 260);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move entire carousel up as scroll progresses
  // The total vertical travel needed is 'gap' * (cards.length - 1)
  // This keeps the "current" card roughly centered as we rotate through them.
  const carouselY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -gap * (cards.length - 1)]
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#E8E4E0]"
      style={{ height: "650vh" }}
    >
      {" "}
      <div className="absolute top-24 sm:top-22 lg:top-32 left-0 right-0 z-20 px-4 ">
        <h2
          className="garamond-400 text-[#1b1c18] text-center"
          style={{
            fontSize: "clamp(56px, 6vw, 112px)",
            lineHeight: "1.1",
          }}
        >
          Why partner <br /> with IFX
        </h2>
        <motion.div className="absolute -bottom-18  left-1/2 -translate-x-1/2 z-20 px-2 sm:px-3 md:px-4">
          <Link href="/contact" passHref>
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative bg-[#EEEDE7] geist-medium rounded-full px-3 py-2 flex items-center text-[#232323] text-[16px]  overflow-hidden flex-shrink-0"
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
                className="relative z-10 whitespace-nowrap"
              >
                Connect With Us{" "}
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
                className="absolute left-4 z-0 whitespace-nowrap"
              >
                Connect With Us{" "}
              </motion.span>

              {/* ARROW */}
              <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Heading */}

        {/* Cards Section - pushed down to avoid overlap */}
        <div className="absolute inset-0 flex items-center justify-center pt-60 sm:pt-78 lg:pt-104">
          <div
            className="relative flex items-center justify-center"
            style={{
              perspective: "2000px",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Central axis visualization (optional - remove if not needed) */}

            <motion.div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                rotateY: rotation,
                y: carouselY,
                transformOrigin: "center center",
              }}
            >
              {cards.map((card, index) => {
                const angle = (360 / cards.length) * index;

                // Responsive radius - smaller on mobile
                const radius = gap === 120 ? 300 : 400;

                // Use the same gap for consistent positioning
                const yOffset = index * gap;

                return (
                  <div
                    key={card.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, calc(-50% + ${yOffset}px)) rotateY(${angle}deg) translateZ(${radius}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="w-[255px] sm:w-[360px] lg:w-[450px] h-[175px] sm:h-[245px] lg:h-[290px] shadow-2xl overflow-hidden">
                      <div
                        className="relative w-full h-full flex flex-col items-center justify-center"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white z-10 px-4">
                          <h3
                            className="mont-500 text-center mb-2 sm:mb-4"
                            style={{ fontSize: "clamp(14px, 2.6vw, 22px)" }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="mont-400 text-center max-w-xs"
                            style={{ fontSize: "clamp(10px, 1.2vw, 14px)" }}
                          >
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
