import React from 'react'

const ChallengeSection = () => {
    return (
        <section className="bg-blue-50 py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side */}
                <div className="text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 border-l-4 border-lime-400 pl-3">
                        Challenge
                    </h1>
                </div>

                {/* Right Side */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        A Digital Leap Toward Smarter Communication!
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                        As part of its forward-looking vision, GMR Group saw a strategic opportunity to elevate its communication processes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        With increasing content demands across press releases, internal updates, and engagement campaigns, the organization recognized the need for agile, AI-powered tools that could support faster, smarter, and more consistent messaging.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ChallengeSection
