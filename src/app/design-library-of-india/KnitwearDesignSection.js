"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KnitwearDesignSection() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
    viewport: { once: true },
  });

  return (
    <section className="w-full flex justify-center bg-white px-6 md:px-12 py-24">
      {/* MAIN CONTAINER – ALWAYS 95% WIDTH */}
      <div className="w-[95%] mx-auto">
        {/* TOP GRID – NOW FULLY RESPONSIVE */}
        <div
          className="
          grid grid-cols-1 
          md:grid-cols-[2fr_1fr] 
          gap-8 mb-20 w-full
        "
        >
          {/* LEFT LARGE IMAGE — RESPONSIVE ASPECT RATIO */}
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-[20px] overflow-hidden w-full aspect-[4/3]"
          >
            <Image
              src="/design-library-of-india/new5.avif"
              alt="Knitwear process"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 70vw,
                     60vw"
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT VIDEO + CAPTION */}
          <div className="flex flex-col justify-between ">
            {/* VIDEO – RESPONSIVE ASPECT RATIO */}
            <motion.div
              {...fadeUp(0.1)}
              className="relative rounded-[20px] overflow-hidden w-full aspect-[5/4]"
            >
              <video
                src="/design-library-of-india/new22.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* VIDEO CAPTION */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-[clamp(14px,1.2vw,16px)] monasans-600 mt-8 md:mt-0  text-[#6d6d6d] max-w-[350px]"
            >
              <span className="monasans-500 text-black uppercase">
                FOUNDER'S NOTE
              </span>
              <br />
              “Exporters lose money not because they lack skill, but because the
              same work is paid for again and again. What’s missing is memory,
              structure, and breathing room.”
            </motion.p>
          </div>
        </div>

        {/* BOTTOM GRID – RESPONSIVE */}

      </div>
    </section>
  );
}
