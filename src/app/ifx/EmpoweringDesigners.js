"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function EmpoweringDesigners() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imageGroups = [
    {
      id: 1,
      center: "/ifx/grow1.avif",
      left: "/ifx/left1.avif",
      right: "/ifx/right1.avif",
      title: "Strategic Partnerships with Designers",
    },
    {
      id: 2,
      center: "/ifx/Global & Category Expansion.jpg",
      left: "/ifx/left2.avif",
      right: "/ifx/right2.avif",
      title: "Global & Category Expansion",
    },
    {
      id: 3,
      center: "/ifx/grow3.avif",
      left: "/ifx/left3.avif",
      right: "/ifx/right3.avif",
      title: "Mentoring & Techinal Assistance",
    },
    {
      id: 4,
      center: "/ifx/Virtual Showroom & Portfolio Presentations.jpg",
      left: "/ifx/left4.avif",
      right: "/ifx/right4.avif",
      title: "Virtual Showroom & Portfolio Presentations",
    },
    {
      id: 5,
      center: "/ifx/Strategic Collabortion & Networking.jpg",
      left: "/ifx/left5.avif",
      right: "/ifx/right5.avif",
      title: "Strategic Collabortion & Networking",
    },
  ];

  const sideSpring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
  };

  const centerSpring = {
    type: "spring",
    stiffness: 350,
    damping: 28,
    mass: 0.9,
  };

  // Mobile tap handler
  const handleMobileTap = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#EDEBEC] py-12 lg:py-20">
      <div className="w-full mx-auto px-4 lg:px-0">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16 garamond-400"
          style={{
            fontSize: "clamp(40px, 5vw, 112px)",
            lineHeight: "1.2",
            color: "#2b2622",
          }}
        >
          Empowering <br /> Designers to <br />
          Grow
        </motion.h1>

        {/* MOBILE LAYOUT */}
        {isMobile && (
          <div className="flex flex-col gap-4">
            {imageGroups.map((group, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={group.id}
                  className="relative overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => handleMobileTap(index)}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    height: isExpanded ? "auto" : "280px",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Center Image */}
                  <div className="relative w-full h-[280px]">
                    <Image
                      src={group.center}
                      alt={group.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Title always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white mont-600 text-lg leading-tight">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expanded Side Images */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-2 p-2 bg-white"
                      >
                        <div className="relative h-[180px] overflow-hidden ">
                          <Image
                            src={group.left}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                        <div className="relative h-[180px] overflow-hidden ">
                          <Image
                            src={group.right}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* DESKTOP LAYOUT */}
        {!isMobile && (
          <div className="flex flex-col gap-2">
            {imageGroups.map((group, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={group.id}
                  className="relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* LEFT IMAGE */}
                  <motion.div
                    className="absolute left-0"
                    style={{
                      zIndex: isHovered ? 1 : 0,
                      transformOrigin: "right center",
                    }}
                    initial={false}
                    animate={{
                      y: isHovered ? 0 : 80,
                      x: isHovered ? 0 : 200,
                      scale: isHovered ? 1 : 0.75,
                      rotateZ: isHovered ? 0 : -8,
                      rotateY: isHovered ? 0 : 20,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={sideSpring}
                  >
                    <div
                      className="
                        relative overflow-hidden shadow-2xl
                        w-[280px] h-[190px]
                        sm:w-[420px] sm:h-[285px]
                        lg:w-[620px] lg:h-[422px]
                      "
                    >
                      <Image
                        src={group.left}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* CENTER IMAGE */}
                  <motion.div
                    className="relative overflow-hidden shadow-xl"
                    style={{ zIndex: 3 }}
                    initial={false}
                    animate={{
                      width: isHovered ? "700px" : "740px",
                      height: isHovered ? "515px" : "540px",
                    }}
                    transition={centerSpring}
                  >
                    <div
                      className="
                        absolute top-1/2 left-1/2
                        w-[300px] h-[220px]
                        sm:w-[500px] sm:h-[365px]
                        lg:w-[740px] lg:h-[540px]
                      "
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      <Image
                        src={group.center}
                        alt={group.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Overlay text */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <h3
                        className="text-white mont-400 text-center px-4 leading-9"
                        style={{ fontSize: "clamp(24px, 2vw, 36px)" }}
                      >
                        {group.title}
                      </h3>
                    </motion.div>
                  </motion.div>

                  {/* RIGHT IMAGE */}
                  <motion.div
                    className="absolute right-0"
                    style={{
                      zIndex: isHovered ? 1 : 0,
                      transformOrigin: "left center",
                    }}
                    initial={false}
                    animate={{
                      y: isHovered ? 0 : 80,
                      x: isHovered ? 0 : -200,
                      scale: isHovered ? 1 : 0.75,
                      rotateZ: isHovered ? 0 : 8,
                      rotateY: isHovered ? 0 : -20,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={sideSpring}
                  >
                    <div
                      className="
                        relative overflow-hidden shadow-2xl
                        w-[280px] h-[190px]
                        sm:w-[420px] sm:h-[285px]
                        lg:w-[620px] lg:h-[422px]
                      "
                    >
                      <Image
                        src={group.right}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
