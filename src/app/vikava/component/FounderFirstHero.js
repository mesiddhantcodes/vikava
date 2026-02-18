"use client";

import BlurText from "@/Components/BlurText";

export default function FounderFirstHero() {
  return (
    <section
      className="
        bg-[#F3F0EB] 
        flex flex-col items-center justify-center 
        px-4 
        h-auto py-20        
        md:h-[835px] md:py-0
        text-center
      "
    >
      <div
        className="
          w-full 
          max-w-[1080px]    
          text-center
        "
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="leading-[1.1]">
            <BlurText
              text="Founder‑first business‑building infrastructure - clarity, governance, and execution, under one accountable partner. "
              animateBy="words"
              direction="right"
              className="
        geist-medium
        text-[32px] md:text-[48px] lg:text-[64px]
        text-[#151518]
        inline
      "
            />

            <span className="inline-block align-baseline mx-2">
              <BlurText
                text="Vikava Labs "
                animateBy="words"
                direction="right"
                className="
          greatvibes-regular
          text-[36px] md:text-[52px] lg:text-[72px]
          text-[#151518]
          inline
        "
              />
            </span>

            <BlurText
              text="helps founders and operators build and scale without vendor chaos. We bring the operating layer: clear priorities, a delivery roadmap, and accountable execution pods."
              animateBy="words"
              direction="right"
              className="
        geist-medium
        text-[32px] md:text-[48px] lg:text-[64px]
        text-[#151518]
        inline
      "
            />
          </p>
        </div>
      </div>
    </section>
  );
}
