import type { CVHeader as CVHeaderType } from '../types/cv'
import { Phone, Mail, Linkedin } from 'lucide-react'

const iconMap = {
  Phone,
  Email: Mail,
  LinkedIn: Linkedin,
} as const

interface CVHeaderProps {
  data: CVHeaderType
}

export function CVHeader({ data }: CVHeaderProps) {
  return (
    <header className="border-b border-[var(--cv-border)] pb-3 mb-5">
      <h1 className="text-2xl font-bold text-[var(--cv-accent)] tracking-tight">
        {data.name}
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-[var(--cv-text-muted)] [&>a+a]:border-l [&>a+a]:border-[var(--cv-border)] [&>a+a]:pl-3">
        {data.contact.map((item, i) => {
          if (typeof item === 'string') return <span key={i}>{item}</span>
          const Icon = iconMap[item.label as keyof typeof iconMap]
          return (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-[var(--cv-accent-muted)] hover:text-[var(--cv-accent)] hover:underline"
            >
              {Icon && <Icon className="size-3.5 shrink-0" aria-hidden />}
              {item.displayText ?? item.label}
            </a>
          )
        })}
      </div>
    </header>
  )
}
