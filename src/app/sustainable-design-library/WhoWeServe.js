"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CARDS_DATA = [
  {
    id: 1,
    title: "Global Importers & Buyers",
    description:
      "Seeking eco-certified apparel, home & lifestyle sourcing from India.",
    img: "/sustain/voters.avif",
  },
  {
    id: 2,
    title: "Export Houses & Manufacturers",
    description: "Needing sustainable raw materials and processes.",
    img: "/sustain/1.avif",
  },
  {
    id: 3,
    title: "D2C & Retail Brands",
    description:
      "Targeting ESG goals, eco-collections, and sustainability storytelling.",
    img: "/sustain/2.avif",
  },
  {
    id: 4,
    title: "Lifestyle & Home Brands",
    description:
      "Looking for authentic handmade crafts with scalable execution.",
    img: "/sustain/3.avif",
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(1);

  const handleCardClick = useCallback((id) => {
    setActive(id);
  }, []);

  return (
    <section className="min-h-screen h-auto lg:h-screen flex flex-col justify-center items-center py-12 lg:py-0 px-4 sm:px-6 lg:px-0">
      <div className="mb-8 sm:mb-10 lg:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-bold font-afacadMedium text-center text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#232323]"
        >
          Who WE SERVE?
        </motion.h2>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:flex w-full max-w-[85%] gap-5 px-10 overflow-hidden">
        {CARDS_DATA.map((card) => {
          const isActive = card.id === active;
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              style={{
                flex: isActive ? 4 : 1,
              }}
              className="
                relative 
                bg-[#9C9C9C] 
                rounded-md 
                overflow-hidden 
                cursor-pointer 
                flex 
                items-center 
                justify-center 
                border border-[#DADADA]
                aspect-700/570      
                w-full
              "
            >
              {/* Text + Image GROUP (stick together) */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -40,
                  rotate: -6,
                  scale: 0.95,
                }}
                animate={
                  isActive
                    ? {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        y: -20,
                        rotate: -4,
                        scale: 0.95,
                      }
                }
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: isActive ? 0.15 : 0,  // ⭐ Added delay for expand
                }}
                style={{
                  transformOrigin: "top right",
                  pointerEvents: isActive ? "auto" : "none",
                }}
                className="absolute bottom-10 w-full flex flex-col items-center"
              >
                {/* TEXT (stuck to image top) */}
                <div className="w-[90%] mb-4 text-[#222]">
                  <h3 className="text-[32px] font-bold">{card.title}</h3>
                  <p className="text-[16px] leading-tight ">
                    {card.description}
                  </p>
                </div>

                {/* IMAGE */}
                <Image
                  src={card.img}
                  alt={card.title}
                  width={720}
                  height={480}
                  className="w-[90%] aspect-[3/2] object-cover rounded-md"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>

              {/* Collapsed vertical title */}
              <div
                style={{
                  opacity: isActive ? 0 : 1,
                  pointerEvents: isActive ? "none" : "auto",
                  transform: "rotate(-90deg)",
                  transformOrigin: "center center",
                  transition: isActive ? "opacity 0.15s" : "opacity 0.5s 0.25s",
                }}
                className="absolute flex flex-col items-center justify-center gap-2"
              >
                <span
                  className="
                    text-[#222] font-bold 
                    text-[16px]     
                    sm:text-[18px]  
                    md:text-[22px]  
                    lg:text-[26px]  
                    xl:text-[28px]  
                    2xl:text-[32px] 
                    whitespace-nowrap
                  "
                >
                  {card.title}
                </span>

                <p
                  className="
                    text-[#222] 
                    text-[12px]    
                    sm:text-[14px]   
                    md:text-[16px]  
                    lg:text-[17px]   
                    xl:text-[18px]   
                    2xl:text-[20px]  
                    text-center 
                    w-auto
                  "
                >
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Layout - UNCHANGED */}
      <div className="lg:hidden w-full max-w-4xl space-y-4 sm:space-y-5">
        {CARDS_DATA.map((card) => {
          const isActive = card.id === active;
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              style={{
                height: isActive ? "auto" : "80px",
                transition: "height 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
              className="relative bg-[#9C9C9C] rounded-md overflow-hidden cursor-pointer border border-[#DADADA]"
            >
              {/* Header (always visible) */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222]">
                  {card.title}
                </h3>
              </div>

              {/* Expanded Content */}
              {isActive && (
                <div
                  style={{
                    opacity: 1,
                    transition: "opacity 0.3s",
                  }}
                  className="px-4 pb-4 sm:px-6 sm:pb-6"
                >
                  <p className="text-sm sm:text-base text-[#222] mb-4 sm:mb-6">
                    {card.description}
                  </p>
                  <div className="w-full flex justify-center">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={800}
                      height={400}
                      className="w-full max-w-md h-48 sm:h-64 md:h-80 object-cover rounded"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
