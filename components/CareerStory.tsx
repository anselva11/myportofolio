'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stages = [
  'Technology',
  'Business Analysis',
  'Entrepreneurship',
  'Leadership',
  'Investment',
]

export function CareerStory() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-4">
            MY JOURNEY
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-brand-ink tracking-tight mb-6">
            From Code to Capital.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Exploring different disciplines to understand how technology, businesses, and capital can create long-term value.
          </p>
        </div>

        {/* Horizontal & Mobile Vertical Connected Progression */}
        <div className="relative pt-4 pb-6">
          {/* Connecting thin light-blue line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-9 left-8 right-8 h-px bg-brand-skySoft/70"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex md:flex-col items-center md:items-start gap-4 md:gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-brand-tint border border-brand-skySoft flex items-center justify-center text-xs font-semibold text-brand-navy shrink-0">
                  0{idx + 1}
                </div>
                <div className="text-base sm:text-lg font-semibold text-brand-ink tracking-tight">
                  {stage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
