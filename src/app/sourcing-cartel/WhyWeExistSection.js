"use client";

import React from "react";

const WhyWeExistSection = () => {
  const cards = [
    {
      number: "01",
      title: "Legacy",
      description:
        "26+ years of sourcing expertise in apparel, home furnishings, and lifestyle products.",
    },
    {
      number: "02",
      title: "Coverage",
      description:
        "End-to-end coverage: the only organised sourcing partner in India offering both finished goods and raw material stacks.",
    },
    {
      number: "03",
      title: "Transparency",
      description:
        "Transparent operations: zero kickbacks, clear agreements, and accurate quotes.",
    },
    {
      number: "04",
      title: "Reliability",
      description:
        "Reliability you can trust: 100% accuracy in delivery, quality, and compliance across supply chains.",
    },
  ];

  /* ------------------------------------------------------------- */
  /* ADDED: Mobile Detection & Responsive Top Logic */
  /* ------------------------------------------------------------- */
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      // 768px is standard tablet/mobile breakpoint
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full bg-[#F5F5F5] flex justify-center items-center">
      <div className="w-[97%] mx-auto flex flex-col justify-center lg:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-[30%] flex items-end lg:items-start justify-start px-6 md:px-10 lg:px-12 py-8 lg:py-20">
          <div className="lg:sticky lg:top-22 lg:pb-64">
            <h2
              className="
                font-bold 
                alumnisans-bold 
                uppercase 
                leading-tight 
                text-[#C63527] 
                mb-10 lg:mb-14
                text-[clamp(40px,4.3vw,80px)]
              "
            >
              WHY WE EXIST?
            </h2>

            <div className="space-y-2">
              <p
                className="
                  aileron-regular 
                  text-[#1D1D1F] 
                  font-normal 
                  text-justify
                  leading-[1.2]
                  text-[clamp(15px,1.1vw,20px)]
                "
              >
                Sourcing in India has long been fragmented and unreliable.
                Hidden costs, weak compliance, poor quality checks, and shipment
                delays have cost global buyers millions.
              </p>

              <p
                className="
                  aileron-bold 
                  font-bold 
                  text-[#1D1D1F] 
                  leading-[1.7]
                  text-[clamp(15px,1.1vw,20px)]
                "
              >
                Sourcing Cartel was created to fix this:
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            w-full lg:w-[48%] 
            relative 
            px-6 md:px-10 lg:px-12 
            py-8 lg:py-20 
            pb-32 lg:pb-74
          "
        >
          <div className="relative">
            {cards.map((card, index) => {
              // Calculate responsive top offset
              // Desktop: 100 + index * 95
              // Mobile:  95 + index * 95
              const baseTop = isMobile ? 95 : 135;
              const gap = isMobile ? 95 : 120;
              const topVal = baseTop + index * gap;

              return (
                <div
                  key={index}
                  className="sticky bg-black rounded-md shadow-2xl mx-auto w-full "
                  style={{
                    top: `${topVal}px`,
                    zIndex: 10 + index,
                    marginBottom: "2vh",
                    maxWidth: "682px",
                  }}
                >
                  <div
                    className="w-full flex flex-col justify-center"
                    style={{
                      minHeight: "clamp(200px, 15vw, 280px)", // Increased height to accommodate text wrapping
                      padding: "clamp(16px, 1.4vw, 24px)",
                    }}
                  >
                    <div className="flex aileron-bold items-center gap-4 md:gap-5 lg:gap-6 mb-4 md:mb-5 lg:mb-6">
                      <div className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#151515] text-white">
                        <span
                          className="font-light"
                          style={{ fontSize: "clamp(14px, 1.1vw, 20px)" }}
                        >
                          {card.number}
                        </span>
                      </div>

                      <h3
                        className="aileron-bold text-white leading-tight"
                        style={{ fontSize: "clamp(18px, 1.7vw, 32px)" }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    <p
                      className="leading-[1.7] aileron-regular text-gray-300"
                      style={{ fontSize: "clamp(14px, 1.1vw, 20px)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
