"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BlurText from "@/Components/BlurText";

const HeroSection = () => {
  const containerRef = useRef(null);
  const particleRefs = useRef([]);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const imageParticles = [
    { src: "/vikava/1.jpg", x: -40, y: -20, size: 190, hsize: 220, mobileSize: 140 },
    { src: "/vikava/2.avif", x: 0, y: -55, size: 120, mobileSize: 100 },
    { src: "/vikava/3.avif", x: 5, y: -55, size: 180, hsize: 190, mobileSize: 110 },
    { src: "/vikava/4.avif", x: 32, y: -25, size: 110, hsize: 140, mobileSize: 80 },
    { src: "/vikava/5.jpg", x: 25, y: 25, size: 190, hsize: 240, mobileSize: 105 },
    { src: "/vikava/6.avif", x: 36, y: 30, size: 145, mobileSize: 95 },
    { src: "/vikava/8.avif", x: -42, y: 30, size: 130, hsize: 115, mobileSize: 95 },
    { src: "/vikava/9.webp", x: 0, y: 30, size: 145, mobileSize: 95 },
    { src: "/vikava/7.avif", x: -35, y: 20, size: 155, hsize: 175, mobileSize: 85 },
  ];

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.scrollTo(0, 0);

    const container = containerRef.current;
    if (!container) return;

    let hasEntered = false;

    const initParticles = () => {
      const { width, height } = container.getBoundingClientRect();
      const mobile = window.innerWidth < 768;

      particlesRef.current = imageParticles.map((p) => {
        const baseX = (p.x / 100) * width;
        const baseY = (p.y / 100) * height;

        return {
          ...p,
          baseX,
          baseY,
          depth: 0.35 + Math.random() * 0.6,
          r1: Math.random() * Math.PI * 2,
          r2: Math.random() * Math.PI * 2,
          size: mobile ? p.mobileSize : p.size,
        };
      });
    };

    initParticles();

    let resizeRAF = null;
    const handleResize = () => {
      if (resizeRAF) return;
      resizeRAF = requestAnimationFrame(() => {
        updateIsMobile();
        initParticles();
        resizeRAF = null;
      });
    };

    const handlePointerMove = (x, y) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x =
        (x - rect.left - rect.width / 2) / (rect.width / 2);
      mouseRef.current.y =
        (y - rect.top - rect.height / 2) / (rect.height / 2);
    };

    const handleMouseMove = (e) =>
      handlePointerMove(e.clientX, e.clientY);

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    let time = 0;
    const speed = 0.001;

    const animate = () => {
      time += speed;

      const floatIntensity = isMobile ? 10 : 20;
      const hoverIntensity = isMobile ? 6 : 15;

      particlesRef.current.forEach((p, i) => {
        const el = particleRefs.current[i];
        if (!el) return;

        const floatX = Math.sin(time + p.r1) * floatIntensity;
        const floatY = Math.cos(time + p.r2) * floatIntensity;

        const mouseX = mouseRef.current.x * hoverIntensity * p.depth;
        const mouseY = mouseRef.current.y * hoverIntensity * p.depth;

        el.style.transform = `translate(${p.baseX + floatX + mouseX}px, ${p.baseY + floatY + mouseY
          }px)`;

        // 🔑 Reveal only AFTER first valid placement
        if (!hasEntered) {
          el.style.visibility = "visible";
          el.style.opacity = isMobile ? "0.6" : "1";
        }

        el.style.zIndex = Math.floor(p.depth * 10);
      });

      hasEntered = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  return (
    <section className="relative w-full h-[90dvh] bg-[#F3F0EB] overflow-hidden">
      {/* Images */}
      <div ref={containerRef} className="absolute inset-0 z-10">
        {imageParticles.map((p, i) => (
          <div
            key={i}
            ref={(el) => (particleRefs.current[i] = el)}
            className="absolute left-1/2 top-1/2 pointer-events-none will-change-transform transition-opacity duration-700"
            style={{
              width: isMobile ? p.mobileSize : p.size,
              height: isMobile ? p.mobileSize : p.hsize || p.size,
              visibility: isMobile ? "visible" : "hidden",
              opacity: isMobile ? 0.6 : 0,
            }}
          >
            <Image
              src={p.src}
              alt=""
              width={isMobile ? p.mobileSize : p.size}
              height={isMobile ? p.mobileSize : p.size}
              className="w-full h-full object-cover rounded-lg shadow-xl"
              draggable={false}
              priority={i < 4}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <BlurText
          text="VIKAVA LABS"
          animateBy="words"
          delay={0.15}
          direction="up"
          className="geist-bold text-[#202020] text-5xl md:text-7xl lg:text-8xl md:flex justify-center items-center"
          style={{ lineHeight: 1 }}
        />

        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2">
          <BlurText
            text="where ideas"
            animateBy="words"
            delay={0.3}
            direction="up"
            className="greatvibes-regular text-[#202020] text-5xl md:text-7xl lg:text-8xl md:flex justify-center items-center"
          />
          <BlurText
            text="grow."
            animateBy="letters"
            delay={0.1}
            direction="up"
            className="geist-bold text-[#202020] text-5xl md:text-7xl lg:text-8xl -mt-2 md:-mt-4 md:flex justify-center items-center"
            style={{ lineHeight: 1 }}
          />
        </div>

        <BlurText
          text="From Chaos to Clarity - One Accountable Execution Partner"
          animateBy="words"
          direction="up"
          className="mt-3 text-xl text-[#2b2622] geist-semibold tracking-wide max-w-[90%] sm:max-w-[70%] lg:max-w-[55%] md:flex justify-center items-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
