"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.includes("@")) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setEmail("");
        }, 800);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-6 flex items-center w-full rounded-2xl geist-medium bg-[#F4F0E9] px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
        >
            <label htmlFor="newsletter-email" className="sr-only">
                Email address
            </label>

            <div className="w-full">
                <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address*"
                    className="w-full bg-transparent text-[clamp(13px,1vw,16px)] text-[#181818] outline-none placeholder:text-[#AAA]"
                />

            </div>

            <motion.button
                type="submit"
                disabled={loading}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="flex-shrink-0 relative ml-2"
            >
                <span className="w-[34px] h-[34px] md:w-[36px] md:h-[36px] text-[18px] md:text-[20px] rounded-full bg-[#232323] flex items-center justify-center text-white overflow-hidden">
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
        </form>
    );
}
