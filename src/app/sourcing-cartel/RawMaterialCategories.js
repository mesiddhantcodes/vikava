"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0, // Trigger columns simultaneously
        },
    },
};

const leftContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15, // Stagger internal cards
        },
    },
};

const leftItem = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const rightItem = {
    hidden: { opacity: 0, x: 60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function RawMaterialCategories() {
    return (
        <section className="w-full bg-black py-40 md:py-48 px-6 lg:px-16">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="
          max-w-[1400px]
          mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-16
          items-center
        "
            >
                {/* LEFT COLUMN – TEXT + IMAGE (Originally Right) */}
                <motion.div
                    variants={leftItem} // Mirrored: Logic for "Left" item appearance
                    className="flex flex-col gap-10 text-white order-1 lg:order-1"
                >
                    {/* Heading */}
                    <h2
                        className="
              text-[#C41510] alumnisans-bold 
              leading-[0.7]
              text-[48px]
              sm:text-[64px]
              lg:text-[80px]
            "
                    >
                        RAW MATERIAL
                        <br />
                        CATEGORIES
                    </h2>

                    {/* Description */}
                    <p
                        className="
              aileron-regular
              text-[18px]
              leading-[1.6]
              max-w-[520px]
            "
                    >
                        Fibers, fabrics, trims, and processes sourced with reliability,
                        compliance, and cost efficiency.
                    </p>

                    {/* Image */}
                    <div className="relative w-full max-w-[420px] h-[260px] rounded-lg overflow-hidden">
                        <Image
                            src="/sustain/new2.avif" // Using placeholder for now
                            alt="Raw Materials example"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* RIGHT COLUMN – RED BOXES (Originally Left) */}
                <motion.div
                    variants={leftContainer} // Actually "rightContainer" in logic but let's reuse staggerLogic or create rightContainer if needed?
                    // The original used "leftContainer" for the box wrapper. We can reuse it as it just staggers children.
                    className="flex flex-col gap-10 w-full max-w-[464px] mx-auto order-2 lg:order-2"
                >
                    {/* Box 1 - Left Aligned */}
                    <motion.div
                        variants={rightItem} // Mirrored: Coming from right
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-start"
                    >
                        <p className="aileron-regular text-[16px] mb-2 tracking-wide leading-none">01. YARNS</p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            Cotton, wool, viscose, polyester, acrylic, acrowool, etc.
                        </p>
                    </motion.div>

                    {/* Box 2 - Right Aligned */}
                    <motion.div
                        variants={rightItem}
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-end"
                    >
                        <p className="aileron-regular text-[16px] mb-2 tracking-wide leading-none">02. FABRICS</p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            Woven, knitted, handloom, jacquards, denim, etc.
                        </p>
                    </motion.div>

                    {/* Box 3 - Left Aligned */}
                    <motion.div
                        variants={rightItem}
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-start"
                    >
                        <p className="aileron-regular text-[16px] mb-2 tracking-wide leading-none">
                            03. VALUE-ADDS
                        </p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            Dyeing, printing, embroidery, trims, finishing, knitting & weaving.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
