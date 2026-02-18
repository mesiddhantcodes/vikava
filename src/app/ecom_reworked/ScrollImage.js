'use client'
import Image from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ScrollImage = () => {
    const ref1 = useRef(null);
    const { scrollYProgress: progress1 } = useScroll({
        target: ref1,
        offset: ["start center", "end center"],
    });
    const scale1 = useTransform(progress1, [0, 1.5], [1, 1.5]);

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div ref={ref1} className='w-[80vw] h-[80vh] md:h-screen md:w-full flex justify-center items-center overflow-hidden rounded-3xl sticky top-0'>
                    <motion.img
                        src="/ecomm/second.avif"
                        alt="scroll"
                        style={{ scale: scale1 }}
                        className='w-full h-full object-cover rounded-3xl'
                    />
                </div>
            </div>
        </>)
}

export default ScrollImage
