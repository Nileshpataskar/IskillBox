import React from 'react';

interface SolutionTrack {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface StrategySolutionProps {
    subtitle: string;
    mainTitle: string;
    solutionTracks: SolutionTrack[];
    footerText: string;
}

const StrategySolution: React.FC<StrategySolutionProps> = ({
    subtitle,
    mainTitle,
    solutionTracks,
    footerText
}) => {
    return (
        <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Subtext */}
                <p className="mt-2 text-gray-700 max-w-3xl">
                    {subtitle}
                </p>
                {/* Main Title is handled by TitleH1 above */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solutionTracks.map((track, index) => (
                        <div key={index} className="rounded-lg p-6 bg-white text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="text-4xl text-gray-700 mb-4 flex justify-center">
                                {track.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-[#6A1B9A] mb-2 text-center">
                                {track.title}
                            </h4>
                            <p className="text-gray-600 text-sm text-center">
                                {track.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Footer Text */}
                <p className="mt-8 text-sm text-gray-500">
                    {footerText}
                </p>
            </div>
        </section>
    );
};

export default StrategySolution;
