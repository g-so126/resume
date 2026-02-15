import type { SkillsCategory as SkillsCategoryType } from '../types/cv'

interface SkillsCategoryProps {
  category: SkillsCategoryType
}

export function SkillsCategory({ category }: SkillsCategoryProps) {
  return (
    <div className="mb-4 last:mb-0">
      <span className="font-semibold text-[var(--cv-text)]">{category.title}</span>
      <span className="text-[var(--cv-text-muted)]"> – {category.items}</span>
    </div>
  )
}
