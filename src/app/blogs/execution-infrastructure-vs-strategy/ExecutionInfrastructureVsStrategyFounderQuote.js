"use client";

import { motion } from "framer-motion";

export default function ExecutionInfrastructureVsStrategyFounderQuote() {
    return (
        <section className="w-full bg-[#F4F0E9] px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto flex h-[288px] w-[1305px] max-w-full items-center justify-center rounded-[12px] bg-[#18181D] px-8 text-center"
            >
                <div>
                    <p className="text-[32px] geist-semibold leading-snug text-[#F4F0E9]">
                        “Ideas matter, but infrastructure decides outcomes.”
                    </p>

                    <p className="mt-6 text-[32px] geist-semibold leading-snug text-[#F4F0E9]">
                        — Puuneet Aggarwal, Founder – Vikava Labs
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
