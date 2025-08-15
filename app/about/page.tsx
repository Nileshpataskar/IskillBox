'use client'

import React from 'react'
import Footer from '../Footer'
import HeroSection from '@/pages/about/HeroSection'
import Statistics from '@/pages/about/Statistics'
import GlobalLearning from '@/pages/about/GlobalLearning'
import Clientle from '@/pages/landingPage/clientle'
import History from '@/pages/about/History'
import Potential from '@/pages/about/Potential'
import ProductsServices from '@/pages/about/ProductServices'
import TalkToOurTeam from '@/pages/about/TalkToOurTeam'

const AboutPage = () => {
    return (
        <div className=" md:px-32">
            <HeroSection />
            <Statistics />
            <GlobalLearning />
            <Clientle />
            <History />
            <Potential />
            <ProductsServices />
            <TalkToOurTeam />
            <Footer />
        </div>
    )
}

export default AboutPage
