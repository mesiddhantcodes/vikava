"use client";

import Image from "next/image";

const challenges = [
  {
    title: "In-house design gaps",
    description: "High costs, high churn, and limited category depth.",
  },
  {
    title: "Freelancer risk",
    description: "Unreliable timelines, inconsistent quality, and IP concerns.",
  },
  {
    title: "Designs that don't sell",
    description: "Great visuals that fail at costing, MOQ, or manufacturing.",
  },
  {
    title: "Sampling chaos",
    description: "Too many rounds, misfits, rejections, and wasted budgets.",
  },
  {
    title: "Online leakage",
    description:
      "Weak product presentation that fails to convert on PDP/PLP pages.",
  },
];

export default function ChallengesSolutionSection() {
  return (
    <section className="relative w-full w-[95%] mx-auto bg-[#F5F6F0]  sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
        {/* Left Side - Solution Card (was Right) */}
        <div
          className="
    relative
    mx-2 sm:mx-0
    bg-[#B3AB9C]
    rounded-xl sm:rounded-md
    flex flex-col items-center justify-center
    p-6 sm:p-8 md:p-10
    order-1 lg:order-1
    shadow-xl lg:shadow-none

    /* SIZE CONTROL */
    w-[100%]
    max-w-[915px]
    min-h-[600px]
    lg:h-[840px]
  "
        >
          {/* LABEL */}

          <h2
            className="
      absans-400
      text-[#1b1c18]
      text-center
      px-4 sm:px-6
      max-w-[520px]
      leading-[1.15]

      text-[28px]
      sm:text-[42px]
      md:text-[60px]
      lg:text-[84px]
      mt-8 sm:mt-12 md:mt-8 pb-8
    "
          >
            Turning Problems Into Profits
          </h2>
          {/* IMAGE */}
          <div
            className="
      relative
      mb-6 sm:mb-8 md:mb-12
      mx-auto
      rounded-xl sm:rounded-lg
      shadow-md
      overflow-hidden

      w-[180px] h-[180px]
      sm:w-[220px] sm:h-[220px]
      md:w-[260px] md:h-[260px]
      lg:w-[300px] lg:h-[300px]
    "
          >
            <Image
              src="/designcartel/chale.avif"
              alt="Design Solutions"
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 300px"
            />
          </div>
          <p
            className="
      absans-400
      text-[#1b1c18]
      mb-6 sm:mb-8 md:mb-10
      text-center
      uppercase
      tracking-[0.2em]
      text-[12px]
      sm:text-[13px]
      md:text-[14px]
    "
          >
            CHALLENGES WE SOLVE
          </p>
          {/* HEADING */}
        </div>

        {/* Right Side - Challenges List (was Left) */}
        <div
          className="
    relative
    bg-[#F5F6F0]
    flex flex-col justify-center
    order-2 lg:order-2
    lg:ml-2

    /* HEIGHT SYNC */
    min-h-[600px]
    lg:h-[840px]
  "
        >
          <div
            className="
      w-full
      flex flex-col
      items-center

      px-2 sm:px-4 lg:px-1
      gap-2 sm:gap-3 lg:gap-3
    "
          >
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="
          bg-[#f1ebdf]
          rounded-lg sm:rounded-md
          flex flex-col justify-center

          px-6 sm:px-8
          w-full
          max-w-[915px]

          min-h-[110px]
          sm:min-h-[130px]
          lg:min-h-[160px]
        "
              >
                <h3 className="absans-400 text-[#1b1c18] mb-1 px-1 text-[18px] sm:text-[22px] lg:text-[30px] leading-[1.25]">
                  {challenge.title}
                </h3>

                <p className="absans-400 text-[#1b1c18] px-1 text-[13px] sm:text-[16px] lg:text-[20px] leading-[1.45]">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
