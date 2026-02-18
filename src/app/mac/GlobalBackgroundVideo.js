"use client";
import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";

export default function GlobalBackgroundVideo() {
    const [mounted, setMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !videoRef.current) return;

        const video = videoRef.current;

        // Simplified loading logic: Play immediately
        const handleCanPlay = () => {
            setIsLoaded(true);
            // Ensure play is triggered (sometimes autoPlay needs a nudge if low power mode)
            video.play().catch((err) => {
                // Autoplay was prevented
                // console.warn("Autoplay prevented:", err);
            });
        };

        // Check if already ready (if cached)
        if (video.readyState >= 3) {
            handleCanPlay();
        } else {
            video.addEventListener("canplaythrough", handleCanPlay);
            video.addEventListener("loadeddata", handleCanPlay); // Fallback for faster perceived load
        }

        return () => {
            video.removeEventListener("canplaythrough", handleCanPlay);
            video.removeEventListener("loadeddata", handleCanPlay);
        };
    }, [mounted]);

    if (!mounted) return null;

    return createPortal(
        <>
            <video
                ref={videoRef}
                src="/mac/bg.mp4"
                muted
                loop
                playsInline
                autoPlay // Added native autoPlay
                preload="auto" // Changed from metadata to auto for speed
                className={`fixed top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover -z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
            />
            {/* <div className="fixed inset-0 bg-black/30 -z-10 pointer-events-none" /> */}
        </>,
        document.body
    );
}
