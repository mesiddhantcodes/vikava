"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const defaultFaqs = [
  {
    q: "What is a design library for exporters?",
    a: "A design library for exporters is a private system to store, organize, and retrieve past and current designs and samples. It helps teams avoid remaking existing work and improves response speed to buyer queries.",
  },
  {
    q: "How does a digital design library reduce repeat sampling?",
    a: "By making historical designs and samples searchable, teams can reuse or adapt existing work. This prevents unnecessary resampling caused by lost files or fragmented records.",
  },
  {
    q: "Is a design library the same as a public marketplace?",
    a: "No. A design library like DLI is a private infrastructure where each exporter operates in an isolated environment. Designs are not visible to others unless explicitly shared.",
  },
  {
    q: "Can exporters control who sees their designs in a digital library?",
    a: "Yes. Access is permission-based and can be limited, monitored, or revoked. Designs are shared only through controlled access with watermarking and traceability.",
  },
  {
    q: "Who should use a design library like DLI?",
    a: "It is suited for export houses managing multiple designs, frequent sampling, and recurring buyer requests. It is not intended for price-only trading or copy-driven operations.",
  },
];

export default function FAQSection({
  faqs = defaultFaqs,
  imageSrc = "/vikava/faq.png",
  name = "DLI"
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full flex justify-center bg-white px-2 md:px-12 py-24">
      <div className="w-full max-w-[95%] mx-auto justify-between">
        {/* LABEL */}
        <p className="text-[18px] monasans-400 text-[#6d6d6d] tracking-wide">
          FAQS
        </p>

        {/* HEADING */}
        <h2
          className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500
            leading-[1.15]
            mb-4
          "
        >
          Quick Answers to Common Queries
        </h2>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[300px_1fr] 
            mt-16 md:mt-28 
            gap-24 md:gap-68 
            justify-center 
            items-start 
            mx-auto
            w-full
            max-w-full
          "
        >
          {/* LEFT IMAGE BLOCK */}
          <div className="flex flex-col items-start lg:sticky lg:top-40 h-fit mx-auto">
            <div
              className="
        w-full 
        max-w-[250px]
        h-[250px]
        rounded-[20px]
        overflow-hidden
      "
            >
              <Image
                src={imageSrc}
                alt="FAQ help"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>

            <p
              className="
        text-[14px] 
        monasans-500 
        text-[#6d6d6d] 
        mt-4 
        leading-relaxed
        max-w-[250px]
      "
            >
              Have questions? Find helpful answers to understand {name} and how we
              simplify design.
            </p>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="flex flex-col gap-4 w-full max-w-[95%] lg:max-w-[90%] mx-auto">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              // Handle both 'question' and 'q' keys
              const questionText = item.question || item.q;
              const answerText = item.answer || item.a;

              return (
                <motion.div
                  key={i}
                  // Removed layout prop to prevent conflicts
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => toggle(i)}
                  className="
                    w-full
                    rounded-[18px]
                    bg-[#F2F4F7]
                    px-4 py-3
                    cursor-pointer
                "
                >
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] monasans-500 text-[#000]">
                      {questionText}
                    </p>

                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-[24px] monasans-500 font-light text-black"
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden" // Important for smooth height animation
                      >
                        <p className="mt-3 text-[14px] monasans-500 text-[#646464] max-w-2xl leading-relaxed">
                          {answerText}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
