"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Handshake, RefreshCcw, HeartPulse, Network } from "lucide-react";

const ITEMS = [
    {
        id: 1,
        title: "End-to-End Coverage",
        description:
            "Finished goods sourcing and raw material sourcing under one roof.",
        image: "/sustain/partner1.jpg",
        icon: Target,
    },
    {
        id: 2,
        title: "Organised Reliability",
        description:
            "SLAs, QA gates, documentation rigour in an unorganised sector.",
        image: "/sustain/partner2.jpg",
        icon: Handshake,
    },
    {
        id: 3,
        title: "Breadth & Depth",
        description:
            "Apparel, home furnishings (soft/hard), lifestyle products; cluster access (Tirupur,Ludhiana, Jaipur, Panipat, Moradabad, NCR, Mumbai).",
        image: "/sustain/partner3.jpg",
        icon: RefreshCcw,
    },
    {
        id: 4,
        title: "26+ Years of Legacy",
        description:
            "Proven credibility in apparel sourcing India and home furnishing exports.",
        image: "/sustain/partner4.png",
        icon: HeartPulse,
    },
    {
        id: 5,
        title: "Trust as Infrastructure",
        description:
            "Zero hidden commissions, transparent supply chain processes.",
        image: "/sustain/partner5.jpg",
        icon: Network,
    },
];

export default function WhyPartnerWithUs() {
    const [activeId, setActiveId] = useState(1);
    const activeItem = ITEMS.find((i) => i.id === activeId);

    return (
        <section className="w-full bg-white py-24 px-6 lg:px-20">
            <div className="max-w-[95%] md:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* LEFT */}
                <div className="flex flex-col gap-12">
                    {/* Heading & CTA */}
                    <div>
                        <h2 className="text-[#C41510] alumnisans-bold leading-[0.8] text-[60px] lg:text-[80px] uppercase">
                            WHY PARTNER
                            <br />
                            WITH US?
                        </h2>

                        <div className="mt-8">
                            <Link href="/contact">
                                <motion.button
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="
                                        relative bg-[#EEEDE7] geist-medium
                                        rounded-full px-4 py-2
                                        flex items-center gap-3
                                        text-[#232323] text-[16px] font-medium
                                        overflow-hidden 
                                        flex-shrink-0 min-w-[160px]
                                    "
                                >
                                    {/* TEXT */}
                                    <motion.span
                                        variants={{
                                            rest: { y: 0, opacity: 1 },
                                            hover: { y: 80, opacity: 0 },
                                        }}
                                        transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                                        className="relative z-10 whitespace-nowrap"
                                    >
                                        Connect With Us
                                    </motion.span>

                                    <motion.span
                                        variants={{
                                            rest: { y: -80, opacity: 0 },
                                            hover: { y: 0, opacity: 1 },
                                        }}
                                        transition={{ duration: 0.45, ease: [0.56, 0.51, 0.85, 0.84] }}
                                        className="absolute left-5 z-0 whitespace-nowrap"
                                    >
                                        Connect With Us
                                    </motion.span>

                                    {/* ARROW */}
                                    <span className="w-8 h-8 rounded-full bg-[#232323] flex items-center justify-center text-white relative overflow-hidden">
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
                        </div>
                    </div>

                    {/* LIST */}
                    <div className="flex flex-col gap-4">
                        {ITEMS.map((item) => {
                            const isActive = item.id === activeId;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    // Make sure to add transition for smooth background color change
                                    className="cursor-pointer group rounded-xl transition-all duration-300 bg-transparent hover:bg-[#C41510] p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            {/* Icon Box */}
                                            {/* If active, just the icon. If inactive, icon inside red box */}
                                            <div
                                                className="flex items-center justify-center shrink-0 w-8 h-8 bg-[#C41510] rounded-md text-white"
                                            >
                                                <Icon size={isActive ? 18 : 18} strokeWidth={1.5} />
                                            </div>

                                            <span
                                                className="text-[16px] aileron-regular font-medium transition-colors text-black group-hover:text-white"
                                            >
                                                {item.title}
                                            </span>
                                        </div>

                                        <span
                                            className="text-[24px] font-bold transition-colors text-black/60 group-hover:text-white"
                                        >
                                            {isActive ? "×" : "+"}
                                        </span>
                                    </div>

                                    {/* Description Accordion */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pl-[56px] pr-4 pt-2 text-black/80 group-hover:text-white/90 text-[14px] leading-relaxed aileron-regular">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4 pt-[60px] lg:pt-[200px]">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-black text-[18px] leading-tight w-full aileron-regular"
                    >
                        Global sourcing is complex, but with Sourcing Cartel you get more
                        than just a vendor network — you get a partner who ensures
                        reliability, transparency, and scale at every stage of the supply
                        chain.
                    </motion.p>

                    {/* IMAGE */}
                    <div className="relative w-full aspect-[4/3] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem ? activeItem.id : "empty"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                {activeItem && (
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
