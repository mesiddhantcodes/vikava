"use client";
import BlurText from "@/Components/BlurText";
import { motion } from "framer-motion";

const VideoOverText = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-black">

      {/* VIDEO */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        initial={{ scale: 0.85 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ecomm/vid1.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* TEXT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
        <div className="text-center">
          <BlurText
            text="And that's the base of your revenue. Here's what drives sales even higher…"
            animateBy="words"
            delay={0.08}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-600 uppercase clashdisplay-500 leading-tight"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoOverText;
