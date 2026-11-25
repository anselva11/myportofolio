export interface CertificationItem {
  id: string
  title: string
  issuer: string
  date?: string
  credentialId?: string
  skills?: string[]
  verifyUrl?: string
}

export const certifications: CertificationItem[] = [
  {
    id: 'saylor-finance-management',
    title: 'Saylor University — Finance Management Certify',
    issuer: 'Saylor University',
    date: 'November 2026',
    credentialId: '7235736248HV',
    skills: ['Managerial Finance', 'Financial Analysis'],
  },
  {
    id: 'saylor-principle-of-finance',
    title: 'Saylor University — Principle of Finance Certify',
    issuer: 'Saylor University',
    date: 'November 2026',
    credentialId: '2006573371HV',
    skills: ['Corporate Finance', 'Financial Analysis'],
  },
  {
    id: 'hackerrank-csharp-competency',
    title: 'HackerRank — Certificate of Competency (C# Development)',
    issuer: 'HackerRank',
    date: 'November 2026',
    credentialId: '5EE9513FCED0',
    skills: ['C#', 'Programming'],
    verifyUrl: 'https://www.hackerrank.com/certificates/5ee9513fced0',
  },
  {
    id: 'hackerrank-software-engineer',
    title: 'HackerRank — Software Engineer',
    issuer: 'HackerRank',
    date: 'November 2026',
    credentialId: '705AF416675B',
    skills: ['Software Engineering Practices', 'Software Project Management'],
    verifyUrl: 'https://www.hackerrank.com/certificates/705af416675b',
  },
  {
    id: 'hackerrank-frontend-react',
    title: 'HackerRank — Front End Developer React',
    issuer: 'HackerRank',
    credentialId: '98495c4a54f4',
    skills: ['Front-End Development', 'Front-End Coding'],
    verifyUrl: 'https://www.hackerrank.com/certificates/98495c4a54f4',
  },
  {
    id: 'hackerrank-javascript',
    title: 'HackerRank — JavaScript',
    issuer: 'HackerRank',
    date: 'March 2026',
    verifyUrl: 'https://www.hackerrank.com/certificates',
  },
  {
    id: 'icp-hackathon-9',
    title: 'ICP HUB Indonesia — Hackathon 9.0',
    issuer: 'ICP HUB Indonesia',
    date: 'December 2024',
    skills: ['Front end', 'Front-End Development'],
  },
]
