/**
 * CV type definitions – extend these when adding new sections or fields.
 */

export interface ContactLink {
  label: string
  href: string
  /** Optional: display text different from label (e.g. "LinkedIn" with custom text) */
  displayText?: string
}

export interface CVHeader {
  name: string
  /** Phone, email, etc. – can be string or links */
  contact: Array<string | ContactLink>
}

export interface ExperienceItem {
  role: string
  company: string
  /** Optional: link company name to URL */
  companyUrl?: string
  location: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  /** Optional: link institution name to URL */
  institutionUrl?: string
  location: string
  period: string
  bullets?: string[]
}

export interface SkillsCategory {
  title: string
  /** Pipe-separated or use itemsList for bubbles */
  items?: string
  /** For bubble/tag display; when set, used instead of items */
  itemsList?: string[]
}

export interface CVData {
  header: CVHeader
  experience: ExperienceItem[]
  education: EducationItem[]
  extra?: ExperienceItem[]
  skills: SkillsCategory[]
}
