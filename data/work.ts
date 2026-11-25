export interface ProjectItem {
  id: string
  title: string
  category: string
  period?: string
  description: string
  highlights: string[]
  githubUrl?: string
  featured?: boolean
}

export const featuredProject: ProjectItem = {
  id: 'ans-market',
  title: 'ANS MARKET',
  category: 'Full Stack Web Project',
  period: 'Jan 2026 — Feb 2026',
  description:
    'A web project simulation combining frontend, backend, API integration, database functionality, and responsive interface design.',
  highlights: [
    'Frontend Interface',
    'Backend Logic',
    'API Integration',
    'Database Functionality',
    'Responsive Design',
  ],
  githubUrl: 'https://github.com/anselva11/foodmarket2',
  featured: true,
}

export const otherProjects: ProjectItem[] = [
  {
    id: 'business-analyst-workflow',
    title: 'Business Analyst Workflow',
    category: 'Business Analysis',
    description:
      'Structured analytical workflow aligning business discovery with formal system documentation and user acceptance validation.',
    highlights: [
      'Requirement Gathering',
      'Process Analysis',
      'System Documentation',
      'Business Requirements',
      'UAT',
    ],
  },
  {
    id: 'system-kasir',
    title: 'System Kasir',
    category: 'Business Application',
    description:
      'Point-of-sale business application built around structured transaction handling, database persistence, and clear operator UX.',
    highlights: ['Transaction', 'Business Logic', 'Database', 'User Interface'],
  },
  {
    id: 'internet-cafe-system-design',
    title: 'Internet Cafe System Design',
    category: 'System Design',
    description:
      'End-to-end systems architecture modeling customer onboarding, workstation billing, and database entities.',
    highlights: ['ERD', 'Use Case', 'Billing', 'Customer Flow', 'Business Process'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    description:
      'Clean, user-centered interface systems and visual prototypes designed with attention to spacing, hierarchy, and usability.',
    highlights: ['Figma', 'Adobe Photoshop'],
  },
  {
    id: 'instagram-feed-design',
    title: 'Instagram Feed Design',
    category: 'Visual Design',
    period: 'Oct 2025 — Dec 2025',
    description:
      'Cohesive editorial social media visual series maintaining consistent typography, layout grids, and brand identity.',
    highlights: ['Figma', 'Adobe Photoshop'],
  },
]
