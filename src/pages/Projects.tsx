// src/pages/Projects.tsx
const works = [
  { title: 'Portfolio Site', detail: 'React + Vite で個人サイトを構築' },
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
