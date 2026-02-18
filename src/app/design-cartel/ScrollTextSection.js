"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollTextSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // First image and text opacity (fades out)
  const firstOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // White screen opacity (fades in then stays)
  const whiteOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  // First white text (fades in, moves to top, then fades out)
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5, 0.55],
    [0, 1, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [50, 0, 0, -200]
  );

  // Second section with image (fades in, no background color change)
  const image2Opacity = useTransform(scrollYProgress, [0.48, 0.55], [0, 1]);

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.8],
    [0, 1, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.8],
    [50, 0, 0, -200]
  );

  // Third section with image
  const image3Opacity = useTransform(scrollYProgress, [0.78, 0.82], [0, 1]);

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.8, 0.85, 0.9, 0.92],
    [0, 1, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.8, 0.85, 0.9, 0.92],
    [50, 0, 0, -200]
  );

  // Fourth section with image (final, stays)
  const image4Opacity = useTransform(scrollYProgress, [0.9, 0.93], [0, 1]);

  const text4Opacity = useTransform(scrollYProgress, [0.92, 0.95], [0, 1]);
  const text4Y = useTransform(scrollYProgress, [0.92, 0.95], [50, 0]);

  return (
    <section ref={sectionRef} className="relative h-[600vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* First Image with Text (Dark background) */}
        <motion.div
          style={{ opacity: firstOpacity }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/designcartel/scroll1.avif"
              alt="Background"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/40" /> */}
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-[30px] sm:text-[56px] lg:text-[64px] absans-400 leading-tight text-white font-light">
              We exist to bridge the
              <br />
              gap between creativity and
              <br />
              commercial execution.
            </h2>
          </div>
        </motion.div>

        {/* White Background (Fades in and stays) */}
        <motion.div
          style={{ opacity: whiteOpacity }}
          className="absolute inset-0 bg-[#F5F6F0] -z-10"
        />

        {/* First White Section Text */}
        <motion.div
          style={{
            opacity: text1Opacity,
            y: text1Y,
          }}
          className="absolute inset-0 flex items-center justify-center px-8 z-20"
        >
          <div className="max-w-6xl text-center">
            <p className="text-[28px] sm:text-[42px] lg:text-[52px] absans-400 leading-tight text-[#090502] font-light">
              Every design we create is not just beautiful but
              <br />
              also production-ready,
              <br />
              cost-conscious, and order-winning.
            </p>
          </div>
        </motion.div>

        {/* Second Section Background Image */}
        <motion.div
          style={{ opacity: image2Opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/designcartel/scroll2.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Second Section - FLEXIBLE CAPACITY */}
        <motion.div
          style={{
            opacity: text2Opacity,
            y: text2Y,
          }}
          className="absolute inset-0 flex items-center justify-center px-8 z-10"
        >
          <div className="max-w-4xl text-center">
            <h3 className="text-[28px] sm:text-[40px] lg:text-[52px] absans-400 uppercase tracking-wide text-[#090502]">
              FLEXIBLE CAPACITY
            </h3>
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] absans-400 text-[#090502] leading-tight">
              Scale output up or down for urgent drops or
              <br />
              seasonal launches.
            </p>
          </div>
        </motion.div>

        {/* Third Section Background Image */}
        <motion.div
          style={{ opacity: image3Opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/designcartel/scroll3.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Third Section - PAY AS YOU NEED */}
        <motion.div
          style={{
            opacity: text3Opacity,
            y: text3Y,
          }}
          className="absolute inset-0 flex items-center justify-center px-8 z-10"
        >
          <div className="max-w-4xl text-center">
            <h3 className="text-[28px] sm:text-[40px] lg:text-[52px] absans-400 uppercase tracking-wide text-[#090502]">
              PAY AS YOU NEED
            </h3>
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] absans-400 text-[#090502] leading-relaxed">
              From a single design to a monthly stream of <br />
              fresh collections.
            </p>
          </div>
        </motion.div>

        {/* Fourth Section Background Image */}
        <motion.div
          style={{ opacity: image4Opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/designcartel/scroll4.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Fourth Section - RELIABLE PROCESS */}
        <motion.div
          style={{
            opacity: text4Opacity,
            y: text4Y,
          }}
          className="absolute inset-0 flex items-center justify-center px-8 z-10"
        >
          <div className="max-w-4xl text-center">
            <h3 className="text-[28px] sm:text-[40px] lg:text-[52px] absans-400 uppercase tracking-wide text-[#090502]">
              RELIABLE PROCESS
            </h3>
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] absans-400 text-[#090502] leading-relaxed">
              Structured pods, clear approvals, on-time
              <br />
              handovers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
