// app/components/InsightsSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    date: "Jun 19, 2025",
    title: "Ideas that shape tomorrow.",
    categoryIcon: "✤",
    image: "/vikava/boy.avif",
  },
  {
    date: "Jun 19, 2025",
    title: "Ideas that shape tomorrow.",
    categoryIcon: "✤",
  },
  {
    date: "Jun 18, 2025",
    title: "Scaling made simple.",
    categoryIcon: "✤",
  },
  {
    date: "Jun 19, 2025",
    title: "Perspectives that matter.",
    categoryIcon: "✤",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#F4F0E9] md:px-4 py-16 pt-30">
      <div className="mx-auto w-[97%] md:w-[85%]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center lg:text-left w-full"
        >
          <div className="leading-none text-neutral-900 flex flex-col items-center">
            {/* line 1 */}
            <span className="geist-semibold block text-[clamp(40px,5.5vw,84px)]">
              Insights that
            </span>

            {/* line 2 */}
            <span className="mt-1 flex flex-wrap items-baseline justify-center gap-x-3 lg:justify-start">
              <span className="greatvibes-regular text-[clamp(36px,4.5vw,84px)]">
                Drive
              </span>
              <span className="geist-semibold text-[clamp(36px,4.5vw,84px)]">
                growth
              </span>
            </span>
          </div>
        </motion.div>

        {/* Layout */}
        <div className="grid gap-4 md:grid-cols-2 w-full justify-center mx-auto  md:px-8 ">
          {/* Left big image card */}
          <motion.article
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="group mx-auto w-full max-w-[735px]"
          >
            <div className="relative h-[560px] w-full overflow-hidden rounded-[14px] bg-black">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Top-left date chip */}
              <div
                className="
    absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1
    text-[clamp(12px,1.1vw,14px)] text-[#111] geist-medium

    translate-x-0 translate-y-0 opacity-90
    group-hover:-translate-mt-1 group-hover:translate-x-1 group-hover:opacity-100

    transition-all duration-500 ease-out
  "
              >
                {posts[0].date}
              </div>

              {/* Bottom overlay */}
              <div
                className="
    absolute inset-x-0 bottom-0 flex items-center justify-between
    px-6 pb-5 pt-4
    bg-gradient-to-t from-black/70 via-black/40 
    transition-all duration-500 ease-out
  "
              >
                <h3
                  className="
      max-w-md text-[clamp(18px,2.1vw,28px)] font-semibold text-white
      translate-x-1 group-hover:translate-x-3
      transition-transform duration-500 ease-out
    "
                >
                  {posts[0].title}
                </h3>

                <button
                  aria-label="Read article"
                  className="
    flex h-12 w-12 items-center justify-center rounded-full bg-white text-black
    mr-2 group-hover:mr-5
    transition-all duration-500 ease-out
  "
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.article>

          {/* Right stacked white cards */}
          <div className="flex flex-col gap-3">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.title}
                custom={index + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="
        group                /* enable group-hover */
        mx-auto flex h-[178px] w-full max-w-[735px]
        items-center justify-between rounded-[14px]
        bg-white px-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]
        transition-all duration-500 ease-out
      "
              >
                <div className="flex flex-col items-start gap-4 transition-all duration-500 ease-out group-hover:translate-x-2">
                  {/* Four-dot icon SVG */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    {/* 4-dot icon */}
                    <div
                      className="
      absolute transition-all duration-500 ease-out
      group-hover:opacity-0 group-hover:scale-0
    "
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <circle cx="10" cy="3" r="2" />
                        <circle cx="10" cy="17" r="2" />
                        <circle cx="3" cy="10" r="2" />
                        <circle cx="17" cy="10" r="2" />
                      </svg>
                    </div>

                    {/* Single dot (hidden by default) */}
                    <div
                      className="
      absolute opacity-0 scale-0
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:scale-100
    "
                    >
                      <div className="w-[6px] h-[6px] bg-[#232323] rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-6 transition-all duration-500 ease-out group-hover:translate-x-2">
                    {/* date */}
                    <span className="text-[16px] text-[#000000] geist-medium">
                      {post.date}
                    </span>

                    {/* title */}
                    <h4 className="mt-2 text-[clamp(18px,2vw,28px)] geist-semibold text-[#000000]">
                      {post.title}
                    </h4>
                  </div>
                </div>

                {/* arrow button */}
                <button
                  aria-label="Read article"
                  className="
          flex h-12 w-12 items-center justify-center rounded-full bg-black text-white
          group-hover:mr-4
    transition-all duration-500 ease-out
        "
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
