// app/components/ValuesSection.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = [
  {
    id: "01",
    title: "Brands with Purpose",
    subtitle: "Build value that outlasts trends.",
  },
  {
    id: "02",
    title: "Stronger Together",
    subtitle: "Collaboration over silos.",
  },
  {
    id: "03",
    title: "Make it Real",
    subtitle: "From deck to delivery , we finish what we start.",
  },
  {
    id: "04",
    title: "Practical Problem-Solving",
    subtitle: "Simple system , real outcomes.",
  },
  {
    id: "05",
    title: "Rebuilding Trust",
    subtitle: "Transparency in people, partners , and processes.",
  },
  {
    id: "06",
    title: "Ethical & Responsible",
    subtitle: "Governance and sustainability by default.",
  },
];

export default function ValuesSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate how much we need to scroll horizontally
        // The -230 offset seems to be a heuristic from the original code
        const scrollDistance = totalWidth - viewportWidth / 2 - 230;

        // Determine correct horizontal translation target
        const targetScroll = -scrollDistance;
        setScrollWidth(targetScroll);

        // Line width logic
        // On mobile we want the line to just span the content or similar, logic can remain
        // but let's stick to the original logic for line width generally or make it just wide enough
        setLineWidth(totalWidth + 100);

        // Dynamic Height Calculation:
        // We need enough vertical space to "absorb" the horizontal scroll distance.
        // Height = Viewport Height (for the sticky frame) + Scroll Distance (to drive the animation)
        // We add a little buffer (e.g. 100px) if needed, but strictly speaking:
        const requiredHeight = viewportHeight + Math.abs(targetScroll);
        setContainerHeight(`${requiredHeight}px`);
      }
    };

    // 1. Initial call
    handleResize();

    // 2. Window resize listener
    window.addEventListener("resize", handleResize);

    // 3. ResizeObserver for content changes (CRITICAL FIX)
    let resizeObserver;
    if (scrollRef.current) {
      resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, scrollWidth]);

  return (
    <>
      <div ref={containerRef} style={{ height: containerHeight }}>
        <section className="sticky top-0 h-[100dvh] w-full bg-[#F4F0E9] overflow-hidden flex items-center">
          <div className="mx-auto w-full text-center px-4 md:px-8">
            {/* ================= HEADING ================= */}
            <motion.h2 className="leading-tight text-[#16151B]">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { text: "Our", font: "geist-bold" },
                  { text: "Values-", font: "geist-bold" },
                  { text: "Humaare", font: "greatvibes-regular" },
                  { text: "Aadarsh", font: "greatvibes-regular" },
                ].map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: i * 0.15,
                    }}
                    className={`inline-block leading-none ${item.font} ${item.font === "geist-bold"
                      ? "text-[40px] md:text-[64px] lg:text-[88px]"
                      : "text-[40px] md:text-[64px] lg:text-[88px]"
                      }`}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </div>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl geist-semibold text-[16px] md:text-[18px] leading-relaxed text-[#2B2926]">
              At Vikava Labs, our values guide every decision we make — built on
              trust,<br /> creativity, and a commitment to sustainable growth.
            </p>

            {/* ================= TIMELINE ================= */}
            <div className="relative mx-auto mt-16 md:mt-24 w-full overflow-hidden">
              <motion.div
                ref={scrollRef}
                style={{ x }}
                className="relative flex items-center gap-20 md:gap-32 px-8 will-change-transform"
              >
                {/* Responsive continuous dashed line */}
                <div
                  className="absolute top-[40px] md:top-[48px] left-0 border-t border-dashed border-[#000000] pointer-events-none z-0"
                  style={{
                    width: `${lineWidth}px`,
                  }}
                />

                {values.map((value) => (
                  <div
                    key={value.id}
                    className="flex min-w-[300px] md:min-w-[380px] lg:min-w-[460px] flex-shrink-0 flex-col text-left relative"
                  >
                    {/* Circle */}
                    <div
                      className="
                      relative z-10 flex 
                      h-20 w-20 md:h-24 md:w-24 
                      items-center justify-center 
                      rounded-full bg-[#18181D] 
                      text-[18px] md:text-[20px] 
                      font-semibold text-white 
                      transition-all duration-300
                      hover:bg-[#F3F0EB] 
                      hover:text-black 
                      border border-transparent 
                      hover:border-[#18181D] hover:border-dashed
                    "
                    >
                      {value.id}
                    </div>

                    {/* Title */}
                    <p className="mt-6 text-[22px] md:text-[28px] lg:text-[32px] font-semibold geist-semibold text-[#000000]">
                      {value.title}
                    </p>

                    {/* Subtitle */}
                    <span className="flex w-full justify-end items-end">
                      <p className="mt-4 max-w-[240px] md:max-w-xs text-[16px] md:text-[18px] lg:text-[18px] geist-semibold leading-relaxed text-[#000000] text-left">
                        {value.subtitle}
                      </p>
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
