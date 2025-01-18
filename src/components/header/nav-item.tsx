import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'

type NavItemProps = {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          'font-medium text-2xl hover:text-main-color relative transition-all duration-300',
          isActive && 'active-link',
          'sm:text-xl md:text-2xl lg:text-2xl'
        )}
      >
        {label}
      </Link>
    </li>
  )
}
