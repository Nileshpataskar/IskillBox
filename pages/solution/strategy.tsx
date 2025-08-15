import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

const StrategySolution = () => {
    return (
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
    );
};

export default StrategySolution;
