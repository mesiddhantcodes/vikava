"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/sustain/carpet.avif",
  "/sustain/hand.jpg",
  "/sustain/lady.avif",
];

export default function StackedScrollImage() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed from 640 to 1024 to include tablets
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // First card
  const card1RotateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35],
    [90, 0, 24],
  );
  const card1TranslateY = useTransform(scrollYProgress, [0, 0.2], [10, 0]);
  const card1TranslateX = useTransform(
    scrollYProgress,
    [0.2, 0.35],
    [0, isMobile ? -60 : -234], // Fixed: Reduced offset for mobile
  );
  const card1Scale = useTransform(scrollYProgress, [0.2, 0.35], [1, 0.618]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Second card
  const card2RotateY = useTransform(scrollYProgress, [0.35, 0.55], [90, 20]);
  const card2TranslateX = useTransform(
    scrollYProgress,
    [0.35, 0.55],
    [0, isMobile ? -15 : -23],
  );
  const card2Scale = useTransform(scrollYProgress, [0.35, 0.55], [0.8, 0.836]);
  const card2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  // Third card
  const card3RotateY = useTransform(scrollYProgress, [0.55, 0.75], [90, 22]);
  const card3TranslateX = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [0, isMobile ? 60 : 253], // Adjusted for symmetry with card 1
  );
  const card3Scale = useTransform(scrollYProgress, [0.55, 0.75], [0.8, 1.043]);
  const card3Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

  // Heading word colors
  const word1Progress = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const word2Progress = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const word3Progress = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#D0D0D0] h-[350vh]"
    >
      <div className="sticky top-28 md:top-32 w-full h-[calc(100vh-112px)] md:h-[calc(100vh-128px)] flex flex-col items-center justify-start pt-4 sm:pt-8 pb-6">
        <div
          className="relative flex items-center justify-center w-full h-[300px] sm:h-[380px] md:h-[550px]"
          style={{ perspective: "1400px" }}
        >
          {/* FIRST CARD */}
          <motion.div
            className="absolute rounded-xl sm:rounded-2xl overflow-hidden bg-white w-[70vw] sm:w-[380px] md:w-[480px] max-w-[380px] md:max-w-[480px] h-auto aspect-[480/420]"
            style={{
              rotateY: card1RotateY,
              y: card1TranslateY,
              x: card1TranslateX,
              scale: card1Scale,
              opacity: card1Opacity,
              willChange: "transform",
            }}
          >
            <Image
              src={images[0]}
              alt="Carpet"
              width={500}
              height={445}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* SECOND CARD */}
          <motion.div
            className="absolute rounded-xl sm:rounded-2xl overflow-hidden bg-white z-10 w-[70vw] sm:w-[380px] md:w-[480px] max-w-[380px] md:max-w-[480px] h-auto aspect-[480/420]"
            style={{
              rotateY: card2RotateY,
              x: card2TranslateX,
              scale: card2Scale,
              opacity: card2Opacity,
              willChange: "transform",
            }}
          >
            <Image
              src={images[1]}
              alt="Hand weaving"
              width={500}
              height={445}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* THIRD CARD */}
          <motion.div
            className="absolute rounded-xl sm:rounded-2xl overflow-hidden bg-white z-20 w-[70vw] sm:w-[380px] md:w-[480px] max-w-[380px] md:max-w-[480px] h-auto aspect-[480/420]"
            style={{
              rotateY: card3RotateY,
              x: card3TranslateX,
              scale: card3Scale,
              opacity: card3Opacity,
              willChange: "transform",
            }}
          >
            <Image
              src={images[2]}
              alt="Tie dye fabric"
              width={500}
              height={445}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Headline */}
        <h2 className="text-center font-bold leading-tight pt-8 sm:pt-12 md:pt-16 lg:pt-18 mb-3 sm:mb-4 px-4 text-[28px] min-[375px]:text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px]">
          <motion.span
            style={{
              color: useTransform(
                word1Progress,
                [0, 1],
                ["#9ca3af", "#212121"],
              ),
            }}
          >
            Organised.{" "}
          </motion.span>
          <motion.span
            style={{
              color: useTransform(
                word2Progress,
                [0, 1],
                ["#9ca3af", "#212121"],
              ),
            }}
          >
            Authentic.{" "}
          </motion.span>
          <motion.span
            style={{
              color: useTransform(
                word3Progress,
                [0, 1],
                ["#9ca3af", "#212121"],
              ),
            }}
          >
            100% Sustainable.
          </motion.span>
        </h2>

        <p className="text-center text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-[#222] max-w-[90%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[840px] mx-auto leading-[1.6] font-medium px-4">
          From fibre to finished product, the Sustainable Design Library is
          India's one-point partner for sustainable sourcing. Apparel, home,
          lifestyle — whether built from natural raw materials or through
          handmade processes — we make sustainable supply chains organised,
          reliable, and globally ready.
        </p>
      </div>
    </section>
  );
}
