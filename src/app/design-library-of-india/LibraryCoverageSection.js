"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Exporters Don’t Have a System Memory",
    desc: "Designs live in racks, cupboards, and people’s heads—making retrieval slow and unreliable.",
  },
  {
    title: "Buyer Learning Never Compounds",
    desc: "References arrive every season, but past buyer intent and decisions are never carried forward.",
  },
  {
    title: "The Same Work Is Paid for Again",
    desc: "Samples are remade because teams can’t see what already exists or what was previously approved.",
  },
  {
    title: "Decisions Are Made Without Visibility",
    desc: "Sampling and planning happen without clarity on demand patterns, gaps, or existing strengths.",
  },
  // {
  //   title: "Sustainability",
  //   desc: "Fewer shipments, fewer reworks, lower carbon footprint",
  // },
  // {
  //   title: "Human‑first",
  //   desc: "Empowers artisans, exporters and buyers-tech that assists, not replaces",
  // },
];
const IconHumanFirst = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      display: "inline-block",
      flexShrink: 0,
      userSelect: "none",
    }}
    fill="currentColor"
  >
    <path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z" />
  </svg>
);


const IconGlobe = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      display: "inline-block",
      flexShrink: 0,
      userSelect: "none",
    }}
    fill="currentColor"
  >
    <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27A8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z" />
  </svg>
);

const IconBag = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      display: "inline-block",
      flexShrink: 0,
      userSelect: "none",
    }}
    fill="currentColor"
  >
    <path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm0,112H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z" />
  </svg>
);

const IconSearch = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      display: "inline-block",
      flexShrink: 0,
      userSelect: "none",
    }}
    fill="currentColor"
  >
    <path d="M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z" />
  </svg>
);

const IconGovernance = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l2.6 5.26L20 9.27l-4 3.89L17.2 21 12 17.77 6.8 21l1.2-7.84-4-3.89 5.4-.99L12 3z" />
  </svg>
);
const IconLeaf = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21c6 0 18-6 18-18-6 0-18 6-18 18Z" />
    <path d="M3 21c6 0 6-10 6-10" />
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay },
  },
  viewport: { once: true, amount: 0.3 },
});

function CardIcon({ index }) {
  const icons = [
    <IconGlobe />,
    <IconBag />,
    <IconSearch />,
    // <IconGovernance />,
    // <IconLeaf />,
    <IconHumanFirst />,
  ];

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      {icons[index] || icons[0]}
    </div>
  );
}

export default function LibraryCoverageSection() {
  return (
    <section className="w-full flex justify-center bg-white px-6 md:px-12 py-24">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* LEFT: STICKY IMAGE */}
          <div className="w-full lg:w-[528px] lg:sticky lg:top-24 lg:self-start">
            <motion.div
              {...fadeUp(0)}
              className="relative w-full h-[360px] md:h-[460px] lg:h-[534px] rounded-[20px] overflow-hidden"
            >
              <Image
                src="/design-library-of-india/card3.avif"
                alt="Library coverage visual"
                width={528}
                height={534}
                className="object-cover w-full h-full mix-blend-luminosity"
                style={{ filter: "grayscale(60%)" }}
              />
            </motion.div>
            <h3 className="text-[16px] md:text-[18px] monasans-500 text-black leading-[0.98] mt-4 mb-2 pr-6">
              Most export businesses don’t struggle due to lack of capability.
              They struggle because of broken memory and scattered execution.
              The real loss isn’t capability — it’s repetition, delay, and
              decision fatigue that compounds every season.
            </h3>
            <h3 className="text-[16px]  md:text-[18px] monasans-500 text-[#7B7B7B] tracking-[0.8]">
              Today’s reality across most export houses
            </h3>
          </div>

          {/* RIGHT: HEADING + CARDS */}
          <div className="flex-1 flex flex-col gap-8">
            {/* LABEL */}
            <motion.p
              {...fadeUp(0.05)}
              className="text-[16px] -mb-4 md:text-[18px] monasans-500 text-[#7B7B7B] tracking-[0.8] uppercase"
            >
              Why DLI Exists
            </motion.p>

            {/* HEADING */}
            <motion.h2
              {...fadeUp(0.1)}
              className="
              text-[32px] md:text-[48px] lg:text-[62px]
              monasans-500 
              leading-[1.1]
              max-w-[700px]
            "
            >
              Exporters don’t lose
              <br className="hidden md:block" />
              skill—they lose recall.{" "}
            </motion.h2>

            {/* CARDS */}
            <div className="mt-4 flex flex-col gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  {...fadeUp(0.15 + index * 0.08)}
                  className="
                      w-full 
                      md:max-w-[691px]
                      bg-[#F2F4F7]
                      rounded-t-[14px]
                      px-7 md:px-9 
                      py-7 md:py-8
                      flex flex-col
                      gap-4

                      h-auto md:h-[221px]
                    "
                >
                  {/* ICON */}
                  <div className="w-7 h-7 flex items-center justify-center">
                    <CardIcon index={index} />
                  </div>

                  {/* TITLE + LINE + DESCRIPTION */}
                  <div className="flex flex-col">
                    <h3 className="text-[20px] md:text-[24px] monasans-600 text-[#111111] mb-2">
                      {card.title}
                    </h3>

                    {/* THIN DIVIDER UNDER TITLE */}
                    <div className="w-1/2 h-[1px] bg-[#D6D8DC] mb-3"></div>

                    <p className="text-[14px] md:text-[16px] monasans-500 text-[#646464] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[32px] md:text-[36px] monasans-500 text-[#6D6D6D] leading-tight [word-spacing:-0.05em]  mr-2">
              This isn’t inefficiency. It’s a structural blind spot. DLI exists
              to fix this at the root.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
