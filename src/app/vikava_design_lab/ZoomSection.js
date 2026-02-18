'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/vikavalab/zoom1.avif',
    '/vikavalab/zoom2.jpg',
    '/vikavalab/zoom3.avif',
    '/vikavalab/zoom4.avif',
    '/vikavalab/zoom5.jpg',
    '/vikavalab/zoom6.avif',
    '/vikavalab/zoom7.jpg',
];

export default function ZoomSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <>
            {/* Spacer for scroll */}
            <div ref={containerRef} className="relative h-[700vh]">
                {/* Fixed container */}
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {images.map((src, index) => {
                        // Calculate scroll progress for each image
                        // Overlapping logic:
                        // Start each image earlier, so they 'stack' or zoom in sequence
                        const start = index * 0.1;
                        const end = start + 0.35; // Duration of 0.35, overlaps next start

                        const scale = useTransform(
                            scrollYProgress,
                            [start, end],
                            [index === 0 ? 1 : 0, 1] // First image always full, others grow 0->1
                        );

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{
                                    zIndex: index, // Later images on top
                                }}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    style={{
                                        scale,
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Zoom image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
