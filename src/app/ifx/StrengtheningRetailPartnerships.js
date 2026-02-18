"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partnerships = [
  {
    id: 1,
    number: "1",
    title: "Strategic Partnerships with Top Designers",
  },
  {
    id: 2,
    number: "2",
    title: "Category Expansion Through Product Mixes",
  },
  {
    id: 3,
    number: "3",
    title: "Enhanced Visual Brand Building",
  },
  {
    id: 4,
    number: "4",
    title: "Curated Showcases with Partners & Global Reach",
  },
  {
    id: 5,
    number: "5",
    title: "Scalable Sourcing & Operational Support",
  },
];

// Separate image arrays for the 3 columns
const column1Images = [
  "/ifx/1image1.avif",
  "/ifx/1image2.avif",
  "/ifx/1image3.avif",
  "/ifx/1image4.avif",
];

const column2Images = [
  "/ifx/2image1.avif",
  "/ifx/2image2.avif",
  "/ifx/2image3.avif",
  "/ifx/2image4.avif",
];

const column3Images = [
  "/ifx/3image1.avif",
  "/ifx/3image2.avif",
  "/ifx/3image3.avif",
];

const ImageColumn = ({ images, direction = "up", baseSpeed = 6 }) => {
  const ref = useRef(null);
  const totalHeight = images.length * (399 + 24);
  const duration = images.length * baseSpeed;

  return (
    <div ref={ref} className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: direction === "up" ? [0, -totalHeight] : [-totalHeight, 0],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...images, ...images].map((image, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[299/399] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Partnership image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 299px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function StrengtheningRetailPartnerships() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative bg-[#CDC7C7] min-h-[900px]">
      {/* Main Grid */}{" "}
      <div className="container bg-[#CDC7C7] px-2 md:pl-28 pt-8 md:pt-12 lg:pt-20 pb-6 md:pb-8">
        <h1
          className="garamond-400 leading-[0.9] tracking-tight text-[#2B2420] break-words"
          style={{
            fontSize: "clamp(3rem, 9vw, 15rem)",
          }}
        >
          Strengthening Retail
          <br />
          Partnerships
        </h1>
      </div>
      <div
        className="grid pt-12 grid-cols-1 lg:grid-cols-2 lg:h-[clamp(740px,62.57vw,1170px)]"
      >
        {/* Left - Sticky Images */}

        <div className="lg:sticky lg:top-0 self-start">
          <div className="flex gap-4 md:gap-6 px-4 md:px-6 h-[500px] lg:h-full">
            <div className="flex-1 max-w-[299px]">
              <ImageColumn
                images={column1Images}
                direction="up"
                baseSpeed={6}
              />
            </div>
            <div className="flex-1 max-w-[299px]">
              <ImageColumn
                images={column2Images}
                direction="down"
                baseSpeed={6}
              />
            </div>
            <div className="flex-1 max-w-[299px]">
              <ImageColumn
                images={column3Images}
                direction="up"
                baseSpeed={6}
              />
            </div>
          </div>
        </div>

        {/* Right - Scrollable Content (extends beyond viewport) */}
        <div className="relative px-6 md:px-8 lg:px-16 xl:px-24 pb-32">
          {partnerships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between py-6 md:py-8 lg:py-10">
                {/* Number */}
                <div
                  className="mont-400 leading-none text-[#2B2420] flex-shrink-0 mr-8 md:mr-12 lg:mr-16"
                  style={{
                    fontSize: "clamp(48px, 6vw, 128px)",
                    minWidth: "80px",
                  }}
                >
                  {item.number}
                </div>

                {/* Text */}
                <p
                  className="leading-[1.4] text-[#2B2420] mont-400 text-left w-[230px]"
                  style={{
                    fontSize: "clamp(16px, 1.4vw, 24px)",
                  }}
                >
                  {item.title}
                </p>
              </div>

              {/* Separator */}
              {index < partnerships.length - 1 && (
                <div className="w-full h-[1px] bg-[#d9d9d9]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
