import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react'

interface ServiceCardProps {
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    link?: string;
}

// Create a deterministic delay from a string to avoid SSR/CSR mismatch
function getDeterministicDelayMs(input: string): number {
    let hash = 0 >>> 0;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash * 31) + input.charCodeAt(i)) >>> 0;
    }
    return (hash % 500); // 0..499 ms
}

const ServiceCard = ({
    image,
    title,
    subtitle,
    description,
    link
}: ServiceCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const animationDelayMs = useMemo(() => getDeterministicDelayMs(`${title}-${subtitle ?? ''}`), [title, subtitle]);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`
                relative overflow-hidden rounded-2xl sm:rounded-3xl 
                bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100
                shadow-2xl group w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 
                min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
                transform transition-all duration-1000 ease-out
                hover:shadow-3xl hover:-translate-y-2 hover:scale-[1.02]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                border border-white/20 backdrop-blur-sm
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animationDelay: `${animationDelayMs / 1000}s`
            }}
        >
            {/* Animated background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 group-hover:from-blue-600/30 group-hover:via-purple-600/30 group-hover:to-pink-600/30 transition-all duration-700" />
            
            {/* Background image with enhanced effects */}
            <Image
                src={image}
                alt={title}
                fill
                className={`
                    object-cover transition-all duration-1000 ease-out
                    group-hover:scale-110 group-hover:rotate-1
                    ${isHovered ? 'brightness-110 contrast-110' : 'brightness-90 contrast-95'}
                `}
                priority={false}
            />

            {/* Dynamic overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/60 to-black/70 group-hover:from-black/40 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-700" />

            {/* Animated particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-lime-400/60 rounded-full animate-pulse"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '2s'
                        }}
                    />
                ))}
            </div>

            {/* Content with enhanced animations */}
            <div className="relative z-10 flex flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-20 gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 text-white max-w-lg">
                {/* Animated left line with glow effect */}
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                    <div className="relative">
                        <span 
                            className={`
                                block mt-1 h-24 sm:h-32 md:h-40 lg:h-48 w-1 sm:w-1.5 md:w-2 
                                rounded-full bg-gradient-to-b from-lime-400 to-emerald-500
                                transition-all duration-700 group-hover:shadow-lg group-hover:shadow-lime-400/50
                                ${isHovered ? 'animate-pulse' : ''}
                            `} 
                            aria-hidden="true" 
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-lime-400/30 to-emerald-500/30 rounded-full blur-sm group-hover:blur-md transition-all duration-500" />
                    </div>
                    
                    <div className='flex flex-col gap-1 sm:gap-2 md:gap-2 flex-1'>
                        {/* Title with typewriter effect */}
                        <div className="overflow-hidden">
                            <h3 className={`
                                text-lg sm:text-xl md:text-2xl font-bold leading-tight
                                transition-all duration-700 group-hover:text-lime-300
                                transform group-hover:translate-x-2 group-hover:scale-105
                                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                            `}>
                                {title}
                            </h3>
                        </div>

                        {/* Subtitle with slide-in effect */}
                        {subtitle && (
                            <div className="overflow-hidden">
                                <p className={`
                                    text-sm sm:text-base md:text-lg text-white/90 mt-1
                                    transition-all duration-700 delay-200 group-hover:text-white
                                    transform group-hover:translate-x-1
                                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                                `}>
                                    {subtitle}
                                </p>
                            </div>
                        )}

                        {/* Description with fade-in effect */}
                        {description && (
                            <div className="overflow-hidden">
                                <p className={`
                                    text-sm sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3
                                    transition-all duration-700 delay-300 group-hover:text-white/90
                                    transform group-hover:translate-x-1
                                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                                `}>
                                    {description}
                                </p>
                            </div>
                        )}

                        {/* Enhanced Learn More button */}
                        {link && (
                            <div className="overflow-hidden mt-2 sm:mt-3">
                                <a
                                    href={link}
                                    className={`
                                        inline-flex items-center text-sm sm:text-base md:text-md font-bold 
                                        text-white hover:text-lime-400 transition-all duration-500 group/link
                                        transform hover:scale-105 hover:translate-x-1
                                        relative overflow-hidden
                                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                                    `}
                                    style={{ transitionDelay: '400ms' }}
                                >
                                    {/* Button background effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-emerald-500/20 rounded-lg transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left" />
                                    
                                    {/* Button content */}
                                    <span className="relative z-10 flex items-center">
                                        Learn More 
                                        <span className="ml-1 sm:ml-2 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-300">
                                            →
                                        </span>
                                    </span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Floating elements for extra visual interest */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                <div className="w-8 h-8 border-2 border-lime-400/50 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-lime-400/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
    );
};

export default ServiceCard
