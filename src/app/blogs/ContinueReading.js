// app/components/ContinueReading.jsx
"use client";

import Image from "next/image";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

const posts = [
    {
        id: 1,
        date: "Jun 19, 2025",
        title: "Ideas that shape tomorrow",
        image: "/vikava/blog1.jpg",
        link: "/blogs/ideas-that-shape-tomorrow-1"

    },
    {
        id: 2,
        date: "Jun 19, 2025",
        title: "Vikava Labs Founders Community — Ek saath safar",
        image: "/vikava/blog2.avif",
        link: "/blogs/vikava-labs-founders-community-ek-saath-safar"

    },
];

const headingVariants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1, // cards start slightly after heading
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ContinueReading() {
    const sectionRef = useRef(null);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "start 30%"],
    });

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0) {
                controls.start("visible");
            }
        });
    }, [controls, scrollYProgress]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F4F0E9] flex flex-col gap-10 px-4 py-16"
        >
            {/* Heading with fade-in */}
            <motion.div
                className="w-[95%] mx-auto"
                variants={headingVariants}
                initial="hidden"
                animate={controls}
            >
                <h2 className="geist-bold text-5xl">
                    <span className="greatvibes-regular mr-2">Continue</span>
                    Reading
                </h2>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="mx-auto grid w-[95%] gap-6 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {posts.map((post) => (
                    <motion.article
                        key={post.id}
                        variants={cardVariants}
                        className="group w-full cursor-pointer"
                    >
                        <Link href={post.link}>
                            <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden rounded-[16px] bg-black">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />

                                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[16px] text-[#111] geist-medium opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    {post.date}
                                </div>

                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5 pt-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                                    <h3 className="max-w-md text-[28px] font-semibold text-white transition-transform duration-500 translate-x-1 group-hover:translate-x-3">
                                        {post.title}
                                    </h3>

                                    <button
                                        aria-label="Read article"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black mr-2 transition-[margin] duration-500 group-hover:mr-5"
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="9 6 15 12 9 18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
