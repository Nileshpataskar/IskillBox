'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from '../pages/landingPage/hero'
import Feature from '@/pages/landingPage/Feature'
import Page2 from '@/pages/landingPage/page2'
import Clientle from '@/pages/landingPage/clientle'
import { SuccessStories } from '@/pages/landingPage/successStories'
import Services from '@/pages/landingPage/services'

const page = () => {
  return (
    <div className='text-white w-full overflow-x-hidden md:px-32'>
      <Header />
      <Hero />
      <Page2 />
      <Clientle />
      <Services />
      <SuccessStories />
      <Footer />
    </div>
  )
}

export default page
