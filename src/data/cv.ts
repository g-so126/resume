import type { CVData } from '../types/cv'

/**
 * CV content – edit this file to update the resume. Structure is defined in types/cv.ts.
 */
export const cvData: CVData = {
  header: {
    name: 'Gwak SoJeong',
    contact: [
      { label: 'Email', href: 'mailto:ggsj0106@gmail.com', displayText: 'ggsj0106@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/g-so126', displayText: 'github.com/g-so126' },
    ],
  },
  experience: [
    {
      role: 'AI Research Intern',
      company: 'Advanced Academic Research in AI & Digital Media',
      location: 'South Korea',
      period: 'Ongoing',
      bullets: [
        'Conducting research in multi-modal learning and 3D data analysis',
        'Working with state-of-the-art AI technologies and methodologies',
      ],
    },
    {
      role: 'Research Participant',
      company: 'Next-Generation Smart System & EdTech AI Application Design',
      location: 'South Korea',
      period: 'Ongoing',
      bullets: [
        'Participating in smart system and educational AI application development',
      ],
    },
  ],
  education: [
    {
      degree: 'B.S. Artificial Intelligence Engineering',
      institution: 'Chosun University',
      location: 'South Korea',
      period: '3rd Year (In Progress)',
      bullets: [
        'Relevant Coursework: Machine Learning, Deep Learning, Algorithms, Data Structures, Web Programming',
      ],
    },
  ],
  extra: [
    {
      role: 'Member',
      company: 'Voice-over/Dubbing Club',
      location: 'Chosun University',
      period: 'Ongoing',
      bullets: [],
    },
    {
      role: 'System Administrator',
      company: 'Operating System & Computing Architecture Optimization Review',
      location: 'South Korea',
      period: 'Ongoing',
      bullets: [],
    },
  ],
  skills: [
    {
      title: 'Programming Languages',
      itemsList: ['Python (Basic)', 'C/C++ (Basic)', 'JavaScript (Basic)'],
    },
    {
      title: 'AI / ML',
      itemsList: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'Computer Vision', 'Human Pose Estimation', 'SMPL'],
    },
    {
      title: 'Web Technologies',
      itemsList: ['HTML', 'CSS (Basic)', 'TypeScript'],
    },
    {
      title: 'Tools & Platforms',
      itemsList: ['Git/GitHub', 'Jupyter Notebook'],
    },
  ],
  projects: [
    {
      title: '3D Human Pose Reconstruction and Motion Understanding System',
      period: 'Mar 2026 – Present',
      description: 'End-to-end pipeline for 3D human pose estimation from single images and videos',
      bullets: [
        'Analyzed open-source 3D Human Pose Estimation pipelines and frameworks',
        'Implemented input image preprocessing and inference pipelines',
        'Integrated SMPL-based 3D skeletal joint coordinate recovery modules',
        'Validated model stability through gradient and loss monitoring during training',
        'Extracted 2D keypoints from single images and videos',
        'Reconstructed 3D skeletal joint coordinates with multi-viewpoint analysis',
        'Implemented multi-modal motion representation learning using textual information',
        'Built end-to-end pipeline from data input to 3D joint generation',
        'Established model stability validation and performance analysis environment',
      ],
      techStack: 'Python, PyTorch, Computer Vision, Human Pose Estimation, SMPL, Git',
    },
  ],
}
