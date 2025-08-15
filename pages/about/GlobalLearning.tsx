'use client'

import React from 'react'

const GlobalLearning = () => {
    return (
        <section className="relative bg-cover bg-center py-20 h-[80vh] flex items-center bg-blue-50" style={{ backgroundImage: 'url(/About/WorldMap.png)' }}>
            <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4">
                <div className="bg-[#0D1425]/80 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Smarter learning experiences delivered globally
                    </h2>
                    <p className="text-base md:text-lg text-gray-300">
                        Leading organizations worldwide trust iSkillBox to power their growth through transformative learning experiences.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GlobalLearning
