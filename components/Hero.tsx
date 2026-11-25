'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/data/profile'
import profileImage from '@/Assets/profiles.png'

export function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-5">
              {profile.eyebrow}
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-brand-ink tracking-tight leading-[1.12] mb-6">
              {profile.heroHeadline1}
              <span className="block text-brand-navy mt-1">
                {profile.heroHeadline2}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl font-normal mb-9">
              {profile.heroCopy}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-navy text-white text-sm font-medium hover:bg-brand-sky transition-colors duration-200 shadow-soft-blue"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-brand-border text-brand-ink text-sm font-medium hover:bg-brand-soft hover:border-brand-skySoft transition-colors duration-200"
              >
                <span>Let&apos;s Connect</span>
              </Link>
            </div>

            {/* 08 — Hero Micro Information */}
            <div className="pt-2">
              <div className="w-10 h-0.5 bg-brand-sky mb-3.5" />
              <div className="text-sm font-medium text-brand-ink">
                {profile.microLocation}
              </div>
              <div className="text-sm text-brand-muted mt-0.5">
                {profile.microDiscipline}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait Frame with Abstract Light-Blue Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
              {/* Large Soft Light-Blue Abstract Circle Behind Portrait */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 sm:-right-8 w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-brand-tint border border-brand-border/60 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-brand-skySoft/20 pointer-events-none"
              />

              {/* Subtle Floating Discipline Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -left-3 sm:-left-6 z-20 px-4 py-2 rounded-full bg-white border border-brand-border shadow-editorial text-[11px] font-semibold tracking-widest text-brand-navy"
              >
                TECHNOLOGY
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-3 sm:-right-6 z-20 px-4 py-2 rounded-full bg-white border border-brand-border shadow-editorial text-[11px] font-semibold tracking-widest text-brand-sky"
              >
                BUSINESS
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-10 left-4 sm:-left-4 z-20 px-4 py-2 rounded-full bg-white border border-brand-border shadow-editorial text-[11px] font-semibold tracking-widest text-brand-navy"
              >
                FINANCE
              </motion.div>

              {/* Editorial Portrait Container */}
              <div className="relative z-10 w-full h-full rounded-[2rem] bg-gradient-to-b from-brand-soft to-brand-tint border border-brand-border shadow-editorial overflow-hidden flex flex-col items-center justify-between p-8">
                {/* Top Minimal Tag */}
                <div className="w-full flex items-center justify-between text-[11px] font-medium text-brand-muted">
                  <span>PORTRAIT</span>
                  <span className="text-brand-navy font-semibold">HV // 2026</span>
                </div>

                {/* Editorial Portrait Photo */}
                <div className="my-auto flex flex-col items-center text-center">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border-2 border-brand-border shadow-soft-blue overflow-hidden mb-5">
                    <Image
                      src={profileImage}
                      alt="Hansel Varian"
                      fill
                      sizes="(max-width: 640px) 144px, 176px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="text-lg font-semibold text-brand-ink">
                    Hansel Varian
                  </div>
                  <div className="text-xs font-medium text-brand-muted mt-1">
                    Business Information Technology
                  </div>
                </div>

                {/* Bottom Subtle Caption */}
                <div className="w-full pt-4 border-t border-brand-border/80 flex items-center justify-between text-xs text-brand-muted">
                  <span>Jakarta, Indonesia</span>
                  <span className="text-brand-navy font-medium">Tech × Business × Finance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
