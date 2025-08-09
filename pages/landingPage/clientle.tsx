"use client"
import React from 'react'
import { motion } from 'motion/react'

const logos = Array.from({ length: 15 }, (_, i) => ({
  src: `/ClientLogo/${i + 1}.png`,
  alt: `Client logo ${i + 1}`,
}))

const Clientle = () => {
  return (
    <section className="w-full bg-[#f4f7fa] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-20 text-center text-2xl font-normal font-sans text-black md:text-3xl">
          Discovered by Top Brands
        </h2>

        {/* Framer Motion marquee rows */}
        <MarqueeRow items={logos} speed={25} />
      </div>
    </section>
  )
}

export default Clientle

type Logo = { src: string; alt: string }

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
  className = "",
}: {
  items: Logo[]
  reverse?: boolean
  speed?: number
  className?: string
}) {
  const strip = [...items, ...items]
  const animate = reverse ? ["-50%", "0%"] : ["0%", "-50%"]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-[200%] gap-10"
        animate={{ x: animate }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
     >
        {strip.map((logo, idx) => (
          <div
            key={`${reverse ? 'rev' : 'fwd'}-${idx}`}
            className="flex h-16 min-w-[180px] items-center justify-center rounded-md bg-white/0 p-0 md:h-20 md:min-w-[220px] ring-1 ring-black/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} className="h-full w-72 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
