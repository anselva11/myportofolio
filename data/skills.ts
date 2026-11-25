export interface SkillGroup {
  category: string
  items: {
    name: string
    weight: 'xl' | 'lg' | 'md'
  }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'TECHNOLOGY',
    items: [
      { name: 'Software Development', weight: 'xl' },
      { name: 'Frontend Development', weight: 'lg' },
      { name: 'Web Development', weight: 'md' },
      { name: 'AI', weight: 'xl' },
      { name: 'UI/UX', weight: 'md' },
    ],
  },
  {
    category: 'BUSINESS',
    items: [
      { name: 'Business Analysis', weight: 'xl' },
      { name: 'Business Development', weight: 'lg' },
      { name: 'Entrepreneurship', weight: 'xl' },
      { name: 'Strategic Thinking', weight: 'md' },
    ],
  },
  {
    category: 'FINANCE',
    items: [
      { name: 'Financial Analysis', weight: 'xl' },
      { name: 'Investment Research', weight: 'lg' },
      { name: 'Investment Strategy', weight: 'xl' },
      { name: 'Capital Allocation', weight: 'lg' },
      { name: 'Risk Management', weight: 'md' },
    ],
  },
  {
    category: 'LEADERSHIP',
    items: [
      { name: 'Corporate Governance', weight: 'xl' },
      { name: 'Strategic Leadership', weight: 'lg' },
      { name: 'Partnerships', weight: 'md' },
      { name: 'Business Development', weight: 'md' },
    ],
  },
]
