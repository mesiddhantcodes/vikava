// app/components/HistorySection.jsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ICONS

const historyIcons = [
  // ICON 1
  <svg
    className="w-7 h-7"
    overflow="visible"
    width="100%"
    height="100%"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinejoin="miter"
      fill="rgb(243, 240, 235)"
      d="M0 7.5122C0 6.00634 1.22585 4.78049 2.73171 4.78049C4.23756 4.78049 5.46341 6.00634 5.46341 7.5122C5.46341 9.01805 4.23756 10.2439 2.73171 10.2439C1.22585 10.2439 0 9.01805 0 7.5122ZM8.87805 19.8049H6.14634C5.77073 19.8049 5.46341 19.4976 5.46341 19.122V14.4576C5.46341 12.9585 4.34341 11.7088 2.9161 11.6166C2.15463 11.5688 1.42049 11.8249 0.863902 12.3473C0.307317 12.8698 0 13.5766 0 14.3415V22.5366H6.14634C6.52195 22.5366 6.82927 22.8439 6.82927 23.2195V28H9.56098V20.4878C9.56098 20.1122 9.25366 19.8049 8.87805 19.8049ZM25.2683 10.2439C26.7741 10.2439 28 9.01805 28 7.5122C28 6.00634 26.7741 4.78049 25.2683 4.78049C23.7624 4.78049 22.5366 6.00634 22.5366 7.5122C22.5366 9.01805 23.7624 10.2439 25.2683 10.2439ZM25.0839 11.6166C23.6566 11.7088 22.5366 12.9585 22.5366 14.4576V19.122C22.5366 19.4976 22.2293 19.8049 21.8537 19.8049H19.122C18.7463 19.8049 18.439 20.1122 18.439 20.4878V28H21.1707V23.2195C21.1707 22.8439 21.478 22.5366 21.8537 22.5366H28V14.3415C28 13.5766 27.6927 12.8698 27.1361 12.3473C26.5795 11.8249 25.8488 11.5688 25.0839 11.6166ZM17.4146 0H10.5854C10.2098 0 9.90244 0.307317 9.90244 0.682927V4.78049C9.90244 5.1561 10.2098 5.46341 10.5854 5.46341H12.2927C12.5283 5.46341 12.7468 5.58634 12.8732 5.78439L14 7.59073L15.1268 5.78439C15.2532 5.58634 15.4717 5.46341 15.7073 5.46341H17.4146C17.7902 5.46341 18.0976 5.1561 18.0976 4.78049V0.682927C18.0976 0.307317 17.7902 0 17.4146 0Z"
    ></path>{" "}
  </svg>,
  // ICON 2
  <svg
    className="w-7 h-7"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="rgb(243,240,235)" d="M7.07309 20.7752H0V28H7.07309V20.7752Z" />
    <path
      fill="rgb(243,240,235)"
      d="M18.9648 8.45824H8.03714V19.6258H18.9648V8.45824Z"
    />
    <path fill="rgb(243,240,235)" d="M27 0H19.9291V7.2268H27V0Z" />
  </svg>,
  // ICON 3 (FULL PATH)
  <svg
    className="w-7 h-7"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinejoin="miter"
      fill="rgb(243,240,235)"
      d="M24.6764 24.6734C22.788 26.5615 20.2799 27.6014 17.6081 27.6014C16.9403 27.6014 16.2821 27.5361 15.6415 27.4101C15.4844 27.3778 15.3229 27.3416 15.165 27.3039C15.0079 27.2646 14.8527 27.2199 14.694 27.1721C14.3847 27.0799 14.0778 26.9698 13.7799 26.845C12.583 26.3507 11.4834 25.6177 10.5386 24.6734C9.37758 23.5126 8.51951 22.0831 8.04303 20.5217C8.81437 20.7006 9.60356 20.7908 10.3963 20.7908H10.399C13.1758 20.7908 15.785 19.7085 17.7509 17.7466C20.283 15.2118 21.3309 11.522 20.5273 8.043C22.0874 8.51668 23.5173 9.37494 24.6764 10.5366C28.5758 14.4344 28.5758 20.7748 24.6764 24.6734ZM7.48058 19.9566C5.91888 19.4829 4.48907 18.6247 3.32723 17.4631C1.43955 15.5758 0.399468 13.0643 0.399468 10.3962C0.399468 7.72488 1.43955 5.21462 3.32723 3.32618C5.21564 1.43812 7.72721 0.398224 10.3963 0.398224C13.0685 0.398224 15.5789 1.43812 17.4673 3.32618C18.6295 4.48738 19.4872 5.91694 19.9606 7.47794C19.192 7.29906 18.4 7.20924 17.6081 7.20924C14.832 7.20924 12.2197 8.29112 10.2559 10.2534C7.72177 12.7882 6.67584 16.478 7.48058 19.9566ZM24.9599 10.2534C23.6958 8.99032 22.124 8.07062 20.411 7.59382C19.9314 5.88156 19.0134 4.30888 17.7509 3.04618C15.785 1.08072 13.1758 0 10.3963 0C7.61985 0 5.01066 1.08072 3.04484 3.04618C1.08094 5.00888 0 7.61756 0 10.3962C0 13.1721 1.08094 15.7838 3.04484 17.7466C4.31054 19.0124 5.88388 19.9294 7.5965 20.4058C8.07298 22.1184 8.99017 23.6911 10.2559 24.9538C12.2197 26.9189 14.832 28 17.6081 28C18.9986 28 20.3456 27.7293 21.5903 27.2137C22.8354 26.6996 23.9794 25.9369 24.9599 24.9538C29.0134 20.9039 29.0134 14.3064 24.9599 10.2534Z"
    ></path>
  </svg>,
];

const historyItems = [
  { year: "1999, Gurugram", title: "Pioneers in knitwear manufacturing." },
  {
    year: "2005, Sun International",
    title: "Expanded into apparel, accessories, and home furnishings.",
  },
  {
    year: "Today, Vikava Labs",
    title:
      "A multi-vertical ecosystem helping startups, D2C & B2B brands, professionals, and investors launch faster and scale smarter - with governance built-in.",
  },
];

export default function HistorySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  // KEEP ORIGINAL PARALLAX VALUES
  // HEADER: starts immediately, moves out first
  const headingY = useTransform(scrollYProgress, [0, 0.6], [0, -250]);

  // LEFT CARD: starts a bit later
  const leftY = useTransform(scrollYProgress, [0.1, 0.6], [0, -500]);

  // MIDDLE CARD: starts after left
  const middleY = useTransform(scrollYProgress, [0.2, 0.7], [0, -500]);

  // RIGHT CARD: starts last
  const rightY = useTransform(scrollYProgress, [0.3, 0.8], [0, -500]);

  const cardYs = [leftY, middleY, rightY];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#201F24] px-4 md:px-8 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <motion.div style={{ y: headingY }} className="text-center px-2">
          <h2 className="leading-tight text-[#F3F0EB]">
            <span className="geist-bold text-[48px] md:text-[64px] lg:text-[88px]">
              Our History-
            </span>{" "}
            <span className="greatvibes-regular text-[48px] md:text-[64px] lg:text-[88px]">
              Safarnama
            </span>
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed geist-semibold text-[#F3F0EB] max-w-md mx-auto">
            Every journey begins with an idea — ours was to build an ecosystem
            where brands can launch, scale, and sustain with clarity.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-32 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {historyItems.map((item, index) => (
            <motion.article
              key={item.year}
              style={{ y: cardYs[index] }}
              className="
                flex 
                h-[420px] md:h-[480px] lg:h-[520px] 
                w-full max-w-[360px] md:max-w-[388px] 
                flex-col justify-between 
                rounded-[4px] bg-[#F7F6F3] 
                p-6 text-left text-[#111111]
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex h-[80px] w-[80px] md:h-[100px] md:w-[100px] items-center justify-center rounded-full bg-[#201F24]">
                  {historyIcons[index]}
                </div>
                <span className="text-[12px] md:text-[14px] text-[#201F24] font-semibold">
                  {index + 1}
                </span>
              </div>

              <div className="mt-auto pt-6">
                <p className="text-[16px] md:text-[18px] geist-semibold">
                  {item.year}
                </p>
                <p className="mt-2 text-[14px] md:text-[16px] geist-semibold leading-relaxed text-[#2B2926]">
                  {item.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
