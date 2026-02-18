import BlurText from '@/Components/BlurText'
import React from 'react'

const LastText = () => {
    return (
        <section className='w-full py-20 md:py-32 flex justify-center items-center bg-[#f8fcf7]'>
            <div className='w-full max-w-8xl px-6 md:px-12'>
                <div className='text-center'>
                    <BlurText
                        text="For D2C, B2B, product, services, and professionals - we build sales strategies and systems, not just stores."
                        delay={0.08}
                        animateBy="words"
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl clashdisplay-500 text-purple-600 leading-tight uppercase"
                    />
                </div>
            </div>
        </section>
    )
}

export default LastText
