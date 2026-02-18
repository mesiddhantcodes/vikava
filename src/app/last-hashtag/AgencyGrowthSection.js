"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

export function AgencyGrowthSection() {
  return (
    <section className="w-full bg-[#e4f5ee] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-14">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-2 place-items-start xl:place-items-center gap-12 xl:gap-0 max-w-7xl">
        {/* LEFT COLUMN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, type: "spring" }}
          className="flex flex-col items-center pt-12 sm:pt-16 md:pt-20 lg:pt-32 w-full order-2 lg:order-1"
        >
          <div className="w-full max-w-[clamp(300px,90vw,690px)] lg:w-[clamp(614px,37vw,690px)] mx-auto">
            {/* TEXT */}
            <motion.p
              className="text-[16px] sm:text-[18px] md:text-[20px] inter-medium text-[#3A3A3A] mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center lg:text-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.6, delay: 0.12, type: "spring" }}
            >
              Last Hashtag owns growth execution - positioning, demand creation,
              and performance loops.
            </motion.p>

            {/* IMAGE */}
            <motion.div
              className="
              aspect-[614/650] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none
              rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
              overflow-hidden bg-[#e9e9e9] relative
            "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.95, delay: 0.24, type: "spring" }}
            >
              <Image
                src="/lasttag/men.avif"
                alt="Person with TV"
                fill
                sizes="(max-width: 768px) 90vw,
                       (max-width: 1200px) 45vw,
                       (max-width: 1870px) 37vw,
                       690px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, type: "spring", delay: 0.14 }}
          className="flex flex-col items-center w-full order-1 lg:order-2"
        >
          <div className="w-full max-w-[clamp(300px,90vw,690px)] lg:w-[clamp(614px,37vw,690px)] mx-auto">
            <motion.h2
              className="text-[24px] sm:text-[40px] md:text-[44px] lg:text-[48px] galindo-regular leading-tight mb-4 sm:mb-6 md:mb-6 lg:mb-6 text-center lg:text-left text-[#232323]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.95, delay: 0.15, type: "spring" }}
            >
              Not ‘campaigns’. A growth
              <br className="block sm:hidden md:block lg:block" />
              system that compounds.{" "}
            </motion.h2>

            <motion.div
              className="
              aspect-[614/650] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none
              rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
              overflow-hidden bg-[#e9e9e9] mb-4 sm:mb-6 md:mb-6 lg:mb-6 relative
            "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.27, type: "spring" }}
            >
              <Image
                src="/lasttag/women.avif"
                alt="Person with yellow pillow"
                fill
                sizes="(max-width: 768px) 90vw,
                       (max-width: 1200px) 45vw,
                       (max-width: 1870px) 37vw,
                       690px"
                className="object-cover"
              />
            </motion.div>

            <motion.p
              className="text-[16px] sm:text-[18px] md:text-[20px] inter-medium text-[#3A3A3A] text-center lg:text-left leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.6, delay: 0.33, type: "spring" }}
            >
              We unite strategy, creative, performance media, influencers, SEO,
              automation, and offline activations into one accountable growth
              engine. And because we're part of the Vikava Labs ecosystem, our
              marketing connects seamlessly with product design, sourcing,
              e-commerce, and compliance – giving you fewer leaks, faster
              outcomes, and real ROI.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
