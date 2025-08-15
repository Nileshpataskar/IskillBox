'use client'

import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative h-[50vh] md:h-[70vh]">
            <div
                className='h-full w-full bg-cover bg-center flex items-center justify-center px-4'
                style={{ backgroundImage: 'url(/contact/hero.svg)' }}
            >
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-light text-center text-white max-w-3xl'>
                    Let’s Build Smarter Learning Together
                </h1>
            </div>
        </section>
    )
}

export default HeroSection
