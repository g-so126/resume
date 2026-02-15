import type { ExperienceItem as ExperienceItemType } from '../types/cv'

interface ExperienceItemProps {
  item: ExperienceItemType
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-[var(--cv-text)]">{item.role}</span>
          <span className="text-[var(--cv-text-muted)]"> – {item.company}</span>
        </div>
        <span className="text-sm text-[var(--cv-text-muted)] whitespace-nowrap">
          {item.period}
        </span>
      </div>
      <div className="text-sm text-[var(--cv-text-muted)] mb-2">
        {item.location}
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--cv-text)]">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
