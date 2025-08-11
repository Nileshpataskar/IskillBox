import ServiceCard from '@/components/ui/ServiceCard'
import React from 'react'

const Services = () => {
    return (
        <section className='bg-blue-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
            <div className='max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                <ServiceCard
                    image="/service/skillgap.jpg"
                    title="Skill Gap Analysis"
                    subtitle="Spot the gaps. Spark the growth."
                    description="We turn performance blind spots into growth opportunities with data-driven diagnostics that map where your teams need to go and how to get them there."
                    link="#"
                />
                <ServiceCard
                    image="/service/instructor.jpg"
                    title="Instructor-Led Training"
                    subtitle="Learning with a human edge."
                    description="Our expert-led virtual and in-person training blends industry know-how with real-time interaction designed to drive skill, confidence, and change."
                    link="#"
                />
                <ServiceCard
                    image="/service/coahing.jpg"
                    title="1:1 & Group Coaching"
                    subtitle="Coaching that creates momentum."
                    description="From personalized executive coaching to high-impact team sessions we help people lead better, grow faster, and think deeper."
                    link="#"
                />
                <ServiceCard
                    image="/service/elearn.jpg"
                    title="eLearning & LMS"
                    subtitle="Content that performs. Platforms that scale."
                    description="We design mobile-first, gamified eLearning paired with a smart LMS so you can track, train, and transform teams at scale."
                    link="#"
                />
                <ServiceCard
                    image="/service/psycho.jpg"
                    title="Psychometric Assessments"
                    subtitle="Understand what's beneath the surface."
                    description="We go beyond resumes to decode personality, behavior, and potential so you hire right, lead smart, and build strong teams."
                    link="#"
                />
            </div>
        </section>
    )
}

export default Services
