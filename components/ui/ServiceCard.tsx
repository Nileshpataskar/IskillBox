import Image from 'next/image';
import React from 'react'

interface ServiceCardProps {
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    link?: string;
}

const ServiceCard = ({
    image,
    title,
    subtitle,
    description,
    link
}: ServiceCardProps) => {
    return (
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-amber-200 shadow-lg group w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
            {/* Background image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-20 gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 text-white max-w-lg">
                {/* Left line and heading */}
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                    <span className="mt-1 h-24 sm:h-32 md:h-40 lg:h-48 w-1 sm:w-1.5 md:w-2 rounded-full bg-lime-400" aria-hidden="true" />
                    <div className='flex flex-col gap-1 sm:gap-2 md:gap-2'>

                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 leading-tight">{title}</h3>
                            {subtitle && <p className="text-sm sm:text-base md:text-lg text-white/90 mt-1">{subtitle}</p>}
                        </div>
                        {description && (
                            <p className="text-sm sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3">
                                {description}
                            </p>
                        )}

                        {/* Learn More */}
                        {link && (
                            <a
                                href={link}
                                className="mt-2 sm:mt-3 inline-flex items-center text-sm sm:text-base md:text-md font-bold text-white hover:text-lime-400 transition-colors duration-300 group/link"
                            >
                                Learn More 
                                <span className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                        )}
                    </div>

                </div>

            </div>

            {/* Description */}
        </div>

    );
};

export default ServiceCard
