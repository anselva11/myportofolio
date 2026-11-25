'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
        <header
          className={`pointer-events-auto max-w-6xl mx-auto rounded-full border border-brand-border bg-white/90 backdrop-blur-md shadow-nav transition-all duration-300 ${
            scrolled ? 'px-5 py-2.5' : 'px-6 py-3.5'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Left: Name */}
            <Link
              href="#"
              className="text-sm font-semibold tracking-wider text-brand-navy uppercase hover:text-brand-sky transition-colors shrink-0"
            >
              HANSEL VARIAN
            </Link>

            {/* Center: Desktop Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-brand-muted hover:text-brand-navy rounded-full hover:bg-brand-soft transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Status & CTA */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-brand-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
                </span>
                <span>Available for opportunities</span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-navy text-white text-xs font-medium hover:bg-brand-sky transition-colors duration-200"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full text-brand-navy hover:bg-brand-soft transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-3xl bg-white border border-brand-border shadow-editorial p-6"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-soft border border-brand-border text-xs font-medium text-brand-navy mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-sky" />
              <span>Available for opportunities</span>
            </div>

            <nav className="flex flex-col space-y-1 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-brand-ink hover:bg-brand-soft hover:text-brand-navy transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-sky" />
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-brand-navy text-white text-sm font-medium hover:bg-brand-sky transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
