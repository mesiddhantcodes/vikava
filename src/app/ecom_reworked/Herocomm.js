'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Herocomm = () => {
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
    }

    const reworkedText = 'reworked'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.175,
                delayChildren: 0.1,
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 30,
                mass: 1,
                delay: 0.05,
            },
        },
    }


    return (
        <>
            <section className='flex flex-col justify-around items-center h-screen md:min-h-screen w-full '>
                {/* <span className='h-[50dvh] md:h-0'></span> */}
                <div className='w-full flex flex-col gap-5 '>
                    <span className='w-full flex flex-col relative'>
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Image src={'/ecomm/ecomm.avif'}
                                width={1000}
                                height={1000}
                                alt='ecomm'
                                className='w-full h-auto md:relative'
                            />
                        </motion.div>
                        <motion.p
                            className='meowscript-400 font-medium flex text-[20vw] w-full items-end justify-end secondary absolute 
                        -bottom-10 -left-5 md:bottom-[-150px] md:-left-20'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {reworkedText.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={textVariants}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.p>
                    </span>
                    <span className='w-full flex flex-col justify-start items-start'>
                        <p className='text-white text-[20px] clashdisplay-500 mt-5 md:mt-0'>
                            Your Commerce, Fully Switched On.
                        </p>
                    </span>
                </div>
            </section>
        </>)
}

export default Herocomm
