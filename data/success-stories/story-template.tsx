import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';

// Template for creating new success stories
// Copy this file and modify the content for your new story

export const newStoryTemplate = {
    id: 'company-name', // Unique identifier (e.g., 'fiat', 'aequs')
    companyName: 'Company Name', // Full company name
    slug: 'company-name', // URL-friendly version (same as id)
    
    // Hero Section
    hero: {
        backgroundImage: '/path/to/hero-image.png', // Hero background image
        title: 'Main Story Title', // Main headline
        subtitle: 'Brief subtitle describing the transformation' // Supporting text
    },
    
    // Client Overview
    clientOverview: {
        companyName: 'Company Name', // Company name
        description: 'Detailed description of the company, their industry, size, and what they do. This should be 2-3 sentences providing context about the organization.',
        logoImage: '/path/to/company-logo.png', // Company logo image
        logoAlt: 'Company Name Logo' // Alt text for logo
    },
    
    // Challenge Section
    challenge: {
        title: 'Challenge Headline!', // Main challenge title
        description: 'First paragraph describing the challenge or problem the company faced.\n\nSecond paragraph with additional context about why this challenge was important and what was at stake.'
    },
    
    // Strategy & Solution
    strategy: {
        subtitle: 'Brief overview of the solution approach and what was delivered to address the challenge.',
        mainTitle: 'Main strategy title describing the solution approach',
        solutionTracks: [
            {
                icon: <FaRegNewspaper />, // Icon component
                title: 'Solution Track 1', // Track title
                description: 'Brief description of what this track delivered.' // Track description
            },
            {
                icon: <MdOutlineGroups />, // Icon component
                title: 'Solution Track 2', // Track title
                description: 'Brief description of what this track delivered.' // Track description
            },
            {
                icon: <PiMegaphoneSimpleBold />, // Icon component
                title: 'Solution Track 3', // Track title
                description: 'Brief description of what this track delivered.' // Track description
            }
        ],
        footerText: 'Additional context about the solution, methodology, or approach that provides more insight into how the solution was implemented.'
    },
    
    // Results & Impact
    results: [
        {
            title: 'Result 1', // Result title
            description: 'Specific, measurable description of the first result or impact achieved.', // Result description
            image: '/path/to/result-image-1.png', // Image representing this result
        },
        {
            title: 'Result 2', // Result title
            description: 'Specific, measurable description of the second result or impact achieved.', // Result description
            image: '/path/to/result-image-2.png', // Image representing this result
        },
        {
            title: 'Result 3', // Result title
            description: 'Specific, measurable description of the third result or impact achieved.', // Result description
            image: '/path/to/result-image-3.png', // Image representing this result
        },
        {
            title: 'Result 4', // Result title
            description: 'Specific, measurable description of the fourth result or impact achieved.', // Result description
            image: '/path/to/result-image-4.png', // Image representing this result
        },
    ],
    
    // Call to Action
    callToAction: {
        backgroundImage: '/path/to/cta-background.png', // Background image for CTA section
        title: 'Call to Action Title', // CTA headline
        description: 'Compelling description encouraging visitors to take the next step. This should be 1-2 sentences that motivate action.', // CTA description
        buttonText: 'Button Text', // Text for the CTA button
        buttonLink: '#contact' // Link for the button (can be internal or external)
    }
};

// Steps to create a new story:
// 1. Copy this template file and rename it to your company (e.g., 'fiat.ts')
// 2. Replace all placeholder content with your actual story content
// 3. Update the export name (e.g., 'export const fiatStory = { ... }')
// 4. Add your story to the allStories array in app/success-stories/page.tsx
// 5. Add your story option to the storyOptions array in the same file
// 6. Import and export your story in data/success-stories/index.ts
