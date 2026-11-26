'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/data/profile'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-navy text-white py-16 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-skySoft uppercase mb-4 sm:mb-6">
            07 — CONTACT
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6">
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-brand-tint/80 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Open to meaningful conversations around technology, business, finance, investment, entrepreneurship, and new opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-brand-navy text-sm font-semibold hover:bg-brand-tint transition-colors shadow-editorial"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-brand-skySoft transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
