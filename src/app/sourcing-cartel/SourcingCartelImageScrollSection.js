"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Adjust values for mobile
  const upperYRange = isMobile ? [0, -150] : [0, -350];
  const lowerYRange = isMobile ? [0, 150] : [0, 350];
  const imageWidthRange = isMobile ? ["0vw", "95vw", "95vw"] : ["0vw", "90vw", "90vw"];
  const imageContainerYRange = isMobile ? [0, -600] : [0, -1000];

  // Text slides complete in first 50% of scroll
  const upperY = useTransform(scrollYProgress, [0, 0.5], upperYRange);
  const lowerY = useTransform(scrollYProgress, [0, 0.5], lowerYRange);

  // Image width expanding
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    imageWidthRange
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  // Entire image container scrolls up
  const imageContainerY = useTransform(scrollYProgress, [0.7, 1], imageContainerYRange);

  // Heading appears and slides to center
  const overlayHeadingOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    [0, 1]
  );
  const overlayHeadingY = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    isMobile ? [80, 0] : [160, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="cta-one"
      className="h-[400vh] w-full relative lg:-mt-32  "
    >
      <div className="sticky top-0 h-screen w-full bg-[#F5F5F0] flex items-center justify-center overflow-hidden">
        {/* Fixed height container for text and image */}
        <motion.div
          style={{ y: imageContainerY }}
          className="relative z-10 w-full h-[200px] md:h-[280px] flex flex-col justify-center items-center"
        >
          {/* Upper text */}
          <div className="overflow-hidden absolute  md:-top-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              style={{ y: upperY }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 80,
                mass: 1,
              }}
            >
              <h1 className="text-[#C41E3A] text-center font-bold leading-tight">
                <span
                  className="block alumnisans-bold"
                  style={{
                    fontSize: "clamp(28px, 7.2vw, 135px)",
                  }}
                >
                  Trusted sourcing solutions
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Image expanding from center */}
          <motion.div
            style={{
              width: imageWidth,
              opacity: imageOpacity,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-[16/9] overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="/sc/sourcingscrollimage.avif"
              alt="Product showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 95vw, 90vw"
              priority
            />

            {/* Overlay heading on image */}
            <motion.div
              style={{
                opacity: overlayHeadingOpacity,
                y: overlayHeadingY,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 80,
                mass: 1,
              }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <h2
                className="text-white text-center font-bold uppercase tracking-wider alumnisans-bold"
                style={{
                  fontSize: "clamp(24px, 6vw, 96px)",
                }}
              >
                WHO WE SERVE?
              </h2>
            </motion.div>
          </motion.div>

          {/* Lower text */}
          <div className="overflow-hidden absolute bottom-0 md:bottom-0 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              style={{ y: lowerY }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 80,
                mass: 1,
              }}
            >
              <h1 className="text-[#C41E3A] text-center font-bold leading-tight">
                <span
                  className="block alumnisans-bold whitespace-nowrap lg:whitespace-normal"
                  style={{
                    fontSize: "clamp(24px, 5.5vw, 135px)", // Reduced scale slightly
                  }}
                >
                  for global brands & manufacturers
                </span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
