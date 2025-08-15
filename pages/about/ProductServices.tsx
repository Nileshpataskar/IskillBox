'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import TitleH1 from '@/components/ui/TitleH1'

const ProductsServices = () => {
    const services = [
        {
            icon: '/icons/skill-gap.svg',
            title: 'Skill Gap Analysis',
            description: 'Pinpoint where learning starts with data-backed diagnostics that drive smarter development.',
        },
        {
            icon: '/icons/instructor-led.svg',
            title: 'Instructor-Led Training',
            description: 'Live, expert-led sessions tailored to your team’s goals online, onsite, or hybrid.',
        },
        {
            icon: '/icons/group-coaching.svg',
            title: '1:1 & Group Coaching',
            description: 'Personalized coaching that fuels individual growth and team transformation.',
        },
        {
            icon: '/icons/elearning.svg',
            title: 'E-Learning & LMS',
            description: 'Engaging content + Intuitive platform = learning that performs at scale.',
        },
        {
            icon: '/icons/psychometric.svg',
            title: 'Psychometric Assessments',
            description: 'Go beyond skills: understand behavior, personality, and potential.',
        },
        {
            icon: '/icons/iskillevaluate.svg',
            title: 'iSkillEvaluate',
            description: 'Our AI-powered assessment engine to screen, evaluate, and hire smarter.',
        },
        {
            icon: '/icons/smart-screening.svg',
            title: 'Smart Screening – Talent Assessor',
            description: 'Fast-track hiring with intelligent screening that filters for true fit.',
        },
        {
            icon: '/icons/hiring-assistant.svg',
            title: 'Hiring Assistant',
            description: 'Your digital recruiter—automated, efficient, and always learning.',
        },
        {
            icon: '/icons/assessment-skill.svg',
            title: 'Assessment Skill Base',
            description: 'Role-specific, ready-to-use skill assessments for faster decisions.',
        },
        {
            icon: '/icons/off-the-shelf.svg',
            title: 'Off-the-Shelf Courses',
            description: 'Plug and play learning content for faster team enablement.',
        },
    ]

    return (
        <section className="bg-[#EAF4FF] py-12">
            <div className="max-w-6xl mx-auto px-4">
               <TitleH1
               title='Products & Services'/>
               
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            {/* <Image src={service.icon} alt={service.title} width={40} height={40} /> */}
                            <TitleH1
                                title={service.title}
                                description={service.description}
                                 link={{ text: 'Read more', href: '/about', newTab: false }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsServices
