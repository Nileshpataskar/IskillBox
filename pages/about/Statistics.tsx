'use client'

import React from 'react'
import { motion } from 'motion/react'

const Statistics = () => {
  const stats = [
    { number: "500+", label: "Organizations Served" },
    { number: "50K+", label: "Learners Trained" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "25+", label: "Industry Sectors" }
  ]

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
