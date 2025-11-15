import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const history = [
  {
    period: '2026/01 - 現在',
    title: '個人事業主 / Freelance Engineer',
    detail: '個人事業主としての活動を開始。',
  },
  {
    period: '2021/04 - 2025/09',
    title: 'データサイエンティスト @ 大手 EC / 写真販売 EC',
    detail: '人材派遣会社にて複数の EC 事業会社へ常駐し、データ抽出・検証・改善提案といったサイクルを経験。',
  },
  {
    period: '2020/04 - 2021/03',
    title: 'プログラマー兼講師 @ 教育系ベンチャー',
    detail: '小中学生向けプログラミング教室を運営するベンチャーで講師、教室運営、営業、カリキュラム制作など多岐にわたる業務を経験。',
  },
  {
    period: '2016/04 - 2020/03',
    title: 'Computer Science @ 大学',
    detail: 'CS を専攻し、アルゴリズム／データ構造／Web 開発の基礎を習得。',
  },
]

export default function Career() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Career</h1>
        <p className="text-muted-foreground">UI 実装とデータ分析のハイブリッドなキャリアを歩んでいます。</p>
      </div>

      <div className="space-y-6">
        {history.map((item, index) => (
          <div key={item.period} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-2 inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
              {index < history.length - 1 && <span className="mt-1 h-full w-px bg-border" aria-hidden />}
            </div>
            <Card className="flex-1">
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {item.period}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
