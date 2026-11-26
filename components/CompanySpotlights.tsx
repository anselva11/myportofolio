'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function CompanySpotlights() {
  return (
    <div>
      {/* 19 — PACIFIC INVESTMENT CAPITAL */}
      <section className="bg-brand-soft py-16 sm:py-24 lg:py-28 border-t border-brand-border/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold tracking-wider text-brand-navy uppercase mb-4">
                VICE MANAGING DIRECTOR
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold text-brand-ink tracking-tight mb-2">
                Pacific Investment Capital
              </h2>
              <p className="text-sm sm:text-base font-medium text-brand-sky mb-6 sm:mb-8">
                Institutional Investment Holding Company
              </p>

              <div className="grid grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-4 sm:gap-x-6 text-sm sm:text-base text-brand-ink font-medium">
                <div>Investment Strategy</div>
                <div>Capital Allocation</div>
                <div>Portfolio Management</div>
                <div>Financial Analysis</div>
                <div>Risk Management</div>
                <div>Strategic Partnerships</div>
              </div>
            </motion.div>

            {/* Subtle Abstract Financial Graph in Light Blue (No Fake Returns / Data) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl bg-white border border-brand-border p-5 sm:p-8 shadow-soft-blue">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-medium text-brand-muted mb-5 sm:mb-6">
                  <span>CAPITAL ALLOCATION ARCHITECTURE</span>
                  <span className="text-brand-sky">DISCIPLINED VALUE</span>
                </div>

                <svg
                  viewBox="0 0 460 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  {/* Subtle Horizontal Grid */}
                  <line x1="0" y1="45" x2="460" y2="45" stroke="#EAF6FF" strokeWidth="1.5" />
                  <line x1="0" y1="90" x2="460" y2="90" stroke="#EAF6FF" strokeWidth="1.5" />
                  <line x1="0" y1="135" x2="460" y2="135" stroke="#EAF6FF" strokeWidth="1.5" />

                  {/* Abstract Smooth Curve (Purely Decorative) */}
                  <path
                    d="M 10 145 C 80 135, 130 95, 200 105 C 270 115, 340 45, 450 25"
                    stroke="#5BB7F5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 145 C 80 135, 130 95, 200 105 C 270 115, 340 45, 450 25 L 450 175 L 10 175 Z"
                    fill="url(#picLightBlue)"
                  />

                  {/* Subtle Nodes */}
                  <circle cx="10" cy="145" r="4" fill="#FFFFFF" stroke="#5BB7F5" strokeWidth="2" />
                  <circle cx="200" cy="105" r="4" fill="#FFFFFF" stroke="#5BB7F5" strokeWidth="2" />
                  <circle cx="340" cy="52" r="4" fill="#FFFFFF" stroke="#5BB7F5" strokeWidth="2" />
                  <circle cx="450" cy="25" r="5" fill="#123B5D" stroke="#8DD3FF" strokeWidth="2.5" />

                  <defs>
                    <linearGradient id="picLightBlue" x1="230" y1="25" x2="230" y2="175" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8DD3FF" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 20 — GLOBAL EXPOR INDONESIA */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 border-t border-brand-border/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Subtle World Map Made from Thin Blue Lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="rounded-3xl bg-brand-soft border border-brand-border p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-medium text-brand-muted mb-4">
                  <span>CROSS-BORDER TRADE CORRIDORS</span>
                  <span className="text-brand-navy">INDONESIA &rarr; GLOBAL</span>
                </div>

                <svg
                  viewBox="0 0 480 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  {/* Thin Meridian & Parallel Grid Lines */}
                  <ellipse cx="240" cy="110" rx="200" ry="90" stroke="#D9EAF7" strokeWidth="1.2" />
                  <ellipse cx="240" cy="110" rx="110" ry="90" stroke="#D9EAF7" strokeWidth="1.2" />
                  <line x1="40" y1="110" x2="440" y2="110" stroke="#D9EAF7" strokeWidth="1.2" />
                  <line x1="70" y1="65" x2="410" y2="65" stroke="#D9EAF7" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="70" y1="155" x2="410" y2="155" stroke="#D9EAF7" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Trade Arcs Originating from Indonesia (x:335, y:142) */}
                  <path d="M 335 142 Q 360 100 390 85" stroke="#5BB7F5" strokeWidth="1.8" strokeDasharray="4 3" />
                  <path d="M 335 142 Q 280 110 245 100" stroke="#5BB7F5" strokeWidth="1.8" strokeDasharray="4 3" />
                  <path d="M 245 100 Q 210 75 185 70" stroke="#8DD3FF" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M 335 142 C 250 185, 140 160, 100 85" stroke="#5BB7F5" strokeWidth="1.5" strokeDasharray="5 4" />

                  {/* Global Nodes */}
                  <circle cx="335" cy="142" r="5.5" fill="#123B5D" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="390" cy="85" r="4" fill="#5BB7F5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="245" cy="100" r="4" fill="#5BB7F5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="185" cy="70" r="4" fill="#5BB7F5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="100" cy="85" r="4" fill="#5BB7F5" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-brand-tint border border-brand-border text-xs font-semibold tracking-wider text-brand-navy uppercase mb-4">
                FOUNDER &amp; CEO
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold text-brand-ink tracking-tight mb-5 sm:mb-6">
                Global Expor Indonesia
              </h2>

              <div className="grid grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-4 sm:gap-x-6 text-sm sm:text-base text-brand-ink font-medium">
                <div>Global Trade</div>
                <div>Export</div>
                <div>Business Development</div>
                <div>International Partnerships</div>
                <div>Supplier Network</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 21 — HANSAI OCEAN INDUSTRIES */}
      <section className="bg-brand-soft py-16 sm:py-24 lg:py-28 border-t border-brand-border/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold tracking-wider text-brand-navy uppercase mb-4">
                CHIEF COMMISSIONER
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold text-brand-ink tracking-tight mb-2">
                Hansai Ocean Industries
              </h2>
              <p className="text-sm sm:text-base font-medium text-brand-sky italic mb-6 sm:mb-8">
                &ldquo;Driven by the Ocean. Built for the Future.&rdquo;
              </p>

              <div className="grid grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-4 sm:gap-x-6 text-sm sm:text-base text-brand-ink font-medium">
                <div>Corporate Governance</div>
                <div>Strategic Leadership</div>
                <div>Risk Management</div>
                <div>Maritime Business</div>
              </div>
            </motion.div>

            {/* Right: Subtle Wave-Inspired Lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl bg-white border border-brand-border p-5 sm:p-8 shadow-soft-blue">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-medium text-brand-muted mb-4">
                  <span>MARITIME GOVERNANCE</span>
                  <span className="text-brand-navy">LONG-TERM HORIZON</span>
                </div>

                <svg
                  viewBox="0 0 460 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  <path
                    d="M 0 50 Q 57.5 25, 115 50 T 230 50 T 345 50 T 460 50"
                    stroke="#8DD3FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 85 Q 57.5 60, 115 85 T 230 85 T 345 85 T 460 85"
                    stroke="#5BB7F5"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M 0 120 Q 57.5 95, 115 120 T 230 120 T 345 120 T 460 120"
                    stroke="#123B5D"
                    strokeWidth="1.6"
                    opacity="0.45"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
