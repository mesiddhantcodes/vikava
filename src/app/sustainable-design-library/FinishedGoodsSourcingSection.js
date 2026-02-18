"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// stagger settings
const staggerParent = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

// each text item animation
const up = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 45, damping: 12 },
  },
};

const CONTENT_DATA = {
  byMaterial: {
    title: "(Organic, Recycled & Vegan)",
    description:
      "Apparel, home furnishings, and accessories made with organic cotton, hemp, khadi, bamboo, hemp blends, recycled fabrics, vegan leather.",
    heading: (
      <>
        FINISHED GOODS SOURCING
        <br />
        BY MATERIAL
      </>
    ),
    image: "/sustain/hand2.avif",
    imageAlt: "Leather making",
  },
  byProcess: {
    title: "(Handmade & Low-Impact)",
    description:
      "Products made with handmade, low-impact techniques (macramé, crochet, hand knitting, handloom weaving, hand painting, hand embroidery).",
    heading: (
      <>
        FINISHED GOODS SOURCING
        <br />
        BY PROCESS
      </>
    ),
    image: "/sustain/hand3.avif",
    imageAlt: "Handloom weaving",
  },
};

export default function FinishedGoodsSourcingSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full flex flex-col items-center"
    >
      {/* Desktop Layout (lg and above) - Original Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 w-full">
        {/* TOP LEFT IMAGE */}
        <div className="w-full h-[450px] overflow-hidden">
          <Image
            src={CONTENT_DATA.byMaterial.image}
            alt={CONTENT_DATA.byMaterial.imageAlt}
            width={692}
            height={450}
            className="w-full h-full object-cover"
            priority
            quality={85}
          />
        </div>

        {/* TOP RIGHT TEXT — staggered */}
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full h-[450px] bg-[#8e8e8e] flex flex-col px-10 py-6"
        >
          <motion.h4
            variants={up}
            className="font-afacadBold text-[#232323] text-[28px] mb-3"
          >
            {CONTENT_DATA.byMaterial.title}
          </motion.h4>

          <motion.p
            variants={up}
            className="font-afacadMedium text-[#232323] text-[20px] mb-6"
          >
            {CONTENT_DATA.byMaterial.description}
          </motion.p>

          <motion.h3
            variants={up}
            className="font-afacadBold text-[#232323] text-[32px] mt-auto leading-tight"
          >
            {CONTENT_DATA.byMaterial.heading}
          </motion.h3>
        </motion.div>

        {/* BOTTOM LEFT TEXT — staggered */}
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full h-[450px] bg-[#8e8e8e] flex flex-col px-10 py-6"
        >
          <motion.h4
            variants={up}
            className="font-afacadBold text-[#232323] text-[28px] mb-3"
          >
            {CONTENT_DATA.byProcess.title}
          </motion.h4>

          <motion.p
            variants={up}
            className="font-afacadMedium text-[#232323] text-[20px] mb-6"
          >
            {CONTENT_DATA.byProcess.description}
          </motion.p>

          <motion.h3
            variants={up}
            className="font-afacadBold text-[#232323] text-[32px] mt-auto leading-tight"
          >
            {CONTENT_DATA.byProcess.heading}
          </motion.h3>
        </motion.div>

        {/* BOTTOM RIGHT IMAGE */}
        <div className="w-full h-[450px] overflow-hidden">
          <Image
            src={CONTENT_DATA.byProcess.image}
            alt={CONTENT_DATA.byProcess.imageAlt}
            width={692}
            height={450}
            className="w-full h-full object-cover"
            priority
            quality={85}
          />
        </div>
      </div>

      {/* Mobile/Tablet Layout (below lg) - Stacked */}
      <div className="lg:hidden w-full flex flex-col">
        {/* BY MATERIAL Section */}
        <div className="w-full">
          {/* Image */}
          <div className="w-full h-56 sm:h-64 md:h-80 overflow-hidden">
            <Image
              src={CONTENT_DATA.byMaterial.image}
              alt={CONTENT_DATA.byMaterial.imageAlt}
              width={692}
              height={450}
              className="w-full h-full object-cover"
              priority
              quality={85}
            />
          </div>

          {/* Text */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-[#8e8e8e] flex flex-col px-6 py-8 sm:px-8 sm:py-10 md:px-10"
          >
            <motion.h4
              variants={up}
              className="font-afacadBold text-[#232323] text-xl sm:text-2xl md:text-[28px] mb-3"
            >
              {CONTENT_DATA.byMaterial.title}
            </motion.h4>

            <motion.p
              variants={up}
              className="font-afacadMedium text-[#232323] text-base sm:text-lg md:text-[20px] mb-6 leading-relaxed"
            >
              {CONTENT_DATA.byMaterial.description}
            </motion.p>

            <motion.h3
              variants={up}
              className="font-afacadBold text-[#232323] text-2xl sm:text-3xl md:text-[32px] mt-auto leading-tight"
            >
              {CONTENT_DATA.byMaterial.heading}
            </motion.h3>
          </motion.div>
        </div>

        {/* BY PROCESS Section */}
        <div className="w-full">
          {/* Image */}
          <div className="w-full h-56 sm:h-64 md:h-80 overflow-hidden">
            <Image
              src={CONTENT_DATA.byProcess.image}
              alt={CONTENT_DATA.byProcess.imageAlt}
              width={692}
              height={450}
              className="w-full h-full object-cover"
              priority
              quality={85}
            />
          </div>

          {/* Text */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-[#8e8e8e] flex flex-col px-6 py-8 sm:px-8 sm:py-10 md:px-10"
          >
            <motion.h4
              variants={up}
              className="font-afacadBold text-[#232323] text-xl sm:text-2xl md:text-[28px] mb-3"
            >
              {CONTENT_DATA.byProcess.title}
            </motion.h4>

            <motion.p
              variants={up}
              className="font-afacadMedium text-[#232323] text-base sm:text-lg md:text-[20px] mb-6 leading-relaxed"
            >
              {CONTENT_DATA.byProcess.description}
            </motion.p>

            <motion.h3
              variants={up}
              className="font-afacadBold text-[#232323] text-2xl sm:text-3xl md:text-[32px] mt-auto leading-tight"
            >
              {CONTENT_DATA.byProcess.heading}
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}