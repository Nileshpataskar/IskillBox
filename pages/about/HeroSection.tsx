'use client'

import React from 'react'
import { motion } from 'motion/react'

const HeroSection = () => {
  return (
    <section className="relative  h-[70vh] ">
      <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: 'url(/About/hero.svg)' }}>
        <h1 className='text-5xl font-regular text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Our Learning Story
        </h1>
      </div>
    </section>
  )
}

export default HeroSection
