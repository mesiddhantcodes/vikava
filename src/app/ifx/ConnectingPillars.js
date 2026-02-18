"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ConnectingPillars() {
  const containerRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Connecting every pillar of couture commerce.",
      image: "/ifx/scroll1.avif",
    },
    {
      id: 2,
      title:
        "Indian fashion designers and ateliers who seek visibility, growth, and smoother partnerships with buyers.",
      image: "/ifx/scroll2.avif",
    },
    {
      id: 3,
      title:
        "Retail stores that are looking for reliable systems, curated categories, and stronger collaborations.",
      image: "/ifx/scroll3.avif",
    },
    {
      id: 4,
      title:
        "Export houses and buyers who want access to authentic Indian couture with operational discipline.",
      image: "/ifx/scroll4.avif",
    },
    {
      id: 5,
      title:
        "International retail stores that seek new partnerships with Indian designers to grow and earn.",
      image: "/ifx/scroll5.avif",
    },
    {
      id: 6,
      title: "Together, we grow the couture ecosystem.",
      image: "/ifx/scroll6.avif",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#EDEBEC]">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-18 items-start max-w-[1200px] w-full">
          {/* LEFT – TEXT */}
          <div className="flex flex-col w-full lg:w-[550px] order-2 lg:order-1">
            {/* Desktop-only top spacer */}
            <div className="hidden lg:block h-[calc(50vh-250px)]" />

            {/* Mobile top spacer - smaller */}
            <div className="block lg:hidden h-[10vh]" />

            {sections.map((section, index) => (
              <ScrollColorText
                key={section.id}
                text={section.title}
                index={index}
                isLast={index === sections.length - 1}
                setActiveImageIndex={setActiveImageIndex}
              />
            ))}

            {/* Desktop-only bottom spacer */}
            <div className="hidden lg:block h-[calc(50vh-250px)]" />

            {/* Mobile bottom spacer - smaller */}
            <div className="block lg:hidden h-[10vh]" />
          </div>

          {/* RIGHT – STICKY IMAGE */}
          <div className="sticky top-16 sm:top-20 lg:top-[calc(50vh-250px)] w-full lg:w-[502px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] order-1 lg:order-2 self-start">
            {sections.map((section, index) => (
              <StickyImage
                key={section.id}
                src={section.image}
                alt={`Section ${section.id}`}
                index={index}
                isActive={activeImageIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll color-changing text */
/* ------------------------------------------------------------------ */

function ScrollColorText({ text, index, isLast, setActiveImageIndex }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [
      "rgba(200,200,200,1)",
      "rgba(0,0,0,1)",
      "rgba(0,0,0,1)",
      "rgba(200,200,200,1)",
    ]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress >= 0.2 && progress <= 0.8) {
        setActiveImageIndex(index);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveImageIndex]);

  return (
    <motion.div
      ref={ref}
      className={isLast ? "" : "mb-[8vh] sm:mb-[10vh] lg:mb-[17vh]"}
      style={{
        minHeight: "clamp(22vh, 25vh, 28vh)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.h2
        style={{
          color: textColor,
          fontSize: "clamp(18px, 3.2vw, 50px)",
          lineHeight: "1.2",
          transition: "color 0.3s ease-out",
        }}
        className="mont-600 leading-[0.97]"
      >
        {text}
      </motion.h2>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky image */
/* ------------------------------------------------------------------ */

function StickyImage({ src, alt, index, isActive }) {
  return (
    <motion.div
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 overflow-hidden rounded-lg will-change-opacity"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 502px"
        className="object-cover"
        priority={index === 0}
      />
    </motion.div>
  );
}
