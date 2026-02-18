// app/components/ProofPrinciplesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const smallCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
};

const cards = [
  {
    title: "Integration & Performance: Fewer hand-offs, systems that deliver.",
    thumb: "/vikava/black1.jpg",
  },
  {
    title: "AI & Investor Readiness: Faster insights, clear metrics.",
    thumb: "/vikava/black2.avif",
  },
  {
    title: "Trust as Infrastructure: Transparent, dependable growth.",
    thumb: "/vikava/black3.avif",
  },
];

export default function ProofPrinciplesSection() {
  return (
    <section className="w-full bg-[#201F24] px-2 lg:px-8 py-16 text-white">
      <div className="mx-auto w-[95%] flex flex-col gap-8 lg:gap-14 lg:flex-row lg:items-start">
        {/* ---------------- LEFT VIDEO CARD ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/3 mx-auto lg:mx-0 shrink-0"
        >
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[629px] overflow-hidden rounded-[32px] bg-black">
            <video
              src="/vikava/blackVideo.mp4"
              className="object-cover w-full h-full absolute inset-0"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>

        {/* ---------------- RIGHT CONTENT ---------------- */}
        <div className="flex flex-col w-full mx-auto">
          {/* Heading + Subtext + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* HEADING */}
            <h2
              className="
    flex flex-wrap items-baseline gap-2
    text-[#F3F0EB]
    text-left
    justify-start
    leading-none
  "
            >
              <span className="geist-semibold text-[clamp(48px,7vw,88px)]">
                Proof
              </span>

              <span className="greatvibes-regular text-[clamp(48px,7vw,88px)]">
                &amp;
              </span>

              <span className="geist-semibold text-[clamp(48px,7vw,88px)]">
                Principles
              </span>
            </h2>


            {/* TEXT + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mt-8 lg:mt-10">
              <p className="max-w-lg text-[clamp(15px,1.4vw,20px)] leading-relaxed text-[#F3F0EB] text-left">
                We believe growth is built on strong principles. By combining
                creativity with systems, leveraging technology, and ensuring
                trust at every step, we create businesses that scale with
                clarity and confidence.
              </p>

              {/* CTA BUTTON */}
              <Link href="/about" passHref>
                {" "}
                <motion.button
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="cursor-pointer relative bg-[#EEEDE7] geist-medium rounded-full px-3 py-2 flex items-center text-[#232323] text-[16px]  overflow-hidden flex-shrink-0"
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
                    className="relative z-10 whitespace-nowrap"
                  >
                    Know more about us
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
                    className="absolute left-6 z-0 whitespace-nowrap"
                  >
                    Know more about us
                  </motion.span>

                  {/* ARROW */}
                  <span className="ml-4 w-[36px] h-[36px] text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
          </motion.div>

          {/* ---------------- SMALL CARDS ---------------- */}
          <div className="mt-8 lg:mt-12 grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                custom={index}
                variants={smallCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="
                  flex flex-col w-full 
                  h-auto lg:h-[240px] 
                  max-w-full 
                  mx-auto
                  overflow-hidden rounded-[18px] 
                  bg-[#F3F0EB] text-left text-black 
                "
              >
                {/* TOP */}
                <div className="flex h-[86px] w-full items-center justify-between px-3">
                  <div className="relative h-[60px] w-[60px] overflow-hidden rounded-md bg-neutral-300">
                    <Image
                      src={card.thumb}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* ICON */}
                  <div className="relative w-3 h-3 ">
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-[3px] bg-[#232323] rounded-full"></span>
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[3px] h-[3px] bg-[#232323] rounded-full"></span>
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[3px] bg-[#232323] rounded-full"></span>
                    <span className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[3px] bg-[#232323] rounded-full"></span>
                  </div>
                </div>

                <div className="border-t border-neutral-300 w-full"></div>

                {/* TEXT */}
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <h3 className="text-[clamp(16px,1.4vw,20px)] geist-medium leading-snug text-[#464646]">
                    {card.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
