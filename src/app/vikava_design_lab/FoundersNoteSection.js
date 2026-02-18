"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FoundersNoteSection() {
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const imgX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFE400] text-[#2D68FF] py-12 sm:py-16 md:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex flex-col items-center justify-center px-4 sm:px-6">
        {/* BIG TITLE WITH IMAGE OVERLAP */}
        <div className="relative flex flex-col items-center justify-center">
          <h2
            className="big-shoulders-black font-black leading-[1.15] text-center tracking-tight"
            style={{ fontSize: "clamp(40px, 11vw, 215px)" }}
          >
            FOUNDER&apos;S
            <br />
            NOTE
          </h2>

          {/* Center image */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ x: imgX, y: imgY }}
          >
            <div className="w-[35px] h-[65px] sm:w-[150px] sm:h-[230px] md:w-[149px] md:h-[230px] rounded-[999px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.35)] border border-black/5">
              <img
                src="/vikavalab/hover.avif"
                alt="Founder's Note"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* QUOTE TEXT */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-xl text-center px-2 sm:px-4">
          <p
            className="text-[#2D68FF] poppins-medium leading-relaxed"
            style={{ fontSize: "clamp(14px, 2.2vw, 20px)" }}
          >
            “Story is the shortest route from attention to preference. We design
            stories that people can feel – and systems that brands can scale.”
          </p>
          <p
            className="mt-3 sm:mt-4 poppins-bold text-[#2D68FF]"
            style={{ fontSize: "clamp(14px, 2.2vw, 20px)" }}
          >
            — Puuneet Aggarwal, Founder &amp; Mentor, Vikava Labs
          </p>
        </div>
      </div>
    </section>
  );
}
