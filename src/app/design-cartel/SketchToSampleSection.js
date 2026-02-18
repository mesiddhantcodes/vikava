"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const textLines = [
  "From Sketch to Sample - Designs",
  "That Sell, Not Just Impress!",
  "We design apparel, home furnishings, and",
  "lifestyle accessories with manufacturability,",
  "margins, and speed in mind.",
];

export default function SketchToSampleSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F6F0] py-20 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20"
    >
      <div className="w-[97%] mx-auto">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={
              isInView
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : { opacity: 0, filter: "blur(10px)", y: 20 }
            }
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <h2
              className="absans-400 text-[#090502]"
              style={{
                fontSize: "clamp(28px, 5vw, 64px)",
                lineHeight: "1.1"
                ,
                // marginBottom: index === 1 ? "1.5rem" : "0",
              }}
            >
              {line}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
