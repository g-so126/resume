import type { EducationItem as EducationItemType } from '../types/cv'

interface EducationItemProps {
  item: EducationItemType
}

export function EducationItem({ item }: EducationItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-[var(--cv-text)]">{item.degree}</span>
          <span className="text-[var(--cv-text-muted)]"> – {item.institution}</span>
        </div>
        <span className="text-sm text-[var(--cv-text-muted)] whitespace-nowrap">
          {item.period}
        </span>
      </div>
      <div className="text-sm text-[var(--cv-text-muted)] mb-1">
        {item.location}
      </div>
      {item.bullets && item.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-[var(--cv-text)] mt-2">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
