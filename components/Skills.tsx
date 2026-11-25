'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <section className="bg-brand-soft py-24 lg:py-28 border-t border-brand-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="pb-6 border-b border-brand-border/80"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-brand-sky uppercase mb-6">
                {group.category}
              </div>

              {/* Typography-based Skill Cloud without percentage bars */}
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                {group.items.map((item) => {
                  const sizeClass =
                    item.weight === 'xl'
                      ? 'text-2xl sm:text-3xl font-semibold text-brand-ink'
                      : item.weight === 'lg'
                      ? 'text-lg sm:text-xl font-medium text-brand-navy'
                      : 'text-sm sm:text-base font-normal text-brand-muted'

                  return (
                    <span
                      key={item.name}
                      className={`${sizeClass} hover:text-brand-sky transition-colors duration-200 cursor-default`}
                    >
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
