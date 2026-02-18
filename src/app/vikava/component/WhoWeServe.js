// app/components/BrandsServedSection.tsx
"use client";

import { motion } from "framer-motion";
import ScrollVelocity from "../../ScrollVelocity";
import ScrollStack, { ScrollStackItem } from "../../ScrollStack";
import ScrollStackCard from "../../ScrollStackCard";
const whoWeServe = [
  {
    id: 1,
    number: "01",
    title: " Founders & Startups - from idea to execution",
    image: "/vikava/stack1.avif",
    excerpt: "Turning raw ideas into structured, scalable businesses.",
  },
  {
    id: 2,
    number: "02",
    title: "D2C Brands - launch faster, scale cleaner ",
    image: "/vikava/stack2.avif",
    excerpt:
      "Integrated support to launch faster, scale smarter, and optimize for profitability.",
  },
  {
    id: 3,
    number: "03",
    title: "B2B & MSMEs - modernize operations + growth",
    image: "/vikava/stack3.avif",
    excerpt: "Streamlined branding, sourcing, compliance, marketing & sales.",
  },
  {
    id: 4,
    number: "04",
    title: "Investors - portfolio execution capacity (pods + governance)",
    image: "/vikava/stack5.avif",
    excerpt: "Portfolio acceleration through plug-and-play growth pods.",
  },
  {
    number: "05",
    title: "Professionals", 
    image: "/vikava/stack4.avif",
    excerpt:
      "Doctors, lawyers, consultants, creators building personal brands.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative flex min-h-[900px] w-full items-center justify-center pt-24 scroll-mt-11 bg-[#f4f0e9] px-4">
      <div className="text-center mx-auto w-[100%] md:w-[95%]">
        {/* Heading */}
        <h2 className="leading-tight text-center text-[#15141B] text-[40px] md:text-[88px]">
          <div className="flex flex-wrap justify-center gap-2 text-[40px] md:text-[88px]">
            {[
              { text: "Who", font: "geist-bold" },
              { text: "we", font: "geist-bold" },
              { text: "serve?", font: "greatvibes-regular" },
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
                className={`inline-block leading-none ${item.font} ${
                  item.font === "geist-bold"
                    ? "text-[40px] md:text-[88px]"
                    : "text-[40px] md:text-[88px] mt-1 md:mt-0"
                }`}
              >
                {item.text}
              </motion.span>
            ))}
          </div>
        </h2>

        {/* Subheading - 18px on desktop */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-[clamp(14px,1.2vw,18px)] geist-semibold max-w-lg mx-auto text-neutral-700  "
        >
          No matter the industry, Vikava Labs provides personalized handholding
          + execution support to accelerate growth.{" "}
          {/* <br className="hidden sm:block" />
          leading brands. */}
        </motion.p>
        <div className="mt-24">
          {whoWeServe.map((card, index) => (
            <ScrollStackCard
              key={card.number}
              number={card.number}
              index={index} // <--- REQUIRED
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
