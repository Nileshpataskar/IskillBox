import Image from 'next/image';
import React from 'react'

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
                <div className="flex gap-3 sm:gap-4">
                    <span className="mt-1 h-20 sm:h-32 md:h-40 w-0.5 sm:w-1 rounded-full bg-lime-400" aria-hidden="true" />
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#161c2d] leading-tight">
                            <span className="text-[#6d3a95]">Discover.</span>{' '}
                            <span className="text-[#6d3a95]">Design.</span>{' '}
                            <span className="text-[#6d3a95]">Deliver.</span>
                        </h3>
                        <p className="mt-3 sm:mt-4 max-w-md text-base sm:text-lg md:text-xl leading-relaxed text-[#161c2d]/80">
                            We blend strategy with creativity to craft learning journeys that engage minds and elevate performance.
                        </p>
                    </div>
                </div>
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
