'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { educations } from '@/data/education'

export function Education() {
  return (
    <section className="bg-white py-24 lg:py-28 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-8">
          05 — EDUCATION
        </div>

        <div className="space-y-5">
          {educations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl bg-brand-soft border border-brand-border p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex items-start gap-6">
                {/* Minimal Institution Emblem */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border shadow-soft-blue flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold tracking-tight text-brand-navy">
                    {item.monogram}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-brand-ink tracking-tight">
                    {item.institution}
                  </h3>
                  <div className="text-base sm:text-lg font-medium text-brand-sky mt-1">
                    {item.program}
                  </div>
                  <p className="text-sm text-brand-muted max-w-xl mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-full bg-white border border-brand-border/80 text-xs font-medium text-brand-navy"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:text-right shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-brand-border">
                <div className="text-sm font-semibold text-brand-navy">
                  {item.degree}
                </div>
                <div className="text-xs text-brand-muted mt-1">
                  {[item.timeline, item.location].filter(Boolean).join(' · ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
