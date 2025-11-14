// src/pages/Projects.tsx
const works = [
  { title: 'Portfolio Site', detail: 'Vite + React + TypeScript で個人サイトを構築。見た目の部分はTailwind + shadcn/ui' },
  { title: 'WIP', detail: '作成中' },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {works.map((work) => (
          <li key={work.title}>
            <strong>{work.title}</strong>
            <p>{work.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
