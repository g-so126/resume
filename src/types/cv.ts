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
  location: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  bullets?: string[]
}

export interface SkillsCategory {
  title: string
  items: string
  /** Optional: for list-style display */
  itemsList?: string[]
}

export interface CVData {
  header: CVHeader
  experience: ExperienceItem[]
  education: EducationItem[]
  extra?: ExperienceItem[]
  skills: SkillsCategory[]
}
