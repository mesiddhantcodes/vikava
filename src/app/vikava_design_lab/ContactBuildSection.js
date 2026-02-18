"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactBuildSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const topOpacity = useTransform(scrollYProgress, [0.55, 0.7], [1, 0]);
  const topY = useTransform(scrollYProgress, [0.55, 0.7], [0, -200]);

  const imgOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const imgY = useTransform(scrollYProgress, [0.05, 0.4], ["60vh", "0vh"]);
  const imgScale = useTransform(scrollYProgress, [0.05, 0.6], [0.35, 1]);

  const bottomOpacity = useTransform(scrollYProgress, [0.7, 0.95], [0, 1]);
  const bottomY = useTransform(scrollYProgress, [0.7, 0.95], [120, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[320vh] md:h-[360vh] lg:h-[390vh] bg-[#3D7EFF] text-[#FFE400]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* IMAGE LAYER */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: imgOpacity, y: imgY, scale: imgScale }}
        >
          <img
            src="/vikavalab/cupppp.avif"
            alt="Lets build it together"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D7EFF] via-transparent to-[#3D7EFF]/40 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-12 lg:px-16">
          {/* TOP HEADING */}
          <motion.div
            style={{ opacity: topOpacity, y: topY }}
            className="pt-10 sm:pt-14 md:pt-20 lg:pt-24"
          >
            <h2
              className="big-shoulders-black font-black leading-[0.9]"
              style={{ fontSize: "clamp(40px, 8vw, 160px)" }}
            >
              LET&apos;S BUILD IT
              <br />
              TOGETHER
            </h2>
          </motion.div>

          {/* BOTTOM CONTENT */}
          <motion.div
            style={{ opacity: bottomOpacity, y: bottomY }}
            className="absolute left-4 right-4 sm:left-6 sm:right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 top-3/4 -translate-y-1/2 max-w-6xl"
          >
            <h3
              className="big-shoulders-black text-[#FFE500] font-black leading-[0.95] uppercase"
              style={{
                fontSize: "clamp(36px, 7.5vw, 160px)",
                letterSpacing: "-0.02em",
              }}
            >
              CONTACT US TO
              <br />
              KICK OFF YOUR
              <br />
              brand’s transformation.{" "}
            </h3>

            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative mt-6 sm:mt-8 bg-[#EEEDE7] clashdisplay-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center text-[#232323] text-[14px] sm:text-[16px] shadow overflow-hidden"
            >
              <motion.span
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 80, opacity: 0 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="relative z-10 whitespace-nowrap"
              >
                Connect With Us
              </motion.span>

              <motion.span
                variants={{
                  rest: { y: -80, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="absolute left-3 sm:left-4 z-0 whitespace-nowrap"
              >
                Connect With Us
              </motion.span>

              <span className="ml-2 sm:ml-3 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] text-[18px] sm:text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
                <motion.span
                  variants={{
                    rest: { x: -80, opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute"
                >
                  &rarr;
                </motion.span>
                <motion.span
                  variants={{
                    rest: { x: 0, opacity: 1 },
                    hover: { x: 80, opacity: 0 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute"
                >
                  &rarr;
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
