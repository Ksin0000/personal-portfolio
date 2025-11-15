import { ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Work = {
  title: string
  detail: string
  stack: string[]
  status: '公開中' | 'WIP'
  link?: string
}

const works: Work[] = [
  {
    title: 'Portfolio Site',
    detail: 'Vite + React + TypeScript で個人サイトを構築。Tailwind + shadcn/ui でデザインシステムを共通化。',
    stack: ['React', 'Vite', 'shadcn/ui'],
    status: '公開中',
    link: 'https://github.com/Ksin0000/personal-portfolio',
  },
  {
    title: 'WIP',
    detail: '作成中。データ分析基盤とUIダッシュボードを行き来できるスターターキットを検討中です。',
    stack: ['LLM Ops', 'Supabase', 'Visualization'],
    status: 'WIP',
  },
]

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          shadcn/ui を活用した UI リファインや、データ×Web の掛け合わせ案件を中心に取り組んでいます。
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work) => (
          <Card key={work.title} className="flex h-full flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{work.title}</CardTitle>
                <Badge variant={work.status === '公開中' ? 'default' : 'secondary'}>{work.status}</Badge>
              </div>
              <CardDescription>{work.detail}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Stack</p>
              <div className="flex flex-wrap gap-2">
                {work.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              {work.link ? (
                <Button asChild className="gap-2">
                  <a href={work.link} target="_blank" rel="noreferrer">
                    リポジトリを見る
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button className="gap-2" variant="outline" disabled>
                  近日公開
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
