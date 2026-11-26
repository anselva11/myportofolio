'use client'

import React from 'react'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="bg-white py-10 sm:py-14 border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 pb-8 sm:pb-10 border-b border-brand-border/80">
          <div className="text-base font-semibold tracking-wider text-brand-navy uppercase">
            HANSEL VARIAN
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-brand-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-navy transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-navy transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-brand-navy transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-xs font-medium text-brand-muted">
          <div>{profile.identity}</div>
          <div className="text-brand-navy">{profile.tagline}</div>
          <div>© 2026 Hansel Varian</div>
        </div>
      </div>
    </footer>
  )
}
