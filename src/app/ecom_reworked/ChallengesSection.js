"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ChallengesSection = () => {
  const challenges = [
    {
      title: "FOUNDER BURNOUT",
      description:
        "Managing sales, products, orders, and logistics drains focus from growth.",
      image: "/ecomm/founder.avif",
    },
    {
      title: "CHANNEL CHAOS",
      description:
        "Disconnected vendors and tools cause leaks, errors, and wasted budgets.",
      image: "/ecomm/chanel.avif",
    },
    {
      title: "CONVERSION GAPS",
      description:
        "Weak sales strategies, poor UX, and slow checkouts bleed revenue.",
      image: "/ecomm/conversion.webp",
    },
    {
      title: "SCALING STRUGGLES",
      description:
        "Entering new markets, festive peaks, or exports feels risky without strong systems.",
      image: "/ecomm/scaling.webp",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.175,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.175,
        delayChildren: 0.1,
      },
    },
  };

  const challengeCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
      },
    }),
  };

  const challengesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const challengesText = "challenges";

  return (
    <section className="w-full flex flex-col lg:flex-row gap-5 py-10 lg:py-24 min-h-[120vh]">
      {/* Left Side - Sticky Heading */}
      <div className="w-full lg:sticky lg:top-32 lg:self-start h-fit">
        <div className="relative">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-6xl font-bold uppercase primary boldonse-400 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 30,
              mass: 1,
              delay: 0,
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            FIXING THE GAPS
            <br className="hidden md:block" />
            THAT HOLD YOUR
            <br className="hidden md:block" />
            SALES BACK
          </motion.h2>
          <motion.h3
            className="meowscript-400 text-7xl md:text-7xl lg:text-8xl xl:text-9xl secondary -mt-6 md:absolute 
                     md:-bottom-[35%] left-[10%] md:left-[15%] z-10 leading-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            {challengesText.split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h3>
        </div>
      </div>
      {/* Right Side - Scrolling Cards */}
      <motion.div
        className="w-full flex flex-col gap-8 lg:gap-16 lg:pt-[50vh]"
        variants={challengesContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full mt-8 md:mt-0"
            custom={index}
            variants={challengeCardVariants}
          >
            {/* Image - Left on Desktop (NO ANIMATION) */}
            <div className="w-full md:w-auto">
              <Image
                src={challenge.image}
                alt={challenge.title}
                width={900}
                height={900}
                className="object-cover rounded-2xl w-full h-[250px] md:w-[800px] md:h-[300px] "
              />
              {/* <div className="w-full max-w-[595px] aspect-[599/344] mx-auto">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div> */}
            </div>

            {/* Title and Description - Right on Desktop */}
            <div className="w-full lg:w-[60%] flex flex-col gap-3 justify-center">
              <motion.h4
                className="text-white font-bold text-2xl md:text-4xl lg:text-5xl uppercase clashdisplay-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.44, 0, 0.56, 1],
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                {challenge.title}
              </motion.h4>
              <motion.p
                className="text-white/85 text-base md:text-xl clashdisplay-500 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.44, 0, 0.56, 1],
                  delay: 0.05,
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                {challenge.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ChallengesSection;
