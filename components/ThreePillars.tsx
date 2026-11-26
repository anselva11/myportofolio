'use client'

import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'TECHNOLOGY',
    items: [
      'Software Development',
      'Frontend Development',
      'Web Development',
      'AI',
      'UI/UX',
    ],
  },
  {
    num: '02',
    title: 'BUSINESS',
    items: [
      'Business Analysis',
      'Entrepreneurship',
      'Business Development',
      'Global Trade',
      'Strategic Leadership',
    ],
  },
  {
    num: '03',
    title: 'FINANCE',
    items: [
      'Financial Analysis',
      'Investment Research',
      'Investment Strategy',
      'Capital Allocation',
      'Risk Management',
    ],
  },
]

export function ThreePillars() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pt-6 sm:pt-8 border-t-2 border-brand-border hover:border-brand-sky transition-colors duration-300"
            >
              <div className="text-sm font-semibold text-brand-sky tracking-widest mb-3 sm:mb-4">
                {pillar.num}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-brand-ink tracking-tight mb-4 sm:mb-6">
                {pillar.title}
              </h3>

              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-brand-muted font-normal">
                {pillar.items.map((item) => (
                  <li key={item} className="hover:text-brand-navy transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
