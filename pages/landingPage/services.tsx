import ServiceCard from '@/components/ui/ServiceCard'
import React from 'react'

const Services = () => {
    return (
        <section className=' bg-[#f4f7fa] py-20 '>
            <ServiceCard
                image="/landing/p2-1.webp"
                title="Skill Gap Analysis"
                subtitle="Spot the gaps. Spark the growth."
                description="We turn performance blind spots into growth opportunities with data-driven diagnostics that map where your teams need to go and how to get them there."
                link="#"
            />
        </section>
    )
}

export default Services
