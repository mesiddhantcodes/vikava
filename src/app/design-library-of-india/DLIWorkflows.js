"use client";

import { motion } from "framer-motion";

export default function DLIWorkflows() {
  const workflows = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" strokeLinecap="round" />
        </svg>
      ),
      title: "Intelligent discovery",
      desc: "Visual + technical filters across textiles, crafts, knitwear and sustainable materials",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M8 15h8" strokeLinecap="round" />
        </svg>
      ),
      title: "Digital visualisation",
      desc: "AI-aided manipulations, renders and stitch-accurate overlays; lightweight 3D mock-ups",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M9 10V7a3 3 0 0 1 6 0v3" />
        </svg>
      ),
      title: "Secure sharing",
      desc: "IP-protected, watermarked lookboards; threaded, time-stamped comments",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <circle cx="9" cy="20" r="1.8" />
          <circle cx="17" cy="20" r="1.8" />
          <path d="M3 4h3l3 12h9l3-8H6" strokeLinecap="round" />
        </svg>
      ),
      title: "Structured requests",
      desc: "Standardised sample/order requests with all specs captured once",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7" />
          <path d="M12 11v10" />
        </svg>
      ),
      title: "Physical Samples on Request",
      desc: "Request physical samples (returnable) for buyer rooms where applicable",
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          fill="none"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 22c4-5 7-8 7-12a7 7 0 1 0-14 0c0 4 3 7 7 12z" />
        </svg>
      ),
      title: "Real-time tracking",
      desc: "Feasibility notes and status in one clean workflow",
    },
  ];

  return (
    <section className="w-full flex justify-center px-6 md:px-12 bg-white py-24">
      <div className="max-w-[95%] w-full">
        {/* LABEL */}
        <p className="text-[18px] monasans-400 text-[#6d6d6d] mb-4">
          WHAT CAN YOU DO ON DLI?
        </p>

        {/* HEADING */}
        <motion.h2
          className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500
            leading-[1.15]
            w-full lg:w-[95%]
            mb-16
            flex flex-wrap
          "
        >
          {[
            "Powerful",
            "Workflows",
            "for",
            "Faster,",
            "Clearer",
            "Development",
          ].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.05,
                },
              }}
              viewport={{ once: true }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* WORKFLOW LIST */}
        <div className="flex flex-col w-[80%] mx-auto ">
          {workflows.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: i * 0.05 },
              }}
              viewport={{ once: true }}
              className="
                flex flex-col md:flex-row
                items-start justify-between 
                gap-6 md:gap-10
                py-6 border-b border-[#e5e5e5]
              "
            >
              {/* LEFT SECTION */}
              <div className="flex items-start gap-4 w-full md:w-[450px] text-[#1a1a1a]">
                <div className="mt-1 flex-shrink-0">{item.icon}</div>

                <h3 className="text-[20px] md:text-[24px] monasans-500 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT DESCRIPTION */}
              <p
                className="
                text-[15px] md:text-[16px]
                monasans-500 text-[#6d6d6d]
                w-full md:w-[580px]
                leading-relaxed
              "
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
