import React from 'react';
import Image from 'next/image';

const dummyImages = [
    '/landing/p2-1.webp',
    '/landing/p2-3.webp',
    '/landing/p2-4.webp',
    '/landing/p2-2.webp',
];

const Page2 = () => {
    return (
        <section className="w-full bg-[#f4f7fa] py-16">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 md:flex-row md:items-center">
                {/* Left copy */}
                <div className="w-full md:w-1/2">
                    <div className="flex gap-4">
                        <span className="mt-1 h-40 w-1 rounded-full bg-lime-400" aria-hidden="true" />
                        <div>
                            <h3 className="text-2xl font-bold text-[#161c2d] md:text-4xl">
                                <span className="text-[#6d3a95]">Discover.</span>{' '}
                                <span className="text-[#6d3a95]">Design.</span>{' '}
                                <span className="text-[#6d3a95]">Deliver.</span>
                            </h3>
                            <p className="mt-4 max-w-md text-lg leading-relaxed text-[#161c2d]/80 md:text-xl">
                                We blend strategy with creativity to craft learning journeys that engage minds and elevate performance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right image grid */}
                <div className="grid w-full gap-5 md:w-1/2 grid-cols-2">
                    {dummyImages.map((src, idx) => (
                        <div
                            key={idx}
                            style={{ contentVisibility: 'auto' }}
                            className={`overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/10 ${idx % 2 === 1 ? 'md:mt-6' : 'md:mb-6'
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
        </section>
    );
};

export default Page2;
