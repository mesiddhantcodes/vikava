"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function WhyPartnerSection() {
  const features = [
    {
      id: 1,
      title: "Sustainability-Only Focus",
      description:
        "Unlike generic sourcing agents, we work exclusively in eco & handmade.",
      image: "/sustain/curtain.avif",
    },
    {
      id: 2,
      title: "Organised Reliability",
      description:
        "Structured sourcing in a space that's still informal and scattered.",
      image: "/sustain/bag.avif",
    },
    {
      id: 3,
      title: "Breadth & Depth",
      description:
        "Wide range of sustainable products with deep expertise in each category.",
      image: "/sustain/lady2.avif",
    },
    {
      id: 4,
      title: "Legacy & Trust",
      description:
        "Decades of experience building trusted relationships with artisans and brands.",
      image: "/sustain/carpet.avif",
    },
    {
      id: 5,
      title: "Authenticity Guaranteed",
      description:
        "Every product is verified for genuine sustainability and craftsmanship.",
      image: "/sustain/curtain.avif",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const IMAGE_HEIGHT = 470;

  return (
    <section className="w-full min-h-screen bg-[#D0D0D0] flex items-center pt-10 pb-16 px-6 md:px-16">
      <div className="w-full max-w-[95%] mx-auto">
        {/* ================= MOBILE VIEW ================= */}
        <div className="flex flex-col gap-6 w-full md:hidden">
          {/* Mobile Title */}
          <h2
            className="text-[#232323] font-afacadBold"
            style={{
              fontSize: "clamp(36px, 10vw, 48px)",
              lineHeight: "1.1",
              letterSpacing: "0px",
            }}
          >
            WHY PARTNER WITH US
          </h2>

          {/* Feature Title */}
          <h3 className="font-afacadBold text-[#232323] text-[28px]">
            {features[activeIndex].title}
          </h3>

          {/* Image */}
          <div className="w-full rounded-xs overflow-hidden">
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              width={500}
              height={400}
              className="object-cover w-full h-auto aspect-[4/3] rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="text-[#232323] text-[18px] font-afacadMedium leading-normal">
            {features[activeIndex].description}
          </p>

          {/* Category List */}
          <ul className="mt-2">
            {features.map((feature, index) => (
              <li
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`text-[24px] font-bold mb-3 cursor-pointer ${activeIndex === index ? "text-[#232323]" : "text-[#818181]"
                  }`}
              >
                {feature.title}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact" className="self-start mt-2">
            <motion.button
              type="submit"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative bg-[#F3F0EB] geist-medium rounded-full px-4 py-2 flex items-center text-black text-[14px] sm:text-[16px] overflow-hidden hover:border-[#15151B] transition-colors"
            >
              {/* TEXT visible */}
              <motion.span
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 80, opacity: 0 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="relative whitespace-nowrap"
              >
                Connect With Us{" "}
              </motion.span>

              {/* TEXT on hover */}
              <motion.span
                variants={{
                  rest: { y: -80, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="absolute left-4 sm:left-4 z-0 whitespace-nowrap"
              >
                Connect With Us{" "}
              </motion.span>

              {/* ARROW */}
              <span className="ml-3 sm:ml-4 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] text-[18px] sm:text-[20px] rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden flex-shrink-0">
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
                  →
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
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex flex-row items-center justify-center w-full gap-12">
          {/* Left Column */}
          <div className="flex flex-col items-start flex-1">
            <h2
              className="text-[#232323] mb-7 font-afacadBold"
              style={{
                fontSize: "72px",
                lineHeight: "1.09",
                letterSpacing: "0px",
                maxWidth: "450px",
              }}
            >
              WHY
              <br />
              PARTNER
              <br />
              WITH US
            </h2>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                type="submit"
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative bg-[#F3F0EB] geist-medium rounded-full px-4 py-2 flex items-center text-black text-[14px] sm:text-[16px] overflow-hidden hover:border-[#15151B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* TEXT visible */}
                <motion.span
                  variants={{
                    rest: { y: 0, opacity: 1 },
                    hover: { y: 80, opacity: 0 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="relative  whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                {/* TEXT on hover */}
                <motion.span
                  variants={{
                    rest: { y: -80, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute left-4 sm:left-4 z-0 whitespace-nowrap"
                >
                  Connect With Us{" "}
                </motion.span>

                {/* ARROW */}
                <span className="ml-3 sm:ml-4 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] text-[18px] sm:text-[20px] rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden flex-shrink-0">
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
                    →
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
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>

            {/* Dynamic Feature Title & Description */}
            <div className="mt-8">
              <h3 className="font-afacadBold text-[#232323] text-[32px] mb-3">
                {features[activeIndex].title}
              </h3>
              <p
                className="text-[#232323] text-[20px] font-afacadMedium leading-normal mb-1"
                style={{ maxWidth: "350px" }}
              >
                {features[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Center Image Slider */}
          <div className="flex flex-col items-center flex-shrink-0 mx-10 self-center">
            <div className="relative w-[450px] h-[470px] overflow-hidden rounded-xs">
              <motion.div
                animate={{ y: -activeIndex * IMAGE_HEIGHT }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.8,
                }}
                className="flex flex-col"
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="w-[450px] h-[470px] flex-shrink-0"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={403}
                      height={470}
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Feature List */}
          <div className="flex flex-col font-afacadMedium items-start justify-center flex-1 pl-8 pt-8">
            <ul className="list-none pl-0">
              {features.map((feature, index) => (
                <li
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-[20px] mt-6 cursor-pointer transition-all duration-300 ${activeIndex === index
                      ? "text-[#232323]"
                      : "text-[#818181] hover:text-[#232323]"
                    }`}
                >
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
