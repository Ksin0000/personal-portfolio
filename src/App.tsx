import P5Background from "./components/P5Background";
import { NavLink, Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Career', href: '/career' },
  { title: 'Contact', href: '/contact' },
  { title: 'Background', href: '/background' },
] as const


export default function App() {
  return (
    <div className="relative min-h-screen from-slate-50 via-white to-slate-100 text-foreground dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <P5Background />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-4 py-10">
        <header className="rounded-3xl border bg-card/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur dark:shadow-none">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ksin</h1>
              <p className="text-sm text-muted-foreground">
                データサイエンスとフロントエンドをまたいで課題解決を行うソフトウェアエンジニア
              </p>
            </div>
            <NavigationMenu className="w-full md:w-auto">
              <NavigationMenuList className="flex w-full flex-wrap gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            navigationMenuTriggerStyle(),
                            'text-base w-full md:w-auto',
                            isActive && 'bg-primary text-primary-foreground'
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <Separator className="bg-transparent" />
        <main className="flex-1 space-y-8">
          <Outlet />
        </main>
        <footer className="pb-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ksin.
        </footer>
      </div>
    </div>
  )
}
