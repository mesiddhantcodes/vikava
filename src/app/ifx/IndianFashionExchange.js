"use client";

import { motion } from "framer-motion";

export default function IndianFashionExchange() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/ifx/top-ifx.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Card with Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[min(90vw,68vh)] sm:w-[min(90vw,125vh)] max-w-[1078px] text-center aspect-[4/5] sm:aspect-[1070/722] border-[6px] md:border-[14px] border-[#ECEBE969] overflow-hidden backdrop-blur-[125px]"
        >
          {/* Video inside card - takes about 70% of height on desktop, less on mobile */}
          <div className="relative w-full h-[55%] sm:h-[70%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/ifx/top.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text Section - bottom 30% with frosted glass effect */}
          <div
            className="relative w-full h-[45%] sm:h-[30%] flex flex-col items-center justify-center bg-[#ECEBE969]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="garamond-700 text-white text-center leading-[0.9] md:leading-[0.8] mb-2 sm:mb-3 px-2"
              style={{
                fontSize: "clamp(24px, 3.35vw, 70px)",
                letterSpacing: "0.01em",
              }}
            >
              INDIAN FASHION EXCHANGE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="garamond-400 text-white text-center leading-relaxed px-2"
              style={{
                fontSize: "clamp(18px, 3.2vw, 60px)",
                fontFamily: "serif",
              }}
            >
              Couture Commerce Reworked
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
