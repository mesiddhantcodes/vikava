"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChallengeItem({
  title,
  subtitle,
  image,
  index,
  isTextLeft,
}) {
  return (
    <div className="relative w-full">
      {/* HORIZONTAL LINE */}
      <div
        className={`
          absolute top-0 h-[1px] bg-white/20
          w-full
          md:w-1/2
          ${isTextLeft ? "md:left-0" : "md:right-0"}
        `}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.7 }}
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-10 md:gap-8
          pt-12
          items-center
        "
      >
        {/* IMAGE */}
    {/* IMAGE */}
<div
  className={`
    flex justify-center
    order-1
    ${
      isTextLeft
        ? "md:order-2 md:justify-center"
        : "md:order-1 md:justify-center"
    }
  `}
  style={{ perspective: "1200px" }} // perspective on parent
>
  <motion.div
    initial={{ rotateX: 45, rotateY: 45, opacity: 0 }}
    whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.15 + 0.2,
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    }}
    style={{ transformStyle: "preserve-3d" }}
    className="
      relative
      w-[220px] h-[220px]
      sm:w-[260px] sm:h-[260px]
      md:w-[280px] md:h-[280px]
      rounded-full overflow-hidden
    "
  >
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="280px"
      />
    </motion.div>
  </motion.div>
</div>


        {/* TEXT */}
        <div
          className={`
            flex flex-col
            items-center text-center
            order-2
            ${
              isTextLeft
                ? "md:order-1 md:items-end md:text-right"
                : "md:order-2 md:items-start md:text-left"
            }
          `}
        >
          <h3
            className="
              text-white spacegrotesk-regular font-bold uppercase
              text-[32px]
              sm:text-[38px]
              md:text-[44px]
              mb-2
            "
            style={{ lineHeight: "1.2" }}
          >
            {title}
          </h3>

          <p
            className="
              text-white spacegrotesk-regular uppercase
              text-[16px]
              sm:text-[18px]
              md:text-[20px]
              mt-4 md:mt-6
              max-w-[520px]
            "
            style={{ lineHeight: "1.5" }}
          >
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
