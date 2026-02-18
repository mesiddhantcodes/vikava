"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Top() {
  const ref1 = useRef(null);

  // Use a 0 → 1 range for progress
  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ["start center", "end center"],
  });

  // Map 0 → 1 progress to 1 → 1.5 scale
  const scale1 = useTransform(progress1, [0, 1.3], [1.3, 1]);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-12 bg-white">
      {/* Headline */}
      <div className="
  w-full 
  max-w-[100vw]
  overflow-hidden
  min-h-[60vh] sm:min-h-[70vh]
  flex flex-col items-center justify-center
  mb-8 sm:mb-10 md:mb-12
  px-4
">
        <motion.h1
          initial={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 1500,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 80,
            mass: 1,
            delay: 0,
          }}
          className="
            font-vintageRough
          text-[#232323]
        text-center
        leading-[0.75]  /* Decreased from 0.9 */
        tracking-[-0.02em]
        text-[50px]
        min-[375px]:text-[60px]
        min-[425px]:text-[72px]
        sm:text-[130px]
        md:text-[190px]         /* 768px+ */
        min-[900px]:text-[195px]
        lg:text-[340px]         /* 1024px+ */
        min-[1800px]:text-[182px]   /* ⭐ New: 192px on 1870px screens */
        "
        >
          SUSTAINABLE <br />
          DESIGN LIBRARY
        </motion.h1>
      </div>

      {/* Video */}
      <div
        ref={ref1}
        className="w-full flex items-center justify-center min-h-[250px] sm:min-h-[350px] md:h-screen overflow-hidden"
      >
        {/* Wrap video in motion.div to apply animated scale */}
        <motion.div
          style={{ scale: scale1 }}
          className="w-full flex justify-center"
        >
          <video
            src="/sustain/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              w-full 
              max-w-full 
              shadow-md 
              object-cover 
              bg-[#f5f5f5]
              h-[260px]
              min-[375px]:h-[290px]
              min-[425px]:h-[330px]
              sm:h-[400px]
              md:h-[550px]
              min-[900px]:h-[690px]
              lg:h-[885px]
            "
          />
        </motion.div>
      </div>
    </section >
  );
}
