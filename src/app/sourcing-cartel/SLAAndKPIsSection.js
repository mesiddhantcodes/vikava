"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const ITEMS = [
    {
        id: 1,
        label: "OTIF shipments (on-time, in-full).",
        image: "/sustain/sla1.avif",
    },
    {
        id: 2,
        label: "First-pass approval rate (proto/PP).",
        image: "/sustain/sla2.avif",
    },
    {
        id: 3,
        label: "Cost variance vs target.",
        image: "/sustain/sla3.avif",
    },
    {
        id: 4,
        label: "Defect rate (AQL) & CAPA closure time.",
        image: "/sustain/sla4.avif",
    },
    {
        id: 5,
        label: "Lead-time adherence (plan vs actual).",
        image: "/sustain/sla5.avif",
    },
];

export default function SLAAndKPIsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleHover = (index) => {
        setDirection(index > (activeIndex ?? 0) ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <section className="w-full bg-white px-6 lg:px-16 py-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* LEFT */}
                <div>
                    <h2 className="text-[#C41510] alumnisans-bold leading-[0.8] text-[60px] lg:text-[80px] uppercase mb-16">
                        SLA & KPIs
                    </h2>

                    <ul className="space-y-6">
                        {ITEMS.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <li
                                    key={item.id}
                                    onMouseEnter={() => !isMobile && handleHover(index)}
                                    onClick={() => handleHover(index)}
                                    className="relative cursor-pointer w-fit"
                                >
                                    <motion.span
                                        className="aileron-regular block text-[20px] md:text-[28px] lg:text-[36px] leading-[0.9] lg:leading-[1.2]"
                                        animate={{
                                            color: isActive ? "#000000" : "#0f0e0e80",
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {item.label}
                                    </motion.span>

                                    {/* Underline */}
                                    <motion.div
                                        className="h-[1px] bg-black/40 origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full max-w-[460px] aspect-square mx-auto overflow-hidden">
                    <AnimatePresence>
                        {activeIndex !== null && ITEMS[activeIndex] && (
                            <motion.div
                                key={ITEMS[activeIndex].image}
                                initial={{
                                    y: direction === 1 ? -500 : 500,
                                }}
                                animate={{
                                    y: 0,
                                }}
                                exit={{
                                    y: direction === 1 ? 500 : -500,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={ITEMS[activeIndex].image}
                                    alt={ITEMS[activeIndex].label}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
