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
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ginevra-cerri-a2589816b/', displayText: 'Ginevra Cerri' },
    ],
  },
  experience: [
    {
      role: 'Perception Lead – Engineer',
      company: 'Technology Innovation Institute',
      companyUrl: 'https://www.youtube.com/watch?v=3RdxL7POjI4&t=306s',
      location: 'Abu Dhabi, United Arab Emirates',
      period: 'Oct 2023 – Present',
      bullets: [
        'Led the Perception Division to a 2nd place finish in the team\'s first eligible A2RL competition.',
        'Managed a 5+ person external development team to deliver a custom perception product, defining technical requirements and supervising QA to ensure successful feature delivery.',
        'Integrated the algorithm by achieving -20% in computational cost and full reliability within a +150/−50m range.',
        'Resolved critical system failures, proactively troubleshooting in high-pressure, fast-paced racing environments to ensure 100% platform uptime.',
      ],
    },
    {
      role: 'CPO – Founder',
      company: 'Unchained Labs',
      companyUrl: 'https://www.unchainlabs.xyz/',
      location: 'Fully Remote',
      period: 'Dec 2024 – Present',
      bullets: [
        'Directed the end-to-end development of the Hunter ecosystem, an AI agent for on-chain insights and automated actions to enhance user productivity and UX.',
        'Owned the product strategy and roadmap by defining prioritized features for the engineering team.',
        'Identified high-potential R&D use cases for developing emerging technologies solutions within the Labs environment.',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'Polytechnic of Milan – mOve Research Team',
      companyUrl: 'https://aida.polimi.it/',
      location: 'Milan, Italy',
      period: 'Sept 2022 – Jul 2023',
      bullets: [
        'Designed and deployed the Perception for the Aida project, 98% accuracy in real-world, GPS-denied environments, setting the world speed record for a production-based autonomous vehicle (285 km/h).',
        'Collaborated with Maserati S.p.A for the 1000 Miglia 23, running with the first autonomous vehicle in the race\'s history.',
      ],
    },
    {
      role: 'Undergraduate Researcher',
      company: 'IZONICS – Startup',
      location: 'Paris, France',
      period: 'Jan 2022 – Jun 2022',
      bullets: [
        'Managed a team of 5+ people to perform laboratory experiments on water samples, assigning tasks, reviewing progress, and presenting results to the startup\'s founders.',
        'Collected 500+ samples to build a training dataset for a neural network, achieving 95% accuracy in binary classification between biological and PVC particles.',
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
      companyUrl: 'https://www.novatalent.com/',
      location: '',
      period: 'Aug 2024 – Present',
      bullets: [
        'Hackathon awards → international workshops, academies, professional trips.',
      ],
    },
    {
      role: 'Student Representative – Industrial Engineering',
      company: 'Sapienza University',
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
