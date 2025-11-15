import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const stacks = ['TypeScript', 'React / Vite', 'Data Science', 'LLM Ops', 'UI/UX Writing']
const highlights = [
  {
    title: 'Bilingual Problem Solving',
    body: '要件定義から実装・検証・分析レポートまで、日本語と英語の両方でコミュニケーションを完結できます。',
    detail: '要件ヒアリング〜定量分析までを一人称で回し、必要に応じて翻訳やドキュメント整備も行います。',
  },
  {
    title: 'Design Systems',
    body: 'shadcn/ui や Tailwind を活用しつつ、データドリブンな UI を素早く検証・改善するのが得意です。',
    detail: 'アクセシビリティやマイクロインタラクションにも配慮し、最小構成でスケールする UI レイヤーを提供します。',
  },
  {
    title: 'Data Products',
    body: '可視化基盤、ML フィーチャー開発、LLM による自動化などデータ周辺の開発経験があります。',
    detail: 'Python / SQL での前処理から React での可視化まで連続したパイプラインを構築できます。',
  },
  {
    title: 'Calm Productivity',
    body: '小規模チームや個人開発でもスケールするよう、型安全性とドキュメントを意識した開発を行います。',
    detail: '集中して開発できる環境づくりと継続的な改善サイクルを大切にしています。',
  },
]

export default function Home() {
  return (
    <section className="space-y-8">
      <Card className="border-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl">
        <CardHeader className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Hello</p>
            <CardTitle className="text-4xl font-semibold leading-tight">Hi, I&apos;m Ksin.</CardTitle>
            <CardDescription className="text-base text-white/80">
              データサイエンスとフロントエンドを往復しながら「伝わるプロダクト体験」を設計・開発するフリーランスエンジニアです。
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-3">
            {stacks.map((stack) => (
              <Badge key={stack} variant="secondary" className="border-white/20 bg-white/10 text-white">
                {stack}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/contact">
                まずは相談する
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white">
              <a href="https://github.com/Ksin0000" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />GitHub を見る
              </a>
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <Card key={item.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.body}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
