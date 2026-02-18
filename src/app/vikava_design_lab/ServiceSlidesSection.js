"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SLIDES = [
  {
    id: "hero",
    type: "hero",
    title: "Our Creative | Capabilities",
    subtitle:
      "Two stacks, one system: Identity that inspires and design that sells.",
    bgImage: "/vikavalab/tc.avif",
  },
  {
    id: "intro",
    type: "intro",
    title: "Identity & Expression Stack",
  },
  {
    id: 1,
    type: "image",
    title: "BRAND STRATEGY & FOUNDER-ALIGNED IDENTITY",
    image: "/vikavalab/scc3.avif",
    alt: "Brand Strategy & Founder-Aligned Identity",
    caption:
      "Naming, logos, brand books, visual DNA, tone of voice, semiotics, psychology; optional vastu, numerology, or astrology alignment.",
  },
  {
    id: 2,
    type: "image",
    title: "PACKAGING & ON-SHELF DESIGN",
    image: "/vikavalab/scc2.jpg",
    alt: "Packaging & On-Shelf Design",
    caption:
      "FMCG, fashion, beauty, lifestyle; packaging that tells a story on the shelf.",
  },
  {
    id: 3,
    type: "image",
    title: "PHOTOSHOOTS & PRODUCTION",
    image: "/vikavalab/scc1.avif",
    alt: "Photoshoots & Production",
    caption: "Direction, styling, casting, high-end photography & brand films.",
  },
];

export default function ServiceSlidesSection() {
  const [scrollY, setScrollY] = useState(0);
  const introRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "start start"],
  });
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const introBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255, 228, 0, 0.15)", "rgba(255, 228, 0, 1)"],
  );

  const introScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateSize(); // initial
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Intro slide animation controls (slide 2 - index 1)
  const introSlideIndex = 1;
  const introStart = 100; // When intro starts entering screen
  const introEnd = 2000; // When intro fully covers screen

  const introProgress = Math.min(
    Math.max((scrollY - introStart) / (introEnd - introStart), 0),
    1,
  );

  // Intro background: transparent → strong yellow
  const introBgOpacity = 0.1 + introProgress * 0.9; // 0.1 → 1.0
  // const introBg = `rgba(255, 228, 0, ${introBgOpacity})`;

  // Intro slide Y position: slides up from bottom
  const introY = (1 - introProgress) * 100; // 100px below → 0px (full screen)

  const LETTER_STAGGER = 0.035;
  const WORD_GAP = 0.14;

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.95,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 620,
        damping: 22,
        mass: 0.8,
        delay: custom.delay,
      },
    }),
  };

  const handleRenderLetters = (text, wordIndexOffset = 0) => {
    const words = text.split(" ");
    let globalIndex = wordIndexOffset;
    return words.map((word, wordIndex) =>
      word === "|" ? (
        <div key={`${word}-${wordIndex}`} className="w-full h-0"></div>
      ) : (
        <span key={`${word}-${wordIndex}`} className="inline-flex mr-3">
          {word.split("").map((char, charIndex) => {
            const delay =
              globalIndex * LETTER_STAGGER +
              (wordIndexOffset + wordIndex) * WORD_GAP +
              charIndex * LETTER_STAGGER;

            const currentDelay = delay;
            globalIndex++;
            return (
              <motion.span
                key={charIndex}
                custom={{ delay: currentDelay }}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ),
    );
  };

  return (
    <section className="relative w-full bg-[#11110A] text-[#FFE400] z-20 min-h-[400vh]">
      <div className="relative">
        {SLIDES.map((slide, index) => (
          <article key={slide.id} className="sticky top-0 h-screen w-full">
            {slide.type === "hero" ? (
              // HERO SLIDE
              <div className="relative w-full h-screen overflow-hidden">
                <div
                  className="absolute inset-0 z-0 transition-all duration-200 ease-out 
             bg-cover bg-center bg-no-repeat
             sm:[background-size:${Math.max(250 - scrollY / 8, 120)}%]"
                  style={{
                    backgroundImage: `url('${slide.bgImage}')`,
                    // Mobile: Always full cover (100%)
                    backgroundSize: isMobile
                      ? "cover"
                      : `${Math.max(250 - scrollY / 8, 120)}%`,
                  }}
                />

                <div className="relative z-20 w-full h-full flex flex-col items-start justify-start px-6 md:px-16 pt-24 md:pt-32">
                  <motion.h1
                    className="big-shoulders-black text-[#2156ff] leading-[0.9] flex flex-wrap"
                    style={{ fontSize: "clamp(40px, 7vw, 130px)" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    {handleRenderLetters(slide.title, 0)}
                  </motion.h1>
                  <p className="mt-8 text-[#2156ff] text-lg md:text-xl pt-0 md:pt-32  max-w-3xl poppins-medium">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ) : slide.type === "intro" ? (
              // INTRO SLIDE - Transparent → Strong Yellow + Slide Up
              <motion.div
                ref={introRef}
                className="h-full flex items-center justify-center px-4 sm:px-6"
                style={{
                  backgroundColor: introBg,
                  scale: introScale,
                }}
              >
                <motion.h1
                  className="big-shoulders-black font-black text-center leading-tight text-[#2156FF]"
                  style={{ fontSize: "clamp(40px, 7vw, 130px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {slide.title}
                </motion.h1>
              </motion.div>
            ) : (
              // IMAGE + BLACK CARD SLIDES
              <>
                <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[45vh]  ">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 1}
                    style={{
                      objectPosition: slide.id === 3 ? "center 25%" : "center",
                    }}
                  />
                  {slide.caption && (
                    <p className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-4 right-4 text-center lg:text-left text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-black poppins-medium">
                      {slide.caption}
                    </p>
                  )}
                </div>

                <div className="w-full h-[55vh] sm:h-[50vh] md:h-[54vh] bg-[#11110A] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
                  <h2
                    className="poppins-bold font-black text-center leading-tight text-[#FFE400]"
                    style={{
                      fontSize: "clamp(28px, 6vw, 130px)",
                    }}
                  >
                    {slide.title}
                  </h2>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
