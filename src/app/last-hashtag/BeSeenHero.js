"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const FLOAT_IMAGES = [
  "/lasttag/smile.avif",
  "/lasttag/hash.avif",
  "💚",
];
const FLOAT_COUNT = 22;

const ITEMS = Array.from({ length: 9 }).flatMap(() => FLOAT_IMAGES);

export function BeSeenHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Floating background BEHIND content */}
      <FloatingBackground />

      {/* Main content ABOVE background */}
      <div className="relative z-10 w-[97%] mx-auto flex flex-col items-center text-center text-[#f1fff3]">
        <h1
          className="galindo-regular font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(30px, 6.4vw, 90px)",
          }}
        >
          Be Seen. Be Chosen.
          <br />
          Be Trusted.
        </h1>

        <p
          className="inter-medium mb-8"
          style={{
            fontSize: "clamp(14px, 1.7vw, 20px)",
            lineHeight: 1.7,
          }}
        >
          Connect with Last Hashtag and turn
          <br />
          visibility into lasting growth.
        </p>

        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative bg-[#EEEDE7] inter-medium rounded-full px-4 py-2 flex items-center text-[#232323] text-[16px] shadow overflow-hidden"
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
            className="absolute left-6 z-0 whitespace-nowrap"
          >
            Connect With Us
          </motion.span>

          <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
      </div>
    </section>
  );
}

export function FloatingBackground() {
  const items = useMemo(
    () =>
      Array.from({ length: FLOAT_COUNT }).map((_, i) => {
        const src = FLOAT_IMAGES[i % FLOAT_IMAGES.length];
        const baseDuration = 6 + Math.random() * 4; // 6–10s total
        return {
          src,
          leftPercent: Math.random() * 100, // 0–100%
          size: 70 + Math.random() * 80, // 70–150px
          duration: baseDuration,
          // fast phase is shorter; slow phase uses rest of duration
          fastPhase: baseDuration * 0.25, // 25% of total time
          delay: Math.random() * 4, // 0–4s
        };
      }),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      {items.map((item, i) => {
        const isEmoji = item.src === "💚";

        // POP + DRIFT ANIMATION
        const animate = {
          y: ["0%", "-25vh", "-130vh"], // pop to -25vh, then drift to -130vh
          opacity: [0, 1, 0],
          scale: [0.8, 0.9, 0.7], // pop bigger, then slowly shrink
        };

        const transition = {
          ease: "linear",
          repeat: Infinity,
          delay: item.delay,
          times: [0, item.fastPhase / item.duration, 1], // first keyframe is fast
          duration: item.duration,
        };

        if (isEmoji) {
          return (
            <motion.span
              key={i}
              className="absolute flex items-center justify-center opacity-90"
              style={{
                left: `${item.leftPercent}%`,
                bottom: "-160px",
                width: item.size,
                height: item.size,
                fontSize: item.size * 0.6,
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))",
              }}
              initial={{ y: 0, opacity: 0, scale: 0.8 }}
              animate={animate}
              transition={transition}
            >
              💚
            </motion.span>
          );
        }

        return (
          <motion.img
            key={i}
            src={item.src}
            alt=""
            className="absolute opacity-80"
            style={{
              width: item.size,
              height: item.size,
              left: `${item.leftPercent}%`,
              bottom: "-160px",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.8 }}
            animate={animate}
            transition={transition}
          />
        );
      })}
    </div>
  );
}