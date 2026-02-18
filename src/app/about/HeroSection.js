"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh]  overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/vikava/robot.jpg"
          alt="Wooden mannequin"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className="mx-auto flex h-[100dvh] max-w-8xl flex-col justify-center 
                        px-4 sm:px-6 md:px-10 lg:px-12 
                        pt-32 py-16"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left text-[#111111]"
        >
          <h1 className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
            <span
              className="greatvibes-regular 
                               text-[56px] sm:text-[72px] md:text-[120px] lg:text-[160px] 
                               leading-none"
            >
              About
            </span>
            <span
              className="geist-bold 
                               text-[56px] sm:text-[72px] md:text-[120px] lg:text-[160px] 
                               leading-none md:ml-2"
            >
              us
            </span>
          </h1>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-md text-left text-[#111111]"
        >
          <motion.div transition={{ duration: 3, ease: "easeInOut" }}>
            <p
              className="geist-semibold 
                            text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] 
                            leading-tight"
            >
              “Never start with diffidence, always start with confidence.”
            </p>
            <p
              className="mt-3 geist-semibold 
                            text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]"
            >
              — J. R. D. Tata
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
