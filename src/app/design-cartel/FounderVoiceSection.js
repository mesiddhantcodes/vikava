"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FounderVoiceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[#F5F6F0]
        py-16 sm:py-20 lg:py-24
        px-6 sm:px-8 lg:px-12
        overflow-x-hidden   /* 🔑 CONTAIN */
      "
    >
      <div className="max-w-[1850px] mx-auto flex justify-center overflow-hidden">
        {/* MAIN CARD */}
        <motion.div
          className="
            relative
            w-full
            max-w-[1550px]
            aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[1550/828]
            rounded-3xl
            overflow-hidden
          "
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background Image */}
          <Image
            src="/designcartel/found.avif"
            alt="Founder's Voice"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 1550px"
          />

          {/* GLASS CARD */}
          <motion.div
            className="
              absolute
              bottom-0
              lg:right-0
              inset-x-0 lg:inset-x-auto
              rounded-t-3xl lg:rounded-tl-3xl
              p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
              max-w-full lg:max-w-[607px]
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.85) 50%, rgba(200,200,200,0.75) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Shadow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 600px 800px at 70% 90%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 30%, transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* TOP */}
              <div>
                <p className="absans-400 uppercase tracking-widest text-[#090502] mb-3 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center lg:text-left">
                  FOUNDER'S VOICE
                </p>

                <h2 className="absans-400 text-[#090502] mb-4 text-[20px] sm:text-[28px] md:text-[40px] lg:text-[56px] xl:text-[84px] leading-tight text-center lg:text-left">
                  Thoughts That Shape Design
                </h2>
              </div>

              {/* BOTTOM */}
              <div>
                <p className="absans-400 text-[#090502] mb-3 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] leading-snug text-center lg:text-left">
                  "Design isn't just art — it's commerce. Every sketch must make
                  sampling easier, costing cleaner, and sales stronger."
                </p>

                <p className="absans-400 text-[#090502] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] text-center lg:text-left">
                  — Puuneet Aggarwal, Founder & Mentor, Vikava Labs
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
