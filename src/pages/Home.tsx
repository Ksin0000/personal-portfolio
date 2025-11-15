import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


const desiredProjects = [
  {
    title: 'Webサイト作成',
    detail: 'この様なサイト作成',
  },
  {
    title: 'データ × Web ダッシュボード',
    detail: 'データ分析やそれを常に確認できるようなダッシュボード作成',
  },
  {
    title: '機械学習',
    detail: 'データから需要予測、離脱予測など',
  },
  {
    title: 'お仕事の相談',
    detail: '現在は自分の仕事の範囲を広げていきたいのでご相談お待ちしています',
  },
]

export default function Home() {
  return (
    <section className="space-y-10">
      <Card className="border border-border bg-card text-card-foreground shadow-sm">
        <CardHeader className="space-y-5">
          <CardTitle className="text-4xl font-semibold leading-tight">Ksin&apos;s ポートフォリオサイト.</CardTitle>
          <CardDescription className="text-base">
            自身の練習を兼ねて作成したポートフォリオサイトです。
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">こんなお仕事をお受けできます</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {desiredProjects.map((project) => (
            <Card key={project.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
