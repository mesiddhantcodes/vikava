"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  },
  viewport: { once: true },
});

export default function MeasuredImpactSection() {
  return (
    <section className="w-full flex justify-center px-6 md:px-12 bg-white py-24">
      <div className="max-w-[95%] w-full">
        {/* LABEL */}
        <motion.p
          {...fadeUp(0)}
          className="text-[18px] monasans-400 text-[#6d6d6d] tracking-wide mb-3"
        >
          MEASURED IMPACT
        </motion.p>

        {/* HEADING WITH WAVE ANIMATION */}
        <motion.h2
          className="
            text-[32px] md:text-[48px] lg:text-[62px]
            monasans-500
            leading-[0.9]
            mb-12
            flex flex-wrap
            w-full
          "
        >
          {["Proven", "Gains", "Across", "Speed,", "Cost", "&", "Clarity"].map(
            (word, i) => (
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
            )
          )}
        </motion.h2>

        {/* MAIN GRID – CENTERED */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-6 w-full md:w-fit">
            {/* LEFT LARGE IMAGE CARD — FIRST */}
            <motion.div
              {...fadeUp(0.25)}
              className="
                relative
                w-full
                rounded-[20px]
                overflow-hidden
                bg-[#f3f3f3]
                aspect-[794/480]
              "
            >
              <Image
                src="/design-library-of-india/card4.avif"
                alt="Turnaround impact"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-6 left-6 text-black max-w-[90%]">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 640 640"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M152 64C138.7 64 128 74.7 128 88C128 101.3 138.7 112 152 112L160 112L160 131C160 171.3 176 210 204.5 238.5L286 320L204.5 401.5C176 430 160 468.7 160 509L160 528L152 528C138.7 528 128 538.7 128 552C128 565.3 138.7 576 152 576L488 576C501.3 576 512 565.3 512 552C512 538.7 501.3 528 488 528L480 528L480 509C480 468.7 464 430 435.5 401.5L354 320L435.5 238.5C464 210 480 171.3 480 131L480 112L488 112C501.3 112 512 101.3 512 88C512 74.7 501.3 64 488 64L152 64zM320 353.9L401.5 435.4C421 455 432 481.4 432 509L432 528L208 528L208 509C208 481.4 219 455 238.5 435.5L320 353.9zM320 286L238.5 204.5C219 185 208 158.6 208 131L208 112L432 112L432 131C432 158.6 421 185 401.5 204.5L320 286.1z" />
                </svg>

                <p className="text-[20px] md:text-[24px] monasans-600 mt-2">
                  Turnaround time reduced by up to 70%
                </p>
              </div>
            </motion.div>

            {/* MIDDLE COLUMN */}
            <div className="flex flex-col">
              {/* SMALL TOP CARD — THIRD */}
              <motion.div
                {...fadeUp(0.55)}
                className="
                  relative
                  w-full
                  rounded-[18px]
                  overflow-hidden
                  aspect-[389/240]
                "
              >
                <Image
                  src="/design-library-of-india/card5.avif"
                  alt="Sampling cost"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-3 left-3 text-black max-w-[90%]">
                  <svg
                    className="w-[34px] h-[34px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 10c1.8 0 2.7-1 3.5-2" />
                    <path d="M21 10c-1.8 0-2.7-1-3.5-2" />
                    <path d="M3 14c1.8 0 2.7 1 3.5 2" />
                    <path d="M21 14c-1.8 0-2.7 1-3.5 2" />
                  </svg>

                  <p className="text-[20px] md:text-[24px] monasans-500 leading-tight">
                    Sampling cost cut by ~50–60%
                    <br />
                  </p>
                </div>
              </motion.div>

              {/* SMALL BOTTOM CARD — FOURTH (LAST) */}
              <motion.div
                {...fadeUp(0.65)}
                className="
                  w-full
                  mt-4
                  rounded-[18px]
                  bg-[#F2F4F7]
                  p-6
                  flex flex-col justify-center   items-center
                  aspect-[389/240]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 640 640"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                </svg>

                <p className="text-[20px] md:text-[24px] text-center monasans-500 mt-2 leading-tight">
                  Environmental impact lowered via fewer courier loops and
                  reworks
                </p>
              </motion.div>
            </div>

            {/* RIGHT TALL IMAGE — SECOND */}
            <motion.div
              {...fadeUp(0.35)}
              className="
                relative
                w-full
                rounded-[20px]
                overflow-hidden
                aspect-[389/495]
              "
            >
              <Image
                src="/design-library-of-india/card6.avif"
                alt="Trust & transparency"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-6 left-6 text-black max-w-[90%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 640 640"
                  fill="none"
                >
                  <path
                    d="M598.1 139.4C608.8 131.6 611.2 116.6 603.4 105.9C595.6 95.2 580.6 92.8 569.9 100.6L495.4 154.8L485.5 148.2C465.8 135 442.6 128 418.9 128L359.7 128L359.3 128L215.7 128C189 128 163.2 136.9 142.3 153.1L70.1 100.6C59.4 92.8 44.4 95.2 36.6 105.9C28.8 116.6 31.2 131.6 41.9 139.4L129.9 203.4C139.5 210.3 152.6 209.3 161 201L164.9 197.1C178.4 183.6 196.7 176 215.8 176L262.1 176L170.4 267.7C154.8 283.3 154.8 308.6 170.4 324.3L171.2 325.1C218 372 294 372 340.9 325.1L368 298L465.8 395.8C481.4 411.4 481.4 436.7 465.8 452.4L456 462.2L425 431.2C415.6 421.8 400.4 421.8 391.1 431.2C381.8 440.6 381.7 455.8 391.1 465.1L419.1 493.1C401.6 503.5 381.9 509.8 361.5 511.6L313 463C303.6 453.6 288.4 453.6 279.1 463C269.8 472.4 269.7 487.6 279.1 496.9L294.1 511.9L290.3 511.9C254.2 511.9 219.6 497.6 194.1 472.1L65 343C55.6 333.6 40.4 333.6 31.1 343C21.8 352.4 21.7 367.6 31.1 376.9L160.2 506.1C194.7 540.6 241.5 560 290.3 560L342.1 560L343.1 561L344.1 560L349.8 560C398.6 560 445.4 540.6 479.9 506.1L499.8 486.2C501 485 502.1 483.9 503.2 482.7C503.9 482.2 504.5 481.6 505.1 481L609 377C618.4 367.6 618.4 352.4 609 343.1C599.6 333.8 584.4 333.7 575.1 343.1L521.3 396.9C517.1 384.1 510 372 499.8 361.8L385 247C375.6 237.6 360.4 237.6 351.1 247L307 291.1C280.5 317.6 238.5 319.1 210.3 295.7L309 197C322.4 183.6 340.6 176 359.6 175.9L368.1 175.9L368.3 175.9L419.1 175.9C433.3 175.9 447.2 180.1 459 188L482.7 204C491.1 209.6 502 209.3 510.1 203.4L598.1 139.4z"
                    fill="currentColor"
                  />
                </svg>

                <p className="text-[20px] md:text-[24px] monasans-500 mt-2 leading-tight">
                  Trust & transparency improved through documented, traceable
                  workflows
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
