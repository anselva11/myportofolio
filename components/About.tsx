'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section className="bg-white pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="pt-8 sm:pt-12 border-t border-brand-border grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="space-y-1.5 sm:space-y-2 text-xl sm:text-3xl font-semibold text-brand-navy leading-snug tracking-tight">
              {profile.aboutStatement.map((line, i) => (
                <p key={i} className={i === 2 ? 'text-brand-sky' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Concise Professional Biography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-brand-muted font-normal leading-relaxed"
          >
            {profile.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
