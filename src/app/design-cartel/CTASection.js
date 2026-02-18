"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1400px] mx-auto bg-[#F5F6F0] py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Top Right Label - Responsive positioning + sizing */}
      <div className="absolute top-4 sm:top-6 md:top-8 lg:top-16 right-4 sm:right-6 md:right-8 lg:right-16 z-10">
        <p
          className="absans-400 text-[#090502] text-right leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[1.4]"
          style={{
            fontSize: "clamp(14px, 1.5vw, 24px)",
          }}
        >
          Your Cartel Advantage
          <br className="block " />
          <span className="">Starts Now</span>
        </p>
      </div>

      {/* Hanging Vase Image - Perfect responsive sizing */}
      <motion.div
        className="absolute top-[25%] sm:top-[27%] md:top-[28%] lg:top-[30%] left-1/2 -translate-x-1/2 z-20"
        style={{
          width: "clamp(220px, 20vw, 550px)",
          height: "clamp(350px, 30vw, 850px)",
        }}
        initial={{ y: -100, rotate: -5 }}
        animate={
          isInView
            ? {
              y: [0, 15, 0],
              rotate: [-5, 2, -5],
            }
            : { y: -100, rotate: -5 }
        }
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/designcartel/last.avif"
          alt="Hanging Vase"
          fill
          className="object-contain"
          style={{ transformOrigin: "top center" }}
          sizes="(max-width: 640px) 220px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 550px"
        />
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-2 sm:px-4">
        {/* Large Heading Text */}
        <motion.div
          className="mt-20 sm:mt-28 md:mt-36 lg:mt-48"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="absans-400 text-[#090502] leading-[0.85] sm:leading-[0.87] md:leading-[0.88] lg:leading-[0.9]"
            style={{
              fontSize: "clamp(52px, 10vw, 112px)",
              lineHeight: "0.9em",
              letterSpacing: "-0.04em",
            }}
          >
            READY TO
            <br />
            SCALE YOUR
            <br />
            DESIGN OUTPUT
            <br />
            WITHOUT SCALING
            <br />
            OVERHEADS?
          </h1>
        </motion.div>

        {/* Contact Button - Fully responsive */}
        <Link href="/contact" passHref>
          {" "}
          <motion.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="
            relative mt-6 sm:mt-8 md:mt-10 lg:mt-12
            bg-[#EEEDE7] geist-medium 
            rounded-full px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-3 
            flex items-center gap-2 sm:gap-2.5 md:gap-3
            text-[#232323] 
            text-[14px] sm:text-[15px] md:text-[16px]
            shadow-md sm:shadow-lg hover:shadow-xl
            overflow-hidden 
            flex-shrink-0
            min-w-[160px] sm:min-w-[180px] md:min-w-[200px]
          "
          >
            {/* VISIBLE TEXT */}
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
              Connect With Us            </motion.span>

            {/* HOVER SLIDE-IN TEXT */}
            <motion.span
              variants={{
                rest: { y: -80, opacity: 0 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{
                duration: 0.45,
                ease: [0.56, 0.51, 0.85, 0.84],
              }}
              className="absolute left-4 sm:left-5 md:left-6 lg:left-6 z-0 whitespace-nowrap"
            >
              Connect With Us            </motion.span>

            {/* ARROW - Perfect responsive sizing */}
            <span
              className="
              ml-1 sm:ml-1.5 md:ml-2 lg:ml-4
              w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] 
              text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
              rounded-full bg-[#232323] 
              flex items-center justify-center 
              text-white 
              relative overflow-hidden
              flex-shrink-0
            "
            >
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
    </section>
  );
}
