// app/components/DesignCartelHero.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignLibraryHero() {
  return (
    <section className="relative w-full h-[550px] md:h-[740px] lg:h-[840px] overflow-hidden">
      {/* BG image */}
      <Image
        src="/design-library-of-india/bg2.avif"
        alt="Design studio"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end pb-2 md:pb-3 lg:pb-4 px-0 md:px-0 lg:px-0">
        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xs md:max-w-md ml-4 lg:ml-12 -mb-24 text-left"
        >
          <p className="text-[18px] md:text-[26px] lg:text-[31px] monasans-500 pb-6 lg:pb-0 font-semibold leading-snug text-white">
            Design & Sample Memory Infrastructure for Exporters — to respond
            faster, waste less, and plan smarter
          </p>
        </motion.div>

        {/* Marquee wrapper */}
        <div className="relative w-full overflow-hidden translate-y-8 md:translate-y-20">
          <motion.div
            className="
      flex whitespace-nowrap monasans-700 uppercase tracking-tight text-white
      text-[110px] md:text-[200px] lg:text-[302px]
      will-change-transform
    "
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Track 1 */}
            <span className="mr-10 uppercase">Design Library of India</span>
            <span className="mr-10 uppercase">Design Library of India</span>
            <span className="mr-10 uppercase">Design Library of India</span>

            {/* Track 2 (exact duplicate) */}
            <span className="mr-10 uppercase">Design Library of India</span>
            <span className="mr-10 uppercase">Design Library of India</span>
            <span className="mr-10 uppercase">Design Library of India</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
