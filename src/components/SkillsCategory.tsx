import type { SkillsCategory as SkillsCategoryType } from '../types/cv'
import { Languages, Code, Briefcase, Heart } from 'lucide-react'

const iconMap = {
  Languages,
  Tech: Code,
  'Side-jobs': Briefcase,
  Interests: Heart,
} as const

interface SkillsCategoryProps {
  category: SkillsCategoryType
}

export function SkillsCategory({ category }: SkillsCategoryProps) {
  const tags = category.itemsList ?? (category.items ? category.items.split(/\s*\|\s*/) : [])
  const Icon = iconMap[category.title as keyof typeof iconMap]

  if (tags.length === 0) return null

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        {Icon && (
          <span className="flex items-center justify-center size-6 rounded-full bg-[var(--cv-accent-light)] text-[var(--cv-accent)]" aria-hidden>
            <Icon className="size-3.5" />
          </span>
        )}
        <span className="font-semibold text-[var(--cv-text)] text-sm">
          {category.title}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 pl-8">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full bg-[var(--cv-accent-light)] px-2.5 py-0.5 text-xs font-medium text-[var(--cv-accent)] border border-[var(--cv-border)]"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  )
}
