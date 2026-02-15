import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-[var(--cv-accent)] uppercase tracking-wide mb-3 border-b border-[var(--cv-border)] pb-1">
        {title}
      </h2>
      {children}
    </section>
  )
}
