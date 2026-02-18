// app/components/BrandsServedSection.tsx
"use client";

import { motion } from "framer-motion";
import ScrollVelocity from "../../ScrollVelocity";

const row1 = [
  "/vikava/row1.avif",
  "/vikava/row2.avif",
  "/vikava/row3.avif",
  "/vikava/row4.avif",
  // "/vikava/safe.avif",
];

const row2 = [
  "/vikava/2row3.avif",
  "/vikava/2row4.avif",
  "/vikava/2row5.avif",
  "/vikava/2rw1.avif",
  "/vikava/2rw2.avif",
];

export default function BrandsServedSection() {
  return (
    <section
      className="
        relative flex w-full items-center justify-center 
        bg-[#f4f0e9]
        min-h-[80dvh] 
        px-4 md:px-6
      "
    >
      <div className="w-full max-w-[97%] mx-auto text-center">

        {/* --- HEADING --- */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-baseline justify-center gap-x-3 text-center"
        >
          <span className="geist-bold leading-none text-[40px] md:text-[88px] text-neutral-900">
            Brands we've
          </span>

          <span className="greatvibes-regular leading-none text-[40px] md:text-[88px] text-neutral-900">
            served
          </span>
        </motion.h2>

        {/* --- SUBHEADING --- */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="
            mt-3 md:mt-5
            text-[clamp(14px,1.5vw,18px)]
            geist-semibold text-neutral-700
            leading-relaxed
          "
        >
          Shaped by the experiences of working with leading brands.
        </motion.p>

        {/* --- MARQUEE / SCROLLING LOGOS --- */}
        <div className="mt-8 md:mt-14 overflow-hidden w-full">
          <ScrollVelocity
            images={[row1, row2]}
            velocity={50}
            numCopies={6}

            /* Responsive logo sizes */
            imageWidth={220}       // mobile
            imageHeight={140}      // mobile
            mdImageWidth={290}     // tablet
            mdImageHeight={210}
            lgImageWidth={290}     // desktop (unchanged)
            lgImageHeight={210}

            imageObjectFit="contain"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
