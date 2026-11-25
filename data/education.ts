export interface EducationItem {
  id: string
  monogram: string
  institution: string
  program: string
  degree: string
  timeline: string
  location?: string
  description: string
  skills?: string[]
}

export const educations: EducationItem[] = [
  {
    id: 'binus-university',
    monogram: 'BN',
    institution: 'BINUS UNIVERSITY',
    program: 'Business Information Technology',
    degree: "Bachelor's Degree Program",
    timeline: 'Undergraduate Studies',
    location: 'Jakarta, Indonesia',
    description:
      'Bridging software engineering, enterprise systems analysis, business process management, and quantitative commercial evaluation.',
  },
  {
    id: 'wall-street-english-switzerland',
    monogram: 'WSE',
    institution: 'Wall Street English Switzerland',
    program: 'English Language and Literature, General',
    degree: 'Grade: Advance',
    timeline: 'Jan 2022 – Jul 2024',
    description:
      'Activities and societies: Learn english to improve good and excellent language skills.',
  },
  {
    id: 'smk-penerbangan-angkasa-bogor',
    monogram: 'SPA',
    institution: 'SMK Penerbangan Angkasa Bogor',
    program:
      'High School Diploma, Aeronautics/Aviation/Aerospace Science and Technology, General',
    degree: 'Grade: High School',
    timeline: 'Jun 2018 – Apr 2020',
    location: 'Bogor, Indonesia',
    description: 'Activities and societies: Study Aviation Science.',
    skills: ['Aeronautics', 'Aerospace Manufacturing'],
  },
]

export const education = educations[0]
