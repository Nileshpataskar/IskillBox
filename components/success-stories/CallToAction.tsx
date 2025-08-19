import React from 'react';

interface CallToActionProps {
    backgroundImage: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
    backgroundImage, 
    title, 
    description, 
    buttonText, 
    buttonLink 
}) => {
    return (
        <div
            className='relative w-full bg-cover bg-center flex flex-col items-center justify-center text-center h-[50vh] sm:h-[60vh] my-6 sm:my-10 px-4'
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/* Content */}
            <div className='relative z-10 px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4'>
                    {title}
                </h1>
                <p className='mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90'>
                    {description}
                </p>
                <a
                    href={buttonLink}
                    className="inline-block rounded-2xl border border-white/40 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-medium text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default CallToAction;
