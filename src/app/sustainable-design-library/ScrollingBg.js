"use client";
import { useRef, useMemo, useCallback, useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const CARD_CONTENT = [
  {
    id: 1,
    title: "Apparel & Textiles",
    description: "Garments in organic, recycled, or artisanal fabrics.",
    image: "/sustain/12.avif",
    bgImage: "/sustain/12.avif",
  },
  {
    id: 2,
    title: "Home Furnishings",
    description:
      "Handloom cushions, throws, rugs, organic bedding, natural-dyed curtains.",
    image: "/sustain/13.avif",
    bgImage: "/sustain/13.avif",
  },
  {
    id: 3,
    title: "Lifestyle Products",
    description:
      "Macramé wall art, handmade bags, scarves, ponchos, artisanal accessories.",
    image: "/sustain/14.avif",
    bgImage: "/sustain/14.avif",
  },
  {
    id: 4,
    title: "Execution",
    description:
      "End-to-end sourcing with certifications (GOTS, Fairtrade, OEKO-TEX, NEST, etc.).",
    image: "/sustain/15.avif",
    bgImage: "/sustain/15.avif",
  },
];

export default function ScrollChangingSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  // ... rest of your code remains exactly the same
  const slideUpVariants = useMemo(
    () => ({
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }),
    []
  );

  const textVariants = useMemo(
    () => ({
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }),
    []
  );

  const getSlideUpY = useCallback(
    (index) => {
      if (activeIndex === index) return "0%";
      return activeIndex > index ? "-100%" : "100%";
    },
    [activeIndex]
  );

  return (
    <>
      <div className="mt-40 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{

            duration: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-bold font-afacadMedium uppercase text-center text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#232323]"
        >
          CATEGORIES WE COVER
        </motion.h2>
      </div>
      <section ref={sectionRef} className="relative h-[300vh]">
        {/* ... rest of your JSX remains IDENTICAL */}
        {/* Sticky Container */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
          {/* Background Images - Slide Up Animation */}
          <div className="absolute inset-0">
            {CARD_CONTENT.map((content, index) => (
              <motion.div
                key={content.id}
                initial={false}
                animate={{
                  y: getSlideUpY(index),
                }}
                transition={slideUpVariants}
                className="absolute inset-0"
                style={{ willChange: "transform" }}
              >
                <img
                  src={content.bgImage}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            ))}
          </div>

          {/* Fixed Card Container */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl w-full max-w-[85%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] min-h-[320px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
              {/* Title and Description */}
              <div className="relative z-10 h-[140px] sm:h-[200px] md:h-[220px] lg:h-40 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                  <h2 className="text-[#1D2025] text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-afacadBold">
                    {CARD_CONTENT[activeIndex].title}
                  </h2>
                  <p className="font-afacadMedium text-[#4a4a4a] leading-relaxed text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                    {CARD_CONTENT[activeIndex].description}
                  </p>
                </div>
              </div>

              {/* Image Container - Slide Up Animation */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-10 lg:left-10 lg:right-10 top-[140px] sm:top-[200px] md:top-[220px] lg:top-40 overflow-hidden">
                {CARD_CONTENT.map((content, index) => (
                  <motion.div
                    key={content.id}
                    initial={false}
                    animate={{
                      y: getSlideUpY(index),
                    }}
                    transition={slideUpVariants}
                    className="absolute inset-0"
                    style={{ willChange: "transform" }}
                  >
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
