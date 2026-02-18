"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FeaturedVideosSection() {
  return (
    <section
      className="
        relative 
        bg-black 
        flex 
        flex-col lg:flex-row
        justify-center 
        items-center 
        gap-6 lg:gap-8 
        min-h-screen
        px-4 sm:px-6 lg:px-0
      "
    // style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* LEFT */}
      {/* LEFT (lazy) */}
      <VideoCard
        videoSrc="/lasttag/screen3.mp4"
        poster="/lasttag/screen3.jpg"
        lazy
        hasVignette
      />

      {/* CENTER (hero – eager) */}
      <motion.div className="lg:mt-[-40px]">
        <VideoCard
          videoSrc="/lasttag/screen2.mp4"
          poster="/lasttag/screen2.jpg"
          priority
          isRaised
        />
      </motion.div>

      {/* RIGHT (lazy) */}
      <VideoCard
        videoSrc="/lasttag/screen.mp4"
        poster="/lasttag/screen.jpg"
      />
      {/* TEXT BLOCK */}
      <div
        className="
  absolute
  left-1/2 lg:left-88
  -translate-x-1/2 lg:translate-x-0
  bottom-4 sm:bottom-8 lg:bottom-38
  text-left lg:text-left
  z-10
   sm:px-6 lg:px-0
"
      >
        <h1
          className="text-[32px] 
          sm:text-[64px] 
          md:text-[80px] 
          lg:text-[96px] 
          xl:text-[112px] 
          2xl:text-[124px]
          galindo-regular leading-none text-white"
        >
          Last #tag
        </h1>

        <p
          className="
          text-[22px] 
          sm:text-[48px] 
          md:text-[64px] 
          lg:text-[80px] 
          xl:text-[88px] 
          2xl:text-[96px]
          -mt-2 lg:-mt-8
          inter-regular 
          text-white
          flex justify-center lg:justify-start
        "
        >
          <span className="inline-flex items-center gap-2 sm:gap-4">
            by Vikava Labs
            <span
              className="
              shrink-0 left-8
              bg-green-300
              rounded-full
              w-[14px] h-[14px]
              sm:w-[20px] sm:h-[20px]
              lg:w-[30px] lg:h-[30px]
      "
            />
          </span>
        </p>
      </div>
    </section>
  );
}
function VideoCard({
  videoSrc,
  poster,
  hasVignette = false,
  isRaised = false,
  lazy = false,
  priority = false,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch(() => { });
    };

    if (priority) {
      playVideo();
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playVideo();
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, [priority]);

  return (
    <div
      className={`
        relative rounded-[10px] overflow-hidden bg-black my-2
        w-[280px] h-[440px]
        sm:w-[320px] sm:h-[500px]
        lg:w-[379px] ${isRaised ? "lg:h-[680px]" : "lg:h-[599px]"}
      `}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        className="w-full h-full object-cover"
      />

      {hasVignette && (
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
      )}
    </div>
  );
}
