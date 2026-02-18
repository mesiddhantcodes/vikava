"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SplitText from "../SplitText";

export default function BlogsCopy() {
  const sectionRef = useRef(null);

  // Framer Motion now syncs with Lenis
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // REAL parallax (slow, visible)
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 550]);
  // Memoized content sections
  const contentSections = useMemo(() => [
    {
      title: "",
      content: "In a world where speed often replaces strategy, founders face a brutal truth — growth today isn't about running faster; it's about running smarter. The playbooks that worked five years ago don't hold up anymore. Rising customer acquisition costs, fragmented vendors, and compliance blind spots make execution harder than ever.",
      type: "paragraph"
    },
    {
      title: "",
      content: "At Vikava Labs, we believe tomorrow's businesses will be built on three cornerstones — clarity, trust, and integrated execution.",
      type: "paragraph"
    },
    {
      title: "1. Clarity Over Chaos",
      content: "Most startups don't fail because of bad ideas — they fail because of confusion in execution. Clarity means knowing what to build, how to scale, and when to pivot. It's the foundation of every successful brand.",
      type: "paragraph"
    },
    {
      title: "2. Trust as Infrastructure",
      content: "In an ecosystem full of short-term agencies and inconsistent results, long-term trust becomes a competitive edge. When founders have a single accountable partner, they can focus on vision instead of firefighting.",
      type: "paragraph"
    },
    {
      title: "3. Systems That Scale",
      content: "The future of business isn't about doing more; it's about doing better. AI-assisted operations, transparent governance, and modular execution models are the new growth levers.",
      type: "paragraph"
    },
    {
      title: "",
      content: "The next generation of companies won't be built in silos. They'll be built in ecosystems — where design, sourcing, marketing, and technology work in harmony.",
      type: "paragraph"
    },
    {
      title: "",
      content: "That's the future Vikava Labs is shaping — one founder, one ecosystem, and one finished idea at a time.",
      type: "paragraph"
    }
  ], []);
  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F4F0E9] px-4 py-16"
    >
      {/* Hero */}
      <div className="relative mx-auto h-[660px] w-[95%] overflow-hidden rounded-[20px] bg-black">
        {/* Parallax Image */}
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-0 h-[130%] -mt-50 w-full will-change-transform"
        >
          <Image
            src="/b2hero.jpg"
            alt="Vikava Labs Founders Community"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Center Heading */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
          <div className="max-w-6xl leading-tight text-white">
            <div className="overflow-hidden flex flex-col justify-center items-center">
              <span>
                Jun 19, 2025
              </span>
              <SplitText
                text="Ideas that shape tommorow"
                tag="h1"
                className="geist text-[64px] inline-block"
                splitType="chars"
                delay={70}
                duration={0.2}
              />
            </div>

          </div>
        </div>

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />
      </div>

      {/* Copy block below – NORMAL SCROLL */}
      <div className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-[95%] text-left text-[#15151B] px-2 sm:px-4 lg:px-0">
        {contentSections.map((section, index) => (
          <div key={index} className="mb-4 sm:mb-5 lg:mb-6">
            {section.title && (
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] geist-bold">
                {section.title}
              </p>
            )}

            {section.type === "paragraph" && (
              <p className={`${section.title ? 'mt-1' : ''} text-[16px] sm:text-[18px] lg:text-[20px] geist-medium leading-relaxed sm:leading-normal lg:leading-tight`}>
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
