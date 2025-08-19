import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

export const fiatStory = {
    id: 'fiat',
    companyName: 'FIAT',
    slug: 'fiat',
    
    // Hero Section
    hero: {
        backgroundImage: '/solution/hero.png',
        title: 'Driving Excellence',
        subtitle: 'How FIAT streamlined complex SOPs into engaging eLearning modules.'
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'FIAT',
        description: 'FIAT is a renowned Italian automobile manufacturer with a global presence, known for producing innovative vehicles that combine style, performance, and reliability. The company operates across multiple continents with diverse manufacturing and service operations.',
        logoImage: '/solution/client.png',
        logoAlt: 'FIAT Logo'
    },
    
    // Challenge Section
    challenge: {
        title: 'Simplifying Complex Operations Across Global Teams!',
        description: 'FIAT faced the challenge of standardizing complex Standard Operating Procedures (SOPs) across their global operations.\n\nWith operations spanning multiple countries and diverse workforce demographics, they needed a solution that could transform complex technical procedures into engaging, accessible learning content that could be consistently delivered worldwide.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Developed comprehensive Level 3 eLearning modules that transform complex SOPs into engaging, interactive learning experiences.',
        mainTitle: 'Delivered a multi-tiered eLearning solution with three core components',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />,
                title: 'Content Development',
                description: 'Transformed complex SOPs into clear, visual learning modules.'
            },
            {
                icon: <MdOutlineGroups />,
                title: 'Interactive Learning',
                description: 'Created engaging simulations and interactive assessments.'
            },
            {
                icon: <PiMegaphoneSimpleBold />,
                title: 'Global Deployment',
                description: 'Implemented scalable delivery across all FIAT locations.'
            }
        ],
        footerText: 'Every module was designed with FIAT\'s specific operational needs in mind, ensuring that complex procedures became accessible and engaging for all team members.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Standardized Operations',
            description: 'Achieved 90% consistency in SOP execution across all global locations.',
            image: '/solution/results/1.png',
        },
        {
            title: 'Improved Compliance',
            description: 'Training completion rates increased by 75% within 6 months.',
            image: '/solution/results/2.png',
        },
        {
            title: 'Reduced Errors',
            description: 'Operational errors decreased by 40% through standardized training.',
            image: '/solution/results/3.png',
        },
        {
            title: 'Cost Savings',
            description: 'Training costs reduced by 35% through digital delivery methods.',
            image: '/solution/results/4.png',
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/solution/team.png',
        title: 'Transform Your Operations',
        description: 'Ready to streamline your SOPs and improve operational efficiency? Let\'s discuss how we can help.',
        buttonText: 'Get Started',
        buttonLink: '#solutions'
    }
};
