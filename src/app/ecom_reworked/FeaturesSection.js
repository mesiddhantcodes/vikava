// src/app/ecomm/FeaturesSection.jsx
'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
    const features = [
        {
            id: '07',
            title: ' Sales Strategy & Funnel Design',
            description: 'GTM, pricing, promotions, and funnels for D2C, B2B, service businesses, and professionals.',
            image: '/ecomm/grid6.jpg'
        },
        {
            id: '08',
            title: 'STOREFRONTS',
            description: 'Shopify, WooCommerce, Magento & custom-coded with GA4 + Meta CAM tracking baked in.',
            image: '/ecomm/grid61.jpg'
        },
        {
            id: '09',
            title: 'MARKETPLACES',
            description: 'Amazon, Flipkart, Nykaa, Myntra quick commerce onboarding & growth; ONDC integration; Amazon Global exports.',
            image: '/ecomm/grid62.jpg'
        },
        {
            id: '10',
            title: 'PAYMENTS & CHECKOUT',
            description: 'Razorpay, Stripe, UPI, BNPL, COD optimization, prepaid nudges, seamless checkout flows.',
            image: '/ecomm/grid63.jpg'
        },

    ];

    return (
        <div className='md:w-[80%] mx-auto flex flex-col gap-12 lg:gap-16 py-16 lg:py-20'>
            {features.map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className='flex flex-col lg:flex-row gap-6 lg:gap-5 items-start'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    {/* Image - Left side, constrained width */}
                    <div className='w-full lg:w-[35%] flex-shrink-0'>
                        <div className='relative w-full  h-[250px] md:h-[300px] lg:h-[480px]'>
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </div>

                    {/* Content - Right side */}
                    <div className='w-full lg:w-[65%] flex flex-col gap-3 md:gap-2 h-full'>
                        {/* ID */}
                        <div className='w-full flex justify-end pr-5'>
                            <span className='text-white/60 text-sm md:text-xl clashdisplay-500 tracking-wide'>
                                {feature.id}/10
                            </span>
                        </div>
                        <div className='flex md:justify-between items-start flex-col h-full'>

                            {/* Title */}
                            <h3 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl uppercase clashdisplay-600 leading-tight'>
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className='text-white/80 text-sm md:text-base lg:text-lg clashdisplay-500 leading-relaxed w-[70%]'>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FeaturesSection;
