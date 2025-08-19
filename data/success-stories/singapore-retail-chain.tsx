import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

export const singaporeRetailChainStory = {
    id: 'singapore-retail-chain',
    companyName: 'Singapore Retail Chain',
    slug: 'singapore-retail-chain',
    
    // Hero Section
    hero: {
        backgroundImage: '/solution/hero.png', // You can change this to a specific image
        title: 'Retail Revolution',
        subtitle: 'Transforming customer experience through innovative training solutions.'
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'Singapore Retail Chain',
        description: 'A leading retail chain in Singapore with over 100 locations across the country, serving millions of customers annually. The company is known for its commitment to customer service excellence and continuous employee development.',
        logoImage: '/solution/client.png', // You can change this to their specific logo
        logoAlt: 'Singapore Retail Chain Logo'
    },
    
    // Challenge Section
    challenge: {
        title: 'Scaling Excellence Across 100+ Locations!',
        description: 'The retail chain faced the challenge of maintaining consistent service quality and employee performance across all locations.\n\nWith rapid expansion and diverse workforce demographics, they needed a scalable training solution that could deliver standardized learning experiences while accommodating different learning styles and schedules.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Developed a comprehensive, scalable training model that ensures consistent service quality across all locations while accommodating diverse learning needs.',
        mainTitle: 'Implemented a multi-tiered training approach with three core components',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />,
                title: 'Digital Learning Platform',
                description: 'Interactive e-learning modules accessible on all devices.'
            },
            {
                icon: <MdOutlineGroups />,
                title: 'Blended Learning',
                description: 'Combination of online and in-person training sessions.'
            },
            {
                icon: <PiMegaphoneSimpleBold />,
                title: 'Performance Tracking',
                description: 'Real-time monitoring and assessment of learning outcomes.'
            }
        ],
        footerText: 'The solution was designed to be scalable, allowing new locations to onboard quickly while maintaining the same high standards of training quality.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Consistent Quality',
            description: 'Achieved 95% consistency in service quality scores across all locations.',
            image: '/solution/results/1.png',
        },
        {
            title: 'Faster Onboarding',
            description: 'Reduced new employee training time by 40% while improving retention.',
            image: '/solution/results/2.png',
        },
        {
            title: 'Customer Satisfaction',
            description: 'Customer satisfaction scores improved by 25% within 6 months.',
            image: '/solution/results/3.png',
        },
        {
            title: 'Cost Efficiency',
            description: 'Training costs reduced by 30% through digital delivery methods.',
            image: '/solution/results/4.png',
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/solution/team.png',
        title: 'Transform Your Retail Operations',
        description: 'Ready to scale your training and improve customer experience across all locations? Let\'s discuss how we can help.',
        buttonText: 'Get Started',
        buttonLink: '#solutions'
    }
};
