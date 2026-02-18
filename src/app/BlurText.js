"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Custom BlurText component specifically for FounderFirstHero
const CustomBlurText = ({ delay = 0.05, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parse text and identify highlighted portions
  const elements = useMemo(() => {
    const fullText =
      "India's first founder-first business building ecosystem. From mentoring to marketing, sourcing to e-commerce – Vikava Labs gives founders clarity, execution, and speed without vendor chaos or broken systems.";

    const words = fullText.split(" ");

    return words.map((word) => {
      // Check if this word is "Vikava" or "Labs"
      if (word === "Vikava" || word === "Labs") {
        return {
          text: word,
          isHighlighted: true,
        };
      }
      return {
        text: word,
        isHighlighted: false,
      };
    });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={`${className} flex flex-wrap`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={`${segment.text}-${index}`}
          variants={itemVariants}
          className={`inline-block ${segment.isHighlighted ? "good-vibes" : ""
            }`}
          style={{ display: "inline-block" }}
        >
          {segment.text}
          {index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function FounderFirstHero() {
  return (
    <section
      className="
        bg-[#F3F0EB] 
        flex flex-col items-center justify-center 
        px-4 
        h-auto py-20        
        md:h-[835px] md:py-0 
      "
    >
      <div
        className="
          w-full 
          max-w-[980px]    
          text-center
        "
      >
        <CustomBlurText
          delay={0.05}
          className="
            geist-medium 
            text-[clamp(20px,4vw,64px)]    
            text-[#151518] 
            leading-[1.3] md:leading-[1.1] 
            tracking-wide 
            mx-auto 
          "
        />
      </div>
    </section>
  );
}