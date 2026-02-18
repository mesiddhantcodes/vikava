"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EngagementModelsSection() {
  const imageRef = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress1, [0, 0.5, 1], [1, 1.2, 1]);
  return (
    <section className="relative w-full bg-transparent pt-8 pb-20 md:pb-32 px-6 md:px-12 overflow-hidden -mt-8 md:-mt-32">
      <div className="relative z-10 w-[97%] mx-auto">
        {/* Text Section */}
        <div className="min-h-[25vh] md:min-h-[60vh] flex items-end mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full items-end">
            {/* LEFT - Main Title (2 columns) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-white spacegrotesk-bold text-[36px] md:text-[64px] lg:text-[78px] uppercase leading-tight"
                style={{
                  lineHeight: "0.8",
                  letterSpacing: "-0.02em",
                }}
              >
                ENGAGEMENT MODELS –<br />
                HOW WE WORK
              </h2>
            </motion.div>

            {/* RIGHT - Description (1 column) */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className="text-white spacegrotesk-bold text-[14px] md:text-[18px] lg:text-[20px] uppercase leading-relaxed"
                style={{
                  fontWeight: 300,
                  lineHeight: "1.8",
                  letterSpacing: "0.02em",
                }}
              >
                TAILORED ENGAGEMENT MODELS DESIGNED TO SIMPLIFY EXECUTION,
                STRENGTHEN GOVERNANCE, AND ACCELERATE GROWTH.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Large Image Section - 1251×512 with Zoom Animation */}
        {/* Large Image Section - 1251×512 with Zoom Animation */}

        <div
          className="w-full overflow-hidden rounded-xl"
          style={{
            maxWidth: "1251px",
            height: "512px",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
    w-full h-full
    overflow-hidden
  "
            style={{ scale }}
          >
            {/* RELATIVE WRAPPER */}
            <div className="relative w-full h-full">
              {/* IMAGE */}
              <img
                src="/mac/groupImage.avif"
                alt="Engagement Models"
                className="w-full h-full object-cover origin-center relative z-0"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  backgroundImage: 'url("/mac/bgpng.png")',
                  backgroundRepeat: "repeat",
                  opacity: 0.09,
                  width: "400%",
                  height: "400%",
                  transform: "translateX(-1%) translateY(-2%)",
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
