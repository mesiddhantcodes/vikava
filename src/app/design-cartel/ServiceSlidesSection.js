"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    type: "card",
    number: "01", mediaType: "image",

    title: "Line Planning & Trend Boards",
    description:
      "Silhouettes, fabrics, colors, and trims aligned with market trends.",
    image: "/designcartel/service1.png",
  },
  {
    id: 2,
    type: "card",
    number: "02", mediaType: "video",

    title: "Style Development",
    description:
      "Sketches, CADs, specs sheets, and complete design documentation.",
    image: "/designcartel/style-development.mp4",
  },
  {
    id: 3,
    type: "card",
    number: "03", mediaType: "image",

    title: "Print & Surface Design",
    description:
      "Orignal artworks, patterns, repeats, and craft-based design integration.",
    image: "/designcartel/service3.png",
  },
  {
    id: 4,
    type: "card",
    number: "04", mediaType: "image",

    title: "Sampling & Fit",
    description:
      "Coordinate development from proto to pre-production; ensuring cost-to-target designs.",
    image: "/designcartel/service4.png",
  },
  {
    id: 5,
    type: "card",
    number: "05", mediaType: "image",

    title: "Costing & Margin Alignment",
    description: "Designs engineered to meet buyer pricing and profitability.",
    image: "/designcartel/service5.png",
  },
  {
    id: 6,
    type: "card",
    number: "06",
    mediaType: "video",

    title: "Production Handover",
    description: "Airtight files, packaging notes, and QC-ready documentation.",
    image: "/designcartel/productionhandover.mp4",
  },
];

export default function ServiceSlidesSection() {
  return (
    <section className="relative w-full bg-[#EFE6D5] text-[#090502]">
      {/* Static Header - Always visible at top */}
      <div className="relative bg-[#EFE6D5] py-12 md:py-16 lg:py-20">
        <div className="px-8 md:px-16 lg:px-24">
          <p className="text-[14px] absans-400 text-[#090502] uppercase tracking-wider text-center mb-4">
            OUR SERVICES
          </p>
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] absans-400 font-light text-center leading-tight text-[#090502]">
            From Sketches to Solutions
          </h1>
        </div>
      </div>

      {/* Sticky Cards Container */}
      <div className="relative">
        {SLIDES.map((slide, index) => (
          <article key={slide.id} className="sticky top-[80px] md:top-[100px] min-h-[900px] w-full">
            <div className="h-full flex items-start justify-start pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-[#EFE6D5]">
              {/* Card Container - Flex Layout */}
              <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0">
                {/* Left Section - Number and Title */}
                <div className="w-full lg:w-[35%] xl:w-[30%] pr-6 sm:pr-8 lg:pr-12">
                  <div className="flex items-baseline gap-2 mb-6 lg:mb-8">
                    <p className="text-[14px] mb-4 sm:text-[16px] md:text-[18px] lg:text-[20px] absans-400 text-[#090502]/60 flex-shrink-0">
                      {slide.number}
                    </p>
                    <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] absans-400 text-[#090502] leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                </div>

                {/* Right Section - Description and Image */}
                <div className="w-full lg:w-[65%] xl:w-[70%] pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20">
                  <p className="text-[16px] pl-0 sm:text-[17px] md:text-[18px] lg:text-[20px] absans-400 text-[#090502] leading-relaxed mb-8 lg:mb-10">
                    {slide.description}
                  </p>
                  <div className="relative w-full max-w-[1100px] h-[300px] sm:h-[400px] md:h-[550px] lg:h-[742px] ml-auto overflow-hidden rounded-lg">
                    {slide.mediaType === "image" && (
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    )}

                    {slide.mediaType === "video" && (
                      <video
                        src={slide.image}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>

                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
