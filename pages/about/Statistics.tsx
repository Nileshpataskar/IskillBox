'use client'

import React from 'react'

const Statistics = () => {
    const stats = [
        {
            value: '12+ Years',
            description: 'of pioneering learning innovation'
        },
        {
            value: '16,000+',
            description: 'professionals empowered each year'
        },
        {
            value: '10,000+',
            description: 'subject-matter specialists in our expert ecosystem'
        },
        {
            value: '500+',
            description: 'industry-leading clients across sectors'
        },
        {
            value: '2,000+',
            description: 'high-impact live learning interventions annually'
        }
    ]

    return (
        <section className="bg-blue-50 text-white py-12 h-[90vh] flex items-center">
            <div className="max-w-6xl mx-auto px-4  flex flex-wrap  gap-6 text-center justify-center">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#151E35] p-6  shadow w-80 h-40 justify-center items-center flex flex-col rounded-xl">
                        <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-md text-gray-300">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Statistics
