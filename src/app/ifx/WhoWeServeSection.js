"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/ifx/serve1.webp", row: 0, col: 0 },
  { id: 2, src: "/ifx/serve2.webp", row: 0, col: 1 },
  { id: 3, src: "/ifx/serve3.webp", row: 0, col: 2 },
  { id: 4, src: "/ifx/serve4.webp", row: 0, col: 3 },
  { id: 5, src: "/ifx/serve5.webp", row: 1, col: 0 },
  { id: 6, src: "/ifx/serve6.webp", row: 1, col: 1 },
  { id: 7, src: "/ifx/serve7.webp", row: 1, col: 2 },
  { id: 8, src: "/ifx/serve8.webp", row: 1, col: 3 },
  { id: 9, src: "/ifx/serve9.webp", row: 2, col: 0 },
  { id: 10, src: "/ifx/serve10.webp", row: 2, col: 1 },
  { id: 11, src: "/ifx/serve11.webp", row: 2, col: 2 },
  { id: 12, src: "/ifx/serve12.avif", row: 2, col: 3 },
];

export default function WhoWeServeSection() {
  const [visibleImages, setVisibleImages] = useState(
    new Array(images.length).fill(true)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select 2-4 images to toggle
      const numberOfImagesToToggle = Math.floor(Math.random() * 3) + 2;
      const newVisibility = [...visibleImages];

      for (let i = 0; i < numberOfImagesToToggle; i++) {
        const randomIndex = Math.floor(Math.random() * images.length);
        newVisibility[randomIndex] = !newVisibility[randomIndex];
      }

      setVisibleImages(newVisibility);
    }, 800); // Toggle every 0.8 seconds

    return () => clearInterval(interval);
  }, [visibleImages]);

  return (
    <section className="relative bg-[#E8E4E0] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2
          className="garamond-400 text-[#1b1c18] text-center font-bold"
          style={{
            fontSize: "clamp(80px, 12vw, 180px)",
            lineHeight: "1",
            letterSpacing: "0.02em",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Who We Serve
        </h2>
      </div>

      {/* Image Grid */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-full">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 1 }}
              animate={{
                opacity: visibleImages[index] ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="relative w-full aspect-[461/277] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={`Fashion image ${image.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
