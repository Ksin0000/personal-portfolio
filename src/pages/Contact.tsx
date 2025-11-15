import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const contactChannels = [
  {
    label: 'GitHub',
    value: '@Ksin0000',
    description: '個人アカウントです。',
    href: 'https://github.com/Ksin0000',
    icon: Github,
    available: true,
  },
  {
    label: 'Contact Form',
    value: '準備中',
    description: 'フォームを準備中。公開までは GitHub からご連絡ください。',
    href: undefined,
    icon: MessageCircle,
    available: false,
  },
]

export default function Contact() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">GitHub を起点にお気軽にご相談ください。</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {contactChannels.map((channel) => {
          const Icon = channel.icon
          return (
            <Card key={channel.label} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-xl">{channel.label}</CardTitle>
                </div>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Handle</p>
                  <p className="text-lg font-medium">{channel.value}</p>
                </div>
                {channel.available ? (
                  <Button asChild className="gap-2">
                    <a href={channel.href} target="_blank" rel="noreferrer">
                      Open
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    準備中
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
