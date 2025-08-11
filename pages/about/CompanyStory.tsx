'use client'

import React from 'react'
import { motion } from 'motion/react'

const CompanyStory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Founded in 2020, iSkillBox emerged from a simple observation: traditional corporate training was failing to keep pace with the rapidly evolving business landscape.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our founders, having experienced the limitations of conventional L&D approaches firsthand, set out to create something different—a learning platform that combines human expertise with artificial intelligence to deliver truly personalized, engaging, and effective learning experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to serve organizations across industries, helping them build workforces that are not just skilled, but future-ready.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Why We're Different</h3>
            <ul className="space-y-3 text-lg">
              <li>• AI-powered personalization that adapts to each learner</li>
              <li>• Focus on measurable business outcomes, not just completion rates</li>
              <li>• Seamless integration with existing workflows and systems</li>
              <li>• Continuous innovation based on real user feedback and data</li>
              <li>• Dedicated support team that becomes an extension of your L&D function</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
