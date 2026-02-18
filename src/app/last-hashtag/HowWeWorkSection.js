"use client";
import { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    number: "01",
    label: "EMBEDDED & PROJECT-BASED PODS",
    text: "Full-stack pods embedded as your team for monthly retainers, plus one-time campaigns, launches, and festive activations.",
    image: "/lasttag/click1.jpg",
  },
  {
    number: "02",
    label: "PERFORMANCE-LINKED ENGAGEMENTS",
    text: "Affiliate and influencer models tied directly to measurable outcomes.",
    image: "/lasttag/click2.avif",
  },
  {
    number: "03",
    label: "TRAINING & WORKSHOPS",
    text: "Upskilling teams with the latest growth playbooks and best practices.",
    image: "/lasttag/click3.avif",
  },
  {
    number: "04",
    label: "STRATEGIC CONSULTING",
    text: "Marketing audits and growth transformation roadmaps for actionable, scalable results.",
    image: "/lasttag/click4.avif",
  },
];

export function HowWeWorkSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const activeItem = items[activeIndex] || items[0];

  /* ---------- MOUNT ---------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- SCREEN SIZE ---------- */
  useEffect(() => {
    if (!mounted) return;

    const updateScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, [mounted]);

  /* ---------- MOUSE PARALLAX (DESKTOP ONLY) ---------- */
  useEffect(() => {
    items.forEach((item) => {
      const img = new window.Image();
      img.src = item.image;
    });
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktop) return;

    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouse({
        x: ((e.clientX - cx) / cx) * 20,
        y: ((e.clientY - cy) / cy) * 20,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mounted, isDesktop]);

  if (!mounted) {
    return <section className="w-full bg-[#effaf0] min-h-[1000px]" />;
  }

  /* ---------- SAFE DERIVED VALUES ---------- */
  const imageOffset = activeIndex * (isDesktop ? 110 : 90);

  return (
    <section
      className="w-full bg-[#effaf0] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden relative z-0"
      style={{ minHeight: isDesktop ? "1200px" : "auto" }}
    >
      <motion.div className="w-full flex justify-center items-center mb-28">
        <Link href="/portfolio?tab=photography">
          {" "}
          <motion.button
            type="button"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative bg-[#F3F0EB] geist-medium rounded-full px-4 py-2 flex items-center gap-2 text-black text-[16px]    transition-all duration-300"
          >
            <span className="relative h-[22px] overflow-hidden flex items-center">
              {/* DEFAULT TEXT */}
              <motion.span
                variants={{
                  rest: { y: 0 },
                  hover: { y: 34 },
                }}
                transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                className="block whitespace-nowrap"
              >
                Explore Our Work
              </motion.span>

              {/* HOVER TEXT */}
              <motion.span
                variants={{
                  rest: { y: -34 },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                className="absolute left-0 whitespace-nowrap"
              >
                Explore Our Work
              </motion.span>
            </span>
            {/* DEFAULT TEXT */}

            {/* ARROW */}
            <span className="ml-2 w-[36px] h-[36px] text-[20px] rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden">
              <motion.span
                variants={{
                  rest: { x: -80, opacity: 0 },
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                className="absolute"
              >
                →
              </motion.span>

              <motion.span
                variants={{
                  rest: { x: 0, opacity: 1 },
                  hover: { x: 80, opacity: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                className="absolute"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </Link>
      </motion.div>
      {/* HEADER */}
      <motion.div
        className="flex flex-col lg:flex-row items-start justify-between w-full mb-12 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="galindo-regular text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[110px] font-bold text-[#232323] leading-[1]">
          How we work?
        </h1>

        <p className="inter-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#222] leading-[1.6] max-w-[490px]">
          We don't just deliver services – we embed ourselves as your growth
          partner. From full-stack pods and project-based campaigns to
          performance-linked engagements, training, and strategic consulting,
          every action is designed to drive measurable results and scale your
          brand efficiently.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-8 max-w-[1200px]">
        {/* LEFT LIST */}
        <div className="flex flex-col w-full lg:max-w-[900px] gap-6 relative z-20 pointer-events-auto">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={item.label}
                onClick={() => setActiveIndex(idx)}
                className="w-full text-left cursor-pointer select-none  p-4 transition-colors duration-300 hover:bg-[#A5f0b2]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="inter-regular text-[#232323] opacity-70 text-[18px] tracking-[2px]">
                    {item.number}
                  </span>

                  <span className="inter-medium text-[#111] text-[28px] lg:text-[40px] tracking-[-0.5px]">
                    {item.label}
                    <span className="ml-2">{isActive ? "×" : "+"}</span>
                  </span>
                </div>

                {isActive && (
                  <motion.p
                    className="inter-regular font-semibold text-[#111] mt-2 ml-[52px] text-[16px] lg:text-[20px] max-w-[520px]"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.text}
                  </motion.p>
                )}
              </button>
            );
          })}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-shrink-0 w-full lg:w-[260px] pb-24 lg:pb-0">
          <motion.div
            key={activeIndex}
            animate={{
              // y: isDesktop ? imageOffset : 0, // Removed to prevent overflow
              x: isDesktop ? mouse.x : 0,
              translateY: isDesktop ? mouse.y : 0,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:sticky lg:top-40 pointer-events-none mt-8 lg:mt-0"
          >
            <div
              className="rounded overflow-hidden shadow-xl mx-auto lg:mx-0 relative"
              style={{
                width: isDesktop ? "240px" : "200px",
                height: isDesktop ? "280px" : "180px",
              }}
            >
              {/* <Image
                src={activeItem.image}
                alt={activeItem.label}
                fill
                className="object-cover"
                priority
              /> */}
              <Image
                src={activeItem.image}
                alt={activeItem.label}
                fill
                quality={75}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZWVlZWVlIi8+"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
