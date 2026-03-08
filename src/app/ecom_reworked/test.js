"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full">
      <CardStackSection />
    </section>
  );
}

function CardStackSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // starts animating before it fully enters
  });

  const cards = [
    { id: 1, label: "Unified", color: "bg-purple-600" },
    { id: 2, label: "Scalable", color: "bg-purple-600" },
    { id: 3, label: "Porfitable", color: "bg-purple-600" },
    { id: 4, label: "Seamless", color: "bg-purple-600" },
  ];

  const paragraphVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <div ref={containerRef} className="relative min-h-[260vh] sm:min-h-[380vh]">
      {/* Sticky viewport area */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Text Section – pinned with 100–150px gap */}
        <motion.div
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex w-full justify-center items-start px-4 sm:px-8 pt-[120px] sm:pt-[140px] text-center"
        >
          <p className="text-[#F8FCF7] max-w-2xl sm:max-w-4xl clashdisplay-500 text-sm sm:text-base md:text-xl leading-relaxed">
            E-com Reworked owns your commerce engine — storefront, funnel, CRM,
            and revenue workflows. Not ‘a website’. A system that sells with
            fewer leaks.
          </p>
        </motion.div>

        {/* Card Stack */}
        <CardStack scrollYProgress={scrollYProgress} cards={cards} />
      </div>
    </div>
  );
}

function CardStack({ scrollYProgress, cards }) {
  const stackY = useTransform(
    scrollYProgress,
    [0, 0.55, 0.7, 1],
    ["0vh", "0vh", "-10vh", "-25vh"]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y: stackY }}
    >
      <div className="relative w-full max-w-[90%] sm:max-w-3xl h-20 sm:h-40 md:h-48 mt-[24vh] sm:mt-0">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            totalCards={cards.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </motion.div>
  );
}
function Card({ card, index, totalCards, scrollYProgress }) {
  const stackDuration = 0.6 / totalCards;
  const cardStart = index * stackDuration;
  const cardEnd = (index + 1) * stackDuration;

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    ["100vh", "0vh"]
  );

  // Stronger tilts
  const smallTiltRotations = [0, 3, -4, 5]; // was [0, 1, -1.5, 2]
  const largeTiltRotations = [-10, 6, -8, 9]; // was [-6, 3, -4, 5]

  const stackTilt = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, smallTiltRotations[index]]
  );

  const finalTilt = useTransform(
    scrollYProgress,
    [0.6, 0.75, 1],
    [
      smallTiltRotations[index],
      smallTiltRotations[index],
      largeTiltRotations[index],
    ]
  );

  const scale = useTransform(scrollYProgress, [cardStart, cardEnd], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [cardStart, cardEnd], [0, 1]);

  const rotation = useTransform(
    [stackTilt, finalTilt],
    ([stack, final]) => stack + final - smallTiltRotations[index]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        y,
        rotate: rotation,
        scale,
        opacity,
        zIndex: index + 1,
      }}
    >
      <div
        className={`${card.color} w-full max-w-[90%] sm:max-w-2xl h-24 sm:h-32 md:h-40 shadow-2xl flex items-center justify-center border border-white`}
      >
        <span className="text-white text-2xl sm:text-5xl md:text-7xl font-bold tracking-wide clashdisplay-500">
          {card.label}
        </span>
      </div>
    </motion.div>
  );
}
