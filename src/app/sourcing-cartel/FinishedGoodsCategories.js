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

export default function FinishedGoodsCategories() {
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
                {/* LEFT – RED BOXES */}
                <motion.div
                    variants={leftContainer}
                    className="flex flex-col gap-10 w-full max-w-[464px] mx-auto"
                >
                    {/* Box 1 - Right Aligned */}
                    <motion.div
                        variants={leftItem}
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-end"
                    >
                        <p className="aileron-regular  text-[16px] mb-2 tracking-wide leading-none">01. APPAREL</p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            womenswear, menswear, kidswear, knits, wovens.
                        </p>
                    </motion.div>

                    {/* Box 2 - Left Aligned */}
                    <motion.div
                        variants={leftItem}
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-start"
                    >
                        <p className="aileron-regular  text-[16px] mb-2 tracking-wide leading-none">02. HOME FURNISHINGS</p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            Cushions, throws, rugs, carpets, quilts, curtains.
                        </p>
                    </motion.div>

                    {/* Box 3 - Right Aligned */}
                    <motion.div
                        variants={leftItem}
                        className="bg-[#C41510] text-white p-4 w-full max-w-[232px] h-[144px] flex flex-col justify-center self-end"
                    >
                        <p className="aileron-regular  text-[16px] mb-2 tracking-wide leading-none">
                            03. LIFESTYLE PRODUCTS
                        </p>
                        <p className="aileron-regular text-[16px] leading-[1.2]">
                            Bags, belts, shoes, jewellery, scarves, décor accents.
                        </p>
                    </motion.div>
                </motion.div>

                {/* RIGHT – TEXT + IMAGE */}
                <motion.div
                    variants={rightItem}
                    className="flex flex-col gap-10 text-white"
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
                        FINISHED GOODS
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
                        Comprehensive coverage of apparel, home furnishings, and lifestyle
                        products — designed, sourced, and delivered export-ready.
                    </p>

                    {/* Image */}
                    <div className="relative w-full max-w-[420px] h-[260px] rounded-lg overflow-hidden">
                        <Image
                            src="/sustain/new1.avif" // replace with your actual image
                            alt="Home furnishing example"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
