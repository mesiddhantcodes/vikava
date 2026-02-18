"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ICONS_DATA = [
  { src: "/sustain/wool.avif", alt: "Fibres & Yarns icon" },
  { src: "/sustain/fabric.avif", alt: "Fabrics icon" },
  { src: "/sustain/print.avif", alt: "Dyeing & Printing icon" },
  { src: "/sustain/knife.avif", alt: "Handmade Processes icon" },
  { src: "/sustain/human.avif", alt: "Clusters & Artisans icon" },
  { src: "/sustain/batch.avif", alt: "Certifications & Audits icon" },
];

const SERVICES_DATA = [
  {
    tag: "[1]",
    heading: "Fibres & Yarns",
    description:
      "Organic cotton, hemp, bamboo, jute, banana fibre, pineapple fibre, wool.",
  },
  {
    tag: "[2]",
    heading: "Fabrics",
    description:
      "Handloom, khadi, organic/recycled blends, vegan leather (cork, apple, cactus).",
  },
  {
    tag: "[3]",
    heading: "Dyeing & Printing",
    description:
      "Fruit, vegetable, and plant-based dyes; block printing, mud resist, hand painting.",
  },
  {
    tag: "[4]",
    heading: "Handmade Processes",
    description:
      "Macramé, crochet, hand knitting, hand embroidery, handlooms — anything crafted by hand.",
  },
  {
    tag: "[5]",
    heading: "Clusters & Artisans",
    description:
      "Direct connect with India's craft clusters for scale and authenticity.",
  },
  {
    tag: "[6]",
    heading: "Certifications & Audits",
    description: "ESG compliance, audit support, and traceability reports.",
  },
];

const upVariant = {
  initial: { opacity: 0, y: 28 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 56,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const RawMaterialSection = () => {
  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-[#D0D0D0]">
      {/* Main Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="sticky top-20 md:top-24 z-30 bg-[#D0D0D0] py-4 sm:py-6 font-bold font-afacadMedium uppercase text-center text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#232323]"
      >
        Raw Material & Process Services
      </motion.h2>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0">
        {/* Left Side - Sticky Image (Desktop) / Static (Mobile) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-[260px] lg:self-start mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 30,
              mass: 1,
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full aspect-700/454 max-w-[500px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[600px] 2xl:max-w-[720px] mx-auto lg:ml-12 lg:mt-8 rounded-md overflow-hidden"
          >
            <Image
              src="/sustain/leave.avif"
              alt="Raw materials - sustainable sourcing"
              fill
              className="rounded-md object-cover"
              loading="lazy"
              quality={85}
            />
          </motion.div>
        </div>

        {/* Right Side - Scrolling Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-0">
          <div className="w-full max-w-[90%] flex flex-col gap-4 bg-transparent lg:pl-6 py-4 sm:py-6 lg:py-8">
            {SERVICES_DATA.map((item, idx) => (
              <motion.div
                key={item.heading}
                custom={idx}
                variants={upVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full pt-4 sm:pt-5 lg:pt-6 pb-6 sm:pb-7 lg:pb-8 relative"
              >
                <div className="flex flex-row justify-between items-start gap-4">
                  {/* Tag & Title/Description */}
                  <div className="flex-1">
                    <div className="text-[#222] text-base sm:text-lg font-medium mb-3 sm:mb-4">
                      {item.tag}
                    </div>
                    <h3 className="text-[#222] font-afacadBold font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] mb-4 sm:mb-3">
                      {item.heading}
                    </h3>
                    <p className="text-[#232323] font-afacadMedium text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] flex-shrink-0">
                    <Image
                      src={ICONS_DATA[idx].src}
                      alt={ICONS_DATA[idx].alt}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Divider (except for last item) */}
                {idx < SERVICES_DATA.length - 1 && (
                  <div className="w-full border-b border-[#232323]/30 mt-5 sm:mt-6 lg:mt-7" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RawMaterialSection;
