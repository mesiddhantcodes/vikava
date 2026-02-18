"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

/* ================= DATA ================= */
const slides = [
  {
    img: "/lasttag/girl.avif",
    box: {
      heading: "OUTCOME-DRIVEN GROWTH",
      icon: "/lasttag/boy.avif",
      desc: "Campaigns tied to revenue, powered by proven playbooks and agile growth pods.",
    },
  },
  {
    img: "/lasttag/pen.avif",
    box: {
      heading: "INTEGRATED SPRINT PODS",
      icon: "/lasttag/hand.avif",
      desc: "Strategy, creative, media, and data working as one seamless team.",
    },
  },
  {
    img: "/lasttag/camers.avif",
    box: {
      heading: "MULTI-INDUSTRY EXPERTISE",
      icon: "/lasttag/house.avif",
      desc: "D2C, B2B, FMCG, lifestyle, tech, and services.",
    },
  },
  {
    img: "/lasttag/laptop.avif",
    box: {
      heading: "PART OF VIKAVA LABS",
      icon: "/lasttag/deal.avif",
      desc: "Faster scaling with creator networks and tight hand-offs across Design Lab, Ecom Reworked, and MAC.",
    },
  },
];

/* ================= COMPONENT ================= */
export function WhyLastTagSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const prevIndexRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const total = slides.length;
  const slice = 1 / total;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.floor(v / slice);
    const next = Math.max(0, Math.min(total - 1, idx));
    if (next !== prevIndexRef.current) {
      prevIndexRef.current = next;
      setActive(next);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#effaf0] z-10"
      style={{ height: `${slides.length * 80}vh` }} // ⬅️ Reduced from 140vh to 80vh for tighter scrolling
    >
      <div className="sticky top-0 h-screen w-full bg-[#effaf0] flex items-center justify-center overflow-hidden">
        <div className="w-[97%] mx-auto px-4 md:px-8 lg:px-10 flex flex-col justify-center h-full pt-12 sm:pt-20 md:pt-24 pb-4">
          {/* ================= TOP ================= */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-2 sm:mb-6 lg:mb-8 gap-2 sm:gap-6">
            <h1
              className="galindo-regular  text-[28px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[130px] font-bold text-[#232323]"
              style={{ lineHeight: 1 }}
            >
              Why <br /> Last#tag
            </h1>
            <Link href="/contact">
              {" "}
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="pt-2
        relative bg-[#EEEDE7] geist-medium 
        rounded-full px-3 py-2 
        flex items-center gap-1.5 sm:gap-2 md:gap-3
        text-[#232323] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
         overflow-hidden 
        flex-shrink-0 min-w-[120px] sm:min-w-[140px]
      "
              >
                {/* TEXT */}
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
                  Connect With Us{" "}
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
                  className="absolute left-4 sm:left-5 md:left-6 z-0 whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                {/* ARROW */}
                <span className="ml-2 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
                    →
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
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>


            <p className="inter-semibold text-[13px] sm:text-[18px] lg:text-[20px] max-w-full lg:max-w-[490px] leading-[1.4] mt-1 lg:mt-2">
              Trust Cue:) Built on 26+ years of brand-building, sourcing, and
              growth execution.
            </p>
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-8 lg:gap-10 items-center lg:items-start">
            {/* ===== IMAGE STACK ===== */}
            <div className="relative w-full sm:w-[480px] lg:w-[550px] h-[160px] sm:h-[395px] lg:h-[420px] rounded-[24px]">
              {slides.map((slide, index) => {
                const start = index * slice;
                const end = start + slice;
                const isFirst = index === 0;

                // Opacity: Fade in the incoming card
                const opacity = useTransform(
                  scrollYProgress,
                  [start - slice * 0.5, start],
                  isFirst ? [1, 1] : [0, 1]
                );

                // Y: Slide up from bottom
                const y = useTransform(
                  scrollYProgress,
                  [start - slice * 0.5, start],
                  isFirst ? [0, 0] : [100, 0]
                );

                // Scale: Subtle push back of the CURRENT card as we scroll past it
                const scale = useTransform(scrollYProgress, [start, end], [1, 0.95]);

                return (
                  <motion.div
                    key={slide.img}
                    style={{
                      y,
                      opacity,
                      scale,
                      zIndex: index, // Simple stacking order
                    }}
                    className="absolute inset-0 rounded-[24px] overflow-hidden bg-[#ececec] origin-center"
                  >
                    <Image
                      src={slide.img}
                      alt=""
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* ===== CONTENT BOX ===== */}
            <div className="w-full lg:flex-1 h-auto md:h-[300px] lg:h-[280px] bg-[#a1f7b3] rounded-xl p-3 sm:p-6 lg:p-[32px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[active].box.heading}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 bg-[#191919] rounded-xl p-2 sm:p-4 mb-2 sm:mb-5">
                    <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] lg:w-[109px] lg:h-[109px] rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={slides[active].box.icon}
                        alt=""
                        width={109}
                        height={109}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <span className="inter-semibold text-white leading-[0.9] text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                      {slides[active].box.heading}
                    </span>
                  </div>

                  <p className="inter-semibold text-[#232323] leading-[1.2] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                    {slides[active].box.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
