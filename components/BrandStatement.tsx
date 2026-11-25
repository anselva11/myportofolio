'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function BrandStatement() {
  return (
    <section className="relative bg-brand-tint py-28 lg:py-36 overflow-hidden border-y border-brand-border/60">
      {/* Subtle Abstract Light Blue Circles */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-skySoft/25 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/50 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3 sm:space-y-5 max-w-4xl"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-tight">
            Technology is what I build.
          </h2>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-tight">
            Business is what I understand.
          </h2>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-brand-sky tracking-tight leading-tight">
            Finance is how I think about value.
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
