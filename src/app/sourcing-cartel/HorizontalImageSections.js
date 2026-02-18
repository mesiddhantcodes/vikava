"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const SLIDES = [
  {
    id: "intro",
    isIntro: true,
    title: "Finished Goods Services",
    desc: "End-to-end sourcing, quality control, packaging, and logistics for apparel, home furnishings, and lifestyle products - export-ready and delivered on time.",
  },
  {
    id: "apparel",
    image: "/sc/bg1.webp",
    title: "Apparel, Home & Lifestyle Products",
    desc: "Womenswear, menswear, kidswear, knits, wovens, cushions, throws, runners, rugs, carpets, quilts, curtains, bags, belts, shoes, jewellery, scarves, décor accents — all export-ready.",
  },
  {
    id: "home",
    image: "/sc/bg3.webp",
    title: "Product Development to Execution",
    desc: "Vendor audits, product development, sampling, costing, buyer approvals, inline & final AQL inspections, export documentation, and shipping management.",
  },
  {
    id: "accessories-1",
    image: "/sc/bg2.jpg",
    title: "Packaging & Labeling Compliance",
    desc: "Cartons, poly, FNSKU/barcodes, care/size labels, and inserts customised to destination market requirements.",
  },
  {
    id: "accessories-2",
    image: "/sc/bg5.webp",
    title: "Consolidation & Dispatch",
    desc: "Multi-vendor pickups, kitting, 3PL hand-offs, and warehouse support for streamlined order flow.",
  },
  {
    id: "accessories-3",
    image: "/sc/bg4.webp",
    title: "Post-Shipment Support",
    desc: "Handling shortage claims, quality issue coordination, and CAPA (Corrective Action Preventive Action) closure.",
  },
  {
    id: "outro",
    isOutro: true,
    image: "/sc/slide.avif",
    title: '"But That\'s Only Half the Story..."',
  },
];

export default function HorizontalImageSections() {
  const sectionRef = useRef(null);
  const prevProgressRef = useRef(0);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const scrollingDown = v > prevProgressRef.current;
    prevProgressRef.current = v;

    let nextIndex;

    if (v < 0.08) {
      nextIndex = 0;
    } else if (v >= 0.08 && v < 1) {
      const remainingProgress = (v - 0.08) / 0.92;
      nextIndex = Math.min(
        SLIDES.length - 1,
        Math.max(1, Math.floor(remainingProgress * (SLIDES.length - 1)) + 1)
      );
    } else {
      nextIndex = SLIDES.length - 1;
    }

    if (nextIndex !== current) {
      setDirection(scrollingDown ? 1 : -1);
      setCurrent(nextIndex);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[100vw] mt-16 "
      style={{
        height: `${SLIDES.length * (isMobile ? 60 : 100)}vh`,
      }}
    >
      <div
        className="sticky top-[80px] md:top-0 h-[calc(100dvh-80px)] md:h-screen w-full max-w-full overflow-hidden bg-black"
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === current;

          let targetX = "100%";

          if (index === current) {
            targetX = "0%";
          } else if (index < current) {
            targetX = direction === 1 ? "-100%" : "-100%";
          } else if (index > current) {
            targetX = direction === 1 ? "100%" : "100%";
          }

          const textFromX = direction === 1 ? 40 : -40;

          // Intro slide
          if (slide.isIntro) {
            return (
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-[#BE1611]"
                initial={false}
                animate={{ x: targetX }}
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 32 },
                }}
                style={{ zIndex: isActive ? 10 : 5 }}
              >
                <div className="relative z-10 h-full flex flex-col justify-between pt-12 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-40 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-left">
                  <motion.h2
                    key={slide.title + current}
                    initial={{ x: textFromX, opacity: 0 }}
                    animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-white aileron-regular max-w-7xl leading-[1.1] sm:leading-tight text-[clamp(28px,6vw,80px)] font-normal"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    key={slide.desc + current}
                    initial={{ x: textFromX, opacity: 0 }}
                    animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="text-white/90 aileron-regular max-w-2xl text-[clamp(14px,1.8vw,24px)] leading-[1.5] sm:leading-relaxed"
                  >
                    {slide.desc}
                  </motion.p>
                </div>
              </motion.div>
            );
          }

          // Outro slide
          if (slide.isOutro) {
            const textFromY = direction === 1 ? 40 : -40;

            return (
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-[#BE1611]"
                initial={false}
                animate={{ x: targetX }}
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 32 },
                }}
                style={{ zIndex: isActive ? 10 : 5 }}
              >
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-12">
                  <motion.div
                    initial={{ y: textFromY, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.45 }}
                    className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full"
                  >
                    <img
                      src={slide.image}
                      alt="Book"
                      className="
                        w-full
                        max-w-[90%]
                        sm:max-w-[80%]
                        md:max-w-[650px]
                        lg:max-w-[680px]
                        xl:max-w-[720px]
                        2xl:max-w-[760px]
                        h-auto
                        rounded-lg sm:rounded-xl
                        shadow-2xl
                        mx-auto
                      "
                      style={{ aspectRatio: "760/460" }}
                    />
                  </motion.div>

                  <motion.h2
                    key={slide.title + current}
                    initial={{ y: textFromY, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.45, delay: 0.12 }}
                    className="text-white aileron-regular text-center max-w-[95%] sm:max-w-4xl lg:max-w-5xl leading-[1.1] sm:leading-tight font-normal px-2"
                    style={{ fontSize: "clamp(24px, 4vw, 84px)" }}
                  >
                    {slide.title}
                  </motion.h2>
                </div>
              </motion.div>
            );
          }

          // Regular slides - conditional styling based on slide.id
          const isApparelSlide = slide.id === "apparel";

          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={false}
              animate={{ x: targetX }}
              transition={{
                x: { type: "spring", stiffness: 260, damping: 32 },
              }}
              style={{ zIndex: isActive ? 10 : 5 }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Conditional gradient overlay based on slide id */}
              {isApparelSlide ? (
                // White gradient from bottom to top for apparel slide
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

              ) : (
                // Dark gradient for all other slides
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
              )}

              <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 sm:pb-14 md:pb-16 lg:pb-18 px-4 sm:px-6 md:px-8 text-center">
                <motion.h2
                  key={slide.title + current}
                  initial={{ x: textFromX, opacity: 0 }}
                  animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${"text-white"} aileron-regular max-w-[95%] sm:max-w-2xl md:max-w-3xl leading-[1.1] sm:leading-tight text-[clamp(22px,4vw,64px)] font-semibold mb-3 sm:mb-4`}
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  key={slide.desc + current}
                  initial={{ x: textFromX, opacity: 0 }}
                  animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className={`${"text-white/90"} aileron-regular max-w-[90%] sm:max-w-lg md:max-w-xl text-[clamp(13px,1.5vw,18px)] leading-[1.4] sm:leading-relaxed`}
                >
                  {slide.desc}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
