"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CHALLENGES_DATA = [
  {
    id: "[1]",
    title: "Greenwashing vs Reality",
    description:
      "Filtering true sustainable practices from marketing buzzwords.",
    image: "/sustain/yellow.jpg",
  },
  {
    id: "[2]",
    title: "Fragmentation",
    description:
      "No single partner for sustainable raw materials + handmade processes + finished goods.",
    image: "/sustain/colour.avif",
  },
  {
    id: "[3]",
    title: "Traceability & Compliance",
    description:
      "Providing proof buyers need (GOTS, OEKO-TEX, BCI, Fairtrade).",
    image: "/sustain/tag-min.jpg",
  },
  {
    id: "[4]",
    title: "Artisan Connect",
    description:
      "Uniting scattered craftspeople and clusters into one organised channel.",
    image: "/sustain/blue-min.jpg",
  },
  {
    id: "[5]",
    title: "Scalability",
    description:
      "Helping brands grow without losing authenticity or timelines.",
    image: "/sustain/store.avif",
  },
];

const upVariant = {
  initial: { opacity: 0, y: 70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 13 },
  },
};

export default function ChallengesWeSolve() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[95%] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <motion.h2
          variants={upVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.05 }}
          className="font-bold font-afacadMedium text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-[#232323] mb-8 sm:mb-10 lg:mb-14 px-4"
        >
          CHALLENGES WE SOLVE
        </motion.h2>

        <div className="border-t border-[#C0C1C3] lg:mr-8">
          {CHALLENGES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.15,
                  },
                },
              }}
              className="flex flex-col border-b border-[#C0C1C3] py-4 sm:py-5 md:py-6 lg:py-4 md:flex-row md:items-stretch"
            >
              {/* Text Block */}
              <div className="flex items-start sm:items-end gap-3 sm:gap-4 px-4 sm:px-0 md:w-[calc(100%-720px)]">
                <div className="mb-0 sm:mb-3 text-base sm:text-lg md:text-[20px] font-afacadMedium text-[#111217] flex-shrink-0">
                  {item.id}
                </div>

                <div className="flex-1 py-2 sm:py-3 md:py-4 md:px-4">
                  <h3 className="mb-2 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-afacadBold text-[#111217]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-afacadMedium text-[#111217] max-w-full md:max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Image Block with reveal */}
              <div className="mt-4 w-full px-4 sm:px-0 md:mt-0 md:w-[720px]">
                <div className="relative h-40 sm:h-44 md:h-[174px] w-full overflow-hidden rounded sm:rounded-none">
                  {/* Optimized Next.js Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 720px, 720px"
                    loading="lazy"
                    quality={85}
                  />

                  {/* Sliding mask from left → right */}
                  <motion.div
                    initial={{ x: "0%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ amount: 0.6, once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#E3E4E6]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}