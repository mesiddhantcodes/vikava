"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FounderForFoundersSection() {
  return (
    <section className="relative w-full bg-transparent py-20 md:py-22 px-4 lg:px-0  overflow-hidden">
      <div className="relative z-10 w-full mx-auto">
        {/* Image Container with Text Overlay (1385×840) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden"
          style={{
            width: "100%",
            height: "840px",
            margin: "0 auto",
          }}
        >
          {/* Background Image */}
          <video
            src="/mac/hand.mp4" // ← your video file
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-2xl object-cover"
          />

          {/* Dark Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black spacegrotesk-bold uppercase leading-tight mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.8rem)",
                fontWeight: 900,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              MAC, BUILT BY A<br />
              FOUNDER FOR FOUNDERS
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-black spacegrotesk-regular leading-relaxed mb-6 text-[20px] max-w-3xl"
              style={{
                // fontSize: "clamp(0.975rem, 1.2vw, 1.5rem)",
                fontWeight: 300,
                lineHeight: "1.12",
              }}
            >
              "Every founder deserves a co-pilot. With MAC, we ensure you don't
              just survive the chaos of starting up—you build with confidence,
              governance, and speed."
            </motion.p>

            {/* Author Credit */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-black spacegrotesk-bold text-[18px] uppercase"
              style={{
                // fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              — Puuneet Aggarwal, Founder & Mentor, Vikava Labs
            </motion.p>
          </div>
          <div
            className="absolute w-full inset-0"
            style={{
              backgroundImage: 'url("/mac/bgpng.png")',
              opacity: 0.09,
              width: "100%",
              height: "100%",
              // transform: "translateX(4.8%) translateY(-22%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
