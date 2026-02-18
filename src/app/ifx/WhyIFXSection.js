"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const CARDS_DATA = [
  {
    id: 1,
    image: "/ifx/hori1.avif",
    text: "Designers struggle with visibility, cashflow, and global reach — not able to generate consistent sales, not connected with the right sales channels, and unable to expand online or internationally.",
  },
  {
    id: 2,
    image: "/ifx/horii2.avif",
    text: "Retail stores face inconsistent supply, chaotic curation, and weak sell-through — not able to discover and connect with promising new designers.",
  },
  {
    id: 3,
    image: "/ifx/horr3.avif",
    text: "Buyers deal with fragmented processes and unreliable timelines, leading to poor experiences.",
  },
];

export default function WhyIFXSection() {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <>
      {/* DESKTOP VERSION */}
      <section
        ref={containerRef}
        className="relative bg-[#E8E4E0] hidden lg:block"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            <div className="min-w-[160vw] h-full flex items-center justify-start px-8 md:px-12 lg:px-12 gap-12">
              {/* Left - Text content */}
              <div className="w-[20%] min-w-[350px] flex-shrink-0 space-y-6">
                <h2
                  className="garamond-400 text-[#1b1c18]"
                  style={{
                    fontSize: "clamp(48px, 8vw, 112px)",
                    lineHeight: "0.96",
                  }}
                >
                  Why IFX Exists
                </h2>
                <p
                  className="mont-400 text-[#1b1c18]"
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    lineHeight: "1",
                  }}
                >
                  Indian couture and luxury fashion are admired worldwide, but
                  behind the runway lies real pain. IFX bridges these gaps —
                  bringing structure, governance, and growth systems into
                  couture commerce. With over 26+ years of industry legacy
                  through Vikava Labs, we exist to make couture organised,
                  predictable, and scalable.
                </p>
              </div>

              {/* Right - Cards container */}
              <div className="min-w-[100vw] h-full flex items-center justify-center gap-6 px-12 lg:px-20">
                {CARDS_DATA.map((card) => (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveCard(card.id)}
                    className="
                      relative flex-shrink-0 overflow-hidden cursor-pointer
                      h-[clamp(360px,70vh,600px)]
                    "
                    animate={{
                      width:
                        activeCard === card.id
                          ? "clamp(560px, 70vw, 932px)"
                          : "clamp(220px, 22vw, 280px)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={`Challenge ${card.id}`}
                      fill
                      className="object-cover"
                    />

                    {/* Vignette overlay - shown when active */}
                    {activeCard === card.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(circle, transparent 10%, rgba(0,0,0,0.8) 100%)",
                        }}
                      />
                    )}

                    {/* Gradient overlay - shown when inactive */}
                    {activeCard !== card.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)",
                        }}
                      />
                    )}

                    {/* Text overlay - shown when active */}
                    {activeCard === card.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute top-8 left-8 max-w-sm z-10"
                      >
                        <p
                          className="mont-400 text-white"
                          style={{
                            fontSize: "clamp(16px, 1.5vw, 20px)",
                            lineHeight: "1.2",
                          }}
                        >
                          {card.text}
                        </p>
                      </motion.div>
                    )}

                    {/* Number overlay - shown when inactive */}
                    {activeCard !== card.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-8 w-full flex justify-center"
                      >
                        <span
                          className="mont-400 text-white/60"
                          style={{ fontSize: "clamp(32px, 3vw, 80px)" }}
                        >
                          0{card.id}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERSION */}
      <section className="lg:hidden block bg-[#E8E4E0] py-12 px-5">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="garamond-400 text-[#1b1c18] text-[48px] leading-[0.96] mb-6">
            Why IFX Exists
          </h2>
          <p className="mont-400 text-[#1b1c18] text-[16px] leading-[1.3]">
            Indian couture and luxury fashion are admired worldwide, but behind
            the runway lies real pain. IFX bridges these gaps — bringing
            structure, governance, and growth systems into couture commerce.
            With over 26+ years of industry legacy through Vikava Labs, we exist
            to make couture organised, predictable, and scalable.
          </p>
        </div>

        {/* Cards */}
        {CARDS_DATA.map((card) => (
          <div key={card.id} className="mb-6">
            <div className="relative w-full h-[400px] overflow-hidden">
              <Image
                src={card.image}
                alt={`Challenge ${card.id}`}
                fill
                className="object-cover"
              />
              {/* Vignette overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              {/* Text overlay */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <p className="mont-400 text-white text-[14px] leading-[1.3]">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
