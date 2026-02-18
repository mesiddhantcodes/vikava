"use client";
import { motion } from "framer-motion";
import ChallengeItem from "./ChallengeItem";
import { challengesData } from "./constant";

export default function ChallengesSection() {
  return (
    <section className="relative w-full bg-transparent py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[100%] mx-auto">
        <div className="flex flex-col gap-16 md:gap-20">
          {challengesData.map((challenge, index) => (
            <ChallengeItem
              key={challenge.id}
              title={challenge.title}
              subtitle={challenge.subtitle}
              image={challenge.image}
              index={index}
              isTextLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
