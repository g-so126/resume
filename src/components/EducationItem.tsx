import type { EducationItem as EducationItemType } from '../types/cv'

interface EducationItemProps {
  item: EducationItemType
}

function InstitutionOrText({ institution, url }: { institution: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--cv-accent-muted)] hover:text-[var(--cv-accent)] hover:underline"
      >
        {institution}
      </a>
    )
  }
  return <span className="text-[var(--cv-text-muted)]">{institution}</span>
}

export function EducationItem({ item }: EducationItemProps) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-[var(--cv-text)]">{item.degree}</span>
          <span className="text-[var(--cv-text-muted)]"> – </span>
          <InstitutionOrText institution={item.institution} url={item.institutionUrl} />
        </div>
        <span className="text-xs text-[var(--cv-text-muted)] whitespace-nowrap tabular-nums">
          {item.period}
        </span>
      </div>
      <div className="text-xs text-[var(--cv-text-muted)] mb-1">
        {item.location}
      </div>
      {item.bullets && item.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-0.5 text-sm text-[var(--cv-text)] mt-1.5 leading-snug">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
