"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const faces = [
  {
    heading: "BRAND STORY & MESSAGING",
    body: "Positioning, ICPs, value props, competitive narrative.",
    bg: "/lasttag/service3.avif",
  },
  {
    heading: "PERFORMANCE & GROWTH",
    body: "Full‑funnel media, experimentation, and always‑on optimization.",
    bg: "/lasttag/service4.avif",
  },
  {
    heading: "CREATIVE & CONTENT STUDIO",
    body: "Films, UGC, landing pages, launches, and sales collateral.",
    bg: "/lasttag/service1.avif",
  },
  {
    heading: "RETENTION & COMMUNITY",
    body: "CRM, loyalty, communities, and lifecycle journeys.",
    bg: "/lasttag/service.avif",
  },
];

export default function ServicesCuboidSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1.2, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.floor(v * faces.length);
      setActiveIndex(Math.min(faces.length - 1, Math.max(0, idx)));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Responsive Dimensions
  const cuboidHeight = isMobile ? 220 : 320;
  const cuboidDepth = isMobile ? 110 : 160;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ minHeight: `${faces.length * 100 + 40}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Background image(s) – fade between them */}
        <div className="absolute inset-0">
          {faces.map((face, idx) => (
            <motion.div
              key={face.bg}
              className="absolute inset-0"
              style={{ scale: bgScale }}
              animate={{ opacity: idx === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={face.bg}
                alt="Services background"
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* Black light overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        {/* Heading - INCREASED GAP */}
        {/* Heading - FIXED POSITION */}
        <div className="absolute top-[8%] sm:top-[11%] lg:top-[11%] left-1/2 -translate-x-1/2 z-20 w-full px-4 pt-16 md:pt-20 lg:pt-0">
          <motion.h2 className="galindo-regular font-bold leading-none text-[#C8FFBF] text-center max-w-[97%] mx-auto text-[40px] md:text-[60px] lg:text-[80px] xl:text-[90px] 2xl:text-[105px]">
            Services That Power D2C <br /> Growth
          </motion.h2>
        </div>

        {/* 3D cuboid */}
        <div className="absolute inset-0 mt-24 flex items-center justify-center z-30 pointer-events-none perspective-[1000px]">
          <motion.div
            style={{
              rotateX,
              translateY: cardTranslateY,
              height: cuboidHeight, // Use responsive height directly
            }}
            className="relative w-[75%] md:w-[90%] max-w-[680px] [transform-style:preserve-3d]"
          >
            {faces.map((face, index) => (
              <CuboidFace
                key={face.heading}
                index={index}
                heading={face.heading}
                body={face.body}
                depth={cuboidDepth} // Pass responsive depth
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// one face of the cuboid
function CuboidFace({ index, heading, body, depth }) {
  // Use passed prop or fallback if not available (though it always will be now)
  const safeDepth = depth || 160;

  const isGreenFace = index === 1 || index === 3;

  const baseClasses = [
    "absolute inset-0 flex flex-col justify-center",
    "px-6 sm:px-8 md:px-10 py-2",
    isGreenFace
      ? "bg-[#A5F0B1] text-[#101310]"
      : "bg-[#101310] text-[#F5FFF5]", // Removed /95 opacity to fix bleed-through
    "backface-hidden", // Added utility if available, or style directly
  ].join(" ");

  const transforms = [
    `rotateX(0deg) translateZ(${safeDepth}px)`,
    `rotateX(90deg) translateZ(${safeDepth}px)`,
    `rotateX(180deg) translateZ(${safeDepth}px)`,
    `rotateX(270deg) translateZ(${safeDepth}px)`,
  ];

  return (
    <div
      className={baseClasses}
      style={{
        transform: transforms[index],
        backfaceVisibility: "hidden",       // Fix mirror text
        WebkitBackfaceVisibility: "hidden"  // Safari support
      }}
    >
      <div className="text-[clamp(18px,4vw,32px)] inter-semibold font-semibold tracking-wide mb-3">
        {heading}
      </div>
      <p className="text-[clamp(14px,3vw,26px)] inter-medium p-2 sm:p-4 md:p-8 pt-2 sm:pt-4 md:pt-6 leading-snug max-w-[40rem]">
        {body}
      </p>
    </div>
  );
}
