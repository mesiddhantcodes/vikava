"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Image data - 8 left, 9 middle, 9 right = 26 total images
const PORTFOLIO_IMAGES = {
  left: [
    "/vikava/left1.avif",
    "/vikava/left2.avif",
    "/vikava/left3.avif",
    "/vikava/left4.avif",
    "/vikava/left5.avif",
    "/vikava/left6.avif",
    "/vikava/left7.avif",
    "/vikava/left8.avif",
  ],
  middle: [
    "/vikava/middle1.avif",
    "/vikava/middle2.avif",
    "/vikava/middle3.avif",
    "/vikava/middle4.avif",
    "/vikava/middle5.avif",
    "/vikava/middle6.avif",
    "/vikava/middle7.avif",
    "/vikava/middle8.avif",
    "/vikava/middle9.avif",
  ],
  right: [
    "/vikava/right1.avif",
    "/vikava/right2.avif",
    "/vikava/right3.avif",
    "/vikava/right4.avif",
    "/vikava/right5.avif",
    "/vikava/right6.avif",
    "/vikava/right7.avif",
    "/vikava/right8.avif",
    "/vikava/right9.avif",
  ],
};

// Image component with smooth scroll-linked animation and hover effects
function PortfolioImage({ src, alt }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll-linked animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll to y position and opacity
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5], [120, 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className="relative w-fullgroup cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover"
        priority={false}
      />
      
      {/* Top Vignette Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%)",
        }}
      />

      {/* Description Text - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-4 left-4 text-white z-10"
      >
        <p className="text-[16px] sm:text-[18px] md:text-[20px] geist-medium font-light tracking-wide">
          DESCRIPTION
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection2() {
  const [shouldUnstick, setShouldUnstick] = useState(false);
  const middleColumnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (middleColumnRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const middleColumn = middleColumnRef.current;
        
        // Get total scrollable height of middle column
        const middleColumnHeight = middleColumn.scrollHeight;
        
        // Maximum stickiness - only unlock after scrolling past entire middle column
        const scrollThreshold = middleColumnHeight;
        const scrolledAmount = Math.abs(containerRect.top);
        
        // Check if we've scrolled past the entire middle column
        const scrolledPast = scrolledAmount > scrollThreshold;
        setShouldUnstick(scrolledPast);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Initial check after images load
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EBE6DF] py-12 md:py-16 lg:py-20"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-3 gap-1">
          {/* LEFT COLUMN - Sticky for entire middle column scroll */}
          <div
            className={`flex flex-col gap-1 ${
              shouldUnstick ? "relative" : "sticky top-0"
            }`}
            style={{
              alignSelf: shouldUnstick ? "auto" : "start",
            }}
          >
            {PORTFOLIO_IMAGES.left.map((image, index) => (
              <PortfolioImage
                key={`left-${index}`}
                src={image}
                alt={`Portfolio left ${index + 1}`}
              />
            ))}
          </div>

          {/* MIDDLE COLUMN - Always scrolls */}
          <div ref={middleColumnRef} className="flex flex-col gap-1">
            {PORTFOLIO_IMAGES.middle.map((image, index) => (
              <PortfolioImage
                key={`middle-${index}`}
                src={image}
                alt={`Portfolio middle ${index + 1}`}
              />
            ))}
          </div>

          {/* RIGHT COLUMN - Sticky for entire middle column scroll */}
          <div
            className={`flex flex-col gap-1 ${
              shouldUnstick ? "relative" : "sticky top-0"
            }`}
            style={{
              alignSelf: shouldUnstick ? "auto" : "start",
            }}
          >
            {PORTFOLIO_IMAGES.right.map((image, index) => (
              <PortfolioImage
                key={`right-${index}`}
                src={image}
                alt={`Portfolio right ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
