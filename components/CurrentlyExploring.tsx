'use client'

import React from 'react'
import { motion } from 'framer-motion'

const exploringTopics = [
  'Artificial Intelligence',
  'Financial Markets',
  'Investment Research',
  'Software Development',
  'Entrepreneurship',
  'Global Business',
]

export function CurrentlyExploring() {
  return (
    <section className="bg-brand-soft py-16 sm:py-24 lg:py-32 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-brand-muted mb-7 sm:mb-10">
          Currently exploring.
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {exploringTopics.map((topic, idx) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group border-b border-brand-border/80 pb-3.5 sm:pb-4 cursor-default"
            >
              <div className="text-2xl sm:text-5xl font-semibold text-brand-ink tracking-tight group-hover:text-brand-sky sm:group-hover:translate-x-3 transition-all duration-300">
                {topic}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
