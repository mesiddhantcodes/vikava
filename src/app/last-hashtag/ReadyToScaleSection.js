"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMAGES = [
  "/lasttag/top1.png",
  "/lasttag/top2.png",
  "/lasttag/top3.png",
  "/lasttag/top4.png",
  "/lasttag/top5.png",
  "/lasttag/top6.png",
  "/mac/middle.png",
  "/lasttag/top7.png",
  "/lasttag/top9.png",
  "/lasttag/top10.png",
  "/lasttag/top11.png",
  "/lasttag/top12.png",
  "/lasttag/top14.png",
  // "/mac/right2.jpg",
  // "/mac/right3.webp",
];

export default function ReadyToScaleSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ================= TEXT - BOTH HIDE TOGETHER ================= */
  // (Variables removed as text uses Z-index layering for visibility)

  /* ================= STACK PHASE ================= */
  const stackOpacity = useTransform(scrollYProgress, [0.85, 0.9], [1, 0]);

  /* ================= SCATTER PHASE ================= */
  const scatterOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);

  /* ================= BUTTON APPEARANCE ================= */
  const buttonOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

  const DESKTOP_COLUMNS = [
    [0, 1, 2],
    [3, 4],
    [5, 6, 7],
    [8, 9],
    [10, 11, 12],
  ];

  const MOBILE_COLUMNS = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
  ];

  const IMAGE_WIDTH = {
    desktop: 294,
    mobile: 95,
  };

  const IMAGE_HEIGHT = {
    desktop: 365,
    mobile: 130,
  };

  const STACK_GAP = {
    desktop: 10,
    mobile: 8,
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const columnsToRender = isMobile ? MOBILE_COLUMNS : DESKTOP_COLUMNS;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#ECF7EE]"
      style={{ height: "500vh" }} // Reduced to 600vh to moderate extra scroll
    >
      {/* ================= MAIN STICKY CONTENT ================= */}
      {/* ================= MAIN STICKY CONTENT ================= */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* ================= TEXT LAYERS ================= */}
        {/* ================= TEXT LAYER - BEHIND IMAGES ================= */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          style={{ opacity: stackOpacity }}
        >
          <div className="text-center relative">
            <motion.h2
              className="galindo-regular text-[48px] md:text-[52px] leading-[0.8] font-bold text-[#111] text-center"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              Our <br /> Classic <br />
            </motion.h2>
            {/* Wins - Hidden Spacer */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0"
            >
              <h2
                className="galindo-regular text-black uppercase whitespace-nowrap"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >Wins!</h2>
            </div>
          </div>
        </motion.div>

        {/* ================= UNIFIED IMAGE LAYER ================= */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {IMAGES.map((src, index) => {
            // 1. Find which column and row this image belongs to
            const columns = isMobile ? MOBILE_COLUMNS : DESKTOP_COLUMNS;
            let colIndex = -1;
            let rowIndex = -1;

            columns.forEach((col, cIdx) => {
              const rIdx = col.indexOf(index);
              if (rIdx !== -1) {
                colIndex = cIdx;
                rowIndex = rIdx;
              }
            });

            if (colIndex === -1) return null;

            // 2. Calculate Target Position (Grid) relative to Center (0,0)
            const numCols = columns.length;

            const W = isMobile ? IMAGE_WIDTH.mobile : IMAGE_WIDTH.desktop;
            const H = isMobile ? IMAGE_HEIGHT.mobile : IMAGE_HEIGHT.desktop;
            // Larger gap for scatter effect
            const GridGapX = isMobile ? 10 : 40;
            const GridGapY = isMobile ? 10 : 40;

            // Grid Dimensions
            const totalGridWidth = numCols * W + (numCols - 1) * GridGapX;
            const startX = -totalGridWidth / 2 + W / 2;
            const targetX = startX + colIndex * (W + GridGapX);

            // Vertically center logic
            const numRowsInCol = columns[colIndex].length;
            const totalColHeight = numRowsInCol * H + (numRowsInCol - 1) * GridGapY;
            const startY = -totalColHeight / 2 + H / 2;
            const targetY = startY + rowIndex * (H + GridGapY);

            return (
              <UnifiedStackImage
                key={index}
                src={src}
                targetX={targetX}
                targetY={targetY}
                scrollYProgress={scrollYProgress}
                index={index}
                W={W}
                H={H}
              />
            );
          })}
        </div>

        {/* ================= TEXT LAYER - TOP OF IMAGES (Wins!) ================= */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[200] pointer-events-none"
          style={{ opacity: stackOpacity }}
        >
          <div className="text-center relative">
            {/* Our Classic - Hidden Spacer */}
            <motion.h2
              className="galindo-regular text-[48px] md:text-[52px] leading-[0.8] font-bold text-[#111] text-center opacity-0"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              Our <br /> Classic <br />
            </motion.h2>

            {/* Wins - Visible */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2"
            >
              <h2
                className="galindo-regular text-black uppercase whitespace-nowrap"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >Wins!</h2>
            </div>
          </div>
        </motion.div>
      </div>


      {/* ================= BUTTON - BELOW IMAGES (OUTSIDE STICKY) ================= */}
      {/* ================= CTA BUTTON ================= */}

    </section >
  );
}

// Helper Component for performance & cleaner code
function UnifiedStackImage({ src, targetX, targetY, scrollYProgress, index, W, H }) {
  // CONFIGURATION
  const STACK_LIMIT = 5;

  // Constants for timing phases
  // Phase 1: Stack Up (0 -> 0.65)
  const stackPhaseEnd = 0.65;
  // Distribute stack time across only the first 5 images
  const step = stackPhaseEnd / STACK_LIMIT;

  let stackStart;
  let startSrcY; // Where the image comes FROM during stack phase

  if (index < STACK_LIMIT) {
    // These 5 stack nicely one by one
    stackStart = index * step;
    startSrcY = 400; // Come from bottom
  } else {
    // The rest appear at the center just before scatter
    stackStart = stackPhaseEnd - 0.05;
    startSrcY = 0; // Start at center
  }

  const stackEnd = stackStart + step;

  // Phase 2: Scatter Out (0.7 -> 0.95)
  const scatterStart = 0.7;
  const scatterEnd = 0.95;

  /* TRANSFORMATIONS */

  // Remove random rotation as per user feedback/plan
  const randomRotate = 0;

  // X: 
  // If stacking: Stays at 0 until scatter, then moves to targetX
  // If NOT stacking: Always at targetX
  const x = useTransform(
    scrollYProgress,
    [0, scatterStart, scatterEnd], // Standard logic for all
    [0, 0, targetX]
  );

  // Y: 
  // If stacking: Starts below (startSrcY), stacks to 0, holds, then scatters to targetY
  const y = useTransform(
    scrollYProgress,
    [stackStart, stackEnd, scatterStart, scatterEnd], // Standard logic for all
    [startSrcY, 0, 0, targetY]
  );

  // Rotate: Always 0 since random rotation was removed
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 0]
  );

  // Opacity: Fade in quickly as it stacks up (Standard for ALL images)
  const opacity = useTransform(
    scrollYProgress,
    [stackStart, stackStart + 0.05],
    [0, 1]
  );

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className="absolute rounded-xl overflow-hidden "
      style={{
        width: W,
        height: H,
        x,
        y,
        rotate,
        opacity,
        zIndex: 50 + index,
      }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
