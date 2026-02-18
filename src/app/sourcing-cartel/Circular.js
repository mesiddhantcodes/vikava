"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    number: "01",
    title: "Global Importers & Buying Houses",
    description:
      "Sourcing from India for apparel, home furnishings, and lifestyle goods.",
  },
  {
    id: 2,
    number: "02",
    title: "Export Houses & Manufacturers",
    description: "Dependable finished goods and raw material sourcing.",
  },
  {
    id: 3,
    number: "03",
    title: "D2C & Consumer Brands",
    description: "Fast, compliant apparel sourcing India-wide.",
  },
  {
    id: 4,
    number: "04",
    title: "Retailers & Marketplace Sellers",
    description: "Festive and seasonal volumes without vendor chaos.",
  },
];

// Curve helper with mobile adjustments
const getPositionOnCurve = (progress, isMobile = false) => {
  const startX = isMobile ? 85 : 90;
  const endX = isMobile ? 15 : 10;
  const centerX = 50;

  const topY = isMobile ? 20 : 15;
  const bottomY = isMobile ? 55 : 50;

  const x = startX - progress * (startX - endX);

  const normalizedX = (x - centerX) / (centerX - startX);
  const y = bottomY - (bottomY - topY) * (1 - Math.pow(normalizedX, 2));

  return { x: `${x}%`, y: `${y}%` };
};

export default function WhoWeServeSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="h-[500vh] w-full relative bg-[#f5f5f5]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Curved background */}
        <div className="absolute inset-x-0 top-[5%] h-[130%] w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="curveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#be1611", stopOpacity: 0.1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#f5f5f5", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 0,400 Q 960,100 1920,400 L 1920,1080 L 0,1080 Z"
              fill="url(#curveGradient)"
              stroke="#C41E3A"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Moving circle on curve */}
        <div className="relative z-10 w-full h-[40%]">
          {slides.map((slide, index) => {
            const baseSlice = 1 / slides.length;

            // Extend first slide earlier, others slightly overlapped
            const slideStart = index === 0 ? 0 : (index - 0.5) * baseSlice;
            const rawEnd =
              index === slides.length - 1 ? 1 : (index + 0.5) * baseSlice;
            const slideEnd = Math.min(rawEnd, 1);

            return (
              <motion.div
                key={slide.id}
                style={{
                  position: "absolute",
                  left: useTransform(scrollYProgress, (p) => {
                    if (p < slideStart || p >= slideEnd) return "-100%";

                    const normalized =
                      (p - slideStart) / (slideEnd - slideStart);
                    return getPositionOnCurve(normalized, isMobile).x;
                  }),
                  top: useTransform(scrollYProgress, (p) => {
                    if (p < slideStart || p >= slideEnd) return "-100%";

                    const normalized =
                      (p - slideStart) / (slideEnd - slideStart);
                    return getPositionOnCurve(normalized, isMobile).y;
                  }),
                  opacity: useTransform(scrollYProgress, (p) => {
                    if (p < slideStart || p >= slideEnd) return 0;

                    const normalized =
                      (p - slideStart) / (slideEnd - slideStart);

                    if (normalized < 0.1) return normalized / 0.1;
                    if (normalized > 0.9) return (1 - normalized) / 0.1;
                    return 1;
                  }),
                  x: "-50%",
                  y: "-50%",
                }}
                className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px]"
              >
                <div className="w-full h-full alumnisans-regular rounded-full bg-white flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center shadow-lg">
                  <h3 className="text-[#be1611] text-3xl sm:text-4xl md:text-5xl mb-1">
                    {slide.number}
                  </h3>
                  <h4 className="text-black alumnisans-regular text-sm sm:text-base md:text-lg font-semibold leading-tight px-2 sm:px-3">
                    {slide.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center text content */}
        <div className="absolute bottom-[20%] sm:bottom-[22%] md:bottom-[24%] left-0 right-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 z-20">
          {slides.map((slide, index) => {
            const baseSlice = 1 / slides.length;

            const slideStart = index === 0 ? 0 : (index - 0.5) * baseSlice;
            const rawEnd =
              index === slides.length - 1 ? 1 : (index + 0.5) * baseSlice;
            const slideEnd = Math.min(rawEnd, 1);

            const fadeDuration = 0.12;

            return (
              <motion.div
                key={slide.id}
                style={{
                  opacity: useTransform(scrollYProgress, (p) => {
                    if (p < slideStart || p > slideEnd) return 0;

                    const normalized =
                      (p - slideStart) / (slideEnd - slideStart);

                    const enterEnd = fadeDuration;
                    const exitStart = 1 - fadeDuration;

                    if (normalized < enterEnd) {
                      return normalized / enterEnd;
                    }

                    if (normalized <= exitStart) {
                      return 1;
                    }

                    return (1 - normalized) / fadeDuration;
                  }),

                  y: useTransform(scrollYProgress, (p) => {
                    if (p < slideStart) return isMobile ? 20 : 40;
                    if (p > slideEnd) return isMobile ? -20 : -40;

                    const normalized =
                      (p - slideStart) / (slideEnd - slideStart);

                    const enterEnd = fadeDuration;
                    const exitStart = 1 - fadeDuration;

                    const yOffset = isMobile ? 20 : 40;

                    if (normalized < enterEnd) {
                      return yOffset * (1 - normalized / enterEnd);
                    }

                    if (normalized <= exitStart) {
                      return 0;
                    }

                    return -yOffset * ((normalized - exitStart) / fadeDuration);
                  }),
                }}
                className="absolute max-w-5xl will-change-transform"
              >
                <h2 className="text-gray-800 aileron-regular text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-snug">
                  {slide.description}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
