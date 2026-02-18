"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    tag: "[1]",
    heading: "One Ecosystem",
    description:
      "Nine verticals. One integrated growth engine.From design to sourcing to marketing and commerce, every function connects through a single system — fewer handoffs, no confusion, faster results. One team, one partner, total accountability.",
  },
  {
    tag: "[2]",
    heading: "Founders-First",
    description:
      "Entrepreneurship is demanding enough. That’s why our model is designed for simplicity, transparency, and focus. You get clear communication, modular execution, and multidisciplinary pods that move in sync — so you can build, not babysit vendors.",
  },
  {
    tag: "[3]",
    heading: "Proven Expertise",
    description:
      "Backed by Puuneet Aggarwal’s 26 years in sourcing, fashion, and brand-building, we bring hands-on experience in turning ideas into operationally strong, investor-ready businesses. Real systems, real execution, real results.",
  },
  {
    tag: "[4]",
    heading: "Scalable Pods",
    description:
      "Our “growth pods” expand or contract with your stage — from early MVP to Series A and beyond. Specialized teams plug in where needed, giving you speed, efficiency, and clarity without bloated costs or redundant layers.",
  },
  {
    tag: "[5]",
    heading: "Investor-Ready",
    description:
      "From clean decks and data rooms to clarity in unit economics and compliance, Vikava Labs helps founders become investor-ready from day one. We turn your story into structure — and structure into scale.",
  },
  {
    tag: "[6]",
    heading: "Trust & Sustainability",
    description:
      "Trust drives every engagement. With transparent pricing, measurable outcomes, and sustainable sourcing frameworks, we ensure growth that’s ethical, accountable, and built to last.",
  },
  {
    tag: "[7]",
    heading: "Future-Ready",
    description:
      "We blend human insight with AI-assisted execution — across research, marketing, and sourcing — to help founders make faster, smarter decisions. Add global expansion playbooks, and you’re equipped to scale beyond boundaries.",
  },
];

const upVariant = {
  initial: { opacity: 0, y: 28 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 56,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

export default function WhyVikavaLabAbout() {
  return (
    <section className="w-full  bg-[#F4F0E9] px-4 md:px-6 lg:px-2">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT SIDE — Sticky on Desktop, Static on Mobile */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-20 lg:self-start mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 30,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full max-w-[612px] mx-auto lg:ml-12 lg:mt-8"
          >
            <h2 className="leading-tight text-neutral-900">
              <span className="flex flex-wrap items-baseline">
                <span className="geist-bold text-[clamp(36px,6vw,72px)]">
                  Why Vikava
                </span>
              </span>

              <span className="geist-bold block text-[clamp(36px,6vw,72px)] mt-1">
                Labs?-
              </span>

              <span className="greatvibes-regular text-[clamp(36px,6vw,72px)] leading-none block">
                Behtar vikalp
              </span>
            </h2>
          </motion.div>
        </div>

        {/* RIGHT SIDE — Cards */}
        <div className="w-full lg:w-1/2 flex flex-col lg:pl-6">
          <div className="w-full max-w-[677px] flex flex-col gap-6 py-4 md:py-6 lg:py-8">
            {SERVICES_DATA.map((item, idx) => (
              <motion.div
                key={item.heading}
                custom={idx}
                variants={upVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full py-6 md:py-7 lg:py-8"
              >
                <div className="flex flex-row items-stretch justify-between gap-6 md:gap-8">

                  {/* LEFT — Number + Heading */}
                  <div className="flex-1">
                    <div className="text-[#222] geist-bold leading-none text-[clamp(30px,5vw,72px)] mb-3">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-[#222] geist-semibold leading-tight text-[clamp(20px,3vw,42px)]">
                      {item.heading}
                    </h3>
                  </div>

                  {/* RIGHT — Description */}
                  <div className="flex max-w-xs items-end">
                    <p className="text-left text-[#232323] geist-semibold leading-relaxed text-[clamp(14px,1.2vw,16px)]">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
