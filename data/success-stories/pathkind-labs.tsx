import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

export const pathkindLabsStory = {
    id: 'pathkind-labs',
    companyName: 'Pathkind Labs',
    slug: 'pathkind-labs',
    
    // Hero Section
    hero: {
        backgroundImage: '/solution/hero.png',
        title: 'Healthcare Excellence',
        subtitle: 'How Pathkind Labs trained 220+ locations in core soft skills.'
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'Pathkind Labs',
        description: 'Pathkind Labs is a leading diagnostic laboratory chain in India, providing comprehensive healthcare testing services across 220+ locations. They are committed to delivering accurate, reliable diagnostic results with exceptional patient care.',
        logoImage: '/solution/client.png',
        logoAlt: 'Pathkind Labs Logo'
    },
    
    // Challenge Section
    challenge: {
        title: 'Elevating Service Quality Across 220+ Healthcare Locations!',
        description: 'Pathkind Labs faced the challenge of maintaining consistent service quality and patient experience across their extensive network of diagnostic centers.\n\nWith rapid expansion and diverse staff backgrounds, they needed a comprehensive training solution that could standardize soft skills, improve patient interactions, and enhance brand presence across all locations.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Developed a comprehensive soft skills training program specifically designed for healthcare professionals across all Pathkind locations.',
        mainTitle: 'Delivered a multi-location training solution with three core components',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />,
                title: 'Soft Skills Training',
                description: 'Comprehensive communication and patient care skills.'
            },
            {
                icon: <MdOutlineGroups />,
                title: 'Multi-Location Delivery',
                description: 'Scalable training across 220+ diagnostic centers.'
            },
            {
                icon: <PiMegaphoneSimpleBold />,
                title: 'Brand Enhancement',
                description: 'Improved service delivery and brand presence.'
            }
        ],
        footerText: 'The solution was designed to be scalable and consistent, ensuring that every Pathkind location delivers the same high-quality patient experience regardless of location or staff background.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Improved Patient Satisfaction',
            description: 'Patient satisfaction scores increased by 35% across all locations.',
            image: '/solution/results/1.png',
        },
        {
            title: 'Consistent Service Quality',
            description: 'Achieved 95% consistency in service quality scores.',
            image: '/solution/results/2.png',
        },
        {
            title: 'Enhanced Brand Presence',
            description: 'Brand recognition improved by 40% in target markets.',
            image: '/solution/results/3.png',
        },
        {
            title: 'Staff Development',
            description: 'Employee retention increased by 25% through training.',
            image: '/solution/results/4.png',
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/solution/team.png',
        title: 'Transform Your Healthcare Services',
        description: 'Ready to elevate your healthcare service quality and patient experience? Let\'s discuss how we can help.',
        buttonText: 'Get Started',
        buttonLink: '#solutions'
    }
};
