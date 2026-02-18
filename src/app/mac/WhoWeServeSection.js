"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./constant";
const text = "WHO WE SERVE";
const words = text.split(" ");

export default function WhoWeServeSection() {
  const { mainHeading, description, image, topCards, bottomCards } =
    serviceData;

  return (
    <section className="relative w-full bg-transparent py-10 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[98%] mx-auto">
        {/* Header Section: Heading (left) + Description (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Heading */}
          <motion.h2
            className="text-white spacegrotesk-bold font-black leading-tight uppercase flex flex-wrap"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
              lineHeight: "1.1",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    filter: "blur(12px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4"
          >
            <p
              className="spacegrotesk-regular text-white uppercase leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid - Framer Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Image with Framer Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[240px] lg:h-[486px] rounded-lg overflow-hidden shadow-2xl">
              {/* Main Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* Framer Animated Texture Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("/mac/bgpng.png")',

                  opacity: 0.09,
                  width: "400%",
                  height: "400%",
                  transform: "translateX(-1%) translateY(-2%)",
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Top 2 Cards with Framer Effects */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {topCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full h-[200px] lg:h-[230px] rounded-lg overflow-hidden"
              >
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  index={index}
                  delay={0.3}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Row: 3 Cards with Framer Card Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 lg:mt-12">
          {bottomCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="h-[200px] md:h-[220px] rounded-lg overflow-hidden"
            >
              <ServiceCard
                title={card.title}
                description={card.description}
                index={index + 2}
                delay={0.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
