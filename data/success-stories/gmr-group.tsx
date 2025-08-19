import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

export const gmrGroupStory = {
    id: 'gmr-group',
    companyName: 'GMR Group',
    slug: 'gmr-group',
    
    // Hero Section
    hero: {
        backgroundImage: '/solution/hero.png',
        title: 'Echoes of Intelligence',
        subtitle: 'How GMR rewrote the script with AI.'
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'GMR Group',
        description: 'GMR Group is one of India\'s leading infrastructure enterprises, with a global footprint in sectors such as airports, energy, transportation, and urban infrastructure. Headquartered in New Delhi, the group is known for developing and operating world-class assets, including major international airports like Delhi International Airport and Hyderabad International Airport.',
        logoImage: '/solution/client.png',
        logoAlt: 'GMR Group Logo'
    },
    
    // Challenge Section
    challenge: {
        title: 'A Digital Leap Toward Smarter Communication!',
        description: 'As part of its forward-looking vision, GMR Group saw a strategic opportunity to elevate its communication processes.\n\nWith increasing content demands across press releases, internal updates, and engagement campaigns, the organization recognized the need for agile, AI-powered tools that could support faster, smarter, and more consistent messaging.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Equip GMR Group\'s communication and branding teams with Generative AI skills to boost creativity, speed, and impact across all communication channels.',
        mainTitle: 'Delivered a custom Generative AI training program in three focused tracks',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />,
                title: 'Media & PR',
                description: 'Press releases, media responses, reputation management.'
            },
            {
                icon: <MdOutlineGroups />,
                title: 'Internal Communications',
                description: 'Newsletters, messaging, employee engagement.'
            },
            {
                icon: <PiMegaphoneSimpleBold />,
                title: 'Social Media, Marketing & Branding',
                description: 'Campaign ideation, event creatives, content optimization.'
            }
        ],
        footerText: 'Every module was hands-on and scenario-based, built around GMR\'s real-world use cases, enabling teams to apply AI instantly and effectively.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Efficiency Gains',
            description: 'Content creation time reduced by over 50% for newsletters, announcements, and media kits.',
            image: '/solution/results/1.png',
        },
        {
            title: 'Improved Response Time',
            description: 'Teams are now equipped to use AI for drafting rapid crisis responses and monitoring public sentiment in real-time.',
            image: '/solution/results/2.png',
        },
        {
            title: 'Higher Engagement',
            description: 'Internal communications became more personalized and interactive through AI-driven messaging.',
            image: '/solution/results/3.png',
        },
        {
            title: 'Confidence with AI',
            description: 'Participants left with not only technical knowledge but also practical confidence to deploy AI tools responsibly in their roles.',
            image: '/solution/results/4.png',
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/solution/team.png',
        title: 'Talk to Our Team',
        description: 'Whether you\'re exploring our services or ready to transform your workforce, our sales experts are just a message away.',
        buttonText: 'Contact Us',
        buttonLink: '#solutions'
    }
};
