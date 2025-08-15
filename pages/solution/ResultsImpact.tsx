import React from 'react';

const ResultsImpact = () => {
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

    return (
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
    );
};

export default ResultsImpact;
