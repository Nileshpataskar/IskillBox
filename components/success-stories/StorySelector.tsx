import React, { useState } from 'react';
import Image from 'next/image';

interface StoryOption {
    id: string;
    companyName: string;
    slug: string;
    image: string;
    excerpt: string;
    category: string;
}

interface StorySelectorProps {
    stories: StoryOption[];
    onStorySelect: (storyId: string) => void;
    selectedStory: string;
}

const StorySelector: React.FC<StorySelectorProps> = ({ 
    stories, 
    onStorySelect, 
    selectedStory 
}) => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Success Stories
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how we've transformed organizations across industries with our innovative training solutions
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            onClick={() => onStorySelect(story.id)}
                            className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                selectedStory === story.id 
                                    ? 'ring-4 ring-lime-400 shadow-2xl' 
                                    : 'hover:shadow-xl'
                            }`}
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.companyName}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="inline-block px-3 py-1 bg-lime-400 text-black text-sm font-semibold rounded-full">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors duration-300">
                                        {story.companyName}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {story.excerpt}
                                    </p>
                                    
                                    {/* Selection Indicator */}
                                    <div className={`flex items-center justify-between ${
                                        selectedStory === story.id ? 'opacity-100' : 'opacity-0'
                                    } transition-opacity duration-300`}>
                                        <span className="text-lime-600 font-semibold text-sm">
                                            Currently Selected
                                        </span>
                                        <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {selectedStory && (
                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Viewing: <span className="font-semibold text-lime-600">
                                {stories.find(s => s.id === selectedStory)?.companyName}
                            </span>
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-purple-500 mx-auto rounded-full"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StorySelector;
