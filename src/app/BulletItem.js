"use client";

import { motion } from "framer-motion";

export default function BulletItem({ children }) {
  return (
    <motion.li
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        text-[#2D2C23] text-[14px] pl-4 relative
      "
    >
      {/* Bullet Dot */}
      <span
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-[6px] h-[6px] bg-[#2D2C23] rounded-full
          transition-all duration-300
        "
      />

      {children}
    </motion.li>
  );
}
