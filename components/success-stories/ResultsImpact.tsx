import React from 'react';

interface ResultItem {
    title: string;
    description: string;
    image: string;
}

interface ResultsImpactProps {
    results: ResultItem[];
}

const ResultsImpact: React.FC<ResultsImpactProps> = ({ results }) => {
    return (
        <section className="bg-blue-50 py-12 my-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-green-500"></span> Results & Impact
                </h2>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                            {/* Image with overlay text */}
                            <div
                                className="h-40 bg-cover bg-center flex items-end p-4 relative"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/30"></div>
                                <h3 className="text-white font-semibold text-lg leading-tight relative z-10">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="p-4 text-sm text-gray-700">
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
