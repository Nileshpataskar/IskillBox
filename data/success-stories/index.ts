// Export all success stories
export { gmrGroupStory } from './gmr-group';
export { singaporeRetailChainStory } from './singapore-retail-chain';
export { fiatStory } from './fiat';
export { aequsStory } from './aequs';
export { pathkindLabsStory } from './pathkind-labs';

// Export story types
export interface SuccessStoryData {
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


