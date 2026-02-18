// app/components/InsightsGrid.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    date: "Feb 11, 2026",
    title: "Why Most Businesses Don’t Need More Strategy",
    image: "/execution-infrastructure-vs-strategy.jpeg",
    link: "/blogs/execution-infrastructure-vs-strategy"
  },
  // {
  //   id: 2,
  //   date: "Jun 19, 2025",
  //   title: "Ideas that shape tomorrow",
  //   image: "/vikava/blog1.jpg",
  //   link: "/blogs/ideas-that-shape-tomorrow-1"
  // },
  // {
  //   id: 3,
  //   date: "Jun 19, 2025",
  //   title: "Vikava Labs Founders Community — Ek saath safar",
  //   image: "/vikava/blog2.avif",
  //   link: "/blogs/vikava-labs-founders-community-ek-saath-safar"
  // },
  // {
  //   id: 4,
  //   date: "Jun 19, 2025",
  //   title: "Ideas that shape tommorow 3",
  //   image: "/vikava/blog3.avif",
  //   link: "/blogs/#"
  // },
  // {
  //   id: 5,
  //   date: "Jun 18, 2025",
  //   title: "Ideas that shape tommorow 4",
  //   image: "/vikava/blog4.avif",
  //   link: "/blogs/#"
  // },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

export default function BlogInsights() {
  return (
    <section className="w-full bg-[#F4F0E9] px-4 py-16">
      <div className="mx-auto grid max-w-[95%] gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group w-full cursor-pointer"
          >
            <Link href={post.link}>
              <div
                className="
                relative w-full overflow-hidden rounded-[16px] bg-black
                h-[420px] sm:h-[480px] lg:h-[560px]
              "
              >
                {/* Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                  object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
                  priority={index < 2}
                />

                {/* Date chip */}
                <div
                  className="
                  absolute left-4 top-4 rounded-full bg-white/90
                  px-3 py-1 text-[16px] text-[#111] geist-medium
                  opacity-90
                  transition-transform transition-opacity duration-500 ease-out
                  group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100
                "
                >
                  {post.date}
                </div>

                {/* Bottom overlay */}
                <div
                  className="
                  absolute inset-x-0 bottom-0
                  flex items-center justify-between
                  px-6 pb-5 pt-4
                  bg-gradient-to-t from-black/70 via-black/40 to-transparent
                "
                >
                  <h3
                    className="
                    max-w-md text-[20px] md:text-[28px] font-semibold text-white
                    transition-transform duration-500 ease-out
                    translate-x-1 group-hover:translate-x-3
                  "
                  >
                    {post.title}
                  </h3>

                  <button
                    aria-label="Read article"
                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full bg-white text-black
                    mr-2 transition-all duration-500 ease-out
                    group-hover:mr-5
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
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
