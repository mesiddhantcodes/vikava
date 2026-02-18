"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const servicesData = [
  {
    number: "01",
    label: "Serve",
    title: "Startups & D2C Brands",
    description:
      "Let's talk about your goals, challenges, dreams, ideas, and what you actually want to build.",
  },
  {
    number: "02",
    label: "Serve",
    title: "Exporters & Buying Houses",
    description:
      "Order-winning designs aligned to buyer requirements in the US, Europe, and Australia.",
  },
  {
    number: "03",
    label: "Serve",
    title: "Retailers & Marketplace Sellers",
    description:
      "Quick seasonal capsules, pitch kits, and conversion-focused PDP-ready designs.",
  },
  {
    number: "04",
    label: "Serve",
    title: "Multi-Designer Stores & Couture Labels",
    description:
      "Curated collections, with couture-to-commercial adaptations.",
  },
];

export default function WhoWeServeSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll transform - different values for mobile/desktop
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-260%" : "-75%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F6F0]"
      style={{ height: "400vh" }}
    >
      {/* Sticky Container - navbar aware */}
      <div className="sticky top-[90px] sm:top-0 h-[calc(100vh-90px)] sm:h-screen overflow-hidden">
        {/* Header - Responsive positioning & sizing */}
        <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 xl:top-20 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 z-20 px-2">
          <p className="text-[12px] sm:text-[14px] absans-400 text-[#090502] uppercase tracking-widest mb-2 sm:mb-4">
            WHO WE SERVE?
          </p>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] absans-400 leading-tight text-[#090502] font-light">
            Made for Brands
            <br />
            that Scale
          </h2>
        </div>

        {/* Horizontal Scrolling Cards Container - Responsive padding */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:pt-64 xl:pt-72 pt-52 sm:pt-56 md:pt-60">
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex gap-4 sm:gap-6 w-full"
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] lg:w-[480px] xl:w-[540px] 
                         h-[320px] sm:h-[360px] md:h-[380px] lg:h-[400px] xl:h-[428px] 
                         bg-[#F1EBDF] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col"
              >
                {/* Top Section - Gray Box with Number - Responsive */}
                <div className="relative bg-[#C7BEAD] h-[100px] sm:h-[120px] md:h-[130px] lg:h-[140px] xl:h-[160px] 
                               rounded-xl sm:rounded-2xl flex items-start justify-between 
                               p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 m-3 sm:m-4 overflow-hidden">
                  {/* "Serve" Label */}
                  {/* <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] absans-400 text-white/90 uppercase tracking-wide">
                    {service.label}
                  </p> */}

                  {/* Large Number - Responsive overflow */}
                  <div className="absolute bottom-[-30px] sm:bottom-[-35px] lg:bottom-[-40px] 
                                 leading-none">
                    <span className="text-[120px] sm:text-[140px] md:text-[150px] lg:text-[160px] xl:text-[184px] 
                                   absans-400 font-light text-white/50 block leading-none">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Bottom Section - Content - Responsive */}
                <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-center">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] 
                                absans-400 text-[#090502] mb-3 sm:mb-4 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] absans-400 
                               text-[#090502] leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
