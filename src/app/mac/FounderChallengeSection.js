"use client";
import { motion } from "framer-motion";
import { founderChallengeData } from "./constant";

export default function FounderChallengeSection() {
  const { paragraphs } = founderChallengeData;

  return (
    <section className="relative w-full bg-transparent py-20 md:py-32 px-6 md:px-12 overflow-hidden">
 

      <div className="relative z-10 w-[97%] mx-auto">
        {/* Full Width Heading - Each line animates separately from bottom */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="text-white spacegrotesk-bold font-black leading-tight uppercase"
            style={{
              fontSize: "clamp(3.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            WHAT MAC SOLVES -
            <br />
            THE FOUNDER'S CHALLENGE
          </motion.h2>
        </div>

        {/* Grid: Left Empty (Black) + Right Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Empty Black Space */}
          <div className="hidden lg:block bg-transparent"></div>

          {/* Right Column: Paragraphs */}
          <div className="flex flex-col gap-8 justify-start">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.4 + index * 0.15,
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                className="text-white spacegrotesk-regular uppercase leading-tight text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                  // fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                  lineHeight: "1.5",
                  letterSpacing: "0.1em",
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
