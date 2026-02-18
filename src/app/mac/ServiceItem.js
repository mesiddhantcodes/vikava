"use client";
import { motion } from "framer-motion";

// Simple icon placeholders - replace with your actual icons
const IconPlaceholder = ({ type }) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2"/>
      <text x="32" y="38" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        {type}
      </text>
    </svg>
  </div>
);

export default function ServiceItem({ number, title, description, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flex items-start gap-6"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 mt-1"
      >
        <IconPlaceholder type={icon} />
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        {/* Number */}
        <span className="text-white spacegrotesk-bold text-lg mb-2 block">
          {number}
        </span>

        {/* Title */}
        <h3 className="text-white spacegrotesk-bold text-xl uppercase mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white spacegrotesk-regular text-sm leading-relaxed uppercase">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
