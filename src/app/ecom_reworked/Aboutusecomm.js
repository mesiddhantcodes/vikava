'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Aboutusecomm = () => {
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

    const aboutUsText = 'about us'

    return (
        <>
            <section className='flex w-full justify-start items-center md:-mt-20'>
                <div className='w-4xl flex flex-col justify-center items-center '>
                    <motion.span
                        className='text-xl md:text-4xl primary leading-relaxed uppercase boldonse-400'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 80,
                            damping: 30,
                            mass: 1,
                            delay: 0
                        }}
                    >
                        Most founders think e-commerce is just about having a website. The truth: <br />it's the entire engine behind your sales.
                    </motion.span>
                </div>
            </section>
            <div className='w-full flex md:items-start md:justify-end'>
                <div className='w-full md:w-1/2 hidden md:flex'>
                    <motion.h3
                        className='meowscript-400 flex font-medium text-[12vw] secondary lowercase -mt-[10rem] z-30'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        {aboutUsText.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={textVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h3>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-10'>
                    <div>
                        <motion.h3
                            className='meowscript-400 flex md:hidden font-medium text-[25vw] secondary lowercase -mt-[13vh] md:-mt-[10rem] z-30'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {aboutUsText.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={textVariants}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h3>
                        <p className='md:text-left primary clashdisplay-500 text-lg md:text-xl'>
                            Ecom Reworked powers that engine by being your sales partner - designing strategies, building funnels, and executing systems for D2C, B2B, service businesses, and professionals. From storefronts and marketplaces to marketing, CRM, automation, logistics, and customer care, we ensure every part of your sales journey works together.
                            <br/>Because we're part of the Vikava Labs ecosystem, your commerce journey isn't a silo - it connects seamlessly with sourcing, design, and marketing.
                        </p>
                    </div>
                    <div className='flex gap-5 items-center justify-center flex-col md:flex-row lg:flex-row'>
                        <Image
                            src='/ecomm/ecomm1.jpg'
                            alt='about use comm'
                            width={900}
                            height={900}
                            className='object-cover w-full md:w-[23vw] md:h-[300px] lg:h-[300px] rounded-2xl'
                        />
                        <Image
                            src='/ecomm/ecomm12.avif'
                            alt='about use comm'
                            width={900}
                            height={900}
                            className='object-cover w-full md:w-[23vw] md:h-[300px] lg:h-[300px] rounded-2xl'
                        />
                    </div>
                </div>
            </div >
        </>)
}

export default Aboutusecomm
