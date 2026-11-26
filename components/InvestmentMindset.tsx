'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01 — Understand',
    desc: 'Understand the business.',
  },
  {
    num: '02 — Analyze',
    desc: 'Study fundamentals, markets, risks, and opportunities.',
  },
  {
    num: '03 — Allocate',
    desc: 'Think carefully about capital and resources.',
  },
  {
    num: '04 — Build',
    desc: 'Create long-term value.',
  },
]

export function InvestmentMindset() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-32 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-3 sm:mb-4">
            04 — THINKING
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight">
            How I think about value.
          </h2>
        </div>

        {/* Four horizontal blocks connected by a thin blue line */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-brand-border"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="lg:pt-0"
              >
                <div className="hidden lg:flex w-3 h-3 rounded-full bg-white border-2 border-brand-sky mb-6 mt-[18px]" />
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-soft border border-brand-border hover:border-brand-skySoft transition-colors h-full">
                  <h3 className="text-base font-semibold text-brand-navy mb-2">
                    {step.num}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
