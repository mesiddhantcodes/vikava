"use client";

import DotGrid from "./DotGrid";

const VikavaHero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full bg-[#3D86FF] text-[#FFE600] flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-4 md:py-4">
      {/* Top: Header - Responsive typography */}
      <header className="w-full flex justify-center py-4 sm:py-6 md:py-2">
        <h1
          className="
            barlow-condensed-extrabold font-extrabold leading-none tracking-tight text-[#FFE600]
            text-[clamp(48px,12vw,78px)] 
            sm:text-[clamp(64px,14vw,150px)] 
            md:text-[clamp(80px,16vw,180px)] 
            lg:text-[clamp(160px,13.2vw,260px)] 
            text-center px-2 sm:px-4
          "
        >
          VIKAVA DESIGN LAB
        </h1>
      </header>

      {/* Middle: Grid - Fully responsive */}
      <div className="w-full flex justify-center flex-1 px-2 sm:px-4 md:px-6">
        <div
          className="w-full max-w-[98%] h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[448px] pointer-events-none"
        // style={{ minHeight: "300px" }}
        >
          <DotGrid
            dotSize={8}
            smDotSize={10}
            gap={15}
            smGap={10}
            baseColor="#FFE600"
            activeColor="#FFE600"
            proximity={100}
            smProximity={120}
            mdProximity={140}
            shockRadius={250}
            smShockRadius={500}
            lgShockRadius={350}
            shockStrength={40}
            smShockStrength={50}
            resistance={600}
            smResistance={750}
            returnDuration={1.2}
            smReturnDuration={1.5}
          />
        </div>
      </div>

      {/* Bottom: Tagline - Responsive typography */}
      <footer className="w-full flex justify-center pb-12  sm:pb-18 md:pb-26 px-2 sm:px-4">
        <p
          className="
            poppins-medium text-[#FFE600] text-center
            text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px]
            leading-tight px-4 sm:px-6 md:px-8 max-w-[90vw] lg:max-w-none
          "
        >
          Design That Tells. Then Sells.
        </p>
      </footer>
    </section>
  );
};

export default VikavaHero;
