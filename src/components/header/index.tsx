import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="absolute top-0 z-10 w-full h-20 flex items-center justify-center">
      <div className="container flex items-center justify-between mt-3">
        <Link
          href="/"
          className="text-main-color font-semibold text-4xl sm:text-3xl"
        >
          Tech by Gelzieny.
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5">
          <div className="sm:flex items-center gap-4 hidden sm:block">
            {NAV_ITEMS.map(item => (
              <NavItem {...item} key={item.label} />
            ))}
          </div>

          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="text-4xl text-color-text sm:hidden"
          >
            <FaBars />
          </button>
        </nav>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-20`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </div>
      </div>
    </header>
  )
}
