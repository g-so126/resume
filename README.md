# Ginevra Cerri – Resume

Static single-page CV built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Cold purple/violet theme with a greyed background so the CV card stands out.

## Requirements

- **Node 22** (use [nvm](https://github.com/nvm-sh/nvm): `nvm use` or `nvm install 22`)

## Setup

```bash
nvm use 22   # or: nvm install 22
npm install
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

## Project structure (modular & extensible)

- **`src/data/cv.ts`** – CV content. Edit this file to update the resume text.
- **`src/types/cv.ts`** – TypeScript types for the CV. Extend when adding new sections or fields.
- **`src/components/`** – Reusable UI:
  - `CVHeader` – name and contact
  - `Section` – section title wrapper
  - `ExperienceItem` – role, company, period, bullets
  - `EducationItem` – degree, institution, period, optional bullets
  - `SkillsCategory` – title + items
- **`src/pages/CVPage.tsx`** – Single CV page layout (greyed background + card).
- **`src/index.css`** – Theme variables (cold purple/violet). Tweak `:root` to change colors.

To add a new section: add data in `src/data/cv.ts`, extend `src/types/cv.ts` if needed, then use the right component in `CVPage.tsx`.
