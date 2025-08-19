import React, { Suspense } from 'react';
import ClientStories from './ClientStories';

export default function SuccessStoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>}>
      <ClientStories />
    </Suspense>
  );
}