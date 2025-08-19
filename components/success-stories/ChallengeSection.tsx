import React from 'react';

interface ChallengeSectionProps {
    title: string;
    description: string;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ title, description }) => {
    return (
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
                        {title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                        {description.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
