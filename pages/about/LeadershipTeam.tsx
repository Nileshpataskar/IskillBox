'use client'

import React from 'react'
import { motion } from 'motion/react'

const LeadershipTeam = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former Head of L&D at Fortune 500 companies with 15+ years in corporate training innovation.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Learning Officer",
      bio: "PhD in Educational Psychology with expertise in AI-driven learning methodologies and assessment design.",
      image: "/team/michael.jpg"
    },
    {
      name: "Priya Patel",
      role: "Head of Technology",
      bio: "Tech leader with experience building scalable LMS platforms and AI-powered learning tools.",
      image: "/team/priya.jpg"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate minds behind iSkillBox's mission to transform learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-gray-600">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipTeam
