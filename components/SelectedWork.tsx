'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, ExternalLink } from 'lucide-react'
import { featuredProject, otherProjects, ProjectItem } from '@/data/work'

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  return (
    <section id="work" className="bg-white py-24 lg:py-32 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-4">
            03 — SELECTED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight">
            Things I&apos;ve built and explored.
          </h2>
        </div>

        {/* 15 — Featured Project Card: ANS MARKET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-brand-soft border border-brand-border p-8 sm:p-10 lg:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Details Left */}
            <div className="lg:col-span-5">
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-brand-border text-[11px] font-semibold tracking-wider text-brand-navy uppercase mb-4">
                FEATURED PROJECT
              </div>

              <h3 className="text-3xl font-semibold text-brand-ink tracking-tight mb-1">
                {featuredProject.title}
              </h3>
              <div className="text-sm font-medium text-brand-sky mb-1">
                {featuredProject.category}
              </div>
              <div className="text-xs text-brand-muted mb-5">
                {featuredProject.period}
              </div>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-medium text-brand-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white text-sm font-medium hover:bg-brand-sky transition-colors"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* White Browser Window Mockup on Light-Blue Background */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-brand-tint p-5 sm:p-8 border border-brand-border">
                <div className="rounded-xl bg-white border border-brand-border shadow-editorial overflow-hidden">
                  {/* Browser Bar */}
                  <div className="px-4 py-3 border-b border-brand-border/70 flex items-center justify-between bg-brand-soft/40">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-skySoft" />
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-sky" />
                    </div>
                    <div className="px-4 py-1 rounded-full bg-brand-soft text-[11px] font-medium text-brand-muted">
                      github.com/anselva11/foodmarket2
                    </div>
                    <div className="w-8" />
                  </div>

                  {/* Mockup Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-brand-border/60 pb-4">
                      <div>
                        <div className="text-sm font-semibold text-brand-navy">
                          ANS MARKET
                        </div>
                        <div className="text-xs text-brand-muted">
                          E-Commerce Simulation Interface
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-brand-tint text-[11px] font-medium text-brand-navy">
                        Full Stack
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-xl bg-brand-soft border border-brand-border/80 p-3 flex flex-col justify-between">
                        <span className="w-6 h-1.5 rounded-full bg-brand-sky" />
                        <span className="text-[11px] font-medium text-brand-ink">Catalog UI</span>
                      </div>
                      <div className="h-20 rounded-xl bg-brand-soft border border-brand-border/80 p-3 flex flex-col justify-between">
                        <span className="w-6 h-1.5 rounded-full bg-brand-skySoft" />
                        <span className="text-[11px] font-medium text-brand-ink">API Layer</span>
                      </div>
                      <div className="h-20 rounded-xl bg-brand-soft border border-brand-border/80 p-3 flex flex-col justify-between">
                        <span className="w-6 h-1.5 rounded-full bg-brand-navy" />
                        <span className="text-[11px] font-medium text-brand-ink">Database</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-tint/50 border border-brand-border/60 flex items-center justify-between text-xs text-brand-muted">
                      <span>Responsive UI &amp; Order Simulation</span>
                      <span className="font-medium text-brand-navy">2026 Build</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 16 — Asymmetric Editorial Grid for Other Work */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {otherProjects.map((project, idx) => {
            // Asymmetric column spans
            const colSpan =
              idx === 0
                ? 'md:col-span-7'
                : idx === 1
                ? 'md:col-span-5'
                : idx === 2
                ? 'md:col-span-5'
                : idx === 3
                ? 'md:col-span-3'
                : 'md:col-span-4'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group rounded-3xl bg-white border border-brand-border p-7 flex flex-col justify-between hover:bg-brand-soft hover:border-brand-skySoft transition-all duration-300 cursor-pointer hover:shadow-soft-blue`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-brand-sky uppercase">
                      {project.category}
                    </span>
                    {project.period && (
                      <span className="text-xs text-brand-muted">
                        {project.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-ink tracking-tight mb-2 group-hover:text-brand-navy transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-brand-soft border border-brand-border/80 text-[11px] font-medium text-brand-navy"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-skySoft group-hover:text-brand-sky group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-navy/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-xl rounded-3xl bg-white border border-brand-border shadow-editorial p-7 sm:p-9 z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-soft text-brand-navy hover:bg-brand-tint transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold tracking-wider text-brand-sky uppercase mb-2">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-2">
                {selectedProject.title}
              </h3>
              {selectedProject.period && (
                <div className="text-xs text-brand-muted mb-4">
                  {selectedProject.period}
                </div>
              )}

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="pt-4 border-t border-brand-border">
                <div className="text-xs font-semibold tracking-wider text-brand-navy uppercase mb-3">
                  Key Components &amp; Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 rounded-full bg-brand-soft border border-brand-border text-xs font-medium text-brand-navy"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.githubUrl && (
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-sky"
                  >
                    <span>Open Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
