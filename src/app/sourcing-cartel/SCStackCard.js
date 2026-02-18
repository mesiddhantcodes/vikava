"use client";

import React, { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "@/Components/StackCard";

const SCStackCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Content above the stack */}
      <div className="bg-[#f5f5f5] min-h-[900px]">
        <div className="w-full flex items-center justify-center px-8 mt-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-7xl alumnisans-bold font-bold text-[#be1611] mb-6 text-[clamp(40px,4.3vw,80px)]">
              CHALLENGES WE SOLVE
            </h1>
          </div>
        </div>

        {/* Stack cards section */}
        <div className="w-full min-h-screen relative">
          <ScrollStack
            useWindowScroll
            baseScale={1}
            itemScale={0}
            stackPosition={isMobile ? "130px" : "20%"}
            itemStackDistance={50}
            bottomPadding="420px"
          >
            <ScrollStackItem
              index={1}
              number="01"
              subtitle="Fragmented vendors"
              title="Delays, rework, cost leakage."
              image="/sustain/cha1.jpg"
            />
            <ScrollStackItem
              index={2}
              number="02"
              subtitle="Opaque commercials"
              title="Kickbacks, mismatched quotes, hidden costs."
              image="/sustain/cha2.avif"
            />
            <ScrollStackItem
              index={3}
              number="03"
              subtitle="Quality control"
              title="Rejections, chargebacks, missed deadlines."
              image="/sustain/cha3.jpg"
            />
            <ScrollStackItem
              index={4}
              number="04"
              subtitle="Communication <br/> breakdown"
              title="Misaligned teams, missed deadlines."
              image="/sustain/cha4.avif"
            />
            <ScrollStackItem
              index={5}
              number="05"
              subtitle="Data silos"
              title="Lost insights, poor decisions."
              image="/sustain/cha5.avif"
            />
          </ScrollStack>
        </div>
      </div>
    </>
  );
};

export default SCStackCard;
