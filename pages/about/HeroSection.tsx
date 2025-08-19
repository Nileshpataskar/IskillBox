'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const HeroSection = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative h-[70vh]">
      <div className='h-full w-full bg-cover bg-center' style={{ backgroundColor: imgError ? '#161c2d' : undefined }}>
        {!imgError && (
          <Image
            src="/About/Hero.svg"
            alt="About Hero"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0"
            onError={() => setImgError(true)}
            priority
          />
        )}
        <h1 className='text-5xl font-regular text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Our Learning Story
        </h1>
      </div>
    </section>
  )
}

export default HeroSection
