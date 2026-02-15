import { CVHeader, Section, ExperienceItem, EducationItem, SkillsCategory } from '../components'
import { cvData } from '../data/cv'

export function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] py-8 px-4 sm:px-6 flex justify-center items-start">
      {/* CV card – pops out on greyed background */}
      <article className="w-full max-w-3xl bg-[var(--cv-surface)] text-[var(--cv-text)] shadow-2xl rounded-xl border border-[var(--cv-border)] overflow-hidden">
        <div className="p-6 sm:p-8">
          <CVHeader data={cvData.header} />

          <Section title="Working Experience">
            {cvData.experience.map((item, i) => (
              <ExperienceItem key={i} item={item} />
            ))}
          </Section>

          <Section title="Education">
            {cvData.education.map((item, i) => (
              <EducationItem key={i} item={item} />
            ))}
          </Section>

          {cvData.extra && cvData.extra.length > 0 && (
            <Section title="Extra-Curricular & Leadership">
              {cvData.extra.map((item, i) => (
                <ExperienceItem key={i} item={item} />
              ))}
            </Section>
          )}

          <Section title="Skills & Interests">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
              {cvData.skills.map((category, i) => (
                <SkillsCategory key={i} category={category} />
              ))}
            </div>
          </Section>
        </div>
      </article>
    </div>
  )
}
