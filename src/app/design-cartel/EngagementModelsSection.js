"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const engagementModels = [
  {
    image: "/designcartel/enage2.avif",
    title: "From on-demand designs to long-term creative partnerships.",
    description: (
      <>
        With our <strong>Design-on-Demand model</strong>, get exactly what you
        need – from a single style to a full collection – delivered when you
        need it.
      </>
    ),
    position: "left-top",
    dimensions: { width: 431, height: 431 },
  },
  {
    image: "/designcartel/enage1.avif",
    title: "",
    description: "",
    position: "right-top",
    dimensions: { width: 346, height: 233 },
  },
  {
    image: "/designcartel/enage3.avif",
    title: (
      <>
        For consistent creative output, <strong>Monthly Retainers</strong> offer
        a fixed number of designs each month, scaled to your business needs and
        seasonal flow.
      </>
    ),
    description: "",
    position: "left-middle",
    dimensions: { width: 792, height: 444 },
  },
  {
    image: "/designcartel/enage4.avif",
    title: "",
    description: (
      <>
        When speed and presentation matter, our{" "}
        <strong>Capsule Packs and Exporter Pitch Kits</strong> have you covered.
        Capsule Packs include pre-defined bundles (like 10 apparel styles, 12
        home SKUs, or 8 accessories) for quick launches or buyer showcases. Pitch
        Kits feature range boards, costed packs, MOQ details, lead times, and
        tech packs.
      </>
    ),
    position: "right-bottom",
    dimensions: { width: 684, height: 358 },
  },
];

export default function EngagementModelsSection() {
  const imageContainerRef = useRef(null);
  const image2ContainerRef = useRef(null);
  const image3ContainerRef = useRef(null);
  const image4ContainerRef = useRef(null);

  // First image rotation animation
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Second image swing animation
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: image2ContainerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress2, [0, 0.6], [90, 0]);
  const opacity2 = useTransform(scrollYProgress2, [0, 0.3], [0, 1]);

  // Third image swing animation
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: image3ContainerRef,
    offset: ["start end", "end start"],
  });

  const rotateX3 = useTransform(scrollYProgress3, [0, 0.6], [90, 0]);
  const opacity3 = useTransform(scrollYProgress3, [0, 0.3], [0, 1]);

  // Fourth image diagonal flip animation
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: image4ContainerRef,
    offset: ["start end", "end start"],
  });

  const rotateX4 = useTransform(scrollYProgress4, [0, 0.6], [45, 0]);
  const rotateY4 = useTransform(scrollYProgress4, [0, 0.6], [45, 0]);
  const opacity4 = useTransform(scrollYProgress4, [0, 0.3], [0, 1]);

  return (
    <section className="relative bg-[#F5F6F0] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header - Responsive */}
      <div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 md:mb-20">
        <p className="text-[12px] sm:text-[14px] absans-400 text-center text-[#090502] uppercase tracking-widest mb-3 sm:mb-4">
          ENGAGEMENT MODELS
        </p>
        <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] absans-400 leading-tight text-center text-[#090502] font-light">
          Flexible Ways to Work
          <br />
          Together
        </h2>
      </div>

      {/* Content Container - Responsive */}
      <div className="max-w-[95%] lg:max-w-[70%] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* First Row - Left large image + Right small image with text */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start justify-between lg:items-center">
          {/* Left Large Image */}
          <div
            className="w-full lg:w-auto lg:flex-shrink-0"
            ref={imageContainerRef}
          >
            <div
              style={{
                perspective: "1500px",
              }}
              className="w-full lg:w-[431px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[431px] rounded-2xl  overflow-hidden"
            >
              <motion.div
                style={{
                  rotateY,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={engagementModels[0].image}
                  alt="Design on Demand"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 431px"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Small Image + Text */}
          <div
            className="w-full lg:w-auto lg:flex-shrink-0 flex flex-col"
            ref={image2ContainerRef}
          >
            <div
              style={{
                perspective: "1500px",
              }}
              className="w-full lg:w-[346px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[233px] mb-4 sm:mb-6 rounded-xl  overflow-hidden"
            >
              <motion.div
                style={{
                  rotateX,
                  opacity: opacity2,
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom center",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={engagementModels[1].image}
                  alt="Creative Partnership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 346px"
                />
              </motion.div>
            </div>
            <div className="max-w-full lg:max-w-[346px] text-[16px] sm:text-[18px] lg:text-[20px]">
              <p className="absans-400 text-[#090502] leading-relaxed font-light mb-3">
                {engagementModels[0].title}
              </p>
              <p className="absans-400 text-[#090502] leading-[1.45] sm:leading-relaxed">
                {engagementModels[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Wide image with left text */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Text */}
          <div className="w-full lg:w-auto lg:flex-shrink-0  lg:max-w-[450px] order-2 lg:order-1 text-[16px] sm:text-[18px] lg:text-[20px]">
            <p className="absans-400 text-[#090502] leading-relaxed font-light mb-4 sm:mb-6">
              {engagementModels[2].title}
            </p>
          </div>

          {/* Right Wide Image with Animation */}
         <div
  ref={image3ContainerRef}
  className="
    w-full
    order-1 lg:order-2
    flex justify-center
    overflow-hidden
  "
>
  <div
    style={{ perspective: "1500px" }}
    className="
      relative
      w-full

      /* 🔑 strict responsive width */
      max-w-[92vw]
      sm:max-w-[520px]
      md:max-w-[580px]
      lg:max-w-[640px]
      xl:max-w-[680px]

      h-[220px]
      sm:h-[280px]
      md:h-[320px]
      lg:h-[360px]
      xl:h-[400px]

      rounded-2xl
      overflow-hidden
    "
  >
    <motion.div
      style={{
        rotateX: rotateX3,
        opacity: opacity3,
        transformStyle: "preserve-3d",
        transformOrigin: "bottom center",
      }}
      className="relative w-full h-full"
    >
      <Image
        src={engagementModels[2].image}
        alt="Monthly Retainers"
        fill
        className="object-cover"
        sizes="
          (max-width: 640px) 92vw,
          (max-width: 1024px) 680px,
          (max-width: 1440px) 640px,
          680px
        "
      />
    </motion.div>
  </div>
</div>

        </div>

        {/* Third Row - Large image with right text */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Large Image with Diagonal Flip */}
          <div
            className="w-full lg:w-auto lg:flex-shrink-0 order-1 lg:order-1"
            ref={image4ContainerRef}
          >
            <div
              style={{
                perspective: "1500px",
              }}
              className="w-full lg:w-[684px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[358px] rounded-2xl  overflow-hidden"
            >
              <motion.div
                style={{
                  rotateX: rotateX4,
                  rotateY: rotateY4,
                  opacity: opacity4,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={engagementModels[3].image}
                  alt="Capsule Packs"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 684px"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:max-w-[300px] order-2 lg:order-2 text-[16px] sm:text-[18px] lg:text-[20px]">
            <p className="absans-400 text-[#090502] leading-[1.4] sm:leading-[1.45]">
              {engagementModels[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
