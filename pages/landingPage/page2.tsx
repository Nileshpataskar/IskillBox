import React from 'react'

const dummyImages = [
    '/landing/p2-1.jpg',
    '/landing/p2-3.jpg',
    '/landing/p2-4.jpg',
    '/landing/p2-2.jpg',
]

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
                            className={`overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/10 ${idx % 2 === 1 ? 'md:mt-6' : 'md:mb-6'}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                loading="lazy"
                                decoding="async"
                                src={src}
                                alt={`placeholder ${idx + 1}`}
                                className="aspect-[4/3] w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page2

