// components/sourcingcartel/AboutSection.jsx

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative z-10 w-full min-h-screen bg-[#F5F5F5]">
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen relative bg-black md:mx-20 md:my-10">
          <Image
            src="/sc/boat.avif"
            alt="Yarn fabric texture"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-primary flex items-end text-right justify-center px-6 py-16 lg:py-20">
          <div className="w-full space-y-8 md:space-y-10">
            {/* Heading */}
            <h2 className="alumnisans-bold text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[0.8] secondary uppercase">
              FROM YARN TO FINISHED PRODUCT
              <br />— WE'VE GOT YOU COVERED
            </h2>

            {/* Description */}
            <p className="aileron-regular text-[16px] md:text-[18px] lg:text-[20px] leading-tight third">
              From yarn or fabric to finished product, Sourcing Cartel is your
              trusted sourcing partner in India. We make apparel & home
              furnishing sourcing, lifestyle product supply chains, and raw
              material procurement simple, organised, and reliable. With us,
              brands, manufacturers, buying houses, and global importers get one
              accountable partner for their sourcing needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
