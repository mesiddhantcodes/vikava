"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SplitText from "../SplitText";

export default function ExecutionInfrastructureVsStrategyBlogsCopy() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], [0, 550]);

    const contentSections = useMemo(() => [
        {
            title: "",
            content: "Most founders don’t suffer from lack of ideas. They suffer from something far more dangerous — fragmented execution. Over the last two decades of building, sourcing, scaling, and advising businesses, I’ve seen a repeating pattern: brands invest heavily in strategy, decks, consultants, and plans — yet struggle to move forward consistently.",
            type: "paragraph"
        },
        {
            title: "",
            content: "The problem isn’t intelligence. The problem isn’t ambition. The problem isn’t even capital. The problem is the absence of execution infrastructure.",
            type: "paragraph"
        },
        {
            title: "The Illusion of Strategy-Driven Growth",
            content: "Strategy feels productive because it creates clarity on paper. Decks look convincing. Roadmaps feel reassuring. Advice sounds intelligent. But strategy alone does not move a business forward. Growth happens only when decisions are translated into coordinated action — across people, partners, systems, and timelines. Without that coordination, even the best strategy remains theoretical. Many founders confuse planning with progress. In reality, progress begins where planning ends.",
            type: "paragraph"
        },
        {
            title: "Where Execution Actually Breaks",
            content: "Execution rarely fails loudly. It fails silently. It breaks when: design is done without understanding sourcing constraints; marketing launches without operational readiness; sales outpaces fulfillment capacity; compliance is postponed until it becomes a risk; vendors work in isolation with no shared accountability.",
            type: "paragraph"
        },
        {
            title: "",
            content: "Each function may perform its task, but the business as a whole moves inconsistently. Momentum leaks happen not because people are incompetent — but because systems are disconnected.",
            type: "paragraph"
        },
        {
            title: "The Hidden Cost of Fragmented Vendors",
            content: "Most businesses today operate with multiple agencies, freelancers, consultants, and service providers. On paper, this looks flexible. In reality, it creates fragmentation. Every handoff introduces delay. Every misalignment introduces risk. Every new vendor adds another dependency. Founders end up becoming the integration layer — coordinating, clarifying, chasing, and firefighting.",
            type: "paragraph"
        },
        {
            title: "",
            content: "This is where burnout begins. Not because founders work too hard. But because they are forced to manage complexity instead of building value.",
            type: "paragraph"
        },
        {
            title: "Infrastructure vs Advice: The Real Difference",
            content: "Advice tells you what to do. Infrastructure ensures it actually gets done. Execution infrastructure is the invisible backbone that holds a business together: aligned systems, clear ownership, shared context, predictable workflows, and accountability across functions. Without infrastructure, advice expires quickly. With infrastructure, even imperfect ideas compound into results.",
            type: "paragraph"
        },
        {
            title: "How Founders Regain Control",
            content: "Control does not come from doing more. It comes from designing better systems. Founders regain control when: execution is integrated, not outsourced in silos; accountability is built into the structure; decisions flow into action without constant follow-up; growth is governed, not improvised.",
            type: "paragraph"
        },
        {
            title: "",
            content: "This shift changes everything. Clarity replaces chaos. Progress replaces pressure. Confidence replaces constant firefighting.",
            type: "paragraph"
        },
        {
            title: "Closing Perspective",
            content: "Most businesses don’t need another strategy session. They need a stronger backbone. Execution infrastructure doesn’t make headlines. But it determines whether a business scales — or slowly stalls. At Vikava Labs, everything we build is anchored in this belief: ideas matter, but infrastructure decides outcomes. And once infrastructure is in place, growth stops being stressful — and starts becoming sustainable.",
            type: "paragraph"
        }
    ], []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F4F0E9] px-4 py-16"
        >
            {/* Hero */}
            <div className="relative mx-auto h-[660px] w-[95%] overflow-hidden rounded-[20px] bg-black">
                {/* Parallax Image */}
                <motion.div
                    style={{ y: imgY }}
                    className="absolute inset-0 h-[130%] -mt-50 w-full will-change-transform"
                >
                    <Image
                        src="/execution-infrastructure-vs-strategy.jpeg"
                        alt="Vikava Labs Execution Infrastructure"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>

                {/* Center Heading */}
                <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
                    <div className="max-w-6xl leading-tight text-white">
                        <div className="overflow-hidden flex flex-col justify-center items-center">
                            <span>
                                Feb 11, 2026
                            </span>
                            <SplitText
                                text="Why Most Businesses Don't Need More Strategy"
                                tag="h1"
                                className="geist text-[48px] sm:text-[64px] inline-block leading-tight"
                                splitType="chars"
                                delay={70}
                                duration={0.2}
                            />
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
            </div>

            {/* Copy block */}
            <div className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-[95%] text-left text-[#15151B] px-2 sm:px-4 lg:px-0">
                {contentSections.map((section, index) => (
                    <div key={index} className="mb-4 sm:mb-5 lg:mb-6">
                        {section.title && (
                            <p className="text-[16px] sm:text-[18px] lg:text-[20px] geist-bold">
                                {section.title}
                            </p>
                        )}

                        {section.type === "paragraph" && (
                            <p className={`${section.title ? 'mt-1' : ''} text-[16px] sm:text-[18px] lg:text-[20px] geist-medium leading-relaxed sm:leading-normal lg:leading-tight`}>
                                {section.content}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
