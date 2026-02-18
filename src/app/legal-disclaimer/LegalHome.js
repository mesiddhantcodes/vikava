"use client";

import { motion } from "framer-motion";

import Image from "next/image";
const fadeUp = {
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6, ease: "easeOut" },
};
export default function LegalHome() {
    return (
        <section className="relative h-[95dvh] w-full overflow-hidden">
            {/* Background */}
            <Image
                src="/vikava/privacy.webp"
                alt="People connecting"
                fill
                priority
                className="object-cover"
            />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full items-end px-6 py-18 sm:px-10 lg:px-10">
                <div className="max-w-[95%] text-[#111111]">
                    <motion.h1
                        className="flex flex-wrap items-baseline gap-x-4 leading-none"
                        aria-label="Legal Disclaimer"
                    >
                        <motion.span
                            {...fadeUp}
                            className="
      geist-bold
      text-[60px]
      sm:text-[90px]
      lg:text-[120px]
    "
                        >
                            Legal
                        </motion.span>

                        <motion.span
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.1 }}
                            className="
        text-[60px]
      sm:text-[90px]
      lg:text-[120px]
      leading-none
    "
                        >
                            <span className="greatvibes-regular">Disclaimer</span>
                        </motion.span>
                    </motion.h1>

                    <p className="mt-6 max-w-md geist-bold font-medium leading-snug text-[#111111]">
                        <motion.span
                            {...fadeUp}
                            className="
                  text-[20px]
                  sm:text-[28px]
                  lg:text-[34px]
                "
                        >
                            Everything you need to know about using our website and services.

                        </motion.span>
                    </p>
                </div>
            </div>

            {/* Overlay tint */}
            <div className="pointer-events-none absolute inset-0 bg-black/10" />
        </section>
    );
}
