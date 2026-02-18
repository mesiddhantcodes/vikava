"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SplitText from "./SplitText";

export default function BlogsCopy() {
  const sectionRef = useRef(null);

  // Framer Motion now syncs with Lenis
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // REAL parallax (slow, visible)
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 550]);

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
          className="absolute inset-0 h-[130%] -mt-40 w-full will-change-transform"
        >
          <Image
            src="/vikava/blogss.avif"
            alt="Vikava Labs Founders Community"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Center Heading */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
          <div className="max-w-6xl leading-tight text-white flex flex-col items-center">
            <div className="overflow-hidden">
              <SplitText
                text="Vikava Labs Founders Community"
                tag="h1"
                className="geist-bold text-[40px] md:text-[56px] inline-block mb-4"
                splitType="chars"
                delay={70}
                duration={0.2}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-[20px] md:text-[24px] geist-medium text-white/90 mt-2"
            >
              A curated WhatsApp community for builders - not spectators.
            </motion.p>
          </div>
        </div>

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />
      </div>

      {/* Copy block below – NORMAL SCROLL */}
      <div className="mx-auto mt-10 max-w-7xl text-left text-[#15151B]">
        {/* Intro */}
        <div className="mb-8">
          <p className="text-[20px] geist-medium leading-tight">
            If your business is growing but decisions feel lonely, this community
            gives you something rare: a safe, moderated, high-signal room where
            business owners share real problems and get practical,
            experience-backed responses — not pitches. We protect signal-to-noise
            so the room stays useful.
          </p>
        </div>

        {/* Why it exists */}
        <div className="mb-8">
          <p className="text-[20px] geist-bold">Why it exists?</p>
          <p className="mt-2 text-[20px] geist-medium leading-tight">
            Most founders don’t need more motivation.
          </p>
          <p className="mt-2 text-[20px] geist-medium leading-tight">
            They need fewer blind spots — and a high-trust room where they can
            ask the ‘stupid questions’ without being sold to.
          </p>
          <p className="mt-4 text-[20px] geist-bold">
            Typical questions founders ask inside:
          </p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight text-[#15151B]/90">
            <li>“Am I hiring right — or just hiring fast?”</li>
            <li>“My vendor is failing — what’s the clean next move?”</li>
            <li>
              “Marketing is running but revenue is stuck — what am I missing?”
            </li>
            <li>
              “I’m doing everything and still nothing feels stable — what’s the
              real bottleneck?”
            </li>
          </ol>
          <p className="mt-4 text-[20px] geist-medium leading-tight">
            This community exists so builders can course-correct faster —
            through clarity, shared patterns, and disciplined execution
            thinking.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mb-8">
          <p className="text-[20px] geist-bold">Who this if for (fit-check)</p>
          <p className="mt-2 text-[20px] geist-medium leading-tight">
            This is for people building real businesses and willing to
            contribute with respect:
          </p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>
              Founders &amp; operators (D2C or B2B) who want execution discipline
            </li>
            <li>
              Professionals building practices (doctors, lawyers, consultants,
              creators) who want systems and better decisions
            </li>
            <li>
              Specialists who are invited to help — only if they can contribute
              without selling
            </li>
          </ol>

          <p className="mt-6 text-[20px] geist-bold">Not for you if:</p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>You’re here to promote services</li>
            <li>You want a broadcast group</li>
            <li>You DM members to sell</li>
          </ol>
          <p className="mt-4 text-[20px] geist-medium leading-tight">
            If you’re here to build, you’ll fit in.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <p className="text-[20px] geist-bold">How it works (Invite Only)</p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>Request an invite (short form)</li>
            <li>We review fit (to protect signal-to-noise)</li>
            <li>
              You’re added to the Announcements Hub + the most relevant
              sub-group
            </li>
            <li>
              You participate through structured threads (#introductions, #ask,
              #wins, #resources, #collab)
            </li>
          </ol>
        </div>

        {/* What you get */}
        <div className="mb-8">
          <p className="text-[20px] geist-bold">
            What you get (value - not hype):
          </p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>High-signal peer support on real business bottlenecks</li>
            <li>Founder AMAs / working sessions focused on practical execution</li>
            <li>Frameworks, templates, and decision checklists</li>
            <li>
              Curated introductions when needed — with expectations set clearly
              (no cold pitching)
            </li>
          </ol>
        </div>

        {/* House Rules */}
        <div className="mb-8">
          <p className="text-[20px] geist-bold">House Rules</p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>No marketing, no promotions, no spam, no mass forwards</li>
            <li>No unsolicited pitching, no ‘DM me’ selling</li>
            <li>Ask clearly. Respond with clarity. Respect context and time.</li>
            <li>Confidentiality is expected.</li>
          </ol>
        </div>

        {/* Trust & Privacy */}
        <div>
          <p className="text-[20px] geist-bold">Trust &amp; Privacy</p>
          <ol className="mt-2 list-decimal geist-medium space-y-1 pl-5 text-[20px] leading-tight">
            <li>100% opt-in · easy opt-out</li>
            <li>No spam policy</li>
            <li>Member data is not sold or shared</li>
            <li>Active moderation to keep the room high-signal</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
