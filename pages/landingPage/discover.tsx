import Image from 'next/image';
import React from 'react'
import TitleH1 from '@/components/ui/TitleH1';

const Discover = () => {
    const images = [
        '/landing/p2-1.webp',
        '/landing/p2-3.webp',
        '/landing/p2-4.webp',
        '/landing/p2-2.webp',
    ];
    return (
        <div className='h-[65vh] md:min-h-screen bg-blue-50 flex flex-col items-start gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 md:flex-row md:items-center'>

            <div className="w-full md:w-1/2">
                <TitleH1
                    title="Discover. Design. Deliver."
                    description="We blend strategy with creativity to craft learning journeys that engage minds and elevate performance."
                    titleClassName="text-[#1F2A44]"
                />
            </div>
            
            <div className="grid w-full gap-3 sm:gap-4 md:gap-5 md:w-1/2 grid-cols-2">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        style={{ contentVisibility: 'auto' }}
                        className={`overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-sm ring-1 ring-black/10 ${
                            idx % 2 === 1 ? 'md:mt-6' : 'md:mb-6'
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`placeholder ${idx + 1}`}
                            width={600}
                            height={450}
                            className="aspect-[4/3] w-full object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICQAAAAwAQCdASoBAAEALwA0JaQAA3AA/vuUAAA="
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover
