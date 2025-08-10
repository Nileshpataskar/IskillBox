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
        <div className="relative overflow-hidden rounded-xl bg-amber-200 shadow-lg group w-full max-w-6xl mx-auto p-10">
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
            <div className="relative z-10  flex flex-col pt-20 gap-3  p-6 text-white max-w-lg">
                {/* Left line and heading */}
                <div className="flex gap-4">
                    <span className="mt-1 h-48 w-2 rounded-full bg-lime-400" aria-hidden="true" />
                    <div className='flex flex-col gap-2'>

                        <div>
                            <h3 className="text-xl font-bold md:text-2xl  transition-colors duration-300">{title}</h3>
                            {subtitle && <p className="text-lg md:text-base text-white/90">{subtitle}</p>}
                        </div>
                        {description && (
                            <p className="text-md md:text-base text-white/80 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {/* Learn More */}
                        {link && (
                            <a
                                href={link}
                                className="mt-2 inline-flex items-center text-md font-bold text-white hover:text-lime-400 transition-colors duration-300"
                            >
                                Learn More <span className="ml-2">→</span>
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
