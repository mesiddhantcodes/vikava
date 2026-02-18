"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DesignedForSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.88, 1]);

  const items = [
    { num: "01", text: "Reduced resampling and duplicated effort." },
    { num: "02", text: "Faster buyer alignment and approvals." },
    { num: "03", text: "Better internal coordination and continuity when team members change." },
    { num: "04", text: "Clearer planning signals for future collections." },
    {num:"05",text:"Quicker, more consistent quote responses."},
    {num:"06" ,text:"Stronger operational calm."}
  ];

  return (
    <section className="w-full flex justify-center bg-white px-6 md:px-12 py-24">
      <div ref={ref} className="max-w-[95%] w-full mx-auto">
        <p className="text-[18px] text-[#6d6d6d] monasans-400 mb-3 uppercase">
          What Export Houses & Exporters Gain
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[48px] lg:text-[62px] monasans-500 leading-[1.15] mb-12"
        >
          DLI does not replace people. It gives teams memory, structure, and
          continuity. It turns exporter operations from people-memory to
          system-memory—so speed becomes natural, not heroic.
        </motion.h2>

        <motion.div
          style={{ scale }}
          className="w-full mx-auto max-w-[1249px] xl:max-w-[1450px] 2xl:max-w-[1680px] aspect-[1249/822] rounded-xl overflow-hidden mb-20"
        >
          <Image
            src="/design-library-of-india/lady.avif"
            alt="Supply chain workspace"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* DESKTOP */}
        {/* DESKTOP GRID LAYOUT */}
        <div className="hidden lg:grid grid-cols-12 gap-y-28 w-full mt-16">
          {/* 01 — col 1 */}
          <div className="relative pl-10 lg:col-start-2 lg:row-start-1">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              01
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[260px] leading-tight"
            >
              Reduced resampling and duplicated effort.
            </motion.p>
          </div>
          {/* 02 — col 5 */}
          <div className="relative pl-10 lg:col-start-6 lg:row-start-1">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              02
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[260px] leading-tight"
            >
              Faster buyer alignment and approvals.
            </motion.p>
          </div>{" "}
          <div className="relative pl-10 lg:col-start-10 lg:row-start-1">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              03
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[550px] leading-tight"
            >
              Better internal coordination and continuity when team members
              change.
            </motion.p>
          </div>
          {/* 03 — col 4 */}
          <div className="relative pl-10 lg:col-start-4 lg:row-start-2">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              04
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[260px] leading-tight"
            >
              Clearer planning signals for future collections.
            </motion.p>
          </div>
          {/* 04 — col 6 */}
          <div className="relative pl-10 lg:col-start-8 lg:row-start-2">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              05
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[260px] leading-tight"
            >
              Quicker, more consistent quote responses.
            </motion.p>
          </div>
          <div className="relative pl-10 lg:col-start-12 lg:row-start-2">
            <div className="absolute left-0 top-0 h-[250px] w-px bg-[#e2e2e2]" />

            <motion.h3
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35 } }}
              viewport={{ once: true }}
              className="text-[56px] 2xl:text-[64px] monasans-500 text-[#646464] mb-4 leading-none"
            >
              06
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, delay: 0.05 },
              }}
              viewport={{ once: true }}
              className="text-[15px] 2xl:text-[18px] monasans-500 text-black max-w-[260px] leading-tight"
            >
Stronger operational calm.

            </motion.p>
          </div>
        </div>

        {/* MOBILE / TABLET unchanged */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-16 w-full mt-10">
          {items.map((item, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-0 h-[130px] w-px bg-[#e2e2e2]" />

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.35 },
                }}
                viewport={{ once: true }}
                className="text-[48px] md:text-[60px] monasans-600 text-[#707070] mb-4 leading-none"
              >
                {item.num}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.35, delay: 0.05 },
                }}
                viewport={{ once: true }}
                className="text-[16px] monasans-400 text-[#4b4b4b] max-w-[220px] leading-relaxed"
              >
                {item.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
