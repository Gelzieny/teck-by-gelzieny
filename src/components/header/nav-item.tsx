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
          'text-[#000] font-medium text-2xl hover:text-main-color relative',
          isActive && 'active-link'
        )}
      >
        {label}
      </Link>
    </li>
  )
}
