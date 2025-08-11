import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Optimized video loading and playback
  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // Set video properties for better performance
    el.preload = 'metadata'
    el.muted = true
    el.playsInline = true
    el.loop = true

    // Only start playing when video is loaded and visible
    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!el || !isVideoLoaded) return
        
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother playback start
          requestAnimationFrame(() => {
            el.play().catch(() => {
              // Fallback: pause if autoplay fails
              el.pause()
            })
          })
        } else {
          el.pause()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    el.addEventListener('loadeddata', handleLoadedData)
    observer.observe(el)

    return () => {
      observer.disconnect()
      el.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [isVideoLoaded])

  return (
    <section className="relative h-[115vh] w-full overflow-hidden bg-black">
      {/* Video with performance optimizations */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        aria-hidden="true"
        style={{ 
          willChange: 'transform',
          contain: 'layout style paint'
        }}
      >
        <source src="/iskillbox-hero.mp4" type="video/mp4" />
      </video>

      {/* Optimized overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />

      {/* Content with performance optimizations */}
      <div className="relative z-20 flex min-h-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <RotatingHeadline />
          <p className="mb-8 mx-auto max-w-2xl text-base md:text-xl text-white/90 font-sans">
            Reimagine what's possible with iSkillBox as insights, intelligence, and innovation come together to build future‑ready workforces.
          </p>
          <div>
            <a
              href="#solutions"
              className="inline-block rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-lg font-medium text-white hover:bg-white/20 font-sans transition-colors duration-200"
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

// Optimized rotating headline component
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

  // Optimized interval with useCallback
  const nextPhrase = useCallback(() => {
    setIndex((prev) => (prev + 1) % phrases.length)
    setAnimateKey((k) => k + 1)
  }, [phrases.length])

  useEffect(() => {
    // Use a more performant interval
    const interval = setInterval(nextPhrase, 3000)
    
    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [nextPhrase])

  return (
    <h1 className="mb-4 text-5xl md:text-6xl font-semibold leading-tight text-white font-sans">
      <span>Making</span>
      <br />
      <span 
        key={animateKey} 
        className="animate-fade-up inline-block"
        style={{ 
          willChange: 'transform, opacity',
          contain: 'layout style'
        }}
      >
        {phrases[index]}
      </span>
    </h1>
  )
}
