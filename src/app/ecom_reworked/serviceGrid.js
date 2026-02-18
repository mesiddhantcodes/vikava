// src/app/ecomm/ServicesGrid.jsx
'use client';
import Image from 'next/image';
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesGrid = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Memoize services array to prevent recreation on each render
    const services = useMemo(() => [
        {
            id: '01',
            title: 'PERFORMANCE MARKETING & SEO',
            description: 'ROI-focused Google, Meta, LinkedIn, influencer commerce, technical + content SEO.',
            image: '/ecomm/grid1.avif'
        },
        {
            id: '02',
            title: 'CRM & LIFECYCLE AUTOMATION',
            description: 'HubSpot, Zoho, Klaviyo; WhatsApp/email/SMS flows, lead scoring, and retention journeys.',
            image: '/ecomm/grid12.avif'
        },
        {
            id: '03',
            title: 'CONVERSION RATE OPTIMIZATION',
            description: 'A/B testing, UX improvements, and checkout optimization to maximize revenue.',
            image: '/ecomm/grid13.jpg'
        },
        {
            id: '04',
            title: 'LOGISTICS & FULFILMENT',
            description: 'Delhivery, Shiprocket integrations; RTO/NDR prevention & reverse logistics management.',
            image: '/ecomm/grid14.jpg'
        },
        {
            id: '05',
            title: 'CUSTOMER SUPPORT & RETENTION',
            description: 'Omnichannel helpdesk (Zendesk, Freshdesk, Gorgias), WhatsApp commerce & service systems.',
            image: '/ecomm/grid15.jpg'
        },
        {
            id: '06',
            title: 'B2B & PROFESSIONAL SALES ENABLEMENT',
            description: "Structured sales playbooks, CRM pipelines,LinkedIn lead gen, cadences, training & scripts for B2B companies, service firms, and professionals.",
            image: '/ecomm/grid16.avif'
        }
    ], []);

    // Memoize animation variants for better performance
    const cardVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }), []);

    const backgroundVariants = useMemo(() => ({
        hidden: { clipPath: 'inset(100% 0 0 0)' },
        visible: { clipPath: 'inset(0 0 0 0)' }
    }), []);

    const descriptionVariants = useMemo(() => ({
        hidden: { y: '100%', opacity: 0 },
        visible: { y: '0%', opacity: 1 }
    }), []);

    // Optimized transition configurations
    const smoothTransition = useMemo(() => ({
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }), []);

    const fastTransition = useMemo(() => ({
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
    }), []);

    const colorTransition = useMemo(() => ({
        duration: 0.5
    }), []);

    return (
        <section className='w-full flex flex-col gap-12 py-16 lg:py-20'>
            {/* Section Heading */}
            <div className='relative w-full text-center'>
                <h2 className='text-5xl md:text-6xl lg:text-6xl font-bold uppercase primary boldonse-400 leading-tight'>
                    DIGITAL GROWTH SERVICES
                </h2>
                <h3 className=' m-0 p-0 meowscript-400 text-8xl md:text-8xl lg:text-8xl xl:text-9xl secondary z-10 -mt-12 md:-mt-15 leading-none'>
                    services
                </h3>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3'>
                {services.map((service, index) => {
                    const isHovered = isMobile ? true : hoveredCard === service.id;

                    return (
                        <motion.div
                            key={service.id}
                            className='cursor-pointer'
                            onHoverStart={() => !isMobile && setHoveredCard(service.id)}
                            onHoverEnd={() => !isMobile && setHoveredCard(null)}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Card with padding */}
                            <div className='p-8 md:p-6 h-full flex flex-col gap-6 relative overflow-hidden bg-white'>
                                {/* Fill-in background from bottom (bottom to top) - GPU accelerated */}
                                <motion.div
                                    className='absolute -inset-px bg-[#171717] z-0'
                                    style={{ willChange: 'clip-path' }}
                                    variants={backgroundVariants}
                                    initial="hidden"
                                    animate={isHovered ? "visible" : "hidden"}
                                    transition={smoothTransition}
                                />

                                {/* Content */}
                                <div className='relative z-10 flex flex-col gap-6 h-full'>
                                    {/* ID and Title */}
                                    <div className='flex flex-col gap-3'>
                                        <motion.span
                                            className='text-[18px] clashdisplay-500'
                                            style={{ willChange: 'color' }}
                                            animate={{
                                                color: isHovered ? '#ffffff' : '#000000'
                                            }}
                                            transition={colorTransition}
                                        >
                                            {service.id}/10
                                        </motion.span>
                                        <motion.h4
                                            className='font-bold text-xl md:text-[38px] lg:text-[44px] uppercase clashdisplay-600 text-bold leading-tight'
                                            style={{ willChange: 'color' }}
                                            animate={{
                                                color: isHovered ? '#f8fcf7' : '#171717'
                                            }}
                                            transition={colorTransition}
                                        >
                                            {service.title}
                                        </motion.h4>
                                    </div>

                                    {/* Image - Always visible with priority loading */}
                                    <div className='relative w-full h-[200px] md:h-[300px]'>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className='object-cover'
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority={index < 3}
                                            loading={index < 3 ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </div>

                                {/* Description Box - Fixed at bottom, pops in on hover - GPU accelerated */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            className='absolute bottom-0 left-0 right-0 z-20 bg-[#171717] p-6 md:p-6'
                                            style={{ willChange: 'transform, opacity' }}
                                            variants={descriptionVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            transition={fastTransition}
                                        >
                                            <p className='text-white/95 text-[16px] md:text-base clashdisplay-500 bold leading-tight'>
                                                {service.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesGrid;