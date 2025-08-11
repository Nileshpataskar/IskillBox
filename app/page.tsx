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
import NotLast from '@/pages/landingPage/NotLast'
import FAQAccordion from '@/pages/landingPage/faq'
import TestimonialCarousel from '@/pages/landingPage/Testimonial'
import Discover from '@/pages/landingPage/discover'
import CaseStudy from '@/pages/landingPage/CaseStudy'
import { BottomWorks, TopCards } from '@/lib/data'

const page = () => {
  return (
    <div className='text-white w-full overflow-x-hidden md:px-32'>
      <Header />
      <Hero />
      <Discover />
      {/* <Page2 /> */}
      <Clientle />
      <Services />
      {/* <SuccessStories /> */}
      <CaseStudy
        topCards={TopCards}
        bottomWorks={BottomWorks  }
        titleProps={{
          title: "Powered by Purpose",
          description: "Every solution is built with intention, backed by intelligence, and aligned to your business goals.",
          // link: { text: "Learn more", href: "#" },
        }} />
      <TestimonialCarousel />
      <NotLast />
      <FAQAccordion />
      <Footer />
    </div>
  )
}

export default page
