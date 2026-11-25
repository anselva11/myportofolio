export interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  verifyUrl?: string
}

export const certifications: CertificationItem[] = [
  {
    id: 'hackerrank-javascript',
    title: 'HackerRank — JavaScript',
    issuer: 'HackerRank',
    date: 'March 2026',
    verifyUrl: 'https://www.hackerrank.com/certificates',
  },
  {
    id: 'hackerrank-software-engineer',
    title: 'HackerRank — Software Engineer',
    issuer: 'HackerRank',
    date: 'February 2026',
    verifyUrl: 'https://www.hackerrank.com/certificates',
  },
]
