'use client'

import React from 'react'
import { motion } from 'motion/react'

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To democratize high-quality learning and development by making it accessible, engaging, and impactful for organizations of all sizes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every organization deserves the tools and knowledge to build future-ready workforces that can adapt, innovate, and thrive in an ever-changing world.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the global leader in AI-powered learning solutions that drive measurable business transformation and create a world where continuous learning is the foundation of success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
