"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function WhySustainableDesign() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerParent = {
    animate: {
      transition: {
        staggerChildren: 0.25, // delay each element by 0.25s
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8"
    >
      <motion.div
        className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-8 md:gap-10 max-w-[95%] w-full"
        variants={staggerParent}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start w-full lg:w-[60%]">
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-afacadBold text-[#232323] 
              text-[36px] min-[375px]:text-[42px] sm:text-[52px]
              md:text-[62px] lg:text-[72px] mb-6 sm:mb-7 md:mb-8
              leading-[1.08]"
          >
            WHY SUSTAINABLE <br />
            DESIGN LIBRARY <br />
            EXISTS?
          </motion.h2>

          {/* Left Image */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl sm:rounded-2xl overflow-hidden
              w-full sm:w-[85%] md:w-[82%] lg:w-[80%]
              h-[450px] sm:h-[600px] md:h-[750px] lg:h-[850px]"
          >
            <Image
              src="/sustain/lady2.avif"
              alt="SDL India Artisan"
              width={1200}
              height={1200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-start w-full lg:w-[40%]">

          {/* Right Image */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl sm:rounded-2xl overflow-hidden 
              mb-6 sm:mb-7 md:mb-8 lg:mb-9
              w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
          >
            <Image
              src="/sustain/bag.avif"
              alt="Sustainable Design Product"
              width={1200}
              height={1200}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Paragraphs */}
          <motion.div
            variants={fadeUp}
            className="font-afacadMedium text-[#1D2025] md:-ml-20
              text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]
              w-full"
          >
            <p className="mb-4">
              Sustainability is no longer optional — it’s a buyer demand,
              a compliance standard, and a brand story. Yet sourcing sustainably
              from India is still fragmented, confusing, and often greenwashed.
            </p>

            <motion.div variants={staggerParent}>

              <motion.p variants={fadeUp}>
                - 26+ years of sourcing legacy — now focused entirely on sustainable materials and processes.
              </motion.p>

              <motion.p variants={fadeUp}>
                - The only organised hub connecting brands to natural fibres, handmade crafts,
                and certified suppliers.
              </motion.p>

              <motion.p variants={fadeUp}>
                - Dual approach: sustainable by material or sustainable by process.
              </motion.p>

              <motion.p variants={fadeUp}>
                - Certification-ready sourcing (GOTS, Fairtrade, OEKO-TEX, NEST).
              </motion.p>

            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
