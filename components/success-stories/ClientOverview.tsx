import React from 'react';
import Image from 'next/image';

interface ClientOverviewProps {
    companyName: string;
    description: string;
    logoImage: string;
    logoAlt: string;
}

const ClientOverview: React.FC<ClientOverviewProps> = ({ 
    companyName, 
    description, 
    logoImage, 
    logoAlt 
}) => {
    return (
        <section className="bg-blue-50 py-12">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 border-l-4 border-lime-400 pl-3">
                        Client Overview:
                    </h1>
                    <p className="text-gray-700 mb-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Right Side - Logo */}
                <div className="flex justify-center">
                    <Image 
                        src={logoImage} 
                        alt={logoAlt} 
                        width={300} 
                        height={100}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default ClientOverview;
