"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";

const PARTNER_CARDS = [
  {
    id: "fibers",
    number: "01",
    bg: "#C41E1E",
    heading: " Yarns & Fabrics",
    subtext:
      "Cotton, wool, viscose, polyester, acrylic & blends; woven, knitted, handloom, jacquards, denim.",
  },
  {
    id: "trims",
    number: "02",
    bg: "#050505",
    heading: "Processes & Value-Adds",
    subtext:
      "Dyeing, printing, embroidery, finishing; knitting & weaving capacity booking.",
  },
  {
    id: "processing",
    number: "03",
    bg: "#C41E1E",
    heading: "Trims & Accessories",
    subtext:
      "Zippers, buttons, snaps, tapes, cords, hardware, tags, brand collateral.",
  },
  {
    id: "packaging",
    number: "04",
    bg: "#050505",
    heading: "Compliance & Testing",
    subtext:
      "Lab tests, certifications, audit coordination, and buyer documentation support.",
  },
  {
    id: "logistics",
    number: "05",
    bg: "#C41E1E",
    heading: "Planning & Merchandising",
    subtext:
      "PPMs, T&A calendars, WIP trackers, capacity planning; ensuring OTIF bulk deliveries.",
  },
];

const CARD_WIDTH = 640;
const CARD_GAP = 0;
const TOTAL_CARDS = PARTNER_CARDS.length;

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800, cardWidth: 640 });

  const updateDimensions = useCallback(() => {
    const w = window.innerWidth;
    // Calculate card width matching CSS: clamp(260px, 80vw, 630px)
    const vw80 = w * 0.8;
    const calculatedCardWidth = Math.max(260, Math.min(vw80, 630));

    setDimensions({
      // keep desktop design intact, just clamp to viewport on smaller widths
      width: Math.min(w - 32, 1400), // slightly less padding on mobile
      height: window.innerHeight,
      cardWidth: calculatedCardWidth,
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    const debouncedResize = debounce(updateDimensions, 100);

    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [updateDimensions]);

  return dimensions;
};

// Card
const PartnerCard = React.memo(({ card }) => {
  return (
    <motion.div
      key={card.id}
      className="flex-shrink-0 relative overflow-hidden"
      style={{
        // mobile: ~90% of viewport, desktop: 640px
        width: "clamp(260px, 80vw, 630px)",
        // mobile: taller for readability, desktop: 569px
        height: "clamp(280px, 90vw, 549px)",
      }}
    >
      <div
        className="w-full h-full flex flex-col justify-between"
        style={{ backgroundColor: card.bg }}
      >
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 flex justify-end">
          <span
            className="text-white/25 aileron-regular font-light"
            style={{
              fontSize: "clamp(28px, 4.7vw, 88px)",
            }}
          >
            {card.number}
          </span>
        </div>

        <div className="px-6 sm:px-8 pb-8 sm:pb-10">
          <h3
            className="text-white aileron-bold leading-tight mb-3"
            style={{
              fontSize: "clamp(18px, 1.7vw, 32px)",
            }}
          >
            {card.heading}
          </h3>

          <p
            className="text-white/90 aileron-regular leading-relaxed"
            style={{
              // mobile: almost full width, desktop: 60% like your design
              width: "min(100%, 60%)",
              fontSize: "clamp(13px, 0.9vw, 16px)",
            }}
          >
            {card.subtext}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

PartnerCard.displayName = "PartnerCard";

const PartnersSection = () => {
  const sectionRef = useRef(null);
  const { width: windowWidth, cardWidth } = useWindowDimensions();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { startOffset, endOffset, totalContentWidth } = useMemo(() => {
    // Use dynamic cardWidth for accurate centering
    const startOffset = (windowWidth - cardWidth) / 2;
    const totalContentWidth = TOTAL_CARDS * (cardWidth + CARD_GAP) - CARD_GAP;
    const endOffset = totalContentWidth - cardWidth - startOffset;

    return { startOffset, endOffset, totalContentWidth };
  }, [windowWidth, cardWidth]);

  const horizontalProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const smoothProgress = useSpring(horizontalProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const x = useTransform(smoothProgress, [0, 1], [startOffset, -endOffset]);

  const motionStyles = useMemo(
    () => ({
      x,
      width: `${totalContentWidth}px`,
      willChange: "transform",
    }),
    [x, totalContentWidth]
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `clamp(380vh, ${TOTAL_CARDS * 100}vh, 520vh)` }} // keep same scroll experience
    >
      <div className="sticky top-[90px] h-[calc(100vh-90px)] lg:h-[calc(120vh-150px)] flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:pt-0">
        <motion.div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-[95%] xl:max-w-[1500px] w-full mx-auto">
            <motion.div className="mb-6 sm:mb-10 md:mb-12">
              <h1 className="alumnisans-bold font-bold text-[#be1611] text-[clamp(28px,4.3vw,80px)] leading-[0.78]">
                RAW MATERIAL &
                <br /> OPERATIONS SERVICES
              </h1>
            </motion.div>

            {/* Cards */}
            <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px] flex items-center">
              <div className="w-full overflow-hidden">
                <motion.div className="flex gap-0" style={motionStyles}>
                  {PARTNER_CARDS.map((card) => (
                    <PartnerCard key={card.id} card={card} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

PartnersSection.displayName = "PartnersSection";

export default PartnersSection;
