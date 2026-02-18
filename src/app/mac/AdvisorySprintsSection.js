"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AdvisorySprintsSection() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  // Zoom effect for first image
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: imageRef1,
    offset: ["start end", "end start"],
  });
  const scale1 = useTransform(scrollYProgress1, [0, 0.5, 1], [1, 1.2, 1]);

  // Zoom effect for second image
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: imageRef2,
    offset: ["start end", "end start"],
  });
  const scale2 = useTransform(scrollYProgress2, [0, 0.5, 1], [1, 1.2, 1]);

  // Zoom effect for third image
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: imageRef3,
    offset: ["start end", "end start"],
  });
  const scale3 = useTransform(scrollYProgress3, [0, 0.5, 1], [1, 1.2, 1]);

  const services = [
    {
      id: 1,
      icon: "/mac/diag.avif",
      title: "DIAGNOSE",
      description:
        "DEEP-DIVE INTO FOUNDER CHALLENGES, MARKET REALITIES, AND COMPLIANCE GAPS.",
    },
    {
      id: 2,
      icon: "/mac/light.avif",
      title: "DESIGN",
      description:
        "CREATE TAILORED ROADMAPS, PLAYBOOKS, AND GROWTH STRATEGIES.",
    },
    {
      id: 3,
      icon: "/mac/globe.avif",
      title: "DEPLOY",
      description:
        "EXECUTE SYSTEMS, GOVERNANCE MODELS, AND QUICK WINS WITH CONTINUOUS HANDHOLDING.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 w-[97%] mx-auto space-y-32 justify-center">
        {/* SECTION 1: ADVISORY SPRINTS - Framer Style */}
        <div>
          {/* Top Grid: Left Text + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* LEFT - Title and Description - Framer Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 px-8 lg:px-0"
            >
              <h3
                className="text-white spacegrotesk-bold uppercase mb-6"
                style={{
                  fontSize: "clamp(36px, 8vw, 44px)",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0px",
                }}
              >
                1. ADVISORY SPRINTS
              </h3>
              <p
                className="text-white spacegrotesk-regular uppercase leading-[34px]"
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  letterSpacing: "0.4px",
                  lineHeight: "34px",
                }}
              >
                SHORT, FOCUSED ENGAGEMENTS DESIGNED TO DIAGNOSE, DESIGN, AND
                DEPLOY CLARITY AND STRUCTURE FOR FOUNDERS.
              </p>
            </motion.div>

            {/* RIGHT - Image with Framer Texture Overlay */}
            <div
              className="overflow-hidden rounded-lg"
              style={{
                width: "clamp(400px, 50vw, 875px)",
                height: "clamp(350px, 45vw, 642px)",
                maxWidth: "100%",
              }}
            >
              <motion.div
                ref={imageRef1}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative overflow-hidden rounded-lg"
                style={{
                  perspective: 1200,
                  scale: scale1,
                }}
              >
                {/* IMAGE */}
                <Image
                  src="/mac/lady.avif"
                  alt="Advisory Sprints"
                  fill
                  className="object-cover origin-center"
                  sizes="max((100vw - 104px) / 2, 400px)"
                  priority
                />

                {/* TEXTURE OVERLAY */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    backgroundImage: 'url("/mac/bgpng.png")',
                    backgroundRepeat: "repeat",
                    opacity: 0.09,
                    width: "400%",
                    height: "400%",
                    transform: "translateX(-1%) translateY(-2%)",
                    willChange: "transform",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* 90-DAY FRAMEWORK - Framer Center Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2
              className="text-white spacegrotesk-bold uppercase mx-auto max-w-4xl"
              style={{
                fontSize: "clamp(40px, 10vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.8px",
                lineHeight: "50px",
                textAlign: "center",
              }}
            >
              90-DAY ADVISORY SPRINT FRAMEWORK:
            </h2>
          </motion.div>

          {/* Three Columns: Process Cards - Framer Icon Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon - Framer 32px with Texture */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center bg-white/90 backdrop-blur-sm  shadow-xl overflow-hidden relative group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-10 sm:w-10 sm:h-12 object-contain relative z-10"
                    sizes="32px"
                  />
                  {/* Framer Texture Overlay on Icon */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'url("/mac/bgpng.png")',
                      opacity: 0.09,
                      width: "400%",
                      height: "400%",
                      transform: "translateX(0.4%) translateY(30%)",
                    }}
                  />
                </div>

                {/* Title - Framer Specs */}
                <h4
                  className="text-white spacegrotesk-bold uppercase mb-4"
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    fontWeight: 700,
                    letterSpacing: "0.4px",
                    lineHeight: "34px",
                  }}
                >
                  {service.title}
                </h4>

                {/* Description - Framer Specs */}
                <p
                  className="text-white/90 spacegrotesk-regular uppercase leading-[30px] max-w-sm"
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    letterSpacing: "0px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:hidden space-y-16">
          {/* RETAINERS */}
          <div className="space-y-6">
            <div className="relative h-[240px] overflow-hidden rounded-lg">
              <motion.div
                ref={imageRef2}
                style={{ scale: scale2 }}
                className="w-full h-full"
              >
                <Image
                  src="/mac/retain2.avif"
                  alt="Retainers"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div>
              <h3 className="text-white spacegrotesk-bold uppercase mb-4 text-[28px]">
                2. RETAINERS
              </h3>
              <p className="text-white spacegrotesk-regular uppercase leading-[30px] text-[16px]">
                STRUCTURED, ONGOING PARTNERSHIPS WITH SCHEDULED SESSIONS,
                ON-CALL SUPPORT, AND BOARD-READY PROGRESS REPORTS — ENSURING
                LONG-TERM CLARITY, COMPLIANCE, AND GROWTH.
              </p>
            </div>
          </div>

          {/* FRACTIONAL */}
          <div className="space-y-6">
            <div className="relative h-[240px] overflow-hidden rounded-lg">
              <motion.div
                ref={imageRef3}
                style={{ scale: scale3 }}
                className="w-full h-full"
              >
                <Image
                  src="/mac/fractional.jpg"
                  alt="Fractional Leadership"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div>
              <h3 className="text-white spacegrotesk-bold uppercase mb-4 text-[28px]">
                3. FRACTIONAL LEADERSHIP ENGAGEMENTS
              </h3>
              <p className="text-white spacegrotesk-regular uppercase leading-[30px] text-[16px]">
                OUTCOME-DRIVEN CXO MANDATES FOR PRODUCT LAUNCHES, TURNAROUNDS,
                OR FUNDRAISING — PROVIDING EXPERT LEADERSHIP WITHOUT FULL-TIME
                COSTS.
              </p>
            </div>
          </div>
        </div>
        {/* SECTIONS 2 & 3: RETAINERS + FRACTIONAL - Framer Dual Image Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* LEFT - Stacked Images with Framer Effects */}
          <div className="space-y-8 lg:space-y-9 flex flex-col">
            {/* Image 1 - Retainers */}
            <div
              className="overflow-hidden rounded-lg relative"
              style={{
                width: "clamp(350px, 45vw, 875px)",
                height: "clamp(300px, 38vw, 355px)",
              }}
            >
              <motion.div
                ref={imageRef2}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
                style={{
                  perspective: 1200,
                  scale: scale2,
                }}
              >
                <Image
                  src="/mac/retain2.avif"
                  alt="Retainers"
                  fill
                  className="object-cover origin-center"
                  sizes="max((100vw - 104px) / 2, 350px)"
                />
                {/* Framer Texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/mac/bgpng.png")',
                    opacity: 0.09,
                    width: "400%",
                    height: "400%",
                    transform: "translateX(0.4%) translateY(-16%)",
                  }}
                />
              </motion.div>
            </div>

            {/* Image 2 - Fractional */}
            <div
              className="overflow-hidden rounded-lg relative"
              style={{
                width: "clamp(350px, 45vw, 875px)",
                height: "clamp(300px, 38vw, 355px)",
              }}
            >
              <motion.div
                ref={imageRef3}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
                style={{
                  perspective: 1200,
                  scale: scale3,
                }}
              >
                <Image
                  src="/mac/fractional.jpg"
                  alt="Fractional Leadership"
                  fill
                  className="object-cover origin-center"
                  sizes="max((100vw - 104px) / 2, 350px)"
                />
                {/* Framer Texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/mac/bgpng.png")',
                    opacity: 0.09,
                    width: "400%",
                    height: "400%",
                    transform: "translateX(0.4%) translateY(-16%)",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT - Text Content - Framer Typography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
    space-y-8 lg:space-y-12
    flex flex-col
    justify-center
    h-full
  "
          >
            {/* Retainers */}
            <div
              className="flex flex-col justify-center"
              style={{ minHeight: "clamp(300px, 38vw, 355px)" }}
            >
              <h3
                className="text-white spacegrotesk-bold uppercase mb-6"
                style={{
                  fontSize: "clamp(36px, 8vw, 44px)",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0px",
                }}
              >
                2. RETAINERS
              </h3>

              <p
                className="text-white spacegrotesk-regular uppercase leading-[34px]"
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  letterSpacing: "0.4px",
                  lineHeight: "34px",
                }}
              >
                STRUCTURED, ONGOING PARTNERSHIPS WITH SCHEDULED SESSIONS,
                ON-CALL SUPPORT, AND BOARD-READY PROGRESS REPORTS — ENSURING
                LONG-TERM CLARITY, COMPLIANCE, AND GROWTH.
              </p>
            </div>

            {/* Fractional Leadership */}
            <div
              className="flex flex-col justify-center"
              style={{ minHeight: "clamp(300px, 38vw, 355px)" }}
            >
              <h3
                className="text-white spacegrotesk-bold uppercase mb-6"
                style={{
                  fontSize: "clamp(36px, 8vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "0px",
                }}
              >
                3. FRACTIONAL LEADERSHIP ENGAGEMENTS
              </h3>

              <p
                className="text-white spacegrotesk-regular uppercase leading-[34px]"
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  letterSpacing: "0.4px",
                  lineHeight: "34px",
                }}
              >
                OUTCOME-DRIVEN CXO MANDATES FOR PRODUCT LAUNCHES, TURNAROUNDS,
                OR FUNDRAISING — PROVIDING EXPERT LEADERSHIP WITHOUT FULL-TIME
                COSTS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
