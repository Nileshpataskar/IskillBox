'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SuccessStory from '@/components/success-stories/SuccessStory';
import { gmrGroupStory } from '@/data/success-stories/gmr-group';
import { singaporeRetailChainStory } from '@/data/success-stories/singapore-retail-chain';
import { fiatStory } from '@/data/success-stories/fiat';
import { aequsStory } from '@/data/success-stories/aequs';
import { pathkindLabsStory } from '@/data/success-stories/pathkind-labs';

const allStories = [
    gmrGroupStory,
    singaporeRetailChainStory,
    fiatStory,
    aequsStory,
    pathkindLabsStory,
];

const ClientStories = () => {
    const searchParams = useSearchParams();
    const [currentStoryData, setCurrentStoryData] = useState(gmrGroupStory);

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
            <SuccessStory storyData={currentStoryData} />
        </div>
    );
};

export default ClientStories;
