"use client";

import Image from "next/image";
import { useState, memo, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Apparel & Textiles",
    image: "/designcartel/cate1.avif",
    description: "Womenswear, Menswear, Kidswear, Knits, Wovens, Textiles.",
    details:
      "Deliverables: Complete design packs with styles, fits, trims, and packaging-ready details.",
  },
  {
    id: 2,
    title: "Home Furnishings",
    image: "/designcartel/cate2.avif",
    description:
      "Bedding, Towels, Cushions, Throws, Table Mats, Runners, Curtains, Quilts.",
    details:
      "Deliverables: Market-specific sizes, materials, finishes, packaging concepts, and bundled set ideas.",
  },
  {
    id: 3,
    title: "Furniture",
    image: "/designcartel/cate3.avif",
    description:
      "Stools, Brassware, Cutlery, Storage Baskets, Tabletop Accessories.",
    details:
      "Deliverables: Design notes for finishes, dimensions, assembly, and protective packaging.",
  },
  {
    id: 4,
    title: "Lifestyle Accessories",
    image: "/designcartel/cate4.avif",
    description:
      "Bags, Belts, Footwear, Jewellery, Scarves, Ponchos, Hair Accessories, Wallets, Keychains.",
    details:
      "Deliverables: Ready-to-sample design files — from bags and belts with hardware detailing, to footwear with fit notes, to jewellery aligned with export compliance.",
  },
];

// Memoized Image Component
const CardImage = memo(({ src, alt, isExpanded }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300"
      sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 740px"
      priority
    />
  );
});

CardImage.displayName = "CardImage";

export default function CategoriesSection() {
  const [hoveredId, setHoveredId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative bg-[#F5F6F0] pt-12 pb-32 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[97%] mx-auto">
        {/* Heading - Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="absans-400 text-[11px] sm:text-[12px] md:text-[14px] uppercase text-[#090502] mb-3 sm:mb-4 tracking-wider">
            CATEGORIES WE COVER
          </p>
          <h2
            className="absans-400 text-[#090502]"
            style={{
              fontSize: "clamp(36px, 6vw, 84px)",
              lineHeight: "1.1",
            }}
          >
            From Fashion to Furnishings
          </h2>
        </div>

        {/* Cards Container - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-4">
          {categories.map((category) => {
            const isExpanded = isMobile ? true : hoveredId === category.id;

            return (
              <motion.div
                key={category.id}
                className="relative bg-[#EFE6D5] rounded-2xl sm:rounded-3xl lg:rounded-[24px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  width: isExpanded
                    ? "clamp(320px, 95vw, 650px)"
                    : "clamp(160px, 48vw, 190px)",
                  height: "clamp(280px, 45vw, 480px)",
                  maxWidth: "100%",
                }}
                layout
                transition={{ layout: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
                onMouseEnter={() => !isMobile && setHoveredId(category.id)}
              >
                {/* Image Layer - Always Rendered */}
                <div
                  className={`absolute inset-0 transition-all duration-400 ${isExpanded ? "w-1/2" : "w-full"
                    }`}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-r-[20px] sm:rounded-r-2xl lg:rounded-r-3xl">
                    <CardImage
                      src={category.image}
                      alt={category.title}
                      isExpanded={isExpanded}
                    />
                  </div>
                </div>

                {/* Text Layer - SMOOTH ANIMATION */}
                <motion.div
                  className="absolute right-0 top-0 w-1/2 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    scale: isExpanded ? 1 : 0.95,
                    x: isExpanded ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.3 },
                  }}
                >
                  {/* Title at top - Staggered animation */}
                  <motion.h3
                    className="absans-400 text-[#090502] leading-tight"
                    style={{
                      fontSize: "clamp(14px, 3.5vw, 20px)",
                      lineHeight: "1.2",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      y: isExpanded ? 0 : 10
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isExpanded ? 0.05 : 0
                    }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Description and details container */}
                  <motion.div
                    className="space-y-2 mt-4 sm:mt-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      y: isExpanded ? 0 : 15
                    }}
                    transition={{
                      duration: 0.35,
                      delay: isExpanded ? 0.15 : 0
                    }}
                  >
                    <motion.p
                      className="absans-400 text-[#666666] sm:text-[12px] text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed"
                      style={{ lineHeight: "1.4" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.25, delay: isExpanded ? 0.25 : 0 }}
                    >
                      {category.description}
                    </motion.p>
                    <motion.p
                      className="absans-400 text-[#666666] sm:text-[12px] text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed"
                      style={{ lineHeight: "1.35" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.25, delay: isExpanded ? 0.35 : 0 }}
                    >
                      {category.details}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
