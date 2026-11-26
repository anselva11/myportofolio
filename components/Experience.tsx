'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Sparkles } from 'lucide-react'
import { experienceList, ExperienceEntry } from '@/data/experience'

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceEntry | null>(null)

  return (
    <section id="experience" className="scroll-mt-24 bg-brand-soft py-16 sm:py-24 lg:py-32 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-3 sm:mb-4">
            02 — EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight leading-tight">
            A journey across technology, business &amp; capital.
          </h2>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative border-l-2 border-brand-border pl-5 sm:pl-10 space-y-5 sm:space-y-6">
          {experienceList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setSelectedExp(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedExp(item)
              }}
              className={`group relative rounded-2xl p-5 sm:p-8 transition-all duration-300 cursor-pointer border ${
                item.playful
                  ? 'bg-gradient-to-r from-white via-brand-tint/60 to-white border-brand-skySoft/60 hover:bg-brand-tint hover:border-brand-sky'
                  : 'bg-white/70 border-transparent hover:bg-brand-tint/70 hover:border-brand-border'
              } hover:shadow-soft-blue`}
            >
              {/* Timeline Node Dot & Brightening Accent on Hover */}
              <span
                aria-hidden="true"
                className="absolute -left-[28px] sm:-left-[48px] top-8 sm:top-10 w-3.5 h-3.5 rounded-full bg-white border-2 border-brand-skySoft group-hover:border-brand-sky group-hover:scale-125 transition-all duration-300"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
                {/* Large Blue Number & Metadata */}
                <div className="lg:col-span-4 flex items-start gap-4 sm:gap-5">
                  <span className="text-3xl sm:text-5xl font-semibold text-brand-skySoft group-hover:text-brand-sky group-hover:-translate-y-0.5 transition-all duration-300 select-none leading-none">
                    {item.number}
                  </span>

                  <div>
                    <div className="text-[11px] font-semibold tracking-widest text-brand-sky uppercase mb-1.5">
                      {item.category}
                    </div>
                    <div className="text-sm font-medium text-brand-ink">
                      {item.period}
                    </div>
                    <div className="text-xs text-brand-muted mt-0.5">
                      {item.location}
                    </div>
                  </div>
                </div>

                {/* Role, Company & Focus */}
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-brand-ink tracking-tight">
                      {item.role}
                    </h3>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-tint border border-brand-border text-[10px] font-semibold tracking-wider text-brand-navy uppercase">
                        {item.badge}
                      </span>
                    )}
                    {item.playful && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-sky/15 text-[10px] font-semibold tracking-wider text-brand-navy uppercase">
                        <Sparkles className="w-3 h-3 text-brand-sky" />
                        <span>24H AI SPRINT</span>
                      </span>
                    )}
                  </div>

                  <div className="text-base font-medium text-brand-navy mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.company}
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-brand-navy/80">
                    {item.focus.map((f, i) => (
                      <span key={f}>
                        {f}
                        {i < item.focus.length - 1 && (
                          <span className="text-brand-skySoft ml-3">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Experience Arrow */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy opacity-70 group-hover:opacity-100 group-hover:text-brand-sky transition-all duration-300">
                    <span>View Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clean Light-Mode Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-brand-navy/20 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white border border-brand-border shadow-editorial p-5 sm:p-10 z-10"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-brand-soft text-brand-navy hover:bg-brand-tint transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3 sm:mb-4 pr-10">
                <span className="text-xl sm:text-2xl font-semibold text-brand-sky">
                  {selectedExp.number}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-brand-muted uppercase">
                  {selectedExp.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-semibold text-brand-ink tracking-tight pr-8">
                {selectedExp.role}
              </h3>
              <div className="text-base font-medium text-brand-navy mt-1">
                {selectedExp.company}
              </div>
              <div className="text-xs font-medium text-brand-muted mt-1 pb-6 border-b border-brand-border">
                {selectedExp.period} · {selectedExp.location}
              </div>

              <div className="py-6 space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                {selectedExp.details.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-border">
                <div className="text-xs font-semibold tracking-wider text-brand-navy uppercase mb-3">
                  Core Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.focus.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-brand-soft border border-brand-border text-xs font-medium text-brand-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
