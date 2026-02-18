'use client'

// src/app/ecomm/WhoWeServe.jsx
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const WhoWeServe = () => {
    const services = [
        {
            title: 'D2C BRANDS',
            description: 'Launch-ready stores, scalable funnels, marketplace growth.'
        },
        {
            title: 'B2B BUSINESSES',
            description: 'LinkedIn lead gen, CRM pipelines, compliance, cross-border expansion.'
        },
        {
            title: 'PRODUCT-BASED COMPANIES',
            description: 'End-to-end: from sourcing and packaging to operations and sales.'
        },
        {
            title: 'SERVICE-BASED BUSINESSES',
            description: 'Digital funnels, automated client journeys, recurring revenue systems.'
        },
        // {
        //     title: 'PROFESSIONALS',
        //     description: 'Lawyers, doctors, consultants, creators — building visibility, lead flow, and sales pipelines.'
        // }
    ];

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

    const serviceVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.44, 0, 0.56, 1],
            },
        }),
    }

    const servicesContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const servicesText = 'services'

    return (
        <section className='w-full flex flex-col lg:flex-row gap-10 lg:gap-16 py-16 lg:py-20'>
            {/* Left Side - Heading, Image and Description */}
            <div className='w-full lg:w-1/2 flex flex-col gap-10'>
                {/* Heading with overlapping "services" */}
                <div className='relative mb-15'>
                    <motion.h2 
                        className='text-5xl md:text-6xl font-bold uppercase secondary boldonse-400 leading-tight'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 80,
                            damping: 30,
                            mass: 1,
                            delay: 0,
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        WHO WE SERVE?
                    </motion.h2>
                    <motion.h3 
                        className='meowscript-400 text-6xl md:text-7xl lg:text-8xl primary absolute -bottom-12 left-10 z-10 leading-none'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        {servicesText.split('').map((char, i) => (
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

                {/* Image */}
                <div className='flex flex-col md:flex-row gap-20'>
                    <motion.div 
                        className='w-full'
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Image
                            src='/ecomm/handshake.webp'
                            alt='Business handshake'
                            width={900}
                            height={900}
                            className='object-cover h-[250px] md:h-[280px] lg:h-[280px] w-full rounded-2xl'
                        />
                    </motion.div>

                    {/* Description Text */}
                    <div className='flex flex-col gap-4'>
                        <motion.p 
                            className='text-white/90 clashdisplay-500 text-sm md:text-base leading-relaxed'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 80,
                                damping: 30,
                                mass: 1,
                                delay: 0.15,
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            Ecom Reworked is built for anyone who sells - or wants to sell - products, services, and just hates leaks.
                        </motion.p>
                        <motion.p 
                            className='text-white/90 clashdisplay-500 text-sm md:text-base leading-relaxed'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 80,
                                damping: 30,
                                mass: 1,
                                delay: 0.25,
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            We help businesses and professionals streamline operations, boost visibility, and grow revenue with smarter workflows and optimized sales funnels.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Right Side - Services List */}
            <motion.div 
                className='w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-7'
                variants={servicesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className='flex justify-between gap-4 py-6 lg:py-7 border-t rounded-l-2xl border-white/10'
                        custom={index}
                        variants={serviceVariants}
                    >
                        <h4 className='text-white font-bold text-base md:text-lg lg:text-2xl uppercase clashdisplay-600'>
                            {service.title}
                        </h4>
                        <p className='text-white/80 text-sm md:text-base md:max-w-[350px] clashdisplay-500 text-right leading-relaxed'>
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhoWeServe;
