import React, { useEffect, useMemo, useState } from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/iskillbox-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />

      <div className="relative z-20 flex min-h-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <RotatingHeadline />
          <p className="mb-8 mx-auto max-w-2xl text-base md:text-xl text-white/90 font-sans">
            Reimagine what’s possible with iSkillBox as insights, intelligence, and innovation come together to build future‑ready workforces.
          </p>
          <div>
            <a
              href="#solutions"
              className="inline-block rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-lg font-medium text-white backdrop-blur hover:bg-white/20 font-sans"
            >
              See the Smarter Way
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// Rotating headline component
const RotatingHeadline: React.FC = () => {
  const phrases = useMemo(
    () => [
      'Skill Gaps Visible.',
      'Leadership Stronger.',
      'Teams Smarter.',
      'Learning Personalized.',
      'Growth Scalable.',
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [animateKey, setAnimateKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
      setAnimateKey((k) => k + 1) // retrigger CSS animation
    }, 3000) // change every 3s
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <h1 className="mb-4 text-5xl md:text-6xl font-semibold leading-tight text-white font-sans">
      <span>Making</span>
      <br />
      <span key={animateKey} className="animate-fade-up inline-block">
        {phrases[index]}
      </span>
    </h1>
  )
}
