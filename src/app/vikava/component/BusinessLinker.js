"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const servicesList = [
  {
    id: 1,
    number: "1.",
    label: "Business strategy & founder advisory",
    title: "MAC",
    href: "/mac",
    image: "/vikava/maclink.png",
  },
  {
    id: 2,
    number: "2.",
    label: "Branding, content & digital visibility",
    title: "LAST #TAG",
    href: "/last-hashtag",
    image: "/vikava/lastaglink.png",
  },
  {
    id: 3,
    number: "3.",
    label: "Textile & apparel product design",
    title: "DESIGN CARTEL",
    href: "/design-cartel",
    image: "/vikava/dclink.png",
  },
  {
    id: 4,
    number: "4.",
    label: "Creative design & visual identity",
    title: "VIKAVA DESIGN LAB",
    href: "/vikava_design_lab",
    image: "/vikava/vdllink.png",
  },
  {
    id: 5,
    number: "5.",
    label: "Textile & apparel sourcing",
    title: "SOURCING CARTEL",
    href: "/sourcing-cartel",
    image: "/vikava/sourcinglink.png",
  },
  {
    id: 6,
    number: "6.",
    label: "Sustainable sourcing & supply chain",
    title: "SUSTAINABLE DESIGN LIBRARY",
    href: "/sustainable-design-library",
    image: "/vikava/sdllink.png",
  },
  {
    id: 7,
    number: "7.",
    label: "Design library & digital showroom",
    title: "DLI",
    href: "/design-library-of-india",
    image: "/vikava/dlilink.png",
  },
  {
    id: 8,
    number: "8.",
    label: "Couture & designer commerce",
    title: "IFX",
    href: "/ifx",
    image: "/vikava/ifxlink.png",
  },
  {
    id: 9,
    number: "9.",
    label: "Ecommerce & marketplace growth",
    title: "E-COM REWORKED",
    href: "/ecom_reworked",
    image: "/vikava/ecomlink.png",
  },
];

// Predefined groupings based on your specification
const groupings = {
  "/mac": ["MAC", "LAST #TAG", "VIKAVA DESIGN LAB", "E-COM REWORKED"],
  "/vikava_design_lab": ["VIKAVA DESIGN LAB", "LAST #TAG", "E-COM REWORKED", "MAC"],
  "/last-hashtag": ["LAST #TAG", "VIKAVA DESIGN LAB", "E-COM REWORKED", "MAC"],
  "/ecom_reworked": ["E-COM REWORKED", "MAC", "LAST #TAG", "VIKAVA DESIGN LAB"],
  "/design-cartel": ["DESIGN CARTEL", "SOURCING CARTEL", "DLI", "IFX"],
  "/sustainable-design-library": [
    "SUSTAINABLE DESIGN LIBRARY",
    "SOURCING CARTEL",
    "DESIGN CARTEL",
    "DLI",
  ],
  "/design-library-of-india": [
    "DLI",
    "SOURCING CARTEL",
    "SUSTAINABLE DESIGN LIBRARY",
    "DESIGN CARTEL",
  ],
  "/ifx": ["IFX", "MAC", "LAST #TAG", "VIKAVA DESIGN LAB"],
  "/sourcing-cartel": [
    "SOURCING CARTEL",
    "DESIGN CARTEL",
    "DLI",
    "SUSTAINABLE DESIGN LIBRARY",
  ],
};

const BusinessLinker = () => {
  const pathname = usePathname();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get predefined grouping for current page
  const groupTitles = groupings[pathname] || [
    "MAC",
    "LAST #TAG",
    "VIKAVA DESIGN LAB",
    "E-COM REWORKED",
  ];

  // Find services matching the predefined group titles
  const displayServices = groupTitles
    .map((title) => servicesList.find((service) => service.title === title))
    .filter(Boolean);

  return (
    <section className="relative bg-[#2D2D2D] py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white text-center mb-12 md:mb-16 lg:mb-20 geist-bold leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 64px)" }}
        >
          Explore our other business
          <br />
          growth pods
        </motion.h2>

        {/* 4 Cards - Exact groupings */}
        {/* 4 Cards Grid - Two alignment levels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-start mb-8">
          {displayServices.map((service, index) => {
            const isRaisedLevel = index === 1 || index === 3; // 2nd & 4th cards raised
            // Animation direction: Raised cards from Top (-80), Others from Bottom (80)
            const initialY = isRaisedLevel ? -80 : 80;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: initialY }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`${isRaisedLevel
                  ? "-mt-4 md:-mt-6 lg:-mt-8" // 2nd & 4th cards raised higher
                  : ""
                  }`}
              >
                <Link href={service.href}>
                  <div
                    className="relative h-[240px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                    onMouseEnter={() =>
                      !isMobile && service.href !== pathname && setHoveredCard(service.id)
                    }
                    onMouseLeave={() => !isMobile && setHoveredCard(null)}
                  >
                    {/* Background Image */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${isMobile || service.href === pathname || hoveredCard === service.id
                        ? "opacity-100"
                        : "opacity-0"
                        }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 md:p-7 lg:p-8 z-10">
                      <div>

                        <h3
                          className="text-white geist-bold uppercase tracking-wide"
                          style={{ fontSize: "clamp(16px, 1.8vw, 28px)" }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-end justify-between">
                        <p
                          className="text-white/90 geist-medium max-w-[80%] leading-snug"
                          style={{ fontSize: "clamp(12px, 1.1vw, 17px)" }}
                        >
                          {service.label}
                        </p>
                        <motion.div
                          className="text-white"
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight
                            size={24}
                            strokeWidth={2}
                            className="min-w-[24px]"
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Border */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${hoveredCard === service.id && service.href !== pathname
                        ? "border-white/30"
                        : "border-transparent"
                        }`}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessLinker;
