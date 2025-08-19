'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SuccessStory from '@/components/success-stories/SuccessStory';
import { gmrGroupStory } from '@/data/success-stories/gmr-group';
import { singaporeRetailChainStory } from '@/data/success-stories/singapore-retail-chain';
import { fiatStory } from '@/data/success-stories/fiat';
import { aequsStory } from '@/data/success-stories/aequs';
import { pathkindLabsStory } from '@/data/success-stories/pathkind-labs';

// Import all story data
const allStories = [
    gmrGroupStory,
    singaporeRetailChainStory,
    fiatStory,
    aequsStory,
    pathkindLabsStory,
];

const SuccessStoriesPage = () => {
    const searchParams = useSearchParams();
    const [currentStoryData, setCurrentStoryData] = useState(gmrGroupStory);

    // Get the story from URL parameter or default to GMR Group
    useEffect(() => {
        if (searchParams) {
            const storyId = searchParams.get('story') || 'gmr-group';
            const story = allStories.find(s => s.id === storyId);
            if (story) {
                setCurrentStoryData(story);
            }
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen">
            {/* Show the selected story directly */}
            <SuccessStory storyData={currentStoryData} />
        </div>
    );
};

export default SuccessStoriesPage;