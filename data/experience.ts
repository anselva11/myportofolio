export interface ExperienceEntry {
  number: string
  id: string
  role: string
  company: string
  period: string
  location: string
  category: string
  badge?: string
  playful?: boolean
  focus: string[]
  summary: string
  details: string[]
}

export const experienceList: ExperienceEntry[] = [
  {
    number: '01',
    id: 'pacific-investment-capital',
    role: 'Vice Managing Director',
    company: 'PT Pacific Investment Capital',
    period: 'Nov 2026 — Present',
    location: 'Central Jakarta, Indonesia',
    category: 'INVESTMENT · FINANCE · LEADERSHIP',
    badge: 'CURRENT ROLE',
    focus: [
      'Investment Strategy',
      'Capital Allocation',
      'Portfolio Management',
      'Business Development',
      'Financial Analysis',
      'Risk Management',
      'Strategic Partnerships',
      'Long-Term Value Creation',
    ],
    summary:
      'Supporting strategic direction, investment evaluation, disciplined capital allocation, and long-term corporate initiatives alongside senior leadership.',
    details: [
      'As Vice Managing Director of Pacific Investment Capital Holdings (PIC), Hansel supports the company’s strategic direction, investment activities, and long-term business development.',
      'Responsibilities include assessing investment opportunities through fundamental and financial analysis, reviewing business models and financial performance, conducting market and industry research, and evaluating potential risks and returns.',
      'Plays an active role in business development and strategic partnerships, engaging with investors, entrepreneurs, financial institutions, and potential partners while contributing to portfolio oversight and corporate governance.',
    ],
  },
  {
    number: '02',
    id: 'hansai-ocean-industries',
    role: 'Chief Commissioner',
    company: 'PT Hansai Ocean Industries',
    period: 'Jan 2026 — Present',
    location: 'Bekasi, Indonesia',
    category: 'LEADERSHIP · CORPORATE GOVERNANCE',
    focus: [
      'Corporate Governance',
      'Strategic Oversight',
      'Risk Management',
      'Sustainable Business Growth',
      'Maritime Industry',
    ],
    summary:
      'Providing board-level oversight centered on corporate governance, strategic direction, risk management, and sustainable growth across maritime industries.',
    details: [
      'Focuses on corporate governance, strategic oversight, risk management, and sustainable business growth at PT Hansai Ocean Industries.',
      'Supports the company’s long-term vision of building trusted partnerships and creating lasting value across the maritime and ocean industries — Driven by the Ocean. Built for the Future.',
      'Incorporates structured methods engineering and team leadership principles in guiding organizational resilience.',
    ],
  },
  {
    number: '03',
    id: 'hackathon-2026',
    role: 'Hackathon 2026',
    company: 'HackerRank',
    period: 'Nov 2026 — Present',
    location: 'Remote',
    category: 'AI · SOFTWARE DEVELOPMENT',
    playful: true,
    focus: [
      'Agentic AI Development',
      'Software Development',
      'Problem Solving',
      'Rapid Product Development',
    ],
    summary:
      "Participating in Orchestrate December '26, a 24-hour hackathon focused on designing, building, shipping, and defending an AI agent in a live AI interview.",
    details: [
      "Registered for HackerRank Orchestrate December '26, a 24-hour sprint dedicated to taking an autonomous AI agent from concept to working implementation.",
      'The challenge extends beyond shipping code: participants defend their AI agent architecture and decisions through a live AI interview.',
      'Focused on strengthening capabilities in Agentic AI Development, Java, software engineering, and rapid problem solving.',
    ],
  },
  {
    number: '04',
    id: 'invosa-systems',
    role: 'Business Analyst',
    company: 'Invosa Systems',
    period: 'Feb 2026 — Jul 2026',
    location: 'Cibitung, Indonesia',
    category: 'BUSINESS ANALYSIS',
    focus: [
      'Business Analysis',
      'Requirement Gathering',
      'Process Analysis',
      'System Analysis',
      'Stakeholder Communication',
    ],
    summary:
      'Analyzed business needs and translated operational workflows into clear technical requirements, process models, and practical system solutions.',
    details: [
      'Led requirement gathering sessions and stakeholder communication to uncover underlying business challenges.',
      'Translated complex operational needs into formal business requirements, process documentation, and system specifications.',
      'Supported implementation and evaluation cycles to ensure technical deliverables aligned seamlessly with business goals.',
    ],
  },
  {
    number: '05',
    id: 'global-expor-indonesia',
    role: 'Chief Executive Officer',
    company: 'PT Global Expor Indonesia',
    period: 'Mar 2024 — Present',
    location: 'Bekasi, Indonesia',
    category: 'ENTREPRENEURSHIP · GLOBAL BUSINESS',
    badge: 'FOUNDER & CEO',
    focus: [
      'Entrepreneurship',
      'Global Trade',
      'Export Sourcing',
      'Business Development',
      'Strategic Partnerships',
      'Leadership',
    ],
    summary:
      'Founder & CEO connecting Indonesian products with international markets through export sourcing, global partnerships, and cross-border business development.',
    details: [
      'Founded PT Global Expor Indonesia to bridge domestic producers and international buyers across global trade corridors.',
      'Directs export sourcing strategies, supplier network curation, international partner cultivation, and cross-border commercial negotiations.',
    ],
  },
  {
    number: '06',
    id: 'icp-hub-indonesia',
    role: 'Frontend Developer',
    company: 'ICP HUB Indonesia',
    period: 'Dec 2024 — Feb 2025',
    location: 'Jakarta, Indonesia',
    category: 'TECHNOLOGY',
    focus: [
      'Frontend Development',
      'Web Development',
      'UI',
      'Responsive Design',
      'Software Development',
    ],
    summary:
      'Built responsive web interfaces, reusable UI components, and modern frontend experiences.',
    details: [
      'Developed clean, responsive user interfaces and modular web components tailored for accessibility and performance.',
      'Collaborated on design implementation, layout fidelity, and interactive web workflows.',
    ],
  },
]
