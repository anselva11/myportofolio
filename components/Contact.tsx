'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, CheckCircle2 } from 'lucide-react'
import { profile } from '@/data/profile'

export function Contact() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-brand-navy text-white py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-skySoft uppercase mb-6">
            07 — CONTACT
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-brand-tint/80 font-normal leading-relaxed mb-10 max-w-2xl">
            Open to meaningful conversations around technology, business, finance, investment, entrepreneurship, and new opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => {
                setSent(false)
                setDrawerOpen(true)
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-navy text-sm font-semibold hover:bg-brand-tint transition-colors shadow-editorial"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

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

      {/* Clean Light-Blue Accent Inquiry Modal */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-brand-navy/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative w-full max-w-lg rounded-3xl bg-white text-brand-ink border border-brand-border shadow-editorial p-7 sm:p-9 z-10"
            >
              <button
                onClick={() => setDrawerOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-soft text-brand-navy hover:bg-brand-tint transition-colors"
                aria-label="Close contact dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {sent ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-tint text-brand-sky flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-ink">
                    Message Received
                  </h3>
                  <p className="text-sm text-brand-muted max-w-xs mx-auto">
                    Thank you for reaching out. You can also connect directly on LinkedIn for immediate follow-up.
                  </p>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="mt-2 px-6 py-2.5 rounded-full bg-brand-navy text-white text-xs font-medium hover:bg-brand-sky transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4 pr-8">
                    <div className="text-xs font-semibold tracking-wider text-brand-sky uppercase mb-1">
                      DIRECT INQUIRY
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-ink">
                      Start a conversation
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-navy mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-soft border border-brand-border text-sm text-brand-ink focus:outline-none focus:border-brand-sky"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-navy mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-soft border border-brand-border text-sm text-brand-ink focus:outline-none focus:border-brand-sky"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-navy mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Topic or opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-soft border border-brand-border text-sm text-brand-ink focus:outline-none focus:border-brand-sky"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-navy mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-soft border border-brand-border text-sm text-brand-ink focus:outline-none focus:border-brand-sky"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-brand-navy text-white text-sm font-medium hover:bg-brand-sky transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
