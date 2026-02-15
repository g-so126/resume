import type { CVHeader as CVHeaderType } from '../types/cv'

interface CVHeaderProps {
  data: CVHeaderType
}

export function CVHeader({ data }: CVHeaderProps) {
  return (
    <header className="border-b border-[var(--cv-border)] pb-4 mb-6">
      <h1 className="text-3xl font-bold text-[var(--cv-accent)] tracking-tight">
        {data.name}
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-[var(--cv-text-muted)]">
        {data.contact.map((item, i) =>
          typeof item === 'string' ? (
            <span key={i}>{item}</span>
          ) : (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cv-accent-muted)] hover:text-[var(--cv-accent)] hover:underline"
            >
              {item.displayText ?? item.label}
            </a>
          )
        )}
      </div>
    </header>
  )
}
