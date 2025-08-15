'use client'

import React from 'react'
import Image from 'next/image'

const ClientOverview = () => {
    return (
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
    )
}

export default ClientOverview
