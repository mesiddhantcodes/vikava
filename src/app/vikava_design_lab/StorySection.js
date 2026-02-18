"use client";
import { motion } from "framer-motion";

const labels = [
  "Design with purpose",
  "Beyond the Logo",
  "Cohesive Visuals",
  "Driven by Strategy",
  "Vision into Growth",
];

const StorySection = () => {
  return (
    <section className="w-full bg-[#FFE600] text-[#3D7EFE] px-6 md:px-16 lg:px-24 py-16 flex justify-center">
      <div className="w-full max-w-[97%] mx-auto">
        {/* Copy */}
        <motion.p
          initial={{ y: 250 }}
          whileInView={{
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto text-left poppins-medium leading-snug text-[32px] md:text-[40px] lg:text-[50px]"
        >
          Every brand has a story waiting to be told. Vikava Design Lab builds
          brand clarity you can see - identity, packaging, decks, UI/UX, and
          content systems. Designed for recall, trust, and conversion.
        </motion.p>

        {/* Image Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-0">
          {["stone", "star", "pink", "chesse", "telephone"].map(
            (item, index) => (
              <div
                key={item}
                className={`
                  relative bg-white rounded-[32px]
                  shadow-[0px_8px_30px_rgba(0,0,0,0.35)]
                  p-2 size-[237px]
                  transition-transform duration-300 ease-out
                  hover:scale-[1.07] group transform
                  ${index === 0 && "-rotate-3"}
                  ${index === 1 && "rotate-3"}
                  ${index === 2 && "-rotate-4"}
                  ${index === 3 && "rotate-4"}
                  ${index === 4 && "-rotate-2"}
                `}
              >
                {/* Hover Label */}
                <div
                  className="
                    absolute -top-4 left-1/2 -translate-x-1/2
                    bg-[#3D86FF] text-[#FFE600]
                    px-2 py-1 rounded-md
                    text-[16px] font-semibold
                    opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]
                     min-w-[150px] text-center     
                    whitespace-nowrap leading-tight
                  "
                >
                  {labels[index]}
                </div>

                <div className="w-full h-full overflow-hidden rounded-[28px]">
                  <img
                    src={`/vikavalab/${item}.webp`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
