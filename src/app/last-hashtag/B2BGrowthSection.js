"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    src: "/lasttag/card1.avif",
    label: "B2B DEMAND GENERATION",
    hover: "Linkedln ABM, webinars, email sequences, case-study funnels.",
  },
  {
    src: "/lasttag/card2.jpg",
    label: "DATA & EXPERIMENTATION",
    hover:
      "GA4, server-side tracking, CRO,A/B testing, incrementality experiments.",
  },
  {
    src: "/lasttag/card3.avif",
    label: "LIFECYCLE & CRM JOURNEYS",
    hover: "Klaviyo, HubSpot, Zoho; welcome, cart abandonment, winback flows.",
  },
  {
    src: "/lasttag/card4.avif",
    label: "MARKETPLACE GROWTH",
    hover: "PDP/A+ content, reviews, (Amazon, Flipkart, Nykaa, Myntra).",
  },
  {
    src: "/lasttag/card5.avif",
    label: "OFFLINE & EXPERIENTIAL",
    hover:
      "Wet/dry sampling, trade shows, retail activations, influencer meets.",
  },
  {
    src: "/lasttag/card6.jpg",
    label: "SEO & CONTENT ENGINE",
    hover: "Technical SEO, content clusters, thought leadership blogs.",
  },
];

export function B2BGrowthSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.6]);
  const grayscaleAmount = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const noiseOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.85]);
  const finalBlackness = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen h-[695vh] sm:h-[550vh] md:h-[500vh] lg:h-[550vh] xl:h-[520vh] 2xl:h-[530vh]"
    // style={{ height: "550vh" }}
    >
      {/* STICKY VIDEO */}
      <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            filter: useTransform(
              grayscaleAmount,
              (value) => `grayscale(${value}%) contrast(1.2) brightness(0.8)`,
            ),
          }}
        >
          <video
            className="w-full h-full object-cover"
            src="/lasttag/pc.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            opacity: noiseOpacity,
            backgroundImage: `
              radial-gradient(1px 1px at var(--x, 50%) var(--y, 50%), #000 1px, transparent 0),
              radial-gradient(1px 1px at var(--x, 100%) var(--y, 100%), #000 1px, transparent 0),
              radial-gradient(1px 1px at var(--x, 0%) var(--y, 0%), #000 1px, transparent 0),
              radial-gradient(1px 1px at var(--x, 100%) var(--y, 0%), #000 1px, transparent 0)
            `,
            backgroundSize: "200px 200px",
            backgroundPosition: "0 0, 100px 50px, 50px 100px, 150px 150px",
            animation: "grain 0.2s steps(2) infinite",
            mixBlendMode: "overlay",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: finalBlackness }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative w-full h-full z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="w-full mb-12 sm:mb-16 lg:mb-32 self-start px-4 sm:px-8 lg:px-12"
          style={{
            opacity: useTransform(scrollYProgress, [0.05, 0.15], [0, 1]), // 0.1→0.2 → 0.05→0.15
            y: useTransform(scrollYProgress, [0.05, 0.15], [100, 0]),
          }}
        >
          <h1 className="galindo-regular text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[110px] 2xl:text-[130px] text-[#bbf2ce] text-left leading-[0.85] tracking-[-0.02em]">
            Not Just D2C…
            <br />
            We Power B2B Growth Too
          </h1>
        </motion.div>

        {/* CARDS - INCREASED WIDTH */}
        <motion.div
          className="w-full pt-20 sm:pt-32 md:pt-48 lg:pt-64 mb-12 sm:mb-20 lg:mb-32 flex justify-center px-2 sm:px-4"
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
            y: useTransform(scrollYProgress, [0.4, 0.5], [80, 0]),
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 justify-items-center w-full max-w-[95vw] 2xl:max-w-[1700px]">
            {cards.map((card, idx) => (
              <motion.div
                key={card.label}
                className="relative rounded-2xl overflow-hidden bg-gray-900/90 backdrop-blur-xl group shadow-2xl w-full max-w-[400px] aspect-[3/4] md:max-w-full lg:max-w-full xl:max-w-[480px] 2xl:max-w-[530px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + 0.1 * idx,
                }}
                whileHover={{
                  scale: 1.015, // Minimal scale
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
                }}
                style={{
                  clipPath: "inset(0px)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 100% 100% at center, black 98%, transparent 100%)",
                }}
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  priority={idx < 3}
                />
                {/* Label */}
                <div className="absolute left-0 pl-4 sm:pl-5 md:pl-6 pb-4 sm:pb-5 md:pb-6 w-full z-20 transition-all duration-500 bottom-[14%] sm:bottom-[16%] md:bottom-[18%] lg:bottom-0 lg:group-hover:bottom-[18%]">
                  <span
                    className="inter-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[34px] text-white uppercase block font-bold leading-tight"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                  >
                    {card.label}
                  </span>
                </div>
                {/* Hover text */}
                <div className="absolute left-0 bottom-[-1px] w-full h-[65%] sm:h-[68%] md:h-[70%] flex items-end bg-gradient-to-t from-black to-transparent/0 transition-all duration-500 z-10 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0">
                  <span className="w-full text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-white px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 md:pb-10 text-left leading-relaxed tracking-wide">
                    {card.hover}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FINAL TEXT */}
        <motion.div
          className="
    w-full
    max-w-[1400px]
    mx-auto
    px-4 sm:px-6
    grid grid-cols-1 lg:grid-cols-12
    gap-6 sm:gap-8 lg:gap-12
    items-start lg:items-center
  "
          style={{
            opacity: useTransform(scrollYProgress, [0.8, 0.85], [0, 1]),
            y: useTransform(scrollYProgress, [0.8, 0.9], [90, 0]),
          }}
        >
          {/* LEFT — Heading */}
          <div className="lg:col-span-5">
            <div
              className="
        galindo-regular font-bold
        text-[40px] sm:text-[50px] md:text-[60px]
        lg:text-[72px] xl:text-[96px]
        text-[#bbf2ce]
        leading-[0.95]
      "
            >
              We are …
            </div>
          </div>

          {/* RIGHT — Paragraph */}
          <div className="lg:col-span-7">
            <p
              className="
        inter-medium
        text-[18px] sm:text-[20px] md:text-[22px]
        lg:text-[26px] xl:text-[30px]
        text-white
        leading-[1.45]
        max-w-[720px]
        lg:ml-auto
        text-left lg:text-right
      "
            >
              your AI advantage – using predictive media mix for smarter
              budgets, creative automation for personalized campaigns, insight
              copilot to guide decisions, and automated ad safety to protect
              your brand.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0%);
          }
          70% {
            transform: translate(0%, 10%);
          }
          80% {
            transform: translate(3%, 0%);
          }
          90% {
            transform: translate(-5%, 5%);
          }
        }
      `}</style>
    </section>
  );
}
