// app/components/AboutVikavaIntro.jsx
"use client";

import { motion } from "framer-motion";

const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const headingWords = [
  { text: "We", font: "geist-bold" },
  { text: "are", font: "geist-bold" },
  { text: "not", font: "geist-bold" },
  { text: "an", font: "geist-bold" },

  { text: "agency", font: "greatvibes-regular" },

  { text: "and", font: "geist-bold" },
  { text: "not", font: "geist-bold" },

  { text: "advice-only", font: "greatvibes-regular" },
  { text: "consulting", font: "geist-bold" },
];

export default function AboutVikavaIntro() {
  return (
    <section className="w-full bg-[#F4F0E9] py-20">
      <div className="mx-auto flex max-w-[85%] flex-col gap-12 px-4 md:px-8 lg:flex-row">
        {/* Left Column */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-md"
        >
          <h2 className="leading-tight text-[#111111]">
            <span className="block geist-semibold text-[32px] md:text-[40px] lg:text-[48px]">
              About Vikava Labs-
            </span>

            <span className="mt-2 block greatvibes-regular text-[32px] md:text-[40px] lg:text-[48px]">
              Ek parichay
            </span>
          </h2>
        </motion.div>

        {/* Right Column */}
        <div className="w-full lg:w-[719px] lg:ml-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="leading-tight text-[#111111] flex flex-wrap">
              {headingWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                  className={`${w.font} inline-block leading-none text-[36px] md:text-[48px] lg:text-[56px]`}
                >
                  {w.text}&nbsp;
                  {w.text === "agency" && <br />}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          <p className="mt-6 text-[18px] md:text-[20px] geist-semibold leading-relaxed text-[#2B2926] whitespace-normal break-words">
            Vikava Labs is business-building infrastructure: we bring clarity,
            governance, and accountable execution pods so founders scale without
            chaos. We blend mentoring, branding, product design & sourcing,
            <span className="whitespace-nowrap"> e-commerce</span>, and
            marketing into one seamless motion – so founders do not have to
            juggle six different vendors to build one brand.
          </p>

          <p className="mt-4 text-[18px] md:text-[20px] geist-semibold leading-relaxed text-[#2B2926] whitespace-normal break-words">
            Our promise is simple: clarity before scale, trust before speed,
            execution before promises.
          </p>
        </div>
      </div>
    </section>
  );
}
