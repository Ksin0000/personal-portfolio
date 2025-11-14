// src/pages/Career.tsx
const history = [
  { period: '2026/01 - 現在', role: '個人事業主としての活動を開始' },
  { period: '2021/04 - 2025/09', role: '人材派遣会社にて大手ECサイト運営会社や、写真販売ECサイト運営会社でデータサイエンティストとして業務を経験' },
  { period: '2020/04 - 2021/03', role: '小中学生向けプログラミング教室を運営するベンチャーにてプログラマー兼講師として多岐にわたる業務を経験' },
  { period: '2016/04 - 2020/03', role: '大学にてコンピューターサイエンスを学ぶ' },
]

export default function Career() {
  return (
    <section>
      <h1>Career</h1>
      <dl>
        {history.map((item) => (
          <div key={item.period}>
            <dt>{item.period}</dt>
            <dd>{item.role}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
