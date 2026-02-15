import type { ExperienceItem as ExperienceItemType } from '../types/cv'

interface ExperienceItemProps {
  item: ExperienceItemType
}

function CompanyOrText({ company, url }: { company: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--cv-accent-muted)] hover:text-[var(--cv-accent)] hover:underline"
      >
        {company}
      </a>
    )
  }
  return <span className="text-[var(--cv-text-muted)]">{company}</span>
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-[var(--cv-text)]">{item.role}</span>
          <span className="text-[var(--cv-text-muted)]"> – </span>
          <CompanyOrText company={item.company} url={item.companyUrl} />
        </div>
        <span className="text-xs text-[var(--cv-text-muted)] whitespace-nowrap tabular-nums">
          {item.period}
        </span>
      </div>
      {item.location && (
        <div className="text-xs text-[var(--cv-text-muted)] mb-1.5">
          {item.location}
        </div>
      )}
      <ul className="list-disc list-inside space-y-0.5 text-sm text-[var(--cv-text)] leading-snug">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
