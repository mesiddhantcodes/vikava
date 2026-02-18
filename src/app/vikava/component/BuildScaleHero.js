"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BuildScaleHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const bgScale = useTransform(textProgress, [0, 1], [1, 1.85]);

  const opacityBuild = useTransform(textProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const opacityScale = useTransform(textProgress, [0.3, 0.4, 0.6, 0.7], [
    0, 1, 1, 0,
  ]);
  const opacityGrow = useTransform(textProgress, [0.65, 0.75, 1], [
    0, 1, 1,
  ]);

  const blurBuild = useTransform(textProgress, [0, 0.25, 0.35], [
    "0px",
    "0px",
    "6px",
  ]);
  const blurScale = useTransform(
    textProgress,
    [0.3, 0.4, 0.6, 0.7],
    ["6px", "0px", "0px", "6px"]
  );
  const blurGrow = useTransform(textProgress, [0.65, 0.75, 1], [
    "6px",
    "0px",
    "0px",
  ]);

  const blurBuildFilter = useTransform(blurBuild, (v) => `blur(${v})`);
  const blurScaleFilter = useTransform(blurScale, (v) => `blur(${v})`);
  const blurGrowFilter = useTransform(blurGrow, (v) => `blur(${v})`);

  const yBuild = useTransform(textProgress, [0, 0.25, 0.35], [15, 0, -15]);
  const yScale = useTransform(textProgress, [0.3, 0.4, 0.7], [15, 0, -15]);
  const yGrow = useTransform(textProgress, [0.65, 0.75, 1], [15, 0, 0]);

  return (
    <section ref={sectionRef} className="relative w-full h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/vikava/group.avif')",
            }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Center Text Card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <motion.div
            className="
              pointer-events-auto
              rounded-3xl bg-black/60
              px-6 py-6
              md:px-10 md:py-8
              lg:px-12 lg:py-8
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
              border border-white/10
            "
          >
            <div
              className="
                relative 
                flex items-center justify-center
                h-[clamp(50px,8vw,60px)]
                w-[clamp(240px,40vw,300px)]
              "
            >
              {/* BUILD IT */}
              <motion.span
                style={{ opacity: opacityBuild, y: yBuild, filter: blurBuildFilter }}
                className="
                  absolute text-white font-bold tracking-[0.15em]
                  text-[clamp(26px,6vw,48px)]
                "
              >
                BUILD IT.
              </motion.span>

              {/* SCALE IT */}
              <motion.span
                style={{ opacity: opacityScale, y: yScale, filter: blurScaleFilter }}
                className="
                  absolute text-white font-bold tracking-[0.15em]
                  text-[clamp(26px,6vw,48px)]
                "
              >
                SCALE IT.
              </motion.span>

              {/* GROW IT */}
              <motion.span
                style={{ opacity: opacityGrow, y: yGrow, filter: blurGrowFilter }}
                className="
                  absolute text-white font-bold tracking-[0.15em]
                  text-[clamp(26px,6vw,48px)]
                "
              >
                GROW IT.
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
