// app/components/BrandsServedSection.tsx
"use client";

import { motion } from "framer-motion";
import ScrollStackCard from "../../ScrollStackCard";

const whoWeServe = [
  {
    id: 1,
    number: "01",
    title: "Startups & Founders — From Idea to Execution",
    image: "/vikava/stack1.avif",
    excerpt:
      "We help founders move from raw ideas to real businesses.From product validation and brand design to sourcing, marketing, and go-to-market — we bring structure, process, and momentum. You focus on the idea; we make it operational.",
  },
  {
    id: 2,
    number: "02",
    title: "D2C Brands — Scale Smarter, Grow Faster ",
    image: "/vikava/stack2.avif",
    excerpt:
      "We understand how D2C brands struggle with rising CACs, messy vendor chains, and fragmented systems.Vikava Labs integrates everything — design, e-commerce, sourcing, and marketing — into one engine that drives profitable growth and lasting brand equity.",
  },
  {
    id: 3,
    number: "03",
    title: "B2B Companies & MSMEs — Modernizing the Backbone",
    image: "/vikava/stack3.avif",
    excerpt:
      "Legacy operations need modern execution.We help B2B and MSME businesses evolve through streamlined sourcing, compliance management, branding, and digital transformation — turning traditional businesses into agile, tech-enabled growth stories.",
  },
  {
    id: 4,
    number: "04",
    title: "Investors & VCs — Portfolio Acceleration at Scale",
    image: "/vikava/stack5.avif",
    excerpt:
      "We partner with investors and venture funds to strengthen their portfolio companies.Our “plug-and-play growth pods” give startups immediate access to leadership, strategy, sourcing, and marketing — accelerating growth without reinventing the wheel.",
  },
  {
    id: 5,
    number: "05",
    title: "Professionals & Creators — Building Personal Brands That Convert",
    image: "/vikava/stack4.avif",
    excerpt:
      "Doctors, consultants, lawyers, and creators — today, every expert needs a digital identity that inspires trust.We design your personal brand, build your online presence, and help you market with credibility and consistency.",
  },
];

export default function WhoWeServeAbout() {
  return (
    <section className="relative flex min-h-[900px] w-full items-start lg:items-center justify-center pt-24 scroll-mt-11 bg-[#f4f0e9] px-4 md:px-6 lg:px-4">
      <div className="text-center mx-auto w-[95%]">
        {/* Heading */}
        <h2 className="leading-tight text-[#15141B] text-center w-full">
          {/* LINE 1 */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {["Who", "we", "serve-", "Aapki", "unnati", "ka", "humsafar"].map(
              (word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                  className={`inline-block leading-none ${
                    ["Aapki", "unnati", "ka", "humsafar"].includes(word)
                      ? "greatvibes-regular text-[40px] md:text-[64px] lg:text-[88px]"
                      : "geist-bold text-[40px] md:text-[64px] lg:text-[88px]"
                  }`}
                >
                  {word}
                </motion.span>
              ),
            )}
          </div>

          {/* LINE 2 — humsafar */}
          {/* <div className="flex justify-center mt-2">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 6 * 0.15,
              }}
              className="greatvibes-regular text-[40px] md:text-[64px] lg:text-[88px] leading-none inline-block"
            >
              humsafar
            </motion.span>
          </div> */}
        </h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 md:mt-12 mx-auto max-w-md text-center text-[clamp(14px,1.2vw,18px)] geist-semibold text-neutral-700"
        >
          Vikava Labs is built for startups, professionals, businesses, and
          investors who want to launch faster, scale smarter, and grow
          sustainably.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 md:mt-24">
          {whoWeServe.map((card, index) => (
            <ScrollStackCard
              key={card.number}
              index={index}
              number={card.number}
              title={card.title}
              image={card.image}
              excerpt={card.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
