"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "01",
    labelTop: "Founder-first execution governance",
    labelBottom: "",
  },

  { value: "09", labelTop: " Integrated growth capabilities", labelBottom: "" },
  {
    value: "26+",
    labelTop: "years in product + supply + brand building",
    labelBottom: "",
  },
];

export default function TogetherWeBuildSection() {
  return (
    <section className="w-full bg-[#F3F0EB] overflow-hidden">
      {/* Top Row */}
      <div className="mx-auto flex w-[95%] flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:py-16">
        {/* LEFT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-baseline gap-2 text-[40px] md:text-[88px] geist-semibold leading-none text-[#131313]"
          >
            <span>Together</span>
            <span className="greatvibes-regular text-[56px] md:text-[88px]">
              we
            </span>
            <span className="geist-semibold">Build</span>
          </motion.h2>
          <Link href="/about">
            {" "}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              variants={{ rest: {}, hover: {} }}
              whileHover="hover"
              animate="rest"
              className="relative pt-4 geist-medium md:px-4 py-2 flex items-center text-[#232323] text-[16px] overflow-hidden"
            >
              {/* TEXT OUT */}
              <motion.span
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: 80, opacity: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="relative z-10 whitespace-nowrap"
              >
                Know More About Us{" "}
              </motion.span>

              {/* TEXT IN */}
              <motion.span
                variants={{
                  rest: { y: -80, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.45 }}
                className="absolute left-0 z-0 whitespace-nowrap"
              >
                Know More About Us{" "}
              </motion.span>

              {/* ARROW */}
              <span className="md:ml-4 ml-5 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
                <motion.span
                  variants={{
                    rest: { x: -80, opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.45 }}
                  className="absolute"
                >
                  →
                </motion.span>

                <motion.span
                  variants={{
                    rest: { x: 0, opacity: 1 },
                    hover: { x: 80, opacity: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                  className="absolute"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-[400px] geist-medium text-[16px] md:text-[20px] leading-tight text-[#2a2a2a]"
        >
          <p>
            Vikava Labs was built to fix what breaks most businesses: fragmented
            execution and loss of trust. Founded by Puuneet Aggarwal, after 26+
            years in fashion, sourcing, and brand-building, Vikava Labs is not
            an agency, not just consulting - it’s a complete operating system
            for businesses.
          </p>
        </motion.div>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="relative mx-auto w-full">
          <Image
            src="/vikava/hand.jpg"
            alt="Together we build"
            width={1400}
            height={700}
            className="h-auto w-full object-cover lg:h-[595px]"
            priority
          />
        </div>

        {/* STATS WRAPPER 
            Mobile -> relative (no overlap)
            Tablet+Desktop -> absolute (original design)
        */}
        <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 w-full">
          <div
            className="
              mx-auto max-w-8xl 
              flex flex-wrap justify-center 
              gap-3 md:gap-4 
              pb-4 px-3
            "
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="
                  bg-[#f3f0eb]/80 backdrop-blur-md 
                  px-3 py-3 
                  flex flex-col justify-center
                  
                  w-full                   
                  md:w-[48%]               
                  lg:w-[32%]             
                  
                  h-[120px] 
                  md:h-[130px] 
                  lg:h-[140px]
                "
              >
                <span
                  className="
                    text-[40px] 
                    md:text-[60px] 
                    lg:text-[70px]
                    font-medium leading-none 
                    tracking-[-2px] lg:tracking-[-3.7px]
                    text-[#05080C]
                  "
                >
                  {item.value}
                </span>

                <span
                  className="
                    text-[16px] 
                    md:text-[16px] 
                    lg:text-[20px]
                    font-medium 
                    leading-[1.5em] 
                    uppercase 
                    text-right 
                    text-[#05080C]
                  "
                >
                  {item.labelTop}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
