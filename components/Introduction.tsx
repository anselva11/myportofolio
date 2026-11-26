'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export function Introduction() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-32 border-t border-brand-border/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-4 sm:mb-6">
            01 — ABOUT
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-brand-ink tracking-tight leading-[1.12] mb-5 sm:mb-8">
            {profile.introHeadline}
          </h2>

          <p className="text-base sm:text-xl lg:text-2xl text-brand-muted font-normal leading-relaxed">
            {profile.introCopy}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
