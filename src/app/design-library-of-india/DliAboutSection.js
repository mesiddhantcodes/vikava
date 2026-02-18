// app/components/DliAboutSection.jsx
"use client";

import BlurText from "@/Components/BlurText";
import { motion } from "framer-motion";

export default function DliAboutSection() {
  return (
    <section className="w-full bg-white px-6 py-10 md:px-16 lg:px-24">
      <div className="max-w-[95%] flex h-[810px]  flex-col justify-center">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[16px] uppercase monasans-400 tracking-[0.2em] text-[#7A7A7A]"
        >
          ABOUT
        </motion.p>

        {/* Whole paragraph with wavy motion */}
        <BlurText
          text="Design Library of India (DLI) is not a public design marketplace. It is a private business infrastructure built for export houses and exporters to organize design and sample memory, streamline buyer workflows, and respond faster—without operational chaos.
"
          delay={0.03}
          animateBy="words"
          className=" text-[28px] 
    sm:text-[40px] 
    md:text-[48px] 
    lg:text-[56px] 
    xl:text-[62px] leading-[1.3] text-[#111016] font-medium"
        />
      </div>
    </section>
  );
}
