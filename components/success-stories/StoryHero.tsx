import React from 'react';

interface StoryHeroProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const StoryHero: React.FC<StoryHeroProps> = ({ backgroundImage, title, subtitle }) => {
    return (
        <section className="relative h-[50vh] md:h-[70vh]">
            <div
                className='h-full w-full bg-cover bg-center flex items-center justify-center px-4'
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <span className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl sm:text-3xl md:text-5xl font-light text-center text-white max-w-3xl'>
                        {title}
                    </h1>
                    <h2 className='sm:text-xl md:text-2xl font-light text-center text-white max-w-3xl mt-4'>
                        {subtitle}
                    </h2>
                </span>
            </div>
        </section>
    );
};

export default StoryHero;
