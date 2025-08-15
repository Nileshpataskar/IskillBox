'use client'

import React from 'react'
import Image from 'next/image'

const History = () => {
    return (
        <section className="bg-blue-50 py-12">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 border-l-4 border-lime-400 pl-3">
                        The History
                    </h1>
                    <p className="text-gray-700 mb-3">
                        Since 2013, iSkillBox has partnered with 500+ corporate houses, collaborated with 10,000+ expert trainers, and established a niche in the SME segment.
                    </p>
                    <p className="text-gray-700 mb-3">
                        We focus on delivering quality training and enterprise learning through services like Training Need Analysis, E-learning modules, Learning Management Solutions, Knowledge Assessment, Custom Course Development, and effective corporate training sessions for top corporates in India and abroad.
                    </p>
                </div>

                {/* Right Side - Logo */}
                <div className="flex justify-center">
                    <Image src="/iskillLogo/16.png" alt="iSkillBox Logo" width={300} height={100} />
                </div>
            </div>
        </section>
    )
}

export default History
