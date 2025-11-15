import { ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Work = {
  title: string
  detail: string
  stack: string[]
  status: 'Private' | 'Public'
  link?: string
}

const works: Work[] = [
  {
    title: 'Portfolio Site',
    detail: 'Vite + React + TypeScript で個人サイトを構築。Tailwind + shadcn/ui でデザインシステムを共通化。',
    stack: ['React', 'Vite', 'Tailwind', 'shadcn/ui', 'TypeScript', 'Cloudflare'],
    status: 'Public',
    link: 'https://github.com/Ksin0000/personal-portfolio',
  },
]

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          公開可能な制作物をまとめています。
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work) => (
          <Card key={work.title} className="flex h-full flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{work.title}</CardTitle>
                <Badge variant={work.status === 'Public' ? 'default' : 'secondary'}>{work.status}</Badge>
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
            <CardFooter className="mt-auto min-h-[48px]">
              {work.status === 'Public' && work.link ? (
                <Button asChild className="gap-2">
                  <a href={work.link} target="_blank" rel="noreferrer">
                    リポジトリを見る
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">Private repository</p>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
