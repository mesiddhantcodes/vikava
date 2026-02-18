"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/lasttag/scroll1.avif",
  "/lasttag/scroll2.avif",
  "/lasttag/scroll3.webp",
  "/lasttag/scroll4.avif",
  "/lasttag/scroll5.avif",
  "/lasttag/scroll6.avif",
];

export function ImageStaggerSection() {
  const sectionRef = useRef(null);

  // Wait until the section is mounted before using it
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black z-20"
    >
      <div className="flex ">
        {images.map((src, idx) => {
          const appearStart = idx / images.length;
          const appearEnd = (idx + 1) / images.length;

          const opacity = useTransform(scrollYProgress, [appearStart, appearEnd], [0, 1]);
          const y = useTransform(scrollYProgress, [appearStart, appearEnd], [80, 0]);

          return (
            <motion.img
              key={`${src}-${idx}`} // <-- Unique key for each image (fixes duplication bug)
              src={src}
              alt={`Image ${idx + 1}`}
              width={231}
              height={840}
              className="rounded-[24px] object-cover bg-gray-900 w-[231px] h-[840px] "
              style={{ opacity, y }}
            />
          );
        })}
      </div>
    </section>
  );
}
