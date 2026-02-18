"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import CircularText from "./CircularText";

const testimonials = [
  {
    quote:
      "I’ve known Puuneet for several years through BNI and beyond, and what stands out most is his depth of business thinking. He looks at businesses holistically—structure, systems, people, and long-term sustainability—not just immediate results. Puuneet  brings clarity and calm to complex situations, and his approach reflects the mindset of a true business builder. What he now institutionalises through Vikava Labs is something founders genuinely need.",
    name: "Sanjay Kumar Khanna",
    title:
      "Owner Director at Tulip Business Associates, Tulip Kitchen & Cloverleaf",
    image: "/vikava/linksanjay.avif",

    linkedin: "https://www.linkedin.com/in/sanjay-kumar-khanna-55998213/",
  },
  {
    quote:
      "I’ve had the opportunity to closely observe Puuneet’s work and the impact he creates through Vikava Labs. He brings a rare blend of strategic clarity and deep understanding of the fashion and textile industry, particularly in helping small and mid-sized businesses sharpen their brand positioning and market relevance. What stands out is his ability to translate complex challenges into clear, practical direction, grounded in commercial realities, with a genuine commitment to long-term success.",
    name: "Atul Goswami",
    title:
      "Executive Director BNI Delhi Central, Master Franchise TAB- The Alternative Board(worldwide) Founder & CEO - A3D Capital & TogetherInvesting Club",
    image: "/vikava/linkAtul.avif",
    linkedin: "https://www.linkedin.com/in/atulgoswami/",
  },
  {
    quote:
      "Having worked with Puuneet across different phases and brands over many years, I can say his strength lies in building businesses that last. He understands the apparel and D2C ecosystem deeply and thinks beyond trends—focusing on systems, sourcing, execution, and scalability. Puuneet  brings honesty and long-term clarity to every discussion, which is rare in today’s ecosystem.",
    name: "Rohiet Yadav",
    title:
      "Founder @ Print Monkey EX: Benetton; Myntra; ; Reliance retail; Turms jabong; Koovs; zovi",
    image: "/vikava/linkrohit.avif",
    linkedin: "https://www.linkedin.com/in/yadavr10/",
  },
  {
    quote:
      "Having worked with Puuneet for over two decades, I’ve seen very few who combine trust, precision, and creative intelligence as seamlessly as he does. He consistently delivers with design depth, product clarity, and execution speed. Vikava Labs is a natural extension of this thinking, bridging the critical gap between strategy and execution that modern businesses truly need.",
    name: "Sartaj Singh Mehta",
    title:
      "Senior Director Product & Design Pepe Jeans London - India\nEx: Aditya Birla; ITC; benetton; color plus; zovi; Turms;",
    image: "/vikava/linkSarit.avif",
    linkedin: "https://www.linkedin.com/in/sartaj-singh-mehta-47377913/",
  },
  {
    quote:
      "I’ve known Puuneet for close to two decades, and his understanding of business—especially from a supply chain and execution perspective—is exceptionally strong. He thinks in terms of sustainability, systems, and long-term outcomes rather than quick fixes. Puuneet ’s approach brings stability and clarity to businesses, and that thinking now finds a structured expression through Vikava Labs.",
    name: "Amitabh Kharbanda",
    title: "Director at Sunlord Apparels Mfg Co Pvt Ltd",
    image: "/vikava/linkAmit.avif",
    linkedin: "https://www.linkedin.com/in/amitabh-kharbanda-61415010/",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "end 40%"],
  });

  // Only show circular text when section is in middle of viewport
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[80dvh] bg-[#F4F0E9]">
      {/* Fixed circular text at center - only visible when section is centered */}
      <motion.div
        style={{ opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 max-w-2xl text-center scale-[0.6] md:scale-100"
      >
        <CircularText
          text="TESTIMONIAL-TRUSTED BY CLIENTS-"
          centerText='" "'
          spinDuration={20}
          className="w-[260px] h-[260px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] opacity-100"
        />
      </motion.div>

      {/* Scrolling testimonial cards */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 space-y-16 md:space-y-32 pt-[20vh] pb-[20vh]">
        {testimonials.map((testimonial, index) => {
          const isLeft = index % 2 === 0; // Alternate sides

          return (
            <div
              key={index}
              className={`flex justify-center ${isLeft ? "md:justify-start" : "md:justify-end"
                }`}
            >
              <div
                className="
  bg-[#000] text-white 
  rounded-2xl md:rounded-3xl 
  p-6 md:p-8 
  shadow-2xl 
  max-w-md w-full 
  z-20
  flex flex-col
  min-h-[360px]
"
              >
                {/* Quote */}
                <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-600">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="">
                      <p className="font-semibold text-sm md:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm max-w-xs  text-gray-400 whitespace-pre-line">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn icon */}
                  {testimonial.linkedin && (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                      className="
      w-7 h-7 md:w-8 md:h-8 
      flex items-center justify-center 
      border border-white/30 
      rounded-sm
      hover:bg-white hover:text-black
      transition-colors
    "
                    >
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
