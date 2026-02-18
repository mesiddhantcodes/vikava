"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = ["From Startups to", "Scale-Ups –", "We’ve Got You", "Covered"];

const cards = [
  {
    number: "01",
    title: "D2C Brands",
    desc: "Fashion, lifestyle, FMCG, beauty & product based brands needing ROI-driven campaigns, influencer funnels, and performance marketing.",
  },
  {
    number: "02",
    title: "B2B & Tech Companies",
    desc: "Startups and enterprises looking for LinkedIn ABM, webinars, content engines, and demand-generation playbooks.",
  },
  {
    number: "03",
    title: "Consumer & Lifestyle Businesses",
    desc: "Companies needing integrated media, offline activations, and creator-driven storytelling.",
  },
  {
    number: "04",
    title: "Service Brands & Professionals",
    desc: "Coaches, consultants, doctors, and professionals seeking personal brand growth through content, UGC, and social campaigns.",
  },
  {
    number: "05",
    title: "Investors & Accelerators",
    desc: "Portfolios needing scalable marketing pods, cross-channel playbooks, and outcome-linked campaigns.",
  },
];

export function CoverageSection() {
  const [gap, setGap] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      setGap(window.innerWidth < 768 ? 70 : 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#e4f5ee] py-16 sm:py-20 md:py-24">
      <div className="max-w-[98%] mx-auto flex flex-col md:flex-row gap-10 md:gap-8 px-4 md:px-14">
        {/* Left */}
        <div className="flex-1 md:sticky md:top-24 self-start">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[60px] galindo-regular font-bold leading-tight text-[#232323] mb-6 sm:mb-8 overflow-hidden">
            {lines.map((line, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Right – stacked cards */}
        <div className="flex-1">
          <div className="relative md:min-h-[1700px] flex flex-col gap-4">
            {cards.map((card, index) => (
              <StackCard
                key={card.number}
                index={index}
                number={card.number}
                title={card.title}
                desc={card.desc}
                gap={gap}
              />
            ))}

            {/* Last black card with smile icon */}
            <StackCard
              index={cards.length}
              isBlack
              title="No Vanity, Just Results"
              desc="Last Hashtag is built for brands that want measurable growth, not vanity campaigns."
              icon={<SmileIcon className="w-[75px] h-[39px]" />}
              gap={gap}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ accept icon prop and render it when isBlack
function StackCard({
  number = "01",
  title,
  desc,
  index = 0,
  isBlack = false,
  icon,
  gap = 80,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ top: 100 + index * gap }}
      className={`
        sticky
        w-full
        rounded-xl overflow-hidden shadow-xl
        flex
        h-[200px] md:h-[250px]
        ${isBlack ? "bg-black text-white" : "bg-white text-[#111217]"}
      `}
    >
      {/* LEFT NUMBER / ICON BLOCK */}
      <div
        className={`
          flex items-start pt-10 justify-center
          ${isBlack ? "bg-black" : "bg-white"}
        `}
        style={{ width: "200px", height: "250px" }}
      >
        {isBlack ? (
          icon
        ) : (
          <span
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] inter-semibold"
            style={{ display: "inline-block", lineHeight: "1" }}
          >
            {number}
          </span>
        )}
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="flex flex-col justify-center px-7 -mt-8 md:-mt-0"
        style={{ width: "550px", height: "250px", lineHeight: "1" }}
      >
        <div
          className="
            font-semibold inter-medium mb-8
            text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]
          "
        >
          {title}
        </div>

        <p
          className="
            inter-regular
            text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]
          "
        >
          {desc}
        </p>
      </div>
    </motion.article>
  );
}

/** Smile SVG */
function SmileIcon({ className }) {
  return (
    <svg
      viewBox="0 0 75 39"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated", flexShrink: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 0)">
        <path d="M0 0H75V39H0Z" fill="transparent" />
        <path
          d="M71.009 5.602C56.932 31.777 28.813 42.419 2.696 27.682C1.829 27.193.73 27.495.234 28.358C-.257 29.229.049 30.333.919 30.826C28.913 46.636 59.104 35.366 74.192 7.319C74.663 6.438 74.334 5.342 73.456 4.866C72.576 4.403 71.488 4.73 71.009 5.602Z"
          fill="rgb(255,255,255)"
        />
        <path
          d="M24.673 16.457C27.581 16.457 29.938 14.1 29.938 11.192C29.938 8.284 27.581 5.927 24.673 5.927C21.765 5.927 19.408 8.284 19.408 11.192C19.408 14.1 21.765 16.457 24.673 16.457ZM46.47 10.856C49.321 10.856 51.632 8.545 51.632 5.694C51.632 2.843 49.321.532 46.47.532C43.619.532 41.308 2.843 41.308 5.694C41.308 8.545 43.619 10.856 46.47 10.856Z"
          fill="rgb(255,255,255)"
        />
      </g>
    </svg>
  );
}
