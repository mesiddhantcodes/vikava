"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const letters = ["M", "A", "C"];

  const pillars = [
    { label: "CLARITY", key: "clarity" },
    { label: "CONFIDENCE", key: "confidence" },
    { label: "SCALE", key: "scale" },
  ];

  const logoVariants = {
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9],
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const wavyText =
    "MAC (mentorship • advisory • compliance) by vikava labs is founder’s operating system- mentorship, governance, and execution under one roof. Backed by 26+ years of business-building experience, we act as your co-pilot, less chaos. fewer blind spots. faster, safer execution. Growth with clarity and confidence."
  const words = wavyText.split(" ");

  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        flex flex-col
        items-center
        pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8
        gap-6 sm:gap-8
        bg-transparent
        z-10
        overflow-hidden
      "
    >
      {/* subtle animated overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="relative w-[97%] z-20 flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-0">
        {/* Logo - Responsive */}
        <motion.div
          className="flex items-center justify-center w-full gap-2 sm:gap-8 lg:gap-12"
          initial="initial"
          animate="animate"
          variants={logoVariants}
        >
          {letters.map((l) => (
            <motion.span
              key={l}
              variants={letterVariants}
              className="font-black text-white hooskaichamfered"
              style={{
                fontWeight: 900,
                fontSize: "clamp(5rem, 26vw, 91rem)", // Smaller mobile max
                lineHeight: "0.9",
                letterSpacing: "clamp(4px, 1vw, 15px)",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {l}
            </motion.span>
          ))}
        </motion.div>
        {/* Divider */}
        <div className="w-full h-[1.5px] sm:h-[2px] bg-black/20 z-10 mx-auto max-w-[1450px]" />
        {/* Pillars - Responsive */}
        <div className="flex flex-wrap sm:flex-nowrap justify-around w-full px-4 sm:px-8 max-w-7xl mx-auto gap-8 sm:gap-12 lg:gap-48">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.15, duration: 0.6 }}
              className="text-white spacegrotesk-bold tracking-widest text-center flex-1 min-w-[120px] sm:min-w-0"
              style={{
                fontSize: "clamp(18px, 4vw, 32px)", // Responsive pillar text
              }}
            >
              {pillar.label}
            </motion.div>
          ))}
        </div>
        <div className="w-full h-[1.5px] sm:h-[2px] bg-black/20 z-10 mx-auto max-w-[1450px]" />
        {/* Tagline - Responsive */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white text-center px-4 sm:px-8 font-semibold spacegrotesk-regular leading-relaxed"
          style={{
            fontSize: "clamp(18px, 3vw, 27px)",
          }}
        >
          NOT A COURSE, NOT JUST CONSULTING - AN OPERATING SYSTEM FOR FOUNDERS.
        </motion.p>
        {/* Image - Responsive */}
        <div className="w-full flex justify-center py-8 lg:px-28">
          <div className="relative w-full overflow-hidden rounded-t-lg shadow-xl">

            {/* IMAGE */}
            <img
              src="/mac/man.jpg"
              alt="Founder visual"
              className="w-full h-auto object-cover relative z-0"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: 'url("/mac/bgpng.png")',
                backgroundRepeat: "repeat",
                opacity: 0.09,
                width: "400%",
                height: "400%",
                transform: "translateX(-1%) translateY(-2%)",
                willChange: "transform",
              }}
            />

          </div>
        </div>

        {/* Wavy text - Responsive */}
        <div className="text-white text-center px-2 sm:px-4 lg:px-3 mx-auto mt-12 sm:mt-16 lg:mt-28 max-w-[1342px]">
          <div className="flex flex-wrap justify-center gap-x-[4px] sm:gap-x-[6px] lg:gap-x-[10px] min-h-[200px] sm:min-h-[300px] lg:min-h-[490px]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -8, 0] }}
                transition={{
                  delay: 1.5 + i * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="inline-block uppercase spacegrotesk-regular"
                style={{
                  fontSize: "clamp(20px, 4vw, 44px)",
                  lineHeight: "clamp(32px, 5vw, 70px)",
                  fontWeight: 600,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
