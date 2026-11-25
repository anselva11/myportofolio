'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section className="bg-white pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-8">
          06 — CERTIFICATIONS
        </div>

        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white border border-brand-border p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-brand-soft hover:border-brand-skySoft transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center text-brand-sky shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-ink">
                    {cert.title}
                  </h3>
                  <div className="text-sm text-brand-muted">
                    {cert.date}
                  </div>
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-sky transition-colors"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
