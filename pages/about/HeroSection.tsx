'use client'

import React from 'react'
import { motion } from 'motion/react'

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">iSkillBox</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to transform how organizations learn, grow, and succeed in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
