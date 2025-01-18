import Link from 'next/link'
import { FiMoon } from 'react-icons/fi'

import { NavItem } from './nav-item'
import { ThemeToggle } from '../theme/theme-toggle'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
  {
    label: 'Contatos',
    href: '/contact',
  },
]

export function Header() {
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-3xl text-main-color font-semibold">
          Tech by Gelzieny.
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
