"use client";
import Image from "next/image";

export default function AWordFromTheFounder() {
    return (
        <section className="w-full bg-[#C41510] py-24 px-6 lg:px-20 text-white flex flex-col items-center justify-center text-center">
            {/* HEADING */}
            <h2 className="alumnisans-bold text-[60px] lg:text-[80px] leading-[0.8] uppercase mb-12">
                A WORD FROM
                <br />
                THE FOUNDER
            </h2>

            {/* IMAGE */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden mb-12">
                <Image
                    src="/sustain/word.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                />
            </div>

            {/* QUOTE */}
            <div className="max-w-[1000px] flex flex-col gap-2">
                <p className="aileron-bold text-[16px] lg:text-[18px] uppercase tracking-wide leading-relaxed font-bold">
                    “SOURCING IS GOVERNANCE — WE ALIGN COSTS, CUT LEAKS, AND SHIP ON TIME, EVERY TIME.”
                </p>
                <p className="aileron-bold text-[16px] lg:text-[18px] uppercase tracking-wide opacity-90 font-bold">
                    — PUUNEET AGGARWAL, FOUNDER & MENTOR, VIKAVA LABS
                </p>
            </div>
        </section>
    );
}
