"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollStackCard({
  number = "01",
  title = "",
  image = "",
  excerpt = "",
  index = 0,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ top: `${80 + index * (isMobile ? 65 : 95)}px` }}
      className="
        sticky relative
        w-full
        bg-[#F4F0E9]
        overflow-hidden
        rounded-none
      "
    >
      {/* INNER WRAPPER (IMPORTANT) */}
      <div
        className="
          w-full
          max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          py-6
          box-border
        "
      >
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4 min-w-0">
          {/* NUMBER */}
          <span className="shrink-0 geist-semibold leading-none text-black text-[42px] sm:text-[55px] lg:text-[70px]">
            {number}
          </span>

          {/* TITLE */}
          <span
            className="
              geist-medium
              uppercase
              tracking-wide
              text-black
              text-right
              mt-2
              sm:mt-4
              text-[12px]
              sm:text-[16px]
              lg:text-[20px]
              min-w-0
              break-words
              max-w-[60%]
              sm:max-w-[55%]
              lg:max-w-[40%]
            "
          >
            {title}
          </span>
        </div>

        {/* DIVIDER */}
        <div className="mt-3 hidden md:flex justify-end">
          <div className="w-full md:w-[92%] h-[2px] bg-[#1414141A]" />
        </div>

        {/* CONTENT GRID */}
        <div
          className="
    mt-6
    grid
    grid-cols-1
    lg:grid-cols-[1.6fr_1fr]
    gap-6
    lg:gap-10
    items-start
    min-w-0
  "
        >
          {/* IMAGE */}
          <figure className="min-w-0 w-full">
            <motion.img
              src={image}
              alt=""
              className="
                w-full
                h-auto
                max-h-[140px]
                sm:max-h-[340px]
                lg:max-h-[420px]
                object-cover
                rounded-md
                block
              "
              initial={{ opacity: 0.5, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </figure>

          {/* TEXT */}
          <div className="min-w-0 w-full flex items-start">
            <p
              className="
                geist-medium
                text-neutral-700
                leading-[1]
                text-[12px]
                sm:text-[16px]
                lg:text-[18px]
                w-full
                break-words
              "
            >
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
