"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ChallengesWesolve() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const challenges = [
    {
      id: 1,
      title: "Low Visibility & Poor Discovery",
      description:
        "Designers remain hidden, and stores miss out on fresh talent.",
    },
    {
      id: 2,
      title: "Weak Global Access",
      description:
        "Indian couture is in demand but lacks an organised route to international markets.",
    },
    {
      id: 3,
      title: "Consignment Risks & Cashflow Stress",
      description: "Fragile commercial terms strain both designers and stores.",
    },
    {
      id: 4,
      title: "Unorganised Growth Support",
      description:
        "No structured mentoring, category expansion, or technical support.",
    },
    {
      id: 5,
      title: "Inefficient Supply Chain",
      description:
        "Inefficient supply chain leads to delays and increased costs.",
    },
    {
      id: 6,
      title: "Lack of Governance",
      description:
        "Couture commerce operates without standard systems, causing inefficiencies and losses.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Adjusted gaps for mobile vs desktop
  const ITEM_GAP = isMobile ? 200 : 330;
  const START_OFFSET = isMobile ? 500 : 900;
  const END_MULTIPLIER = isMobile ? 3 : 3.5;

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-[300vh] lg:h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/ifx/challenge.avif"
            alt="Challenges background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 lg:px-16 xl:px-24 py-8 lg:py-0">
          {/* LEFT TITLE */}
          <div className="w-full lg:w-[45%] mb-6 lg:mb-0 flex-shrink-0">
            <h1
              className="text-white garamond-400 leading-tight"
              style={{
                fontSize: "clamp(40px, 6vw, 112px)",
              }}
            >
              Challenges We
              <br />
              Solve
            </h1>
          </div>

          {/* RIGHT STACK */}
          <div className="w-full lg:w-[30%] relative h-[53vh] sm:h-[60vh] lg:h-[100vh] overflow-hidden flex-shrink-0">
            {challenges.map((item, index) => {
              const baseY = index * ITEM_GAP;

              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [
                  baseY + START_OFFSET,
                  baseY - (ITEM_GAP * END_MULTIPLIER),
                ]
              );

              return (
                <motion.div
                  key={item.id}
                  style={{ y }}
                  className="absolute left-0 right-0 will-change-transform"
                >
                  <h2
                    className="text-white w-[95%] lg:w-[80%] mont-600 mb-2 lg:mb-3"
                    style={{
                      fontSize: "clamp(22px, 3vw, 46px)",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    className="mont-400 text-white/90 w-[95%] lg:w-full"
                    style={{
                      fontSize: "clamp(14px, 1.2vw, 20px)",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
