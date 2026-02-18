"use client";

import Image from "next/image";

export default function CreativeEngineSection() {
  return (
    <section className="relative bg-[#F5F6F0] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1870px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 mb-2 lg:mb-2">
          {/* Left Card - Image */}
          <div className="relative w-full " style={{ aspectRatio: "841/715" }}>
            <Image
              src="/designcartel/design1.avif"
              alt="Creative Design Process"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Right Card - Creative Engine Text */}
          <div
            className="relative w-full bg-[#EFE6D5] rounded-md flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16"
            style={{ aspectRatio: "841/715" }}
          >
            {" "}
            <p
              className="absans-400 text-[#090502] mb-4 lg:mb-6"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: "1.4",
                letterSpacing: "0.1em",
              }}
            >
              WHY DESIGN CARTEL?{" "}
            </p>
            <h2
              className="absans-400 text-[#090502] text-center mb-6 lg:mb-8"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: "1.2",
              }}
            >
              CREATIVE ENGINE
            </h2>
            <p
              className="absans-400 text-[#090502] max-w-md text-center mb-2 lg:mb-4"
              style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: "1.2",
              }}
            >
              You get the creativity and consistency of a world-class in-house
              design team — without the overhead, hiring churn, or freelancer
              risk.
            </p>
          </div>
        </div>

        {/* Bottom Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2">
          {/* Left Card - Cartel Edge Text */}
          <div
            className="relative w-full bg-[#EFE6D5] rounded-md flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16"
            style={{ aspectRatio: "841/504" }}
          >
            <p
              className="absans-400 text-[#090502] mb-2 lg:mb-4"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: "1.4",
                letterSpacing: "0.1em",
              }}
            >
              WHAT WE ARE?
            </p>
            <h3
              className="absans-400 text-[#090502] text-center mb-2 lg:mb-4"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: "1.2",
              }}
            >
              CARTEL EDGE
            </h3>
            <div
              className="absans-400 text-[#090502] text-center"
              style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: "1.2",
              }}
            >
              <p className="">
                Design Cartel is your on-demand
                <br />
                product design studio for:
              </p>
              <p>
                1. Fashion & Textiles
                <br />
                2. Home Furnishings (soft & hard)
                <br />
                3. Lifestyle Accessories
              </p>
            </div>
          </div>

          {/* Right Card - Image */}
          <div className="relative w-full" style={{ aspectRatio: "841/504" }}>
            <Image
              src="/designcartel/design2.jpg"
              alt="Design Cartel Work"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
