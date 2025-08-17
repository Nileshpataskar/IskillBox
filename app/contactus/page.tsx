'use client'

import HeroSection from '@/pages/contactUs/heroSection'
import TalkAndSend from '@/pages/contactUs/TalkAndSend'
import React from 'react'
import Footer from '../Footer'
import TalkToOurTeam from '@/pages/about/TalkToOurTeam'
import ContactForm from '@/pages/contactUs/contactForm'
import MapPage from '@/pages/contactUs/mapPage'

const ContactUsPage = () => {
    return (
        <div className='md:px-32'>
            <HeroSection />
            <TalkAndSend />
            <ContactForm />
            <TalkToOurTeam />
            <MapPage/>
            <Footer />
        </div>
    )
}

export default ContactUsPage
