"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePolicy() {
  return (
    <section className="relative w-full h-[840px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/vikava/policy.avif"
          alt="Wooden mannequin"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-8xl flex-col justify-center mt-44 px-4 py-16 md:px-10 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left text-[#F3F0EB]"
        >
          <h1 className="flex flex-wrap items-baseline gap-x-3">
            <span className=" geist-bold text-[65px] md:text-[70px] lg:text-[95px] leading-none">
              Terms
            </span>
            <span className="greatvibes-regular text-[65px] md:text-[70px] lg:text-[95px] ml-2 leading-none">
              &
            </span>
            <span className=" geist-bold  text-[65px] md:text-[70px] lg:text-[95px] leading-none">
              Conditions
            </span>
          </h1>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-8 max-w-md text-left text-[#111111]"
        >
          <motion.div transition={{ duration: 3, ease: "easeInOut" }}>
            <p className="text-[20px] md:text-[28px] lg:text-[32px] geist-semibold leading-tight">
              Everything you need to know about using our website and services.{" "}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
