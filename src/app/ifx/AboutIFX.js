"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIFX() {
  return (
    <section className="w-full bg-[#EDEBEC] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[97%]">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12 garamond-700 text-[#2b2622]"
          style={{
            fontSize: "clamp(48px, 6.94vw, 130px)",
            lineHeight: "1.1",
            fontWeight: "400",
          }}
        >
          About IFX
        </motion.h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-11 lg:gap-y-0">
          {/* Left Column */}
          <div className="lg:col-span-3 flex items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="garamond-400 text-[#2b2622]"
              style={{
                fontSize: "clamp(18px, 1.71vw, 32px)",
                lineHeight: "1.4",
              }}
            >
              Where Indian Designers &<br />
              Designer retail Stores Find Clarity
              <br />
              and Growth.
            </motion.h2>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[579px] mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "579 / 723",
                }}
              >
                <Image
                  src="/ifx/about.avif"
                  alt="Designer fashion model"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 579px"
                  className="object-cover"
                  priority={false}
                />

                {/* Reveal Overlay */}
                <motion.div
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 z-10 bg-black"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="
    lg:col-span-3
    mont-400
    flex flex-col
    gap-6
    justify-start lg:justify-end
    mt-6 lg:mt-0
    max-w-full
    lg:max-w-[480px]
    ml-4
  "
          >
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#2b2622]"
              style={{
                fontSize: "clamp(14px, 1.07vw, 20px)",
                lineHeight: "1.7",
              }}
            >
              The Indian couture industry is rich in talent but tangled in
              problems: limited visibility, unpredictable sales, fragile
              consignment models, and scattered operations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#2b2622]"
              style={{
                fontSize: "clamp(14px, 1.07vw, 20px)",
                lineHeight: "1.7",
              }}
            >
              IFX exists to organise couture commerce — connecting designers,
              retail stores, and global buyers with systems that bring trust,
              visibility, and growth.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
