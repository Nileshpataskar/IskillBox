'use client'
import ClientOverview from '@/pages/solution/client'
import HeroSection from '@/pages/solution/heroSection'
import React from 'react'
import Footer from '../Footer'
import ChallengeSection from '@/pages/solution/challenge'
import StrategySolution from '@/pages/solution/strategy'
import ResultsImpact from '@/pages/solution/ResultsImpact'
import Image from 'next/image'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdOutlineGroups } from 'react-icons/md'
import { PiMegaphoneSimpleBold } from 'react-icons/pi'

const data = [
    {
        title: 'Efficiency Gains',
        description:
            'Content creation time reduced by over 50% for newsletters, announcements, and media kits.',
        image: '/solution/results/1.png',
    },
    {
        title: 'Improved Response Time',
        description:
            'Teams are now equipped to use AI for drafting rapid crisis responses and monitoring public sentiment in real-time.',
        image: '/solution/results/2.png',
    },
    {
        title: 'Higher Engagement',
        description:
            'Internal communications became more personalized and interactive through AI-driven messaging.',
        image: '/solution/results/3.png',
    },
    {
        title: 'Confidence with AI',
        description:
            'Participants left with not only technical knowledge but also practical confidence to deploy AI tools responsibly in their roles.',
        image: '/solution/results/4.png',
    },
];

const page = () => {
    return (
        <div className='md:px-32'>
            <section className="relative h-[50vh] md:h-[70vh]">
                <div
                    className='h-full w-full bg-cover bg-center flex items-center justify-center px-4'
                    style={{ backgroundImage: 'url(/solution/hero.png)' }}
                >
                    <span className='flex flex-col items-center justify-center text-center'>

                        <h1 className='text-4xl sm:text-3xl md:text-5xl font-light text-center text-white max-w-3xl'>
                            Echoes of Intelligence
                        </h1>
                        <h2 className=' sm:text-xl md:text-2xl font-light text-center text-white max-w-3xl mt-4'>
                            How GMR rewrote the script with AI.
                        </h2>
                    </span>
                </div>
            </section>

            <section className="bg-blue-50 py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Text */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 border-l-4 border-lime-400 pl-3">
                            Client Overview:
                        </h1>
                        <p className="text-gray-700 mb-3">
                            GMR Group is one of India’s leading infrastructure enterprises, with a global footprint in sectors such as airports, energy, transportation, and urban infrastructure. Headquartered in New Delhi, the group is known for developing and operating world-class assets, including major international airports like Delhi International Airport and Hyderabad International Airport.
                        </p>

                    </div>

                    {/* Right Side - Logo */}
                    <div className="flex justify-center">
                        <Image src="/solution/client.png" alt="iSkillBox Logo" width={300} height={100} />
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-12 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side */}
                    <div className="text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 border-l-4 border-lime-400 pl-3">
                            Challenge
                        </h1>
                    </div>

                    {/* Right Side */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            A Digital Leap Toward Smarter Communication!
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2">
                            As part of its forward-looking vision, GMR Group saw a strategic opportunity to elevate its communication processes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With increasing content demands across press releases, internal updates, and engagement campaigns, the organization recognized the need for agile, AI-powered tools that could support faster, smarter, and more consistent messaging.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-blue-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#6A1B9A] flex items-center gap-2">
                        <span className="w-1 h-6 bg-green-500"></span> Strategy & Solution
                    </h2>

                    <div className='max-w-xl mx-auto text-center mt-6 '>

                        {/* Subtext */}
                        <p className="mt-4 text-gray-700 max-w-3xl">
                            Equip GMR Group’s communication and branding teams with Generative AI skills to boost creativity, speed, and impact across all communication channels.
                        </p>

                        {/* Main Title */}
                        <h3 className="mt-6 text-lg md:text-xl font-semibold text-gray-800">
                            Delivered a custom Generative AI training program in three focused tracks
                        </h3>

                        {/* Cards */}
                    </div>
                    <div className='max-w-4xl mx-auto text-center mt-6 '>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="border border-gray-300 rounded-lg p-6 bg-white text-left">
                                <FaRegNewspaper className="text-4xl text-gray-700 mb-4" />
                                <h4 className="text-lg font-semibold text-[#6A1B9A] mb-2">Media & PR</h4>
                                <p className="text-gray-600 text-sm">
                                    Press releases, media responses, reputation management.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-gray-300 rounded-lg p-6 bg-white text-left">
                                <MdOutlineGroups className="text-4xl text-gray-700 mb-4" />
                                <h4 className="text-lg font-semibold text-[#6A1B9A] mb-2">Internal Communications</h4>
                                <p className="text-gray-600 text-sm">
                                    Newsletters, messaging, employee engagement.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-gray-300 rounded-lg p-6 bg-white text-left">
                                <PiMegaphoneSimpleBold className="text-4xl text-gray-700 mb-4" />
                                <h4 className="text-lg font-semibold text-[#6A1B9A] mb-2">Social Media, Marketing & Branding</h4>
                                <p className="text-gray-600 text-sm">
                                    Campaign ideation, event creatives, content optimization.
                                </p>
                            </div>
                        </div>

                        {/* Footer Text */}
                        <p className="mt-8 text-sm text-gray-500 ">
                            Every module was hands-on and scenario-based, built around GMR’s real-world use cases, enabling teams to apply AI instantly and effectively.
                        </p>
                    </div>

                </div>
            </section>

            <section className="bg-blue-50 py-12 my-10">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 flex items-center gap-2">
                        <span className="w-1 h-6 bg-green-500"></span> Results & Impact
                    </h2>

                    {/* Cards */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                        {data.map((item, index) => (
                            <div key={index} className=" rounded-lg  overflow-hidden">
                                {/* Image with overlay text */}
                                <div
                                    className="h-40 bg-cover bg-center flex items-end p-4"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <h3 className="text-white font-semibold text-lg leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="p-4 text-sm text-gray-700 ">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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