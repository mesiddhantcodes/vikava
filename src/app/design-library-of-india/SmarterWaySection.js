"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SmarterWaySection() {
  const smallImages = [
    "/design-library-of-india/small7.avif",
    "/design-library-of-india/small8.avif",
    "/design-library-of-india/small9.avif",
    "/design-library-of-india/small10.avif",
    "/design-library-of-india/small11.avif",
    "/design-library-of-india/small12.avif",
    "/design-library-of-india/small13.avif",
    "/design-library-of-india/small14.avif",
  ];

  return (
    <section className="w-full flex justify-center bg-white px-6 md:px-12 py-24">
      <div className="max-w-[95%] w-full mx-auto">
        {/* LABEL */}
        <p className="text-[18px] w-full text-[#6d6d6d] monasans-400 mb-3 uppercase">
          Who DLI Is For
        </p>

        {/* HEADING */}
        <motion.h2
          className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500 leading-[1.2]
            w-full lg:w-[95%]
            mb-16 flex flex-wrap
          "
        >
          {[
            "For",
            "design-led",
            "export",
            "businesses",
            "managing,",
            "complex",
            "sampling",
            "and",
            "buyer",
            "workflows.",
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

        {/* GRID */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-2 lg:gap-6 justify-between
            w-full max-w-[1400px] mx-auto
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true }}
            className="
      w-full
      lg:max-w-[571px] 
      xl:max-w-[650px] 
      2xl:max-w-[780px]
      aspect-[571/625] 
      rounded-xl overflow-hidden
    "
          >
            <Image
              src="/design-library-of-india/robot.avif"
              alt="AI assisting design"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT */}
          <div
            className="
              flex flex-col justify-between
              gap-8 md:gap-10 lg:gap-12
            
              w-full lg:w-[680px]
            "
          >
            {/* MOVING CARDS */}
            <div className="relative overflow-hidden w-full h-[158px] md:h-[180px] lg:h-[190px] xl:h-[210px] 2xl:h-[230px]">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="flex gap-2 w-[200%]"
              >
                {[...smallImages, ...smallImages].map((src, i) => (
                  <div
                    key={i}
                    className="
          aspect-152/158
          w-[24vw] sm:w-[20vw] md:w-[160px]
          lg:w-[152px] xl:w-[190px] 2xl:w-[220px]
          rounded-md overflow-hidden flex-shrink-0
        "
                  >
                    <Image
                      src={src}
                      alt="Material sample"
                      width={152}
                      height={158}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* PARAGRAPH */}

            <motion.p
              initial={{ opacity: 0, y: 0, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
              className="pt-0 md:pt-84
    text-[16px] monasans-400 text-black
    leading-relaxed
    w-full
    lg:max-w-[380px]
    xl:max-w-[450px]
    2xl:max-w-[520px]
  "
            >
              DLI is for export houses and exporters with growing or historical
              design libraries, especially sampling-intensive businesses across
              apparel, home, lifestyle, and accessories.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
              className="
    !mt-0
    text-[16px] monasans-400 text-[#6d6d6d]
    leading-relaxed
    w-full
    lg:max-w-[380px]
    xl:max-w-[450px]
    2xl:max-w-[520px]
  "
            >
              DLI is not for price-only traders or copy-driven operations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
