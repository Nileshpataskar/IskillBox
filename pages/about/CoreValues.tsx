'use client'

import React from 'react'
import { motion } from 'motion/react'

const CoreValues = () => {
  const values = [
    {
      icon: "🎯",
      title: "Purpose-Driven",
      description: "Every solution is built with intention, backed by intelligence, and aligned to your business goals."
    },
    {
      icon: "🚀",
      title: "Innovation-First",
      description: "We leverage cutting-edge AI and technology to create learning experiences that truly engage and transform."
    },
    {
      icon: "🤝",
      title: "Partnership-Focused",
      description: "We work as an extension of your team, understanding your unique challenges and co-creating solutions."
    },
    {
      icon: "📊",
      title: "Results-Oriented",
      description: "Every learning path is designed to deliver measurable ROI and tangible business outcomes."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and every solution we create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
