'use client'
import ClientOverview from '@/pages/solution/client'
import HeroSection from '@/pages/solution/heroSection'
import React from 'react'
import Footer from '../Footer'
import ChallengeSection from '@/pages/solution/challenge'
import StrategySolution from '@/pages/solution/strategy'
import ResultsImpact from '@/pages/solution/ResultsImpact'

const page = () => {
    return (
        <div className='md:px-32'>
            <HeroSection />
            <ClientOverview />
            <ChallengeSection />
            <StrategySolution />
            <ResultsImpact />

            <div
                className='relative w-full bg-cover bg-center flex flex-col items-center justify-center text-center h-[50vh] sm:h-[60vh] my-6 sm:my-10 px-4'
                style={{ backgroundImage: 'url(/solution/team.png)' }}
            >
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40'></div>

                {/* Content */}
                <div className='relative z-10 px-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4'>
                        Talk to Our Team
                    </h1>
                    <p className='mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90'>
                        Whether you're exploring our services or ready to transform your workforce, our sales experts are just a message away.    </p>
                    <a
                        href="#solutions"
                        className="inline-block rounded-2xl border border-white/40 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-medium text-white hover:bg-white/20 transition-colors duration-200"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page