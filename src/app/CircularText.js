import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, []);

  return (
    <div className={`relative w-[464px] h-[476px] ${className}`}>
      
      {/* ROTATING TEXT */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const factor = Math.PI / letters.length;
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span
              key={i}
              className="absolute inset-0 text-[28px] font-bold"
              style={{ transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      {/* FIXED CENTER IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/vikava/quotes.png"
          alt="quote mark"
          className="w-[100px] h-[140px] object-contain"
        />
      </div>
    </div>
  );
};

export default CircularText;
