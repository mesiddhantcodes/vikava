"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, index, delay = 0 }) {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, margin: "-50px" }}
      // transition={{ delay: delay + index * 0.1, duration: 0.6 }}
      className="
        w-full h-full
        flex flex-col
        spacegrotesk-regular
        p-5
        hover:shadow-2xl
        transition-all duration-300
      "
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(255, 255, 255)",
        borderRadius: "7px",
      }}
    >
      {/* Title */}
      <h3 className="text-black spacegrotesk-bold font-bold text-lg md:text-[22px] tracking-wide uppercase">
        {title}
      </h3>

      {/* Spacer pushes description to bottom */}
      <div className="flex-1" />

      {/* Description at bottom */}
      <p className="text-gray-800 spacegrotesk-regular text-sm md:text-base leading-relaxed uppercase">
        {description}
      </p>
    </motion.div>
  );
}
