"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import CircularText from "../../CircularText";

export default function GuidingVisionSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Detect mobile for softer springs
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Vertical movement - text moves down
  const yRaw = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 120 : 280]);
  const y = useSpring(yRaw, {
    stiffness: isMobile ? 40 : 90,
    damping: isMobile ? 22 : 25,
  });

  // Zoom-out effect
  const scaleRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const scale = useSpring(scaleRaw, {
    stiffness: isMobile ? 90 : 80,
    damping: isMobile ? 22 : 18,
  });

  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 0.8, 0.4]);

  // Image zoom-out
  const imgScaleRaw = useTransform(scrollYProgress, [0, 0.35], [2, 1]);
  const imgScale = useSpring(imgScaleRaw, {
    stiffness: isMobile ? 70 : 120,
    damping: isMobile ? 20 : 22,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F4F0E9] px-4 py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* HEADER moves down + zooms out */}
        <motion.div
          style={{ y, scale, opacity }}
          className="
    sticky 
    leading-none text-neutral-900
    z-10
    pointer-events-none
  "
        >
          {/* FIRST ROW */}
          <div className="flex flex-wrap items-baseline justify-center gap-x-3">
            {[
              { text: "The", font: "greatvibes-regular" },
              { text: "Guiding", font: "geist-bold" },
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.05, // same as your first heading
                }}
                className={`${item.font} inline-block text-[clamp(64px,9vw,120px)] leading-none`}
              >
                {item.text}
              </motion.span>
            ))}
          </div>

          {/* SECOND ROW */}
          {[{ text: "Vision", font: "geist-bold" }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (i + 2) * 0.15,
              }}
              className={`${item.font} mt-1 text-[clamp(64px,9vw,120px)] leading-none text-center`}
            >
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* PORTRAIT IMAGE */}
        <motion.div
          className="
            relative 
            w-full max-w-[450px] 
            mt-18 md:mt-60 
            z-20 
            h-[350px] md:h-[400px] lg:h-[500px] 
            overflow-hidden 
            rounded-[18px] 
            bg-[#E0D8CC]
          "
        >
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            <Image
              src="/vikava/owner.avif"
              alt="Founder portrait"
              fill
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </motion.div>
        </motion.div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-10 max-w-4xl text-center mb-24"
        >
          <p className="text-[clamp(16px,1.6vw,24px)] leading-relaxed text-[#232323] geist-medium">
            "Business is not just about speed — it&apos;s about clarity, trust,
            and execution.
            <br /> At Vikava Labs, we build ecosystems where no brand fails."
          </p>
          <p className="mt-4 text-[clamp(14px,1.2vw,18px)] text-[#555555] geist-semibold">
            ~ Puuneet Aggarwal - Founder & Mentor, Vikava Labs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
