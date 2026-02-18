// app/components/FoundersPainSection.jsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FoundersPainSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const topCardRef = useRef(null);
  const bottomCardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      // Background parallax
      tl.to(bgRef.current, { y: isMobile ? -80 : -150, ease: "none" }, 0);

      // Top card motion
      tl.to(topCardRef.current, { y: isMobile ? -160 : -420, ease: "none" }, 0);

      // Bottom card intentionally static (as per your original intent)
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F4F0E9]  py-10 md:py-10"
    >
      <div
        className="
          relative mx-auto w-full max-w-full overflow-hidden
          h-[520px] sm:h-[650px] md:h-[850px] lg:h-[1140px]
          lg:w-full
        "
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform md:h-auto h-[130dvh]"
        >
          <Image
            src="/vikava/skele.avif"
            alt="Founders Pain"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Top Card */}
        <div
          ref={topCardRef}
          className="
            absolute right-4 top-10 w-[92%] max-w-[420px] min-h-[260px]
            bg-[#F4F0E9] px-6 py-5 flex flex-col justify-center will-change-transform

            sm:right-6 sm:top-6
            md:right-10 md:top-18

            lg:right-0 lg:top-15 lg:h-[380px] lg:w-[468px] lg:px-8 lg:py-6
          "
        >
          <h3
            className="
              text-[20px] sm:text-[26px] md:text-[32px]
              lg:text-[36px] leading-tight geist-medium font-semibold text-[#15151B]
            "
          >
            Solving the real founder problem:
            <br />
            execution breakdown
            <br />+ trust leaks.
          </h3>
        </div>

        {/* Bottom Card */}
        <div
          ref={bottomCardRef}
          className="
            absolute left-4 top-[55%] w-[92%] max-w-[420px] min-h-[200px]
            bg-[#18181D] px-6 py-5 flex items-center will-change-transform

            sm:left-6 sm:top-[52%]
            md:left-10 md:top-[48%]

            lg:left-0 lg:top-4/7 lg:h-[380px] lg:w-[448px] lg:px-8 lg:py-6
          "
        >
          <p
            className="
              text-[16px] sm:text-[18px] md:text-[20px]
              lg:text-[20px] leading-tight text-[#F4F0E9] geist-medium
            "
          >
            When delivery is fragmented, founders pay in time, money, momentum,
            and credibility. Vikava Labs exists to restore clarity and
            accountability - so ideas don’t die in execution.
          </p>
        </div>
      </div>
    </section>
  );
}
