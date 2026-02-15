import type { CVData } from '../types/cv'

/**
 * CV content – edit this file to update the resume. Structure is defined in types/cv.ts.
 */
export const cvData: CVData = {
  header: {
    name: 'Ginevra Cerri',
    contact: [
      { label: 'Phone', href: 'tel:+971547315168', displayText: '+971 547315168' },
      { label: 'Email', href: 'mailto:ginevra.cerri9@hotmail.com', displayText: 'ginevra.cerri9@hotmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ginevra-cerri/', displayText: 'Ginevra Cerri' },
    ],
  },
  experience: [
    {
      role: 'Perception Lead – Engineer',
      company: 'Technology Innovation Institute',
      companyUrl: 'https://www.tii.ae',
      location: 'Abu Dhabi, UAE',
      period: 'Oct 2023 – Present',
      bullets: [
        'Led Perception to 2nd place in team\'s first eligible A2RL competition.',
        'Managed 5+ dev team: custom perception product, requirements, QA.',
        '-20% compute, full reliability in +150/−50m range.',
        'Critical fixes in high-pressure racing; 100% platform uptime.',
      ],
    },
    {
      role: 'CPO – Founder',
      company: 'Unchained Labs',
      companyUrl: 'https://unchainedlabs.com',
      location: 'Remote',
      period: 'Dec 2024 – Present',
      bullets: [
        'End-to-end Hunter ecosystem: AI agent for on-chain insights & automation.',
        'Product strategy & roadmap; prioritized features for engineering.',
        'R&D use cases for emerging tech within Labs.',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'Polytechnic of Milan – mOve Research Team',
      companyUrl: 'https://www.polimi.it',
      location: 'Milan, Italy',
      period: 'Sept 2022 – Jul 2023',
      bullets: [
        'Perception for Aida: 98% accuracy, GPS-denied; world speed record 285 km/h (production AV).',
        'Maserati S.p.A – 1000 Miglia 23: first autonomous vehicle in race history.',
      ],
    },
    {
      role: 'Undergraduate Researcher',
      company: 'IZONICS',
      location: 'Paris, France',
      period: 'Jan 2022 – Jun 2022',
      bullets: [
        'Led 5+ team: lab experiments on water samples; tasks, review, founder updates.',
        '500+ samples → neural net dataset; 95% accuracy (biological vs PVC).',
      ],
    },
  ],
  education: [
    {
      degree: 'MSc. Automation and Control Engineering',
      institution: 'Polytechnic of Milan',
      institutionUrl: 'https://www.polimi.it',
      location: 'Milan, Italy',
      period: 'Sept 2020 – May 2023',
      bullets: [
        '110 cum Laude/110. Nominated Best Thesis "Advanced A&C Techniques".',
        '€16K scholarship; €1.5K graduation prize.',
      ],
    },
    {
      degree: 'Erasmus+ Exchange',
      institution: 'ESIEE Paris – Université Gustave Eiffel',
      institutionUrl: 'https://www.esiee.fr',
      location: 'Paris, France',
      period: 'Jan 2022 – Jun 2022',
    },
    {
      degree: 'BSc. Mechanical Engineering',
      institution: 'Sapienza University',
      institutionUrl: 'https://www.uniroma1.it',
      location: 'Rome, Italy',
      period: 'Sept 2016 – May 2020',
    },
  ],
  extra: [
    {
      role: 'Member',
      company: 'Nova Talent',
      location: '',
      period: 'Aug 2024 – Present',
      bullets: [
        'Hackathon awards → international workshops, academies, professional trips.',
      ],
    },
    {
      role: 'Student Representative – Industrial Engineering',
      company: 'Sapienza University',
      companyUrl: 'https://www.uniroma1.it',
      location: 'Rome, Italy',
      period: 'Jan 2017 – May 2020',
      bullets: [
        '1,000+ students; 20+ meetings with leadership; 10+ initiatives (gender equality, access, experience).',
      ],
    },
  ],
  skills: [
    {
      title: 'Languages',
      itemsList: ['English (C2)', 'Italian (Native)', 'French (B1)', 'Spanish (B1)'],
    },
    {
      title: 'Tech',
      itemsList: ['Python', 'C++', 'ROS', 'Docker', 'GitLab', 'GitHub', 'Jira', 'Taiga', 'SQL', 'Foxglove', 'Matlab', 'Simulink', 'LaTeX'],
    },
    {
      title: 'Side-jobs',
      itemsList: ['Event Photographer', 'Math Tutor', 'Summer Camp', 'Event Promoter', 'Charity Volunteer'],
    },
    {
      title: 'Interests',
      itemsList: ['Choir', 'Backpack Traveller', 'Sport', 'Modern Art', 'Salsa'],
    },
  ],
}
