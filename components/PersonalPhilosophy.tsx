'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PersonalPhilosophy() {
  return (
    <section className="min-h-[50vh] sm:min-h-[75vh] lg:min-h-[80vh] bg-white py-16 sm:py-28 lg:py-36 flex items-center border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2 sm:space-y-4"
        >
          <p className="text-[1.75rem] sm:text-6xl lg:text-7xl font-semibold text-brand-ink tracking-tight leading-[1.12]">
            Build with technology.
          </p>
          <p className="text-[1.75rem] sm:text-6xl lg:text-7xl font-semibold text-brand-ink tracking-tight leading-[1.12]">
            Think with business.
          </p>
          <p className="text-[1.75rem] sm:text-6xl lg:text-7xl font-semibold text-brand-ink tracking-tight leading-[1.12]">
            Analyze with data.
          </p>
          <p className="text-[1.75rem] sm:text-6xl lg:text-7xl font-semibold text-brand-ink tracking-tight leading-[1.12]">
            Create with <span className="text-brand-sky">purpose</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
