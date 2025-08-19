import React from 'react';
import StoryHero from './StoryHero';
import ClientOverview from './ClientOverview';
import ChallengeSection from './ChallengeSection';
import StrategySolution from './StrategySolution';
import ResultsImpact from './ResultsImpact';
import CallToAction from './CallToAction';
import Footer from '@/app/Footer';

interface SuccessStoryData {
    id: string;
    companyName: string;
    slug: string;
    hero: {
        backgroundImage: string;
        title: string;
        subtitle: string;
    };
    clientOverview: {
        companyName: string;
        description: string;
        logoImage: string;
        logoAlt: string;
    };
    challenge: {
        title: string;
        description: string;
    };
    strategy: {
        subtitle: string;
        mainTitle: string;
        solutionTracks: Array<{
            icon: React.ReactNode;
            title: string;
            description: string;
        }>;
        footerText: string;
    };
    results: Array<{
        title: string;
        description: string;
        image: string;
    }>;
    callToAction: {
        backgroundImage: string;
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

interface SuccessStoryProps {
    storyData: SuccessStoryData;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ storyData }) => {
    return (
        <div className='md:px-32'>
            <StoryHero 
                backgroundImage={storyData.hero.backgroundImage}
                title={storyData.hero.title}
                subtitle={storyData.hero.subtitle}
            />
            
            <ClientOverview 
                companyName={storyData.clientOverview.companyName}
                description={storyData.clientOverview.description}
                logoImage={storyData.clientOverview.logoImage}
                logoAlt={storyData.clientOverview.logoAlt}
            />
            
            <ChallengeSection 
                title={storyData.challenge.title}
                description={storyData.challenge.description}
            />
            
            <StrategySolution 
                subtitle={storyData.strategy.subtitle}
                mainTitle={storyData.strategy.mainTitle}
                solutionTracks={storyData.strategy.solutionTracks}
                footerText={storyData.strategy.footerText}
            />
            
            <ResultsImpact results={storyData.results} />
            
            <CallToAction 
                backgroundImage={storyData.callToAction.backgroundImage}
                title={storyData.callToAction.title}
                description={storyData.callToAction.description}
                buttonText={storyData.callToAction.buttonText}
                buttonLink={storyData.callToAction.buttonLink}
            />
            
            <Footer />
        </div>
    );
};

export default SuccessStory;
