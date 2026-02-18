"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "@/Components/BlurText";

export default function SustainableProjectHero() {
  return (
    <section className="relative h-screen bg-[#D0D0D0] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 m-2">
        <Image
          src="/sustain/bgg.avif"
          alt="Sustainable textiles background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[95%] lg:px-10">
          <div className="max-w-6xl">
            {/* Main Heading */}
            <h2 className="mb-6 font-afacadBold leading-[0.95] text-white">
              <BlurText
                text="LET'S BEGIN YOUR SUSTAINABLE PROJECT"   
                delay={0.1}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-5xl lg:text-8xl font-bold uppercase font-afacadBold text-left justify-start items-center"
              />
            </h2>

            {/* Subheading */}
            <p className="mb-8 max-w-2xl font-afacadMedium text-[32px] leading-tight text-white sm:text-[20px] lg:text-[30px]">
              Ready to make your supply chain truly sustainable — from yarn to
              finished product?
            </p>

            {/* CTA Button */}
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative bg-[#EEEDE7] font-afacadMedium rounded-full px-4 py-2 flex items-center text-[#232323] text-[16px] shadow overflow-hidden"
            >
              {/* --- TEXT (VISIBLE) --- */}
              <motion.span
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 80, opacity: 0 }, // slides right + fades
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                }}
                className="relative z-10 whitespace-nowrap"
              >
                Connect With Us
              </motion.span>

              {/* --- TEXT (COMING FROM LEFT LIKE ::after) --- */}
              <motion.span
                variants={{
                  rest: { y: -80, opacity: 0 },
                  hover: { y: 0, opacity: 1 }, // slides into place
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.56, 0.51, 0.85, 0.84],
                  delay: 0,
                }}
                className="absolute left-6 z-0 whitespace-nowrap"
              >
                Connect With Us
              </motion.span>

              {/* --- ARROW ANIMATION --- */}
              <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
                {/* ARROW visible initially */}
                <motion.span
                  variants={{
                    rest: { x: -80, opacity: 0 },
                    hover: { x: 0, opacity: 1 }, // slides into place
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
                    hover: { x: 80, opacity: 0 }, // slides right + fades
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.56, 0.51, 0.85, 0.84],
                  }}
                  className="absolute"
                >
                  &rarr;
                </motion.span>
                {/* ARROW coming in from left */}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
