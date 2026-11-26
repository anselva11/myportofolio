'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <section className="bg-white pb-16 sm:pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-6 sm:mb-8">
          06 — CERTIFICATIONS
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white border border-brand-border p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-brand-soft hover:border-brand-skySoft transition-all duration-200"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-tint flex items-center justify-center text-brand-sky shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold text-brand-ink leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-brand-muted mt-1 break-words">
                    {[
                      cert.issuer,
                      cert.date,
                      cert.credentialId ? `Credential ID ${cert.credentialId}` : undefined,
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </div>
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-full bg-brand-tint border border-brand-border/60 text-xs font-medium text-brand-navy"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-sky transition-colors shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-border/60"
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
