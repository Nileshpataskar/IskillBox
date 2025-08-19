import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

export const aequsStory = {
    id: 'aequs',
    companyName: 'Aequs',
    slug: 'aequs',
    
    // Hero Section
    hero: {
        backgroundImage: '/solution/hero.png',
        title: 'Manufacturing Intelligence',
        subtitle: 'How Aequs built a custom LMS for scale, speed, and smart reporting.'
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'Aequs',
        description: 'Aequs is a leading precision manufacturing company specializing in aerospace, automotive, and industrial components. With state-of-the-art facilities and a commitment to innovation, they serve global OEMs with high-quality manufacturing solutions.',
        logoImage: '/solution/client.png',
        logoAlt: 'Aequs Logo'
    },
    
    // Challenge Section
    challenge: {
        title: 'Building a Learning Platform for Manufacturing Excellence!',
        description: 'Aequs needed a custom Learning Management System (LMS) that could handle their unique manufacturing training requirements.\n\nThey required a solution that could scale with their growth, provide real-time reporting, and integrate seamlessly with their existing manufacturing processes while supporting multiple languages and learning styles.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Developed a custom LMS specifically designed for manufacturing operations with advanced reporting and scalability features.',
        mainTitle: 'Delivered a comprehensive LMS solution with three key pillars',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />,
                title: 'Custom Development',
                description: 'Built LMS tailored to manufacturing industry needs.'
            },
            {
                icon: <MdOutlineGroups />,
                title: 'Smart Reporting',
                description: 'Advanced analytics and real-time performance tracking.'
            },
            {
                icon: <PiMegaphoneSimpleBold />,
                title: 'Scalable Architecture',
                description: 'Platform designed to grow with business expansion.'
            }
        ],
        footerText: 'The solution was built from the ground up to address Aequs\'s specific manufacturing training challenges, ensuring seamless integration with their operational workflows.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Improved Training',
            description: 'Training efficiency increased by 60% with the new LMS platform.',
            image: '/solution/results/1.png',
        },
        {
            title: 'Better Reporting',
            description: 'Real-time insights led to 45% improvement in training outcomes.',
            image: '/solution/results/2.png',
        },
        {
            title: 'Cost Reduction',
            description: 'Training delivery costs reduced by 50% through digital platform.',
            image: '/solution/results/3.png',
        },
        {
            title: 'Scalability',
            description: 'Platform successfully supports 3x user growth without issues.',
            image: '/solution/results/4.png',
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/solution/team.png',
        title: 'Build Your Custom LMS',
        description: 'Ready to create a learning platform that perfectly fits your industry needs? Let\'s discuss your requirements.',
        buttonText: 'Get Started',
        buttonLink: '#solutions'
    }
};
