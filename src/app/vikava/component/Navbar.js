"use client";

import { motion, AnimatePresence } from "framer-motion";
import { label } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES" },
  { label: "BLOGS", href: "/blogs" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "FOUNDER COMMUNITY", href: "/blogs/vikava-labs-founders-community-ek-saath-safar" }
];

const businessPods = [
  { label: "Business strategy & founder advisory", href: "/mac" },
  { label: "Creative design & visual identity", href: "/vikava_design_lab" },
  { label: "Branding, content & digital visibility", href: "/last-hashtag" },
  { label: "Ecommerce & marketplace growth", href: "/ecom_reworked" },
];

const fashionPods = [
  { label: "Design Library & Digital Showroom", href: "/design-library-of-india" },
  { label: "Textile & apparel product design", href: "/design-cartel" },
  { label: "Textile & apparel sourcing", href: "/sourcing-cartel" },
  { label: "Sustainable sourcing & supply chain", href: "/sustainable-design-library" },
  { label: "Couture & designer commerce", href: "/ifx" },
];

const serviceShortNames = {
  "/mac": "MAC",
  "/last-hashtag": "LAST #TAG",
  "/design-cartel": "DESIGN CARTEL",
  "/vikava_design_lab": "VIKAVA DESIGN LAB",
  "/sourcing-cartel": "SOURCING CARTEL",
  "/sustainable-design-library": "SUSTAINABLE DESIGN LIBRARY",
  "/design-library-of-india": "DLI",
  "/ifx": "IFX",
  "/ecom_reworked": "E-COM REWORKED",
};

const itemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const pathname = usePathname();

  // 🔑 run animation only once per session
  useEffect(() => {
    const hasAnimated = localStorage.getItem("navbarAnimated");

    if (!hasAnimated) {
      setShouldAnimate(true);
      localStorage.setItem("navbarAnimated", "true");
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#F3F0EB] h-[98px]">
        <div className="mx-auto flex h-full w-[98%] items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link href="/" aria-label="Vikava Labs">
              <Image
                src="/vikava/logo.avif"
                alt="Vikava Labs"
                width={800}
                height={800}
                className="w-[80px] h-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              if (item.label === "SERVICES") {
                return (
                  <ServicesNavItem
                    key={item.label}
                    index={index}
                    shouldAnimate={shouldAnimate}
                    pathname={pathname}
                  />
                );
              }

              return (
                <motion.div
                  key={item.label}
                  custom={index}
                  initial={shouldAnimate ? "hidden" : false}
                  animate="visible"
                  variants={itemVariant}
                  className="flex items-center gap-0 text-[14px] geist-medium tracking-[0.2em] text-[#2b2622] uppercase"
                >
                  <span>•</span>
                  <Link
                    href={item.href}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Contact Button */}
            <Link href="/contact">
              <motion.button
                initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#141319] px-6 py-2 text-[16px] font-medium text-white shadow-sm hover:translate-y-[1px] hover:shadow-md transition-all"
              >
                Contact
                <AnimatedDots />
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}}
              className="w-6 h-0.5 bg-[#2b2622]"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : {}}
              className="w-6 h-0.5 bg-[#2b2622]"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
              className="w-6 h-0.5 bg-[#2b2622]"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[98px] left-0 z-40 w-full h-[calc(100vh-98px)] bg-[#F3F0EB] md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item) =>
                item.label === "SERVICES" ? (
                  <MobileServicesItem
                    key="services"
                    closeMenu={() => setIsMobileMenuOpen(false)}
                    pathname={pathname}
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-[18px] geist-medium tracking-[0.1em] text-[#2b2622] uppercase"
                  >
                    <span>•</span>
                    {item.label}
                  </Link>
                )
              )}

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="
      w-full
      inline-flex items-center justify-center gap-2
      rounded-full
      bg-[#141319]
      px-6 py-3
      text-[16px] font-medium text-white
      shadow-sm
      active:scale-[0.98]
      transition-all
    "
                >
                  Contact
                  <AnimatedDots />
                </motion.button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ServicesNavItem({ index, shouldAnimate, pathname }) {
  const [open, setOpen] = useState(false);
  const activeServiceShort = serviceShortNames[pathname];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        custom={index}
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
        variants={itemVariant}
        className="flex items-center gap-1 cursor-pointer text-[14px] geist-medium tracking-[0.2em] text-[#2b2622] uppercase"
      >
        <span>•</span>
        SERVICES
        {activeServiceShort && (
          <span className="text-[#6D6D6D]"> / {activeServiceShort}</span>
        )}
        <span className="font-semibold">+</span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-1/2 top-full -translate-x-1/2 mt-3 z-40"
          >
            <div className="bg-[#1b1a17] px-8 py-8 w-[700px] shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-2 gap-12">
                {/* Column 1: Business Pods */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[14px] font-bold text-[#6D6D6D] uppercase tracking-wider mb-2">
                    Business Building Pods
                  </h3>
                  {businessPods.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="text-[14px] geist-medium text-[#F3F0EB] hover:text-white transition-colors block"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>

                {/* Column 2: Fashion Pods */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[14px] font-bold text-[#6D6D6D] uppercase tracking-wider mb-2">
                    Fashion & Textiles Pods
                  </h3>
                  {fashionPods.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="text-[14px] geist-medium text-[#F3F0EB] hover:text-white transition-colors block"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileServicesItem({ closeMenu, pathname }) {
  const [open, setOpen] = useState(false);
  const activeServiceShort = serviceShortNames[pathname];

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between text-[18px] geist-medium tracking-[0.1em] text-[#2b2622] uppercase"
      >
        <span className="flex gap-2">
          <span>•</span> SERVICES
          {activeServiceShort && (
            <span className="text-[#6D6D6D]"> / {activeServiceShort}</span>
          )}
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }}>+</motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-6 mt-3 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {/* Business Pods */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[12px] font-bold text-[#6D6D6D] uppercase tracking-wider">
                  Business Building Pods
                </h3>
                {businessPods.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMenu}
                    className="text-[14px] geist-medium text-[#2b2622]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>

              {/* Fashion Pods */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[12px] font-bold text-[#6D6D6D] uppercase tracking-wider">
                  Fashion & Textiles Pods
                </h3>
                {fashionPods.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMenu}
                    className="text-[14px] geist-medium text-[#2b2622]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedDots() {
  return (
    <motion.span
      className="flex gap-[3px] text-[10px]"
      animate={{ transition: { staggerChildren: 0.25, repeat: Infinity } }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          •
        </motion.span>
      ))}
    </motion.span>
  );
}
