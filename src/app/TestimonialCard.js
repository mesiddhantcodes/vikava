// app/components/TestimonialCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      className="flex w-full max-w-[520px] flex-col justify-between rounded-[32px] bg-[#131316] px-8 py-7 text-left text-white shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Quote */}
      <p className="text-[clamp(16px,1.4vw,20px)] leading-relaxed text-[#F2F2F2]">
        {quote}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-700">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{name}</div>
            <div className="text-xs text-[#A0A0A5]">{role}</div>
          </div>
        </div>

        {/* LinkedIn icon placeholder – swap with your SVG/icon component */}
        <button
          aria-label="LinkedIn profile"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/40 text-xs text-white hover:bg-white hover:text-black transition"
        >
          in
        </button>
      </div>
    </motion.article>
  );
}
